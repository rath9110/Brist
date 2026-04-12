function getSessionId(): string {
  const KEY = "brist_session_id";
  let id = sessionStorage.getItem(KEY);
  if (!id) {
    id = crypto.randomUUID();
    sessionStorage.setItem(KEY, id);
  }
  return id;
}

export function trackEvent(
  event: string,
  metadata?: Record<string, string | number>
): void {
  try {
    const payload = JSON.stringify({
      event,
      sessionId: getSessionId(),
      timestamp: new Date().toISOString(),
      metadata,
    });

    const url = "/api/events";
    if (typeof navigator !== "undefined" && navigator.sendBeacon) {
      const blob = new Blob([payload], { type: "application/json" });
      const sent = navigator.sendBeacon(url, blob);
      if (sent) return;
    }
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: payload,
      keepalive: true,
    }).catch(() => {
      // Silently ignore — analytics must never break the app
    });
  } catch {
    // Silently ignore
  }
}
