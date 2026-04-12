import { NextRequest, NextResponse } from "next/server";
import { insertEvent } from "@/lib/db";

type EventPayload = {
  event: string;
  sessionId: string;
  timestamp: string;
  metadata?: Record<string, string | number>;
};

const ALLOWED_EVENTS = new Set([
  "page_view",
  "quiz_start",
  "question_reached",
  "quiz_complete",
  "results_viewed",
  "email_submitted",
  "quiz_restart",
]);

export async function POST(req: NextRequest) {
  try {
    const body: EventPayload = await req.json();

    if (!body.event || !body.sessionId || !body.timestamp) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }
    if (!ALLOWED_EVENTS.has(body.event)) {
      return NextResponse.json({ error: "Unknown event" }, { status: 400 });
    }

    insertEvent({
      event: body.event,
      session_id: body.sessionId,
      timestamp: body.timestamp,
      metadata: body.metadata ? JSON.stringify(body.metadata) : null,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[events] insert failed:", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
