# Brist - Design System

## Color Palette - Nordic Green

```css
--color-bg:           #F4F6F4   /* page background */
--color-surface:      #FFFFFF   /* cards */
--color-primary:      #1F3D2B   /* CTAs, active states, progress bar */
--color-secondary:    #4F7A65   /* supporting text, secondary elements */
--color-accent:       #DCE5DF   /* card borders, dividers, inactive states */
--color-text:         #1F2A24   /* primary text */
--color-text-muted:   #6B6B6B   /* secondary text */
--color-success:      #2ECC71
--color-error:        #C0392B
--color-warning:      #D68910
```

**Rule:** Green is only used for action and trust - never decoratively. Every green element means "this is important" or "tap here."

## Typography

| Use | Font | Size | Weight |
|---|---|---|---|
| Headings / quiz questions | DM Serif Display | 24px | - |
| Option labels | DM Sans | 16px | Medium |
| Supporting text | DM Sans | 14px | Regular / text-secondary color |
| CTA buttons | DM Sans | 16px | SemiBold / uppercase / 0.05em letter-spacing |
| Wordmark | DM Serif Display | 20px | - |
| Landing headline | DM Serif Display | 32px | - |
| Landing tagline | DM Sans | 18px | - / secondary green |
| Landing subtext | DM Sans | 16px | - / text-secondary |

Both fonts: Google Fonts - load in `app/layout.tsx`.

## Layout Rules

- **Mobile-first** - designed at 375px
- **Desktop** - content centered, max-width **480px**, never wider
- Everything single-column, full-width options
- **Base grid:** 16px
- **Border-radius:** 12px on all cards
- **Spacing values:** 8px, 16px, 24px only
- Generous whitespace between elements

## Component Specs

### ProgressBar
- Height: 3px
- Position: fixed to top of viewport
- Fill: left-to-right, primary green
- Animation: 300ms ease-out on each step
- No step numbers, no percentage text

### QuestionCard
- Full viewport height
- Centered vertically
- Contains: progress bar + one question + its options
- Nothing else on screen during a question

### OptionTile
- Full-width rounded rectangle
- Border-radius: 12px
- Background: white (`#FFFFFF`)
- Border: 1px solid accent (`#DCE5DF`)
- Min-height: 48px
- Padding: 16px vertical, 20px horizontal

**States:**
| State | Border | Background |
|---|---|---|
| Default | 1px `#DCE5DF` | white |
| Hover/tap | primary green | `#F0F5F2` (subtle green tint) |
| Selected | 2px primary green | `#F0F5F2` + checkmark icon right edge |

Transition: 150ms ease on border and background.

### ResultCard
- Background: white
- Border-radius: 12px
- Padding: 24px
- Nutrient name: DM Serif Display, 20px
- One-sentence explanation: DM Sans, 14px
- Confidence label: text (not a badge)

### CTACard
- Like ResultCard but with:
  - 4px green left-border accent
  - Subtle box-shadow
  - Full-width primary green button inside

## Transitions & Animation

| Event | Animation |
|---|---|
| Between questions | Current: fade + slight slide left (150ms). New: fade in from right (200ms, 50ms delay) |
| Progress bar fill | 300ms ease-out |
| Option selection | 150ms ease |
| Results loading state | 1.5s pulsing progress bar fills to 100%, then transition to results |

**No bounce, no overshoot.**

## What to Avoid

- No illustrations, mascots, stock imagery
- No gradient backgrounds
- No confetti or celebration animations
- No social sharing prompts
- No gamification elements
- No emojis in UI
- No dark patterns
