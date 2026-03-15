

# Enhance AMUMA Investment Calculator

## What changes

All modifications are within `src/components/CalculatorSection.tsx` only. No layout or styling redesign — just adding new content blocks below existing ones using the same `ResultItem` pattern and existing typography classes.

## Additions (in order, appended below existing content)

### 1. Ownership Context
Below the existing Ownership result item, add explanatory text:
- "Ownership represents your proportional share of the Member Investment Pool."
- "Total project shares: 4,400 · Member shares available: 2,800"

### 2. Pebble Gauge
Below Annual Pebbles, add a visual progress bar using the existing `Progress` component.
- Scale: 0–8,000 (max Polaris pebbles)
- Value: `tier.pebbles / 8000 * 100`
- Tick marks at 1,000 / 2,200 / 4,000 / 8,000 with labels

### 3. Experience Value Section
New section after the existing results grid, before the divider:
- Compute `estimatedNights = Math.floor(tier.pebbles / 200)`
- Display: "~X suite nights per year"
- Secondary text: "OR multiple shorter stays plus spa, dining, and boat excursions."

### 4. Pebble Value Explanation
Small muted text block listing what Pebbles can be used for (accommodation, dining, spa, boat, experiences) and the renewal note.

### 5. Lifestyle + Yield Summary Card
A bordered summary block at the bottom with:
- Investment, Shares, Annual Pebbles, Estimated Experiences (~X nights), Projected Return range (fmt(annualLow) – fmt(annualHigh))

## Computed values (added to `useMemo`)
- `estimatedNights = Math.floor(tier.pebbles / 200)`

## No changes to
- Tier data, slider, ROI math, existing ResultItem grid, overall section structure

