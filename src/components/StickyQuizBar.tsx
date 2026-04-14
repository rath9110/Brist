"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function StickyQuizBar({ articleSlug }: { articleSlug: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      // Show after scrolling past ~40% of the page
      const scrolled = window.scrollY;
      const total = document.body.scrollHeight - window.innerHeight;
      setVisible(total > 0 && scrolled / total > 0.35);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-white border-t border-accent shadow-lg px-6 py-4 flex items-center justify-between gap-4 max-w-content mx-auto">
        <p className="font-sans text-[13px] text-text-muted leading-snug flex-1 min-w-0">
          Gäller det här dig?
        </p>
        <Link
          href={`/quiz?ref=${articleSlug}`}
          className="btn-cta shrink-0 text-[13px] px-4 py-2"
        >
          Ta quizzen →
        </Link>
      </div>
    </div>
  );
}
