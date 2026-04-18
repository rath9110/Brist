import Link from "next/link";
import type { Metadata } from "next";
import ArticleSearch from "@/components/ArticleSearch";

export const metadata: Metadata = {
  title: "Artiklar om näringsbrist och tillskott | Peiling",
  description:
    "Läs om de vanligaste näringsbristerna, deras symtom och vad du kan göra - baserat på forskning och anpassat för svenska förhållanden.",
  alternates: { canonical: "https://peiling.co/artikel" },
};

export default function ArticleIndexPage() {
  return (
    <main className="min-h-screen pb-20">
      <div className="max-w-content mx-auto px-6 pt-10">
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
        <p className="font-sans text-[15px] text-text-muted leading-relaxed mb-6">
          Guider om näringsbrist, symtom och hur du optimerar ditt intag.
          Skrivna för dig som vill förstå vad kroppen egentligen behöver.
        </p>

        <ArticleSearch />

        <div className="mt-14 bg-surface rounded-card p-6 border-l-4 border-primary shadow-sm">
          <h3 className="font-serif text-[20px] text-text mb-2">
            Vad gäller för just dig?
          </h3>
          <p className="font-sans text-[14px] text-text-muted leading-relaxed mb-4">
            Artiklarna ger dig bakgrunden. Quizzen ger dig den personliga bilden.
            Svara på några frågor om din kost, dina symtom och din livsstil.
          </p>
          <Link href="/quiz" className="btn-cta block text-center">
            Starta quizzen →
          </Link>
        </div>
      </div>
    </main>
  );
}
