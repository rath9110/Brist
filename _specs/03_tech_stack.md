# Brist — Tech Stack, File Structure & State

## Tech Stack

| | |
|---|---|
| Framework | Next.js 14, App Router |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Database | None |
| Auth | None |
| External APIs | None |
| Deploy | Vercel |

All logic is client-side for MVP.

## File Structure

```
src/
  app/
    layout.tsx              — Google Fonts, global styles, metadata
    page.tsx                — Landing page with "Starta quizzen" CTA
    quiz/
      page.tsx              — Quiz flow (all 8 questions, client-side state)
    results/
      page.tsx              — Results page (reads from URL params or sessionStorage)
  components/
    ProgressBar.tsx
    QuestionCard.tsx
    OptionTile.tsx
    ResultCard.tsx
    CTACard.tsx
    ProfileSummary.tsx
    EmailCapture.tsx
  lib/
    scoring.ts              — Scoring engine: weights, interaction rules, tier assignment
    questions.ts            — Quiz question data (labels, options, types)
    protocols.ts            — Supplement protocol data
    factors.ts              — Factor descriptions for dynamic explanations
    types.ts                — TypeScript types
  styles/
    globals.css             — Tailwind config, CSS variables for color palette
```

## TypeScript Types (`lib/types.ts`)

```typescript
type QuizAnswers = {
  q1_goal: string;
  q2_demographics: string;   // combined key e.g. "female_30_39"
  q3_energy_pattern: string;
  q4_sleep: string;
  q5_diet: string;
  q6_training: string;
  q7_symptoms: string[];     // array — multi-select
  q8_current_supplements: string;
};

type DeficiencyArea = 'vitamin_d' | 'iron' | 'b12' | 'magnesium' | 'omega3' | 'zinc' | 'folate' | 'thyroid';

type ConfidenceLevel = 'Mycket troligt' | 'Troligt' | 'Värt att kontrollera';

type Tier = 1 | 2 | 3;

type ScoredNutrient = {
  key: DeficiencyArea;
  score: number;
  confidence: ConfidenceLevel;
  tier: Tier;
  topFactors: string[];      // 2 question keys that contributed most
};

type ScoringResult = {
  nutrients: ScoredNutrient[];
  flags: {
    absorptionConcern: boolean;
    highSymptomLoad: boolean;
  };
  outputFraming: string;     // from q8
};
```

## State Management

- Use React `useState` for quiz answers during the quiz
- On completion: compute scores client-side, encode state into `sessionStorage` (or URL search params), navigate to `/results`
- `/results` reads from `sessionStorage`

## Landing Page (`app/page.tsx`)

Content (all centered, max-width 480px, bg `#F4F6F4`):

1. Wordmark `brist` — DM Serif Display, 20px, primary green, top-left, 32px margin-bottom
2. Headline — "Vilka tillskott behöver just du?" — DM Serif Display, 32px, text-primary
3. Tagline — "Hitta det du saknar." — DM Sans, 18px, secondary green `#4F7A65`
4. Subtext — "Svara på 8 snabba frågor. Få en personlig plan baserad på din livsstil, kost och träning." — DM Sans, 16px, text-secondary
5. CTA button (full-width, primary green bg, white text) — "Starta quizzen →"
6. Below button, 14px text-secondary — "Tar cirka 2 minuter. Inga personuppgifter sparas."

No navigation, header, or footer.

## Meta Tags (`app/layout.tsx`)

```html
<title>Brist — Vilka tillskott behöver du?</title>
<meta name="description" content="Svara på 8 snabba frågor och få en personlig plan baserad på din livsstil, kost och träning. Hitta det du saknar." />
<meta property="og:site_name" content="Brist" />
```

## Implementation Notes

1. Quiz must feel fast — preload next question
2. Mobile tap targets: OptionTile min-height 48px, no radio buttons
3. Results page = calm analysis, not a sales page
4. All UI copy is Swedish; code comments and variable names are English
5. Back button on quiz must work and preserve previous answers
6. Q2 (demographics): two selection rows on one screen — age on top, sex below. Both must be selected before advancing
7. Q7 (multi-select): selecting "none" deselects all others; selecting any other option deselects "none"
8. Email capture on results: for MVP, store in `localStorage` or just log it — no backend needed
9. No cookies banner needed for MVP (no tracking, no analytics)
