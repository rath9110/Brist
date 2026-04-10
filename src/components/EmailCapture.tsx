"use client";

import { useState } from "react";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    localStorage.setItem("brist_email", email);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-surface rounded-card p-6 text-center">
        <p className="font-sans text-[15px] text-text">
          Tack. Vi hör av oss när Brist lanserar.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-surface rounded-card p-6">
      <h3 className="font-serif text-[20px] text-text mb-2">
        Vill du spara dina resultat?
      </h3>
      <p className="font-sans text-[14px] text-text-muted mb-4 leading-relaxed">
        Ange din e-post så skickar vi en sammanfattning — och meddelar dig när
        Brist lanserar produktrekommendationer.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="din@email.se"
          className="
            w-full font-sans text-[16px] text-text
            border border-accent rounded-card px-4 py-3
            focus:outline-none focus:border-primary
            bg-surface
          "
        />
        <button type="submit" className="btn-cta">
          Skicka
        </button>
      </form>
    </div>
  );
}
