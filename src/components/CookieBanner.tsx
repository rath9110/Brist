"use client";

import { useState, useEffect } from "react";
import { getConsent, setConsent } from "@/lib/analytics";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (getConsent() === null) setVisible(true);
  }, []);

  function accept() {
    setConsent("yes");
    setVisible(false);
  }

  function deny() {
    setConsent("no");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 bg-surface border-t border-accent shadow-lg">
      <div className="max-w-content mx-auto px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-4">
        <p className="font-sans text-[13px] text-text-muted leading-relaxed flex-1">
          Vi samlar anonym statistik om hur quizzen används: vilka frågor som
          ställs och vilka svar som väljs. Inga personuppgifter lagras. Det
          hjälper oss förbättra verktyget.
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            type="button"
            onClick={deny}
            className="font-sans text-[13px] text-text-muted hover:text-text transition-colors px-4 py-2"
          >
            Avvisa
          </button>
          <button
            type="button"
            onClick={accept}
            className="font-sans text-[13px] font-medium bg-primary text-white rounded-card px-4 py-2 hover:opacity-90 transition-opacity"
          >
            Acceptera
          </button>
        </div>
      </div>
    </div>
  );
}
