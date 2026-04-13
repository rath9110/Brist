import type {
  QuizAnswers,
  DeficiencyArea,
  ConfidenceLevel,
  Tier,
  TopFactor,
  ScoredNutrient,
  ScoringResult,
  QuestionKey,
} from "./types";

const DEFICIENCY_AREAS: DeficiencyArea[] = [
  "vitamin_d",
  "iron",
  "b12",
  "magnesium",
  "omega3",
  "zinc",
  "folate",
  "thyroid",
];

type Weights = Partial<Record<DeficiencyArea, number>>;

const QUIZ_WEIGHTS: Record<string, Record<string, Weights>> = {
  q1_goal: {
    energy: { vitamin_d: 0.2, iron: 0.3, b12: 0.3, magnesium: 0.2, thyroid: 0.3 },
    sleep: { magnesium: 0.4, vitamin_d: 0.2, zinc: 0.1 },
    performance: { magnesium: 0.3, iron: 0.2, zinc: 0.2, omega3: 0.2, vitamin_d: 0.2 },
    general_health: { vitamin_d: 0.2, omega3: 0.2, magnesium: 0.1, zinc: 0.1 },
    stress: { magnesium: 0.4, b12: 0.2, omega3: 0.2, zinc: 0.1 },
  },
  q2_demographics: {
    female_18_29: { iron: 0.4, folate: 0.3, vitamin_d: 0.3, b12: 0.1 },
    female_30_39: { iron: 0.4, folate: 0.3, vitamin_d: 0.3, magnesium: 0.2, thyroid: 0.2 },
    female_40_49: { iron: 0.3, vitamin_d: 0.4, magnesium: 0.3, thyroid: 0.3, b12: 0.2 },
    female_50_plus: { vitamin_d: 0.5, b12: 0.4, magnesium: 0.3, thyroid: 0.3, iron: 0.1 },
    male_18_29: { vitamin_d: 0.3, magnesium: 0.2, zinc: 0.2 },
    male_30_39: { vitamin_d: 0.3, magnesium: 0.2, zinc: 0.2, omega3: 0.1 },
    male_40_49: { vitamin_d: 0.4, magnesium: 0.3, omega3: 0.2, b12: 0.2 },
    male_50_plus: { vitamin_d: 0.5, b12: 0.4, magnesium: 0.3, omega3: 0.2, zinc: 0.2 },
  },
  q3_energy_pattern: {
    steady: {},
    morning_crash: { iron: 0.3, b12: 0.3, thyroid: 0.2 },
    afternoon_dip: { magnesium: 0.3, vitamin_d: 0.3, iron: 0.2 },
    exhausted_evening: { magnesium: 0.3, iron: 0.2, b12: 0.1 },
    low_all_day: { iron: 0.4, b12: 0.4, thyroid: 0.4, vitamin_d: 0.3 },
  },
  q4_sleep: {
    good: {},
    hard_to_fall_asleep: { magnesium: 0.4, zinc: 0.2 },
    night_waking: { magnesium: 0.3, vitamin_d: 0.2 },
    unrestorative: { iron: 0.3, b12: 0.2, thyroid: 0.3 },
    irregular: { magnesium: 0.3, vitamin_d: 0.2, b12: 0.1 },
  },
  q5_diet: {
    home_cooked_varied: { vitamin_d: 0.1 },
    convenience: { magnesium: 0.3, omega3: 0.3, zinc: 0.3, folate: 0.2, vitamin_d: 0.2 },
    vegan_vegetarian: { b12: 0.5, iron: 0.4, omega3: 0.4, zinc: 0.3, vitamin_d: 0.2 },
    irregular_skipping: { magnesium: 0.3, iron: 0.3, b12: 0.2, zinc: 0.2, folate: 0.2, vitamin_d: 0.2 },
    high_protein_structured: { magnesium: 0.2, omega3: 0.1, vitamin_d: 0.1 },
  },
  q6_training: {
    sedentary: { vitamin_d: 0.2 },
    light_activity: { vitamin_d: 0.1, magnesium: 0.1 },
    strength_focused: { magnesium: 0.3, zinc: 0.3, vitamin_d: 0.2 },
    endurance_focused: { iron: 0.3, magnesium: 0.4, omega3: 0.2, zinc: 0.2 },
    mixed: { magnesium: 0.4, iron: 0.2, zinc: 0.3, omega3: 0.2, vitamin_d: 0.2 },
  },
  q6_frequency: {
    rarely:     {},
    one_two:    { magnesium: 0.1, vitamin_d: 0.1 },
    three_four: { magnesium: 0.2, zinc: 0.1, iron: 0.1, vitamin_d: 0.1 },
    five_plus:  { magnesium: 0.3, zinc: 0.2, iron: 0.2, vitamin_d: 0.2, omega3: 0.1 },
  },
  q7_symptoms: {
    frequent_illness: { vitamin_d: 0.4, zinc: 0.3 },
    brittle_hair_nails: { iron: 0.4, zinc: 0.3, thyroid: 0.2 },
    muscle_cramps: { magnesium: 0.5, vitamin_d: 0.2 },
    anxiety_on_edge: { magnesium: 0.4, b12: 0.2, omega3: 0.2 },
    dry_skin: { omega3: 0.3, vitamin_d: 0.2, zinc: 0.2 },
    joint_pain: { omega3: 0.4, vitamin_d: 0.3 },
    digestive_issues: { zinc: 0.3, magnesium: 0.2 },
    none: {},
  },
  q9_sun_exposure: {
    mostly_indoors: { vitamin_d: 0.4 },
    some_outdoor:   { vitamin_d: 0.2 },
    regularly_outdoor: { vitamin_d: 0.0 },
    outdoor_work:   { vitamin_d: -0.1 }, // protective
  },
  q10_fish_intake: {
    rarely:        { omega3: 0.4 },
    once_week:     { omega3: 0.1 },
    two_plus_week: { omega3: -0.1 }, // protective
  },
  q11_menstrual_flow: {
    light:  {},
    normal: { iron: 0.1 },
    heavy:  { iron: 0.5 },
  },
};

const SELF_START = new Set<DeficiencyArea>(["vitamin_d", "magnesium", "omega3"]);
const ALWAYS_TIER2 = new Set<DeficiencyArea>(["iron", "zinc", "folate"]);

function getConfidence(score: number): ConfidenceLevel | null {
  if (score >= 0.5) return "Mycket troligt";
  if (score >= 0.3) return "Troligt";
  if (score >= 0.15) return "Värt att kontrollera";
  return null;
}

export function computeScores(answers: QuizAnswers): ScoringResult {
  // Accumulate scores and track per-question contributions for top factors
  const scores: Record<DeficiencyArea, number> = {
    vitamin_d: 0, iron: 0, b12: 0, magnesium: 0,
    omega3: 0, zinc: 0, folate: 0, thyroid: 0,
  };
  // contributions[nutrient] = array of { question, answer, weight }
  const contributions: Record<DeficiencyArea, TopFactor[]> = {} as Record<DeficiencyArea, TopFactor[]>;
  for (const area of DEFICIENCY_AREAS) {
    contributions[area] = [];
  }

  // Sum base weights for single-select questions
  const singleQuestions: { key: QuestionKey; answerKey: keyof QuizAnswers }[] = [
    { key: "q1_goal", answerKey: "q1_goal" },
    { key: "q2_demographics", answerKey: "q2_demographics" },
    { key: "q3_energy_pattern", answerKey: "q3_energy_pattern" },
    { key: "q4_sleep", answerKey: "q4_sleep" },
    { key: "q6_training", answerKey: "q6_training" },
    { key: "q6_frequency", answerKey: "q6_frequency" },
    { key: "q9_sun_exposure", answerKey: "q9_sun_exposure" },
    { key: "q10_fish_intake", answerKey: "q10_fish_intake" },
    { key: "q11_menstrual_flow", answerKey: "q11_menstrual_flow" },
  ];

  for (const { key, answerKey } of singleQuestions) {
    const answer = answers[answerKey] as string;
    const weights = QUIZ_WEIGHTS[key]?.[answer];
    if (!weights) continue;
    for (const [nutrient, weight] of Object.entries(weights)) {
      const n = nutrient as DeficiencyArea;
      scores[n] += weight;
      contributions[n].push({ question: key, answer, weight });
    }
  }

  // Q5 diet multi-select: add weights for all selected diets
  for (const diet of answers.q5_diet) {
    const weights = QUIZ_WEIGHTS.q5_diet?.[diet];
    if (!weights) continue;
    for (const [nutrient, weight] of Object.entries(weights)) {
      const n = nutrient as DeficiencyArea;
      scores[n] += weight;
      contributions[n].push({ question: "q5_diet", answer: diet, weight });
    }
  }

  // Q7 multi-select: add weights for ALL selected symptoms
  for (const symptom of answers.q7_symptoms) {
    const weights = QUIZ_WEIGHTS.q7_symptoms?.[symptom];
    if (!weights) continue;
    for (const [nutrient, weight] of Object.entries(weights)) {
      const n = nutrient as DeficiencyArea;
      scores[n] += weight;
      contributions[n].push({ question: "q7_symptoms", answer: symptom, weight });
    }
  }

  // --- Interaction rules (applied in order) ---

  // 1. Sweden vitamin D baseline (only applied when sun question not answered)
  if (!answers.q9_sun_exposure) {
    scores.vitamin_d += 0.2;
  }

  // 2. Female endurance iron
  const isFemaleNotSenior =
    answers.q2_demographics.startsWith("female_") &&
    answers.q2_demographics !== "female_50_plus";
  if (isFemaleNotSenior && answers.q6_training === "endurance_focused") {
    scores.iron += 0.3;
  }

  // 3. Female mixed iron
  if (isFemaleNotSenior && answers.q6_training === "mixed") {
    scores.iron += 0.15;
  }

  // 4. Vegan B12 floor
  if (answers.q5_diet.includes("vegan_vegetarian")) {
    scores.b12 = Math.max(scores.b12, 0.5);
  }

  // 5. Age 50+ B12
  if (answers.q2_demographics.endsWith("_50_plus")) {
    scores.b12 += 0.2;
  }

  // 6. Digestive absorption flag
  let absorptionConcern = false;
  if (answers.q7_symptoms.includes("digestive_issues")) {
    absorptionConcern = true;
    for (const area of DEFICIENCY_AREAS) {
      if (scores[area] > 0) scores[area] += 0.15; // only amplify existing signals
    }
  }

  // 7. Multivitamin adjustment
  if (answers.q8_current_supplements === "multivitamin") {
    scores.vitamin_d = Math.max(0, scores.vitamin_d - 0.1);
    scores.b12 = Math.max(0, scores.b12 - 0.1);
  }

  // 8. High symptom load flag
  const symptomCount = answers.q7_symptoms.filter((s) => s !== "none").length;
  const highSymptomLoad = symptomCount >= 4;

  // --- Build scored nutrients ---
  const isVegan = answers.q5_diet.includes("vegan_vegetarian");

  const nutrients: ScoredNutrient[] = [];

  for (const area of DEFICIENCY_AREAS) {
    const score = scores[area];
    const confidence = getConfidence(score);
    if (!confidence) continue; // score < 0.15 → don't show

    // Determine tier
    let tier: Tier;
    if (area === "thyroid") {
      tier = 3;
    } else if (absorptionConcern) {
      // All potential tier 1 → tier 2
      if (ALWAYS_TIER2.has(area) || area === "b12") {
        tier = 2;
      } else {
        tier = 2; // downgrade self-start too
      }
    } else if (confidence === "Mycket troligt" && SELF_START.has(area)) {
      tier = 1;
    } else if (confidence === "Mycket troligt" && area === "b12" && isVegan) {
      tier = 1;
    } else {
      tier = 2;
    }

    // Top 2 factors by weight (deduplicate question keys by taking max)
    const factorsByQuestion = new Map<string, TopFactor>();
    for (const c of contributions[area]) {
      const existing = factorsByQuestion.get(c.question);
      if (!existing || c.weight > existing.weight) {
        factorsByQuestion.set(c.question, c);
      }
    }
    const topFactors = Array.from(factorsByQuestion.values())
      .sort((a, b) => b.weight - a.weight)
      .slice(0, 2);

    nutrients.push({ key: area, score, confidence, tier, topFactors });
  }

  // Sort each tier by score descending
  nutrients.sort((a, b) => b.score - a.score);

  return {
    nutrients,
    flags: { absorptionConcern, highSymptomLoad },
    outputFraming: answers.q8_current_supplements,
  };
}
