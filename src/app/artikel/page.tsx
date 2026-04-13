import Link from "next/link";
import type { Metadata } from "next";
import { ARTICLES } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Artiklar om näringsbrist och tillskott | Peiling",
  description:
    "Läs om de vanligaste näringsbristerna, deras symtom och vad du kan göra - baserat på forskning och anpassat för svenska förhållanden.",
  alternates: { canonical: "https://peiling.se/artikel" },
};

const CATEGORY_LABELS: Record<string, string> = {
  pillar: "Översikt",
  nutrient: "Näringsämnen",
  symptom: "Symtom",
  lifestyle: "Livsstil",
};

const CATEGORY_ORDER = ["pillar", "nutrient", "symptom", "lifestyle"];

export default function ArticleIndexPage() {
  const grouped = CATEGORY_ORDER.map((cat) => ({
    category: cat,
    label: CATEGORY_LABELS[cat],
    articles: ARTICLES.filter((a) => a.category === cat),
  }));

  return (
    <main className="min-h-screen pb-20">
      <div className="max-w-content mx-auto px-6 pt-10">
        {/* Wordmark */}
        <Link
          href="/"
          className="font-serif text-[20px] lowercase text-primary block mb-10"
          aria-label="Peiling"
        >
          peiling
        </Link>

        <h1 className="font-serif text-[28px] leading-snug text-text mb-3">
          Artiklar
        </h1>
        <p className="font-sans text-[15px] text-text-muted leading-relaxed mb-10">
          Guider om näringsbrist, symtom och hur du optimerar ditt intag -
          skrivna för dig som vill förstå vad kroppen egentligen behöver.
        </p>

        <div className="space-y-12">
          {grouped.map(({ category, label, articles }) =>
            articles.length === 0 ? null : (
              <section key={category}>
                <h2 className="font-serif text-[20px] text-text mb-4">
                  {label}
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
            )
          )}
        </div>

        <div className="mt-14 bg-surface rounded-card p-6 border-l-4 border-primary shadow-sm">
          <h3 className="font-serif text-[20px] text-text mb-2">
            Vad gäller för just dig?
          </h3>
          <p className="font-sans text-[14px] text-text-muted leading-relaxed mb-4">
            Artiklarna ger dig bakgrunden - quizzen ger dig din personliga bild.
            Svara på 9 frågor om din kost, dina symtom och din livsstil.
          </p>
          <Link href="/quiz" className="btn-cta block text-center">
            Starta quizzen →
          </Link>
        </div>
      </div>
    </main>
  );
}
