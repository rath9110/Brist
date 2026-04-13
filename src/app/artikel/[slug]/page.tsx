import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getArticle, getAllSlugs, getRelatedArticles } from "@/lib/articles";

const SITE_URL = "https://peiling.se";

type QuizCta = { hook: string; body: string };

const QUIZ_CTA: Record<string, QuizCta> = {
  "vitaminbrist-tecken-test": {
    hook: "Vilka brister är troliga för dig?",
    body: "Svara på 9 frågor om din kost, dina symtom och din livsstil. Du får en personlig bild av vilka brister som är mest sannolika - och vad du kan göra åt dem.",
  },
  "d-vitaminbrist": {
    hook: "Får du tillräckligt med D-vitamin?",
    body: "Din solexponering, kost och symtom avgör hur stort behovet är. Quizzen väger ihop din profil och visar om D-vitamin är en prioritet för dig.",
  },
  "jarnbrist-symptom": {
    hook: "Känner du igen dig i symtomen?",
    body: "Järnbrist beror ofta på kost, träning och livsstil - quizzen räknar ut hur troligt det är för just dig och vad du kan göra.",
  },
  "magnesiumbrist": {
    hook: "Är magnesium en bristvara för dig?",
    body: "Träning, stress och kost påverkar alla ditt magnesiumbehov. Quizzen väger ihop din profil och ger dig en personlig bedömning.",
  },
  "b12-brist": {
    hook: "Täcker din kost B12-behovet?",
    body: "Veganer och vegetarianer är extra utsatta - men även köttätare kan ha låga nivåer. Quizzen visar var du hamnar baserat på din kost och dina symtom.",
  },
  "omega-3-tillskott": {
    hook: "Behöver du tillskott av omega-3?",
    body: "Hur ofta du äter fet fisk och hur aktiv du är avgör behovet. Quizzen ger dig svaret baserat på din faktiska profil.",
  },
  "zinkbrist": {
    hook: "Hur ser ditt zinkintag egentligen ut?",
    body: "Träningstyp, kost och symtom samverkar. Quizzen ger dig en personlig bedömning på 3 minuter.",
  },
  "alltid-trott-vitaminbrist": {
    hook: "Vad orsakar din trötthet?",
    body: "Trötthet kan ha flera näringsorsakar och de ser olika ut för olika personer. Quizzen pekar ut vilka som är mest sannolika för dig.",
  },
  "somnproblem-naringsbrist": {
    hook: "Kan näringsbrist störa din sömn?",
    body: "Magnesium, B6 och D-vitamin spelar alla roll för sömnkvaliteten. Quizzen tittar på hela din profil och visar vad som är mest relevant.",
  },
  "skora-naglar-haravfall-brist": {
    hook: "Vad säger dina naglar och ditt hår?",
    body: "Sköra naglar och håravfall är ofta kopplade till specifika brister - quizzen hjälper dig identifiera vilka som är troliga för just dig.",
  },
  "muskelkramper-magnesiumbrist": {
    hook: "Hänger dina kramper ihop med magnesium?",
    body: "Kramper, sömnproblem och rastlösa ben kan alla peka mot magnesiumbrist. Quizzen väger in din träning, kost och symtom.",
  },
  "vegansk-kost-tillskott": {
    hook: "Vilka tillskott behöver du på växtbaserad kost?",
    body: "Din specifika kost avgör vilka luckor som finns. Quizzen ger dig en personlig lista baserad på vad du äter och hur du mår.",
  },
  "tillskott-traning": {
    hook: "Tränar du utan rätt näringsstöd?",
    body: "Din träningstyp och frekvens avgör behovet. Quizzen anpassar rekommendationerna efter din träningsbelastning och kost.",
  },
  "vilka-vitaminer-testa-blodprov": {
    hook: "Vilka prover är värda att ta för dig?",
    body: "Det beror på din kost, dina symtom och din livsstil. Quizzen hjälper dig prioritera vilka markörer som är mest relevanta för just dig.",
  },
  "varfor-blir-jag-sjuk-sa-ofta": {
    hook: "Kan näringsbrist försvaga ditt immunförsvar?",
    body: "D-vitamin och zink är de vanligaste bristerna kopplade till täta infektioner. Quizzen räknar ut hur troligt det är för just dig baserat på din kost och livsstil.",
  },
  "hjarndimma-koncentrationssvaarigheter": {
    hook: "Kan näringsbrist förklara din hjärndimma?",
    body: "B12, järn och omega-3 påverkar alla hjärnans funktion. Quizzen identifierar vilka luckor som är troligast baserat på din kost och dina symtom.",
  },
  "standig-oro-och-angest": {
    hook: "Saknar ditt nervsystem magnesium eller omega-3?",
    body: "Magnesiumbrist och lågt omega-3-intag är kopplade till stresskänslighet och oro. Quizzen räknar ut sannolikheten baserat på din profil.",
  },
  "ledvark-och-stelhet": {
    hook: "Kan näring minska din ledvärk?",
    body: "Omega-3 och D-vitamin påverkar den inflammatoriska balansen direkt. Quizzen visar om brist på dessa är troligt för dig.",
  },
  "vilka-kosttillskott-ska-jag-ta": {
    hook: "Ta reda på vilka tillskott just du behöver.",
    body: "Svara på 9 frågor om din kost, dina symtom och din livsstil. Du får en personlig lista — inte en generisk rekommendation.",
  },
  "magnesium-fore-somn": {
    hook: "Är magnesiumbrist orsaken till dina sömnproblem?",
    body: "Quizzen väger ihop din kost, träning och symtom och räknar ut hur troligt det är att du har magnesiumbrist.",
  },
};

const DEFAULT_CTA: QuizCta = {
  hook: "Vad gäller för just dig?",
  body: "Svara på 9 frågor om dina mål, din kost och dina symtom. Du får en personlig bild av vilka brister som är mest troliga - och vad du kan göra åt dem.",
};

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const article = getArticle(params.slug);
  if (!article) return {};
  const url = `${SITE_URL}/artikel/${article.slug}`;
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url,
      siteName: "Peiling",
      locale: "sv_SE",
      type: "article",
      publishedTime: article.publishedAt,
    },
    twitter: {
      card: "summary",
      title: article.metaTitle,
      description: article.metaDescription,
    },
  };
}

// Parses [link text](/path) markdown within a string and returns React nodes.
function renderRichText(text: string): React.ReactNode {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (match) {
      return (
        <Link key={i} href={match[2]} className="text-primary underline underline-offset-2 hover:opacity-75 transition-opacity">
          {match[1]}
        </Link>
      );
    }
    return part;
  });
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  const cta = QUIZ_CTA[article.slug] ?? DEFAULT_CTA;

  const related = getRelatedArticles(article.relatedSlugs);

  const articleUrl = `${SITE_URL}/artikel/${article.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Article", "MedicalWebPage"],
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.publishedAt,
    inLanguage: "sv-SE",
    author: { "@type": "Organization", name: "Peiling", url: SITE_URL },
    publisher: { "@type": "Organization", name: "Peiling", url: SITE_URL },
    url: articleUrl,
    about: { "@type": "MedicalCause" },
    audience: { "@type": "Patient" },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hem", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Artiklar", item: `${SITE_URL}/artikel` },
      { "@type": "ListItem", position: 3, name: article.title, item: articleUrl },
    ],
  };

  const faqLd = article.faq && article.faq.length > 0
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: article.faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      }
    : null;

  return (
    <main className="min-h-screen pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      {faqLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      )}

      <div className="max-w-content mx-auto px-6 pt-8">
        {/* Breadcrumb */}
        <nav className="font-sans text-[13px] text-text-muted mb-8 flex gap-2 items-center">
          <Link href="/" className="hover:text-text transition-colors">
            Hem
          </Link>
          <span>/</span>
          <Link href="/artikel" className="hover:text-text transition-colors">
            Artiklar
          </Link>
          <span>/</span>
          <span className="text-text truncate">{article.title}</span>
        </nav>

        <article>
          <h1 className="font-serif text-[28px] leading-snug text-text mb-8">
            {article.title}
          </h1>

          <div className="space-y-5">
            {article.blocks.map((block, i) => {
              if (block.type === "h2") {
                return (
                  <h2
                    key={i}
                    className="font-serif text-[22px] text-text pt-4 leading-snug"
                  >
                    {block.text}
                  </h2>
                );
              }
              if (block.type === "p") {
                return (
                  <p
                    key={i}
                    className="font-sans text-[15px] text-text leading-relaxed"
                  >
                    {renderRichText(block.text)}
                  </p>
                );
              }
              if (block.type === "ul") {
                return (
                  <ul key={i} className="space-y-2 pl-1">
                    {block.items.map((item, j) => (
                      <li
                        key={j}
                        className="font-sans text-[15px] text-text leading-relaxed flex gap-2"
                      >
                        <span className="text-primary mt-[3px] shrink-0">•</span>
                        <span>{renderRichText(item)}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              if (block.type === "callout") {
                return (
                  <div
                    key={i}
                    className="bg-primary-tint border-l-4 border-primary rounded-card p-5"
                  >
                    <p className="font-sans text-[14px] text-text leading-relaxed">
                      {block.text}
                    </p>
                  </div>
                );
              }
              return null;
            })}
          </div>

          {/* CTA */}
          <div className="mt-10 bg-surface rounded-card p-6 border-l-4 border-primary shadow-sm">
            <h3 className="font-serif text-[20px] text-text mb-2">
              {cta.hook}
            </h3>
            <p className="font-sans text-[14px] text-text-muted leading-relaxed mb-4">
              {cta.body}
            </p>
            <Link
              href={`/quiz?ref=${article.slug}`}
              className="btn-cta block text-center"
            >
              Starta quizzen →
            </Link>
          </div>

          {/* Related articles */}
          {related.length > 0 && (
            <div className="mt-10">
              <h2 className="font-serif text-[20px] text-text mb-4">
                Läs mer
              </h2>
              <div className="space-y-3">
                {related.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/artikel/${rel.slug}`}
                    className="block bg-surface rounded-card p-4 hover:bg-accent transition-colors"
                  >
                    <p className="font-sans text-[14px] text-text font-medium">
                      {rel.title}
                    </p>
                    <p className="font-sans text-[13px] text-text-muted mt-1 line-clamp-2">
                      {rel.metaDescription}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </div>
    </main>
  );
}
