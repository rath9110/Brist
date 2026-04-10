import type { DeficiencyArea, TopFactor, ConfidenceLevel } from "./types";

// Human-readable Swedish descriptions for each quiz answer,
// used to generate personalized explanation sentences on result cards.
const FACTOR_DESCRIPTIONS: Record<string, Record<string, string>> = {
  q1_goal: {
    energy: "ditt mål att få mer energi",
    sleep: "ditt mål att sova bättre",
    performance: "ditt fokus på prestation",
    general_health: "ditt fokus på allmän hälsa",
    stress: "din önskan att hantera stress",
  },
  q2_demographics: {
    female_18_29: "din ålder och kön",
    female_30_39: "din ålder och kön",
    female_40_49: "din ålder och kön",
    female_50_plus: "din ålder",
    male_18_29: "din ålder",
    male_30_39: "din ålder",
    male_40_49: "din ålder",
    male_50_plus: "din ålder",
  },
  q3_energy_pattern: {
    morning_crash: "din energidipp på morgonen",
    afternoon_dip: "din energidipp på eftermiddagen",
    exhausted_evening: "att du är slut på kvällen",
    low_all_day: "din genomgående låga energi",
  },
  q4_sleep: {
    hard_to_fall_asleep: "dina sömnsvårigheter",
    night_waking: "att du vaknar under natten",
    unrestorative: "din oroliga sömn",
    irregular: "din oregelbundna sömn",
  },
  q5_diet: {
    convenience: "din kosttyp",
    vegan_vegetarian: "din veganska/vegetariska kost",
    irregular_skipping: "dina oregelbundna matvanor",
    high_protein_structured: "din träningskost",
  },
  q6_training: {
    strength_focused: "din styrketräning",
    endurance_focused: "din uthållighetsträning",
    mixed: "din blandade träning",
    sedentary: "din aktivitetsnivå",
  },
  q7_symptoms: {
    frequent_illness: "att du blir sjuk ofta",
    brittle_hair_nails: "sköra hår/naglar",
    muscle_cramps: "dina muskelkramper",
    anxiety_on_edge: "din känsla av oro",
    dry_skin: "din torra hud",
    joint_pain: "din ledvärk",
    digestive_issues: "dina magbesvär",
  },
};

export const NUTRIENT_NAMES_SV: Record<DeficiencyArea, string> = {
  vitamin_d: "D-vitamin",
  iron: "järn",
  b12: "B12",
  magnesium: "magnesium",
  omega3: "omega-3",
  zinc: "zink",
  folate: "folat",
  thyroid: "sköldkörtelfunktion",
};

// Build a dynamic one-liner: "Baserat på {f1} och {f2} är {nutrient} {confidence}."
export function buildExplanation(
  nutrient: DeficiencyArea,
  topFactors: TopFactor[],
  confidence: ConfidenceLevel
): string {
  const descriptions = topFactors
    .map((f) => FACTOR_DESCRIPTIONS[f.question]?.[f.answer])
    .filter(Boolean);

  const name = NUTRIENT_NAMES_SV[nutrient];
  const level = confidence.toLowerCase();

  if (descriptions.length >= 2) {
    return `Baserat på ${descriptions[0]} och ${descriptions[1]} är ${name} ${level} otillräckligt.`;
  }
  if (descriptions.length === 1) {
    return `Baserat på ${descriptions[0]} är ${name} ${level} otillräckligt.`;
  }
  return `${name.charAt(0).toUpperCase() + name.slice(1)} är ${level} otillräckligt.`;
}
