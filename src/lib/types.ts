export type QuizAnswers = {
  q1_goal: string;
  q2_demographics: string; // combined key e.g. "female_30_39"
  q3_energy_pattern: string;
  q4_sleep: string;
  q5_diet: string[];
  q6_training: string;
  q6_frequency: string;
  q7_symptoms: string[];
  q8_current_supplements: string;
  q9_sun_exposure: string;
  q10_fish_intake: string;
  q11_menstrual_flow: string; // only set for females under 50; "" otherwise
};

export type DeficiencyArea =
  | "vitamin_d"
  | "iron"
  | "b12"
  | "magnesium"
  | "omega3"
  | "zinc"
  | "folate"
  | "thyroid";

export type ConfidenceLevel =
  | "Mycket troligt"
  | "Troligt"
  | "Värt att kontrollera";

export type Tier = 1 | 2 | 3;

export type QuestionKey =
  | "q1_goal"
  | "q2_demographics"
  | "q3_energy_pattern"
  | "q4_sleep"
  | "q5_diet"
  | "q6_training"
  | "q6_frequency"
  | "q7_symptoms"
  | "q9_sun_exposure"
  | "q10_fish_intake"
  | "q11_menstrual_flow";

export type TopFactor = {
  question: QuestionKey;
  answer: string;
  weight: number;
};

export type ScoredNutrient = {
  key: DeficiencyArea;
  score: number;
  confidence: ConfidenceLevel;
  tier: Tier;
  topFactors: TopFactor[]; // up to 2 highest contributors
};

export type ScoringResult = {
  nutrients: ScoredNutrient[];
  flags: {
    absorptionConcern: boolean;
    highSymptomLoad: boolean;
  };
  outputFraming: string; // q8 key
};
