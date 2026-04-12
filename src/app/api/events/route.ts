import { NextRequest, NextResponse } from "next/server";
import { insertEvent } from "@/lib/db";

// --- Rate limiting (in-memory, per IP, 30 req/min) ---
const RATE_LIMIT = 30;
const WINDOW_MS = 60_000;

const rateMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_LIMIT) return true;
  entry.count++;
  return false;
}

// Prune stale entries occasionally to avoid unbounded memory growth
let lastPrune = Date.now();
function maybePrune() {
  const now = Date.now();
  if (now - lastPrune < 5 * 60_000) return;
  lastPrune = now;
  rateMap.forEach((entry, ip) => {
    if (now > entry.resetAt) rateMap.delete(ip);
  });
}

// --- Validation constants ---
const MAX_BODY_BYTES = 2048;
const MAX_SESSION_ID_LEN = 64;
const MAX_TIMESTAMP_LEN = 32;
const MAX_METADATA_KEYS = 5;
const MAX_METADATA_VALUE_LEN = 128;

const ALLOWED_EVENTS = new Set([
  "page_view",
  "quiz_start",
  "question_reached",
  "question_answered",
  "quiz_complete",
  "results_viewed",
  "email_submitted",
  "quiz_restart",
]);

type EventPayload = {
  event: string;
  sessionId: string;
  timestamp: string;
  metadata?: Record<string, string | number>;
};

export async function POST(req: NextRequest) {
  // Rate limit
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";
  maybePrune();
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  // Payload size check (content-length header, when present)
  const contentLength = req.headers.get("content-length");
  if (contentLength && parseInt(contentLength) > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "Payload too large" }, { status: 413 });
  }

  try {
    const raw = await req.text();
    if (raw.length > MAX_BODY_BYTES) {
      return NextResponse.json({ error: "Payload too large" }, { status: 413 });
    }

    let body: EventPayload;
    try {
      body = JSON.parse(raw);
    } catch {
      return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
    }

    // Field presence
    if (!body.event || !body.sessionId || !body.timestamp) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Length limits
    if (
      typeof body.event !== "string" ||
      typeof body.sessionId !== "string" ||
      typeof body.timestamp !== "string"
    ) {
      return NextResponse.json({ error: "Invalid field types" }, { status: 400 });
    }
    if (body.sessionId.length > MAX_SESSION_ID_LEN) {
      return NextResponse.json({ error: "sessionId too long" }, { status: 400 });
    }
    if (body.timestamp.length > MAX_TIMESTAMP_LEN) {
      return NextResponse.json({ error: "timestamp too long" }, { status: 400 });
    }

    // Event allowlist
    if (!ALLOWED_EVENTS.has(body.event)) {
      return NextResponse.json({ error: "Unknown event" }, { status: 400 });
    }

    // Metadata validation
    let metadataJson: string | null = null;
    if (body.metadata !== undefined) {
      if (typeof body.metadata !== "object" || Array.isArray(body.metadata)) {
        return NextResponse.json({ error: "Invalid metadata" }, { status: 400 });
      }
      const keys = Object.keys(body.metadata);
      if (keys.length > MAX_METADATA_KEYS) {
        return NextResponse.json({ error: "Too many metadata keys" }, { status: 400 });
      }
      for (const [k, v] of Object.entries(body.metadata)) {
        if (typeof v === "string" && v.length > MAX_METADATA_VALUE_LEN) {
          return NextResponse.json({ error: `Metadata value too long: ${k}` }, { status: 400 });
        }
        if (typeof v !== "string" && typeof v !== "number") {
          return NextResponse.json({ error: "Invalid metadata value type" }, { status: 400 });
        }
      }
      metadataJson = JSON.stringify(body.metadata);
    }

    insertEvent({
      event: body.event,
      session_id: body.sessionId,
      timestamp: body.timestamp,
      metadata: metadataJson,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[events] insert failed:", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
