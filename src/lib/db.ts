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
