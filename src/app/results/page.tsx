"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ProgressBar from "@/components/ProgressBar";
import ResultCard from "@/components/ResultCard";
import CTACard from "@/components/CTACard";
import ProfileSummary from "@/components/ProfileSummary";
import type { QuizAnswers, ScoringResult } from "@/lib/types";
import { trackEvent } from "@/lib/analytics";
import { PROTOCOLS } from "@/lib/protocols";

const OUTPUT_FRAMING: Record<string, string> = {
  nothing:
    "Du tar inget just nu — vilket innebär att vi utgår från en ren baslinje. Här är vad din profil visar.",
  multivitamin:
    "Du tar ett multivitamin, vilket ger en bred bas. Men ett generiskt multi kan inte ta hänsyn till just din träningsbelastning, kost och livsstil. Här är var en riktad insats skulle göra större skillnad.",
  specific_supplements:
    "Du vet redan vad du tar — bra. Låt oss se om ditt nuvarande upplägg matchar vad din profil faktiskt visar. Ett blodprov är bästa sättet att bekräfta att du täcker rätt områden.",
  tried_and_stopped:
    "Du har testat tillskott tidigare och slutat. Det är vanligt — och beror ofta på att resultaten kändes oklara. Testning tar bort gissandet: du ser exakt vad som är lågt, supplementerar med precision, och testar igen för att bekräfta att det fungerar.",
  gym_recommendation:
    "Gymrekommendationer är en utgångspunkt, men de är utformade för genomsnittspersonen — inte specifikt för dig. Din träningstyp, kost och symtom ger en mer specifik bild.",
};

type LoadState = "loading" | "ready";

export default function ResultsPage() {
  const router = useRouter();
  const [loadState, setLoadState] = useState<LoadState>("loading");
  const [progress, setProgress] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers | null>(null);
  const [result, setResult] = useState<ScoringResult | null>(null);

  useEffect(() => {
    const rawAnswers = sessionStorage.getItem("brist_answers");
    const rawResult = sessionStorage.getItem("brist_results");
    if (!rawAnswers || !rawResult) {
      router.replace("/quiz");
      return;
    }
    setAnswers(JSON.parse(rawAnswers));
    setResult(JSON.parse(rawResult));

    // 1.5s loading animation: ramp progress to 100, then show results
    const start = Date.now();
    const duration = 1500;
    function tick() {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, (elapsed / duration) * 100);
      setProgress(pct);
      if (elapsed < duration) {
        requestAnimationFrame(tick);
      } else {
        setLoadState("ready");
        trackEvent("results_viewed");
      }
    }
    requestAnimationFrame(tick);
  }, [router]);

  if (loadState === "loading" || !result || !answers) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <ProgressBar current={progress} total={100} pulse />
        <p className="font-sans text-[14px] text-text-muted">
          Analyserar din profil…
        </p>
      </main>
    );
  }

  const tier1 = result.nutrients
    .filter((n) => n.tier === 1)
    .sort((a, b) => b.score - a.score);
  const tier2 = result.nutrients
    .filter((n) => n.tier === 2 && n.key !== "thyroid")
    .sort((a, b) => b.score - a.score);
  const thyroid = result.nutrients.find((n) => n.key === "thyroid");

  const showTier3 = !!thyroid || result.flags.highSymptomLoad;

  // Collect test markers for the guidance card
  const testMarkers = tier2.map((n) => PROTOCOLS[n.key].biomarker).filter(Boolean);
  const thyroidScore = result.nutrients.find((n) => n.key === "thyroid")?.score ?? 0;
  if (thyroidScore >= 0.15 && !testMarkers.includes("TSH")) testMarkers.push("TSH");

  return (
    <main className="min-h-screen pb-16">
      <div className="max-w-content mx-auto px-6 pt-10 space-y-8">
        {/* Wordmark */}
        <div className="font-serif text-[20px] lowercase text-primary" aria-label="Brist">
          brist
        </div>

        {/* Section 1 — Profile summary */}
        <ProfileSummary answers={answers} />

        {/* Section 2 — Personalized intro */}
        <p className="font-sans text-[15px] text-text-muted leading-relaxed">
          {OUTPUT_FRAMING[result.outputFraming] ?? OUTPUT_FRAMING.nothing}
        </p>

        {/* Section 3 — High symptom load warning */}
        {result.flags.highSymptomLoad && (
          <div className="bg-surface rounded-card p-6 border-l-4 border-warning">
            <p className="font-sans text-[14px] text-text leading-relaxed">
              Du upplever flera symtom samtidigt. Även om enskilda tillskott kan
              hjälpa, kan det här mönstret tyda på ett underliggande tillstånd
              som är värt att diskutera med en vårdgivare.
            </p>
          </div>
        )}

        {/* Section 4 — Absorption concern */}
        {result.flags.absorptionConcern && (
          <div className="bg-surface rounded-card p-6">
            <p className="font-sans text-[14px] text-text-muted leading-relaxed">
              Magbesvär kan försämra näringsupptaget. Dina faktiska nivåer kan
              vara lägre än din kost antyder — att testa är extra värdefullt i
              ditt fall.
            </p>
          </div>
        )}

        {/* Section 5 — Tier 1 */}
        {tier1.length > 0 && (
          <section>
            <h2 className="font-serif text-[22px] text-text mb-4">
              Börja direkt — hög säkerhet
            </h2>
            <div className="space-y-4">
              {tier1.map((n) => (
                <ResultCard key={n.key} nutrient={n} />
              ))}
            </div>
          </section>
        )}

        {/* Section 6 — Tier 2 */}
        {tier2.length > 0 && (
          <section>
            <h2 className="font-serif text-[22px] text-text mb-4">
              Testa först — bekräfta innan du börjar
            </h2>
            <div className="space-y-4 mb-6">
              {tier2.map((n) => (
                <ResultCard key={n.key} nutrient={n} />
              ))}
            </div>

            {/* Testing guidance card */}
            <CTACard headline="Hur du testar">
              <p className="font-sans text-[14px] text-text-muted leading-relaxed mb-4">
                Du kan testa dessa markörer via din vårdcentral, valfri
                hemtesttjänst, eller företagshälsovården. En vitamin- och
                mineralpanel kostar vanligtvis 500–1500 kr. Tips: Om du
                beskriver symtom (trötthet, sömnproblem) kan många av dessa
                tester täckas via sjukvården.
              </p>
              {testMarkers.length > 0 && (
                <div>
                  <p className="font-sans text-[14px] font-medium text-text mb-2">
                    Be om:
                  </p>
                  <ul className="font-sans text-[14px] text-text-muted space-y-1">
                    {testMarkers.map((m) => (
                      <li key={m}>• {m}</li>
                    ))}
                  </ul>
                </div>
              )}
            </CTACard>
          </section>
        )}

        {/* Section 7 — Tier 3 / professional */}
        {showTier3 && (
          <section>
            <div className="bg-[#FAF8F5] rounded-card p-6 border border-accent">
              <h2 className="font-serif text-[20px] text-text mb-3">
                Professionell bedömning
              </h2>
              <p className="font-sans text-[14px] text-text-muted leading-relaxed">
                Dina svar tyder på att detta kan behöva professionell bedömning
                snarare än bara tillskott. Det är inget att oroa sig för — det
                betyder bara att en vårdgivare kan hjälpa dig mer effektivt än
                vi kan.
              </p>
              {thyroid && (
                <p className="font-sans text-[13px] text-text-muted mt-3">
                  {PROTOCOLS.thyroid.note}
                </p>
              )}
            </div>
          </section>
        )}

        {/* Section 8 — Restart */}
        <div className="text-center pb-4">
          <button
            type="button"
            onClick={() => {
              trackEvent("quiz_restart");
              sessionStorage.removeItem("brist_answers");
              sessionStorage.removeItem("brist_results");
              router.push("/quiz");
            }}
            className="font-sans text-[14px] text-text-muted hover:text-text transition-colors"
          >
            Gör om quizzen
          </button>
        </div>
      </div>
    </main>
  );
}
