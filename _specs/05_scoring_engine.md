# Brist - Scoring Engine

## Deficiency Areas (8)
vitamin_d | iron | b12 | magnesium | omega3 | zinc | folate | thyroid

Scores are additive across all questions. Start all at 0.

---

## Base Weights

### q1_goal
```
energy:         { vitamin_d: 0.2, iron: 0.3, b12: 0.3, magnesium: 0.2, thyroid: 0.3 }
sleep:          { magnesium: 0.4, vitamin_d: 0.2, zinc: 0.1 }
performance:    { magnesium: 0.3, iron: 0.2, zinc: 0.2, omega3: 0.2, vitamin_d: 0.2 }
general_health: { vitamin_d: 0.2, omega3: 0.2, magnesium: 0.1, zinc: 0.1 }
stress:         { magnesium: 0.4, b12: 0.2, omega3: 0.2, zinc: 0.1 }
```

### q2_demographics
```
female_18_29:   { iron: 0.4, folate: 0.3, vitamin_d: 0.3, b12: 0.1 }
female_30_39:   { iron: 0.4, folate: 0.3, vitamin_d: 0.3, magnesium: 0.2, thyroid: 0.2 }
female_40_49:   { iron: 0.3, vitamin_d: 0.4, magnesium: 0.3, thyroid: 0.3, b12: 0.2 }
female_50_plus: { vitamin_d: 0.5, b12: 0.4, magnesium: 0.3, thyroid: 0.3, iron: 0.1 }
male_18_29:     { vitamin_d: 0.3, magnesium: 0.2, zinc: 0.2 }
male_30_39:     { vitamin_d: 0.3, magnesium: 0.2, zinc: 0.2, omega3: 0.1 }
male_40_49:     { vitamin_d: 0.4, magnesium: 0.3, omega3: 0.2, b12: 0.2 }
male_50_plus:   { vitamin_d: 0.5, b12: 0.4, magnesium: 0.3, omega3: 0.2, zinc: 0.2 }
```

### q3_energy_pattern
```
steady:            {}
morning_crash:     { iron: 0.3, b12: 0.3, thyroid: 0.2 }
afternoon_dip:     { magnesium: 0.3, vitamin_d: 0.3, iron: 0.2 }
exhausted_evening: { magnesium: 0.3, iron: 0.2, b12: 0.1 }
low_all_day:       { iron: 0.4, b12: 0.4, thyroid: 0.4, vitamin_d: 0.3 }
```

### q4_sleep
```
good:                {}
hard_to_fall_asleep: { magnesium: 0.4, zinc: 0.2 }
night_waking:        { magnesium: 0.3, vitamin_d: 0.2 }
unrestorative:       { iron: 0.3, b12: 0.2, thyroid: 0.3 }
irregular:           { magnesium: 0.3, vitamin_d: 0.2, b12: 0.1 }
```

### q5_diet
```
home_cooked_varied:      { vitamin_d: 0.1 }
convenience:             { magnesium: 0.3, omega3: 0.3, zinc: 0.3, folate: 0.2, vitamin_d: 0.2 }
vegan_vegetarian:        { b12: 0.5, iron: 0.4, omega3: 0.4, zinc: 0.3, vitamin_d: 0.2 }
irregular_skipping:      { magnesium: 0.3, iron: 0.3, b12: 0.2, zinc: 0.2, folate: 0.2, vitamin_d: 0.2 }
high_protein_structured: { magnesium: 0.2, omega3: 0.1, vitamin_d: 0.1 }
```

### q6_training
```
sedentary:         { vitamin_d: 0.2 }
light_activity:    { vitamin_d: 0.1, magnesium: 0.1 }
strength_focused:  { magnesium: 0.3, zinc: 0.3, vitamin_d: 0.2 }
endurance_focused: { iron: 0.3, magnesium: 0.4, omega3: 0.2, zinc: 0.2 }
mixed:             { magnesium: 0.4, iron: 0.2, zinc: 0.3, omega3: 0.2, vitamin_d: 0.2 }
```

### q7_symptoms (multi-select - add weights for ALL selected options)
```
frequent_illness:   { vitamin_d: 0.4, zinc: 0.3 }
brittle_hair_nails: { iron: 0.4, zinc: 0.3, thyroid: 0.2 }
muscle_cramps:      { magnesium: 0.5, vitamin_d: 0.2 }
anxiety_on_edge:    { magnesium: 0.4, b12: 0.2, omega3: 0.2 }
dry_skin:           { omega3: 0.3, vitamin_d: 0.2, zinc: 0.2 }
joint_pain:         { omega3: 0.4, vitamin_d: 0.3 }
digestive_issues:   { zinc: 0.3, magnesium: 0.2 }
none:               {}
```

Q8 has no base weights - sets outputFraming only.

---

## Interaction Rules (apply after summing base weights, in this order)

1. **Sweden vitamin D baseline**
   Always add +0.2 to vitamin_d.

2. **Female endurance iron**
   If q2 is female_* (NOT female_50_plus) AND q6 = endurance_focused → add +0.3 to iron.

3. **Female mixed iron**
   If q2 is female_* (NOT female_50_plus) AND q6 = mixed → add +0.15 to iron.

4. **Vegan B12 floor**
   If q5 = vegan_vegetarian → b12 = Math.max(b12, 0.5).

5. **Age 50+ B12**
   If q2 ends in _50_plus → add +0.2 to b12.

6. **Digestive absorption flag**
   If q7 includes digestive_issues → add +0.15 to ALL scores. Set absorptionConcern = true.

7. **Multivitamin adjustment**
   If q8 = multivitamin → subtract 0.1 from vitamin_d and b12 (floor at 0).

8. **High symptom load flag**
   If q7 has 4+ selections (excluding "none") → set highSymptomLoad = true.

---

## Confidence Thresholds

| Score | Label | Show? |
|---|---|---|
| >= 0.5 | "Mycket troligt" | Yes |
| 0.3–0.49 | "Troligt" | Yes |
| 0.15–0.29 | "Värt att kontrollera" | Yes |
| < 0.15 | - | No |

---

## Tier Assignment

### Nutrient classifications
| Nutrient | Classification |
|---|---|
| vitamin_d | self_start_eligible |
| magnesium | self_start_eligible |
| omega3 | self_start_eligible |
| b12 | Tier 1 only when q5 = vegan_vegetarian, else Tier 2 |
| iron | always Tier 2 (test first) |
| zinc | always Tier 2 (test first) |
| folate | always Tier 2 (test first) |
| thyroid | always Tier 3 (professional) |

### Tier routing logic (apply in order)
1. thyroid → Tier 3 always
2. absorptionConcern = true → downgrade all Tier 1 candidates to Tier 2
3. confidence = "Mycket troligt" AND self_start_eligible → Tier 1
4. confidence = "Mycket troligt" AND b12 AND vegan → Tier 1
5. confidence = "Mycket troligt" AND NOT self_start_eligible → Tier 2
6. confidence = "Troligt" OR "Värt att kontrollera" → Tier 2

### highSymptomLoad flag
If true → add a Tier 3 suggestion card at the TOP of results (does not replace other tiers).
