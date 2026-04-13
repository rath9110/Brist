# Brist - Quiz Questions

8 questions total. All question copy is Swedish. Internal keys are English.

---

## Q1 - Primary Goal
**Type:** single_select
**Swedish:** "Vad är ditt främsta mål?"

| Key | Swedish label |
|---|---|
| `energy` | "Mer energi" |
| `sleep` | "Bättre sömn" |
| `performance` | "Prestation och återhämtning" |
| `general_health` | "Allmän hälsa och prevention" |
| `stress` | "Hantera stress" |

---

## Q2 - Demographics
**Type:** composite (two selection rows on ONE screen)
**Swedish:** "Ålder och biologiskt kön"

Both rows must be selected before advancing.

**Age row:**
| Key | Swedish label |
|---|---|
| `18_29` | "18–29" |
| `30_39` | "30–39" |
| `40_49` | "40–49" |
| `50_plus` | "50+" |

**Sex row:**
| Key | Swedish label |
|---|---|
| `female` | "Kvinna" |
| `male` | "Man" |

**Combined key format:** `{sex}_{age}` → e.g. `female_30_39`, `male_18_29`

---

## Q3 - Energy Pattern
**Type:** single_select
**Swedish:** "Hur skulle du beskriva din energi under dagen?"

| Key | Swedish label |
|---|---|
| `steady` | "Stabil hela dagen" |
| `morning_crash` | "Trög på morgonen (behöver kaffe för att komma igång)" |
| `afternoon_dip` | "Dipp på eftermiddagen" |
| `exhausted_evening` | "Slut på kvällen" |
| `low_all_day` | "Låg energi hela dagen" |

---

## Q4 - Sleep
**Type:** single_select
**Swedish:** "Hur sover du?"

| Key | Swedish label |
|---|---|
| `good` | "Somnar lätt, vaknar utvilad" |
| `hard_to_fall_asleep` | "Svårt att somna" |
| `night_waking` | "Somnar bra men vaknar under natten" |
| `unrestorative` | "Sover länge men vaknar trött" |
| `irregular` | "Oregelbunden och inkonsekvent" |

---

## Q5 - Diet
**Type:** single_select
**Swedish:** "Hur ser en vanlig matdag ut för dig?"

| Key | Swedish label |
|---|---|
| `home_cooked_varied` | "Mestadels hemlagat och varierat" |
| `convenience` | "Mest snabbmat och ute" |
| `vegan_vegetarian` | "Vegetarisk eller vegansk" |
| `irregular_skipping` | "Hoppar över måltider / äter oregelbundet" |
| `high_protein_structured` | "Proteinrik, strukturerad (träningskost)" |

---

## Q6 - Training
**Type:** single_select
**Swedish:** "Hur mycket tränar du, och vilken typ?"

| Key | Swedish label |
|---|---|
| `sedentary` | "Stillasittande" |
| `light_activity` | "Lätt aktivitet 2–3 gånger i veckan" |
| `strength_focused` | "Styrketräning 3–5 gånger i veckan" |
| `endurance_focused` | "Uthållighet (löpning, cykling)" |
| `mixed` | "Blandat - både styrka och uthållighet" |

---

## Q7 - Symptoms
**Type:** multi_select
**Swedish:** "Välj allt som stämmer in på dig"

| Key | Swedish label |
|---|---|
| `frequent_illness` | "Jag blir sjuk ofta" |
| `brittle_hair_nails` | "Mitt hår eller mina naglar är sköra" |
| `muscle_cramps` | "Jag får muskelkramper eller ryckningar" |
| `anxiety_on_edge` | "Jag känner mig orolig eller på helspänn" |
| `dry_skin` | "Torr hud" |
| `joint_pain` | "Ledvärk eller stelhet" |
| `digestive_issues` | "Magbesvär (uppblåsthet, oregelbunden mage)" |
| `none` | "Inget av ovanstående" |

**Special behavior:**
- Show "Fortsätt" (Continue) button at bottom only after at least one option is selected
- Selecting `none` deselects all other options
- Selecting any other option deselects `none`

---

## Q8 - Current Supplements
**Type:** single_select
**Swedish:** "Tar du några kosttillskott just nu?"

| Key | Swedish label |
|---|---|
| `nothing` | "Nej, ingenting" |
| `multivitamin` | "Ett multivitamin" |
| `specific_supplements` | "Specifika tillskott (jag vet vad jag tar)" |
| `tried_and_stopped` | "Har testat men slutat" |
| `gym_recommendation` | "Det gymmet rekommenderar" |

**Note:** Q8 does not affect deficiency scores directly - it only determines the `outputFraming` for the results page intro. See `01_brand.md` for framing copy.
