// Quiz question data. Swedish UI copy, English keys.
// Q2 is composite (age + sex rows on one screen); combined key = `${sex}_${age}`.
// Q7 is multi_select with special "none" exclusivity.

export type QuestionType = "single_select" | "composite" | "multi_select";

export type Option = {
  key: string;
  label: string;
};

export type Question = {
  id:
    | "q1_goal"
    | "q2_demographics"
    | "q3_energy_pattern"
    | "q4_sleep"
    | "q5_diet"
    | "q6_training"
    | "q6_frequency"
    | "q7_symptoms"
    | "q8_current_supplements"
    | "q9_sun_exposure"
    | "q10_fish_intake"
    | "q11_menstrual_flow";
  type: QuestionType;
  question: string;
  options?: Option[];
  // Composite-only
  rows?: { label: string; key: "age" | "sex"; options: Option[] }[];
  // If set, question is only shown when this predicate is true
  showIf?: (answers: { q2_demographics: string }) => boolean;
};

export const QUESTIONS: Question[] = [
  {
    id: "q1_goal",
    type: "single_select",
    question: "Vad är ditt främsta mål?",
    options: [
      { key: "energy", label: "Mer energi" },
      { key: "sleep", label: "Bättre sömn" },
      { key: "performance", label: "Prestation och återhämtning" },
      { key: "general_health", label: "Allmän hälsa och prevention" },
      { key: "stress", label: "Hantera stress" },
    ],
  },
  {
    id: "q2_demographics",
    type: "composite",
    question: "Ålder och biologiskt kön",
    rows: [
      {
        label: "Ålder",
        key: "age",
        options: [
          { key: "18_29", label: "18–29" },
          { key: "30_39", label: "30–39" },
          { key: "40_49", label: "40–49" },
          { key: "50_plus", label: "50+" },
        ],
      },
      {
        label: "Kön",
        key: "sex",
        options: [
          { key: "female", label: "Kvinna" },
          { key: "male", label: "Man" },
        ],
      },
    ],
  },
  {
    id: "q3_energy_pattern",
    type: "single_select",
    question: "Hur skulle du beskriva din energi under dagen?",
    options: [
      { key: "steady", label: "Stabil hela dagen" },
      {
        key: "morning_crash",
        label: "Trög på morgonen (behöver kaffe för att komma igång)",
      },
      { key: "afternoon_dip", label: "Dipp på eftermiddagen" },
      { key: "exhausted_evening", label: "Slut på kvällen" },
      { key: "low_all_day", label: "Låg energi hela dagen" },
    ],
  },
  {
    id: "q4_sleep",
    type: "single_select",
    question: "Hur sover du?",
    options: [
      { key: "good", label: "Somnar lätt, vaknar utvilad" },
      { key: "hard_to_fall_asleep", label: "Svårt att somna" },
      { key: "night_waking", label: "Somnar bra men vaknar under natten" },
      { key: "unrestorative", label: "Sover länge men vaknar trött" },
      { key: "irregular", label: "Oregelbunden och inkonsekvent" },
    ],
  },
  {
    id: "q5_diet",
    type: "multi_select",
    question: "Hur ser en vanlig matdag ut för dig? (välj allt som stämmer)",
    options: [
      { key: "home_cooked_varied", label: "Mestadels hemlagat och varierat" },
      { key: "convenience", label: "Mest snabbmat och ute" },
      { key: "vegan_vegetarian", label: "Vegetarisk eller vegansk" },
      {
        key: "irregular_skipping",
        label: "Hoppar över måltider / äter oregelbundet",
      },
      {
        key: "high_protein_structured",
        label: "Proteinrik, strukturerad (träningskost)",
      },
    ],
  },
  {
    id: "q6_training",
    type: "single_select",
    question: "Hur mycket tränar du, och vilken typ?",
    options: [
      { key: "sedentary", label: "Jag tränar inte" },
      { key: "light_activity", label: "Lätt aktivitet (promenader, yoga, cykling)" },
      { key: "strength_focused", label: "Styrketräning" },
      { key: "endurance_focused", label: "Uthållighetsträning (löpning, cykling, rodd)" },
      { key: "mixed", label: "Blandat — styrka och uthållighet" },
    ],
  },
  {
    id: "q6_frequency",
    type: "single_select",
    question: "Hur ofta är du fysiskt aktiv?",
    options: [
      { key: "rarely", label: "Sällan eller aldrig" },
      { key: "one_two", label: "1–2 gånger per vecka" },
      { key: "three_four", label: "3–4 gånger per vecka" },
      { key: "five_plus", label: "5 eller fler gånger per vecka" },
    ],
  },
  {
    id: "q7_symptoms",
    type: "multi_select",
    question: "Välj allt som stämmer in på dig",
    options: [
      { key: "frequent_illness", label: "Jag blir sjuk ofta" },
      {
        key: "brittle_hair_nails",
        label: "Mitt hår eller mina naglar är sköra",
      },
      { key: "muscle_cramps", label: "Jag får muskelkramper eller ryckningar" },
      { key: "anxiety_on_edge", label: "Jag känner mig orolig eller på helspänn" },
      { key: "dry_skin", label: "Torr hud" },
      { key: "joint_pain", label: "Ledvärk eller stelhet" },
      {
        key: "digestive_issues",
        label: "Magbesvär (uppblåsthet, oregelbunden mage)",
      },
      { key: "none", label: "Inget av ovanstående" },
    ],
  },
  {
    id: "q8_current_supplements",
    type: "single_select",
    question: "Tar du några kosttillskott just nu?",
    options: [
      { key: "nothing", label: "Nej, ingenting" },
      { key: "multivitamin", label: "Ett multivitamin" },
      {
        key: "specific_supplements",
        label: "Specifika tillskott (jag vet vad jag tar)",
      },
      { key: "tried_and_stopped", label: "Har testat men slutat" },
      { key: "gym_recommendation", label: "Det gymmet rekommenderar" },
    ],
  },
  {
    id: "q9_sun_exposure",
    type: "single_select",
    question: "Hur mycket tid spenderar du utomhus i dagsljus?",
    options: [
      { key: "mostly_indoors", label: "Mestadels inomhus (kontor, hemma)" },
      { key: "some_outdoor", label: "Lite utomhus — promenader, ärenden" },
      { key: "regularly_outdoor", label: "Regelbundet utomhus varje dag" },
      { key: "outdoor_work", label: "Jobbar eller tränar utomhus" },
    ],
  },
  {
    id: "q10_fish_intake",
    type: "single_select",
    question: "Hur ofta äter du fet fisk (lax, makrill, sill, sardiner)?",
    options: [
      { key: "rarely", label: "Sällan eller aldrig" },
      { key: "once_week", label: "Ungefär en gång i veckan" },
      { key: "two_plus_week", label: "Två gånger eller mer per vecka" },
    ],
  },
  {
    id: "q11_menstrual_flow",
    type: "single_select",
    question: "Hur är din mens normalt sett?",
    showIf: (answers) =>
      answers.q2_demographics.startsWith("female_") &&
      answers.q2_demographics !== "female_50_plus",
    options: [
      { key: "light", label: "Lätt" },
      { key: "normal", label: "Normal" },
      { key: "heavy", label: "Kraftig (byter binda/tampong ofta, klumpar)" },
    ],
  },
];
