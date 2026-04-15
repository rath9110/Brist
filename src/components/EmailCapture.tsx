"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";

type ResultSummary = {
  tier1: string[];
  tier2: string[];
};

type Props = {
  resultSummary: ResultSummary;
  sessionId: string;
};

export default function EmailCapture({ resultSummary, sessionId }: Props) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || state === "loading") return;

    setState("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          resultSummary: JSON.stringify(resultSummary),
          sessionId,
        }),
      });

      if (res.ok) {
        localStorage.setItem("peiling_email", email);
        trackEvent("email_submitted");
        setState("done");
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <div className="bg-surface rounded-card p-6 text-center">
        <p className="font-sans text-[15px] text-text font-medium mb-1">
          Sparat!
        </p>
        <p className="font-sans text-[14px] text-text-muted leading-relaxed">
          Vi hör av oss när vi lägger till möjligheten att skicka resultatet
          till din e-post.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-surface rounded-card p-6">
      <h3 className="font-serif text-[20px] text-text mb-2">
        Spara dina resultat
      </h3>
      <p className="font-sans text-[14px] text-text-muted mb-4 leading-relaxed">
        Ange din e-post så sparar vi din personliga profil. Vi skickar en
        sammanfattning så fort det är möjligt. Ingen reklam, inga nyhetsbrev.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="din@email.se"
          autoComplete="email"
          required
          className="
            w-full font-sans text-[16px] text-text
            border border-accent rounded-card px-4 py-3
            focus:outline-none focus:border-primary
            bg-white
          "
        />
        <button
          type="submit"
          disabled={state === "loading"}
          className="btn-cta disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {state === "loading" ? "Sparar..." : "Spara mitt resultat"}
        </button>
        {state === "error" && (
          <p className="font-sans text-[13px] text-red-500 text-center">
            Något gick fel. Försök igen.
          </p>
        )}
      </form>
      <p className="font-sans text-[12px] text-text-muted mt-3 text-center">
        Vi delar aldrig din e-post med tredje part.
      </p>
    </div>
  );
}
