# Brist — Results Page

After Q8: show 1.5s loading state (progress bar pulses and fills to 100%), then transition to results.

---

## Section 1 — Profile Summary

Show "brist" wordmark top-left (DM Serif Display 20px, primary green, lowercase).

A compact card reflecting back key inputs: goal, age/sex, training type, diet. No scores. Clean grid layout. "We heard you" moment.

---

## Section 2 — Personalized Intro

Based on q8 outputFraming. See 01_brand.md for the 5 copy variants keyed by q8 answer.

---

## Section 3 — High Symptom Load Warning (conditional)

Show only if highSymptomLoad = true.
Visual: card with amber/warning (#D68910) left-border.
Copy: "Du upplever flera symtom samtidigt. Även om enskilda tillskott kan hjälpa, kan det här mönstret tyda på ett underliggande tillstånd som är värt att diskutera med en vårdgivare."

---

## Section 4 — Absorption Concern Note (conditional)

Show only if absorptionConcern = true.
Visual: subtle info card (no color border).
Copy: "Magbesvär kan försämra näringsupptaget. Dina faktiska nivåer kan vara lägre än din kost antyder — att testa är extra värdefullt i ditt fall."

---

## Section 5 — Tier 1: Börja direkt

Header: "Börja direkt — hög säkerhet"
ResultCards for each Tier 1 nutrient, sorted by score descending.

Each card:
- Nutrient name (DM Serif Display 20px)
- Confidence label in primary green
- One-sentence dynamic explanation (see Dynamic Explanations below)
- Expandable protocol section: form, dose, frequency, duration, notes (from 06_protocols.md)
- Product slot: "Rekommenderad produkt kommer snart"

---

## Section 6 — Tier 2: Testa först

Header: "Testa först — bekräfta innan du börjar"
ResultCards for each Tier 2 nutrient.

Each card:
- Nutrient name + confidence label
- Why testing is needed (use safety rationale from 06_protocols.md, e.g. "Supplementera inte järn utan att veta ditt ferritinvärde")
- Biomarker to test (e.g. "Be om: Ferritin")

Below tier 2 cards — Testing Guidance CTACard:
- **Headline:** "Hur du testar"
- **Body:** "Du kan testa dessa markörer via din vårdcentral, valfri hemtesttjänst, eller företagshälsovården. En vitamin- och mineralpanel kostar vanligtvis 500–1500 kr. Tips: Om du beskriver symtom (trötthet, sömnproblem) kan många av dessa tester täckas via sjukvården."
- List specific markers from tier 2 results. Always include TSH if thyroid scored > 0.

---

## Section 7 — Tier 3: Professional (conditional)

Show only if thyroid flagged OR highSymptomLoad = true.
Visual: neutral warm tone, no green — visually distinct from other cards.
Copy: "Dina svar tyder på att detta kan behöva professionell bedömning snarare än bara tillskott. Det är inget att oroa sig för — det betyder bara att en vårdgivare kan hjälpa dig mer effektivt än vi kan."

---

## Section 8 — Email Capture

- **Headline:** "Vill du spara dina resultat?"
- **Subtext:** "Ange din e-post så skickar vi en sammanfattning — och meddelar dig när Brist lanserar produktrekommendationer."
- Email input + "Skicka" button
- MVP: store in localStorage or console.log — no backend.

---

## Section 9 — Restart

Small text link at bottom: "Gör om quizzen"
Action: reset all state, navigate to Q1.

---

## Dynamic Explanation Generation

For each nutrient ResultCard, find the 2 quiz questions that contributed the most weight to that nutrient's score, look up their Swedish factor descriptions, and compose a sentence.

**Pattern:** "Baserat på {factor1} och {factor2} är {nutrient_sv} {confidence_sv_lowercase}."
**Example:** "Baserat på din veganska kost och din uthållighetsträning är järn mycket troligt otillräckligt."

### Factor Description Map (lib/factors.ts)

```typescript
q1_goal:
  energy:         "ditt mål att få mer energi"
  sleep:          "ditt mål att sova bättre"
  performance:    "ditt fokus på prestation"
  general_health: "ditt fokus på allmän hälsa"
  stress:         "din önskan att hantera stress"

q2_demographics:
  female_18_29:   "din ålder och kön"
  female_30_39:   "din ålder och kön"
  female_40_49:   "din ålder och kön"
  female_50_plus: "din ålder"
  male_18_29:     "din ålder"
  male_30_39:     "din ålder"
  male_40_49:     "din ålder"
  male_50_plus:   "din ålder"

q3_energy_pattern:
  morning_crash:     "din energidipp på morgonen"
  afternoon_dip:     "din energidipp på eftermiddagen"
  exhausted_evening: "att du är slut på kvällen"
  low_all_day:       "din genomgående låga energi"

q4_sleep:
  hard_to_fall_asleep: "dina sömnsvårigheter"
  night_waking:        "att du vaknar under natten"
  unrestorative:       "din oroliga sömn"
  irregular:           "din oregelbundna sömn"

q5_diet:
  convenience:             "din kosttyp"
  vegan_vegetarian:        "din veganska/vegetariska kost"
  irregular_skipping:      "dina oregelbundna matvanor"
  high_protein_structured: "din träningskost"

q6_training:
  strength_focused:  "din styrketräning"
  endurance_focused: "din uthållighetsträning"
  mixed:             "din blandade träning"
  sedentary:         "din aktivitetsnivå"

q7_symptoms:
  frequent_illness:   "att du blir sjuk ofta"
  brittle_hair_nails: "sköra hår/naglar"
  muscle_cramps:      "dina muskelkramper"
  anxiety_on_edge:    "din känsla av oro"
  dry_skin:           "din torra hud"
  joint_pain:         "din ledvärk"
  digestive_issues:   "dina magbesvär"
```

### Nutrient Swedish names
| Key | Swedish |
|---|---|
| vitamin_d | "D-vitamin" |
| iron | "järn" |
| b12 | "B12" |
| magnesium | "magnesium" |
| omega3 | "omega-3" |
| zinc | "zink" |
| folate | "folat" |
| thyroid | (no explanation sentence — Tier 3 only) |
