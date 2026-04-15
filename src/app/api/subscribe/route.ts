import { NextRequest, NextResponse } from "next/server";
import { upsertSubscriber } from "@/lib/db";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_SESSION_ID_LEN = 64;
const MAX_SUMMARY_LEN = 1024;

// Simple in-memory rate limit: 5 subscribe attempts per IP per 10 minutes
const rateMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const WINDOW_MS = 10 * 60_000;

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

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  let body: { email?: unknown; resultSummary?: unknown; sessionId?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { email, resultSummary, sessionId } = body;

  if (
    typeof email !== "string" ||
    typeof resultSummary !== "string" ||
    typeof sessionId !== "string"
  ) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  if (!EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  if (sessionId.length > MAX_SESSION_ID_LEN) {
    return NextResponse.json({ error: "Invalid sessionId" }, { status: 400 });
  }

  if (resultSummary.length > MAX_SUMMARY_LEN) {
    return NextResponse.json({ error: "Summary too large" }, { status: 400 });
  }

  // Validate resultSummary is JSON (no arbitrary injection)
  try {
    JSON.parse(resultSummary);
  } catch {
    return NextResponse.json({ error: "Invalid summary format" }, { status: 400 });
  }

  try {
    upsertSubscriber({ email, result_summary: resultSummary, session_id: sessionId });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[subscribe] upsert failed:", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
