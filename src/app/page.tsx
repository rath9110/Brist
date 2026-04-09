import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-content">
        {/* Wordmark */}
        <div
          className="font-serif text-[20px] lowercase text-primary mb-8"
          aria-label="Brist"
        >
          brist
        </div>

        {/* Headline */}
        <h1 className="font-serif text-[32px] leading-[1.15] text-text mb-4">
          Vilka tillskott behöver just du?
        </h1>

        {/* Tagline */}
        <p className="font-sans text-[18px] text-secondary mb-6">
          Hitta det du saknar.
        </p>

        {/* Subtext */}
        <p className="font-sans text-[16px] text-text-muted mb-8 leading-relaxed">
          Svara på 8 snabba frågor. Få en personlig plan baserad på din
          livsstil, kost och träning.
        </p>

        {/* CTA */}
        <Link href="/quiz" className="btn-cta block text-center">
          Starta quizzen →
        </Link>

        {/* Footnote */}
        <p className="font-sans text-[14px] text-text-muted mt-4 text-center">
          Tar cirka 2 minuter. Inga personuppgifter sparas.
        </p>
      </div>
    </main>
  );
}
