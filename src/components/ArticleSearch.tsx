"use client";

import { useState } from "react";
import Link from "next/link";
import { ARTICLES } from "@/lib/articles";

const CATEGORY_LABELS: Record<string, string> = {
  pillar: "Översikt",
  nutrient: "Näringsämnen",
  symptom: "Symtom",
  lifestyle: "Livsstil",
};

const CATEGORY_ORDER = ["pillar", "nutrient", "symptom", "lifestyle"];

export default function ArticleSearch() {
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();

  const filtered = q
    ? ARTICLES.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.metaDescription.toLowerCase().includes(q)
      )
    : null;

  return (
    <>
      <div className="relative mb-10">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Sök artiklar..."
          className="w-full bg-surface rounded-card px-4 py-3 font-sans text-[15px] text-text placeholder-text-muted outline-none focus:ring-2 focus:ring-primary transition"
        />
      </div>

      {filtered ? (
        <div className="space-y-3">
          {filtered.length === 0 ? (
            <p className="font-sans text-[14px] text-text-muted">
              Inga artiklar hittades för &ldquo;{query}&rdquo;.
            </p>
          ) : (
            filtered.map((article) => (
              <Link
                key={article.slug}
                href={`/artikel/${article.slug}`}
                className="block bg-surface rounded-card p-4 hover:bg-accent transition-colors"
              >
                <p className="font-sans text-[13px] text-text-muted uppercase tracking-wide mb-1">
                  {CATEGORY_LABELS[article.category]}
                </p>
                <p className="font-sans text-[15px] text-text font-medium">
                  {article.title}
                </p>
                <p className="font-sans text-[13px] text-text-muted mt-1 line-clamp-2">
                  {article.metaDescription}
                </p>
              </Link>
            ))
          )}
        </div>
      ) : (
        <div className="space-y-12">
          {CATEGORY_ORDER.map((cat) => {
            const articles = ARTICLES.filter((a) => a.category === cat);
            if (articles.length === 0) return null;
            return (
              <section key={cat}>
                <h2 className="font-serif text-[20px] text-text mb-4">
                  {CATEGORY_LABELS[cat]}
                </h2>
                <div className="space-y-3">
                  {articles.map((article) => (
                    <Link
                      key={article.slug}
                      href={`/artikel/${article.slug}`}
                      className="block bg-surface rounded-card p-4 hover:bg-accent transition-colors"
                    >
                      <p className="font-sans text-[15px] text-text font-medium">
                        {article.title}
                      </p>
                      <p className="font-sans text-[13px] text-text-muted mt-1 line-clamp-2">
                        {article.metaDescription}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      )}
    </>
  );
}
