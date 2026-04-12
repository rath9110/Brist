import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getArticle, getAllSlugs, getRelatedArticles } from "@/lib/articles";

const SITE_URL = "https://brist.se";

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
      siteName: "Brist",
      locale: "sv_SE",
      type: "article",
      publishedTime: article.publishedAt,
    },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  const related = getRelatedArticles(article.relatedSlugs);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.publishedAt,
    inLanguage: "sv-SE",
    author: { "@type": "Organization", name: "Brist", url: SITE_URL },
    publisher: { "@type": "Organization", name: "Brist", url: SITE_URL },
    url: `${SITE_URL}/artikel/${article.slug}`,
  };

  return (
    <main className="min-h-screen pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
                    {block.text}
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
                        <span>{item}</span>
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
              Vad gäller för just dig?
            </h3>
            <p className="font-sans text-[14px] text-text-muted leading-relaxed mb-4">
              Svara på 9 frågor om dina mål, din kost och dina symtom. Du får
              en personlig bild av vilka brister som är mest troliga — och vad
              du kan göra åt dem.
            </p>
            <Link href="/quiz" className="btn-cta block text-center">
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
