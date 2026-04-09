# Brist — Build Specs Index

## What is Brist?
Next.js 14 (App Router) supplement quiz app in Swedish. 8-question quiz → personalized results with three recommendation tiers. MVP, client-side only, no backend.

## Spec Files Tree

```
_specs/
├── 00_INDEX.md              ← You are here — start here
├── 01_brand.md              ← Brand identity, voice, tone, copy rules
├── 02_design_system.md      ← Colors, typography, layout, components, transitions
├── 03_tech_stack.md         ← Stack, file structure, state management, meta tags, notes
├── 04_quiz_questions.md     ← All 8 quiz questions with Swedish copy and option keys
├── 05_scoring_engine.md     ← Weights table, interaction rules, thresholds, tier logic
├── 06_protocols.md          ← Per-nutrient supplement protocols (form, dose, notes)
└── 07_results_page.md       ← Results page sections, dynamic explanations, factor map
```

## Reading Order for Implementation

1. `01_brand.md` — understand what this product is and how it communicates
2. `02_design_system.md` — before writing any component
3. `03_tech_stack.md` — file structure and state shape before creating files
4. `04_quiz_questions.md` — question data for `lib/questions.ts`
5. `05_scoring_engine.md` — scoring logic for `lib/scoring.ts`
6. `06_protocols.md` — protocol data for `lib/protocols.ts`
7. `07_results_page.md` — results rendering for `app/results/page.tsx`

## Key Facts (quick reference)

| Item | Value |
|---|---|
| Framework | Next.js 14, App Router, TypeScript |
| Styling | Tailwind CSS |
| Language | Swedish UI copy, English code |
| Backend | None — all client-side |
| Deploy target | Vercel |
| Primary color | #1F3D2B |
| Background | #F4F6F4 |
| Max content width | 480px |
| Quiz questions | 8 |
| Deficiency areas | 8 (vitamin_d, iron, b12, magnesium, omega3, zinc, folate, thyroid) |
| Result tiers | 3 (start now / test first / see professional) |
