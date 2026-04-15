import Database from "better-sqlite3";
import path from "path";

type EventRow = {
  event: string;
  session_id: string;
  timestamp: string;
  metadata: string | null;
};

export type SubscriberRow = {
  email: string;
  result_summary: string; // JSON snapshot of tier1/tier2 keys
  session_id: string;
};

let db: Database.Database | null = null;

function getDb(): Database.Database {
  if (db) return db;
  const dbPath = process.env.VERCEL
    ? path.join("/tmp", "peiling_events.db")
    : path.join(process.cwd(), "peiling_events.db");
  db = new Database(dbPath);
  db.pragma("journal_mode = WAL");
  db.exec(`
    CREATE TABLE IF NOT EXISTS events (
      id         INTEGER PRIMARY KEY AUTOINCREMENT,
      event      TEXT NOT NULL,
      session_id TEXT NOT NULL,
      timestamp  TEXT NOT NULL,
      metadata   TEXT,
      created_at TEXT DEFAULT (datetime('now'))
    );
    CREATE INDEX IF NOT EXISTS idx_events_event ON events(event);
    CREATE INDEX IF NOT EXISTS idx_events_session ON events(session_id);

    CREATE TABLE IF NOT EXISTS subscribers (
      id             INTEGER PRIMARY KEY AUTOINCREMENT,
      email          TEXT NOT NULL,
      result_summary TEXT NOT NULL,
      session_id     TEXT NOT NULL,
      created_at     TEXT DEFAULT (datetime('now'))
    );
    CREATE UNIQUE INDEX IF NOT EXISTS idx_subscribers_email ON subscribers(email);
  `);
  return db;
}

export function insertEvent(row: EventRow): void {
  const stmt = getDb().prepare(
    "INSERT INTO events (event, session_id, timestamp, metadata) VALUES (?, ?, ?, ?)"
  );
  stmt.run(row.event, row.session_id, row.timestamp, row.metadata);
}

export function upsertSubscriber(row: SubscriberRow): void {
  const stmt = getDb().prepare(`
    INSERT INTO subscribers (email, result_summary, session_id)
    VALUES (?, ?, ?)
    ON CONFLICT(email) DO UPDATE SET
      result_summary = excluded.result_summary,
      session_id     = excluded.session_id,
      created_at     = datetime('now')
  `);
  stmt.run(row.email, row.result_summary, row.session_id);
}

// --- Analytics read queries ---

export type FunnelRow = { event: string; sessions: number };
export type StepRow = { step: number; question_id: string; sessions: number };
export type DailyRow = { date: string; starts: number };

export function getFunnelCounts(): FunnelRow[] {
  return getDb()
    .prepare(
      `SELECT event, COUNT(DISTINCT session_id) AS sessions
       FROM events
       WHERE event IN ('quiz_start','quiz_complete','results_viewed','email_submitted')
       GROUP BY event`
    )
    .all() as FunnelRow[];
}

export function getQuestionDropOff(): StepRow[] {
  return getDb()
    .prepare(
      `SELECT
         CAST(json_extract(metadata, '$.step') AS INTEGER) AS step,
         json_extract(metadata, '$.questionId')            AS question_id,
         COUNT(DISTINCT session_id)                        AS sessions
       FROM events
       WHERE event = 'question_reached'
         AND metadata IS NOT NULL
       GROUP BY step
       ORDER BY step`
    )
    .all() as StepRow[];
}

export function getDailyStarts(days = 30): DailyRow[] {
  return getDb()
    .prepare(
      `SELECT date(timestamp) AS date, COUNT(DISTINCT session_id) AS starts
       FROM events
       WHERE event = 'quiz_start'
         AND timestamp >= date('now', ? || ' days')
       GROUP BY date(timestamp)
       ORDER BY date`
    )
    .all(`-${days}`) as DailyRow[];
}

export function getSubscriberCount(): number {
  const row = getDb()
    .prepare(`SELECT COUNT(*) AS n FROM subscribers`)
    .get() as { n: number };
  return row.n;
}
