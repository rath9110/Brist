const CONSENT_KEY = "brist_consent";

export function getConsent(): "yes" | "no" | null {
  if (typeof localStorage === "undefined") return null;
  const v = localStorage.getItem(CONSENT_KEY);
  if (v === "yes" || v === "no") return v;
  return null;
}

export function setConsent(value: "yes" | "no"): void {
  if (typeof localStorage === "undefined") return;
  localStorage.setItem(CONSENT_KEY, value);
}

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
  if (getConsent() !== "yes") return;
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
