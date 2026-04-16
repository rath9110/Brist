import { redirect, notFound } from "next/navigation";
import {
  getFunnelCounts,
  getQuestionDropOff,
  getDailyStarts,
  getSubscriberCount,
} from "@/lib/db";

type Props = {
  searchParams: Promise<{ secret?: string }>;
};

export default async function AdminPage({ searchParams }: Props) {
  const { secret } = await searchParams;
  const expected = process.env.ADMIN_SECRET;

  if (!expected || secret !== expected) {
    notFound();
  }

  const funnelRows = getFunnelCounts();
  const steps = getQuestionDropOff();
  const daily = getDailyStarts(30);
  const subscriberCount = getSubscriberCount();

  // Build a lookup for funnel events
  const funnel: Record<string, number> = {};
  for (const row of funnelRows) {
    funnel[row.event] = row.sessions;
  }

  const starts = funnel["quiz_start"] ?? 0;

  function pct(n: number): string {
    if (!starts) return "–";
    return Math.round((n / starts) * 100) + "%";
  }

  const funnelSteps = [
    { label: "Quiz startat", key: "quiz_start" },
    { label: "Quiz klart", key: "quiz_complete" },
    { label: "Resultat visat", key: "results_viewed" },
    { label: "E-post sparad", key: "email_submitted" },
  ];

  return (
    <main className="max-w-3xl mx-auto px-6 py-12 font-sans text-[15px] text-gray-800">
      <h1 className="text-2xl font-semibold mb-8">Peiling – Admin</h1>

      {/* Funnel */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold mb-4">Funnel (alla tider)</h2>
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-gray-200 text-left text-gray-500">
              <th className="pb-2 font-medium">Steg</th>
              <th className="pb-2 font-medium text-right">Unika sessioner</th>
              <th className="pb-2 font-medium text-right">Av quiz-starter</th>
            </tr>
          </thead>
          <tbody>
            {funnelSteps.map(({ label, key }) => (
              <tr key={key} className="border-b border-gray-100">
                <td className="py-2">{label}</td>
                <td className="py-2 text-right tabular-nums">
                  {funnel[key] ?? 0}
                </td>
                <td className="py-2 text-right tabular-nums text-gray-500">
                  {key === "quiz_start" ? "100%" : pct(funnel[key] ?? 0)}
                </td>
              </tr>
            ))}
            <tr className="border-b border-gray-100 bg-gray-50">
              <td className="py-2 font-medium">Prenumeranter (totalt)</td>
              <td className="py-2 text-right tabular-nums font-medium">
                {subscriberCount}
              </td>
              <td className="py-2 text-right tabular-nums text-gray-500">–</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Per-question drop-off */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold mb-4">
          Drop-off per fråga (alla tider)
        </h2>
        {steps.length === 0 ? (
          <p className="text-gray-400 text-sm">Inga data ännu.</p>
        ) : (
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-gray-200 text-left text-gray-500">
                <th className="pb-2 font-medium">Steg</th>
                <th className="pb-2 font-medium">Fråga-ID</th>
                <th className="pb-2 font-medium text-right">Nådde frågan</th>
                <th className="pb-2 font-medium text-right">Av starter</th>
                <th className="pb-2 font-medium text-right">Drop-off</th>
              </tr>
            </thead>
            <tbody>
              {steps.map((row, i) => {
                const prev = i === 0 ? starts : steps[i - 1].sessions;
                const drop =
                  prev > 0
                    ? Math.round(((prev - row.sessions) / prev) * 100)
                    : 0;
                return (
                  <tr
                    key={row.step}
                    className={`border-b border-gray-100 ${drop >= 30 ? "bg-red-50" : ""}`}
                  >
                    <td className="py-2 tabular-nums">{row.step + 1}</td>
                    <td className="py-2 text-gray-500 font-mono text-xs">
                      {row.question_id}
                    </td>
                    <td className="py-2 text-right tabular-nums">
                      {row.sessions}
                    </td>
                    <td className="py-2 text-right tabular-nums text-gray-500">
                      {pct(row.sessions)}
                    </td>
                    <td
                      className={`py-2 text-right tabular-nums font-medium ${drop >= 30 ? "text-red-600" : "text-gray-400"}`}
                    >
                      {i === 0 ? "–" : `-${drop}%`}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
        <p className="text-xs text-gray-400 mt-2">
          Rader markerade i rött = mer än 30% drop-off från föregående fråga.
        </p>
      </section>

      {/* Daily starts */}
      <section>
        <h2 className="text-lg font-semibold mb-4">Quiz-starter (30 dagar)</h2>
        {daily.length === 0 ? (
          <p className="text-gray-400 text-sm">Inga data ännu.</p>
        ) : (
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-gray-200 text-left text-gray-500">
                <th className="pb-2 font-medium">Datum</th>
                <th className="pb-2 font-medium text-right">Starter</th>
              </tr>
            </thead>
            <tbody>
              {daily.map((row) => (
                <tr key={row.date} className="border-b border-gray-100">
                  <td className="py-1 tabular-nums">{row.date}</td>
                  <td className="py-1 text-right tabular-nums">{row.starts}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </main>
  );
}
