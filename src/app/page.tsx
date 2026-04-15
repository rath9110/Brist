import Link from "next/link";
import TrackPageView from "@/components/TrackPageView";

const SAMPLE_RESULTS = [
  { label: "D-vitamin", confidence: "Trolig brist", tier: 1 },
  { label: "Magnesium", confidence: "Möjlig brist", tier: 1 },
  { label: "Järn", confidence: "Testa för att bekräfta", tier: 2 },
];

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-12">
      <TrackPageView />
      <div className="w-full max-w-content">
        {/* Wordmark */}
        <div
          className="font-serif text-[20px] lowercase text-primary mb-10"
          aria-label="Peiling"
        >
          peiling
        </div>

        {/* Headline */}
        <h1 className="font-serif text-[30px] leading-[1.2] text-text mb-4">
          Trött, håglös eller sover dåligt?<br />
          Det kan bero på vad du saknar.
        </h1>

        {/* Subtext */}
        <p className="font-sans text-[16px] text-text-muted mb-8 leading-relaxed">
          Svara på ett par frågor om din kost, dina symtom och din livsstil. Du
          får en personlig bild av vilka näringsbristar som är troliga för just
          dig — och vad du kan göra åt dem.
        </p>

        {/* CTA */}
        <Link href="/quiz" className="btn-cta block text-center mb-4">
          Ta reda på vad du saknar →
        </Link>

        {/* Footnote */}
        <p className="font-sans text-[13px] text-text-muted mb-10 text-center">
          Ca 2 minuter · inga personuppgifter sparas
        </p>

        {/* Sample result preview */}
        <div className="border border-accent rounded-card overflow-hidden">
          <p className="font-sans text-[12px] text-text-muted px-4 pt-3 pb-2 uppercase tracking-wide">
            Exempel på resultat
          </p>
          <div className="divide-y divide-accent">
            {SAMPLE_RESULTS.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between px-4 py-3"
              >
                <span className="font-sans text-[14px] text-text font-medium">
                  {item.label}
                </span>
                <span
                  className={`font-sans text-[13px] ${
                    item.tier === 1 ? "text-primary font-medium" : "text-text-muted"
                  }`}
                >
                  {item.confidence}
                </span>
              </div>
            ))}
          </div>
          <div className="px-4 py-3 bg-surface">
            <p className="font-sans text-[12px] text-text-muted leading-relaxed">
              Varje resultat innehåller en förklaring och konkreta råd anpassade
              efter din profil.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
