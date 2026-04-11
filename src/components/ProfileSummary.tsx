import type { QuizAnswers } from "@/lib/types";

const GOAL_LABELS: Record<string, string> = {
  energy: "Mer energi",
  sleep: "Bättre sömn",
  performance: "Prestation och återhämtning",
  general_health: "Allmän hälsa och prevention",
  stress: "Hantera stress",
};

const TRAINING_LABELS: Record<string, string> = {
  sedentary: "Tränar inte",
  light_activity: "Lätt aktivitet",
  strength_focused: "Styrketräning",
  endurance_focused: "Uthållighetsträning",
  mixed: "Styrka och uthållighet",
};

const DIET_LABELS: Record<string, string> = {
  home_cooked_varied: "Hemlagat och varierat",
  convenience: "Snabbmat och ute",
  vegan_vegetarian: "Vegetarisk/vegansk",
  irregular_skipping: "Oregelbundet",
  high_protein_structured: "Proteinrik/träningskost",
};

function getDemographicsLabel(key: string): string {
  if (!key) return "—";
  const [sex, ...ageParts] = key.split("_");
  const age = ageParts.join("_").replace("_plus", "+").replace(/_/g, "–");
  const sexLabel = sex === "female" ? "Kvinna" : "Man";
  return age ? `${sexLabel}, ${age}` : sexLabel;
}

export default function ProfileSummary({ answers }: { answers: QuizAnswers }) {
  const items = [
    { label: "Mål", value: GOAL_LABELS[answers.q1_goal] ?? answers.q1_goal },
    { label: "Profil", value: getDemographicsLabel(answers.q2_demographics) },
    { label: "Träning", value: TRAINING_LABELS[answers.q6_training] ?? answers.q6_training },
    {
      label: "Kost",
      value: answers.q5_diet.map((d) => DIET_LABELS[d] ?? d).join(", ") || "—",
    },
  ];

  return (
    <div className="bg-surface rounded-card p-6">
      <div className="grid grid-cols-2 gap-4">
        {items.map(({ label, value }) => (
          <div key={label}>
            <p className="font-sans text-[12px] text-text-muted uppercase tracking-wider mb-1">
              {label}
            </p>
            <p className="font-sans text-[14px] text-text font-medium">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
