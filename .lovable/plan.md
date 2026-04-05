

# Fix Desktop Content Centering

## Problem
Every block component uses `max-w-lg` (512px) without `mx-auto`, so content hugs the left side on desktop. The admin "alignment" setting only controls `text-align` within the text block — it cannot center the block container itself. Mobile looks fine because the container fills the screen.

## Fix
Add `mx-auto` to every `max-w-*` wrapper in `BlockRenderer.tsx`. This is a one-line class addition on ~12 block components:

- `TextBlock`: `max-w-lg` → `max-w-lg mx-auto`
- `ListBlock`: `max-w-lg` → `max-w-lg mx-auto`
- `TableBlock`: `max-w-lg` → `max-w-lg mx-auto`
- `NumbersBlock`: `max-w-lg` → `max-w-lg mx-auto`
- `StatsBlock`: `max-w-md` → `max-w-md mx-auto`
- `ImageBlock`: `max-w-lg` → `max-w-lg mx-auto`
- `VideoBlock`: `max-w-lg` → `max-w-lg mx-auto`
- `TimelineBlock`: `max-w-lg` → `max-w-lg mx-auto`
- `FAQBlock`: `max-w-lg` → `max-w-lg mx-auto`
- `ColumnsBlock`: `max-w-3xl` → `max-w-3xl mx-auto`
- `CalculatorBlock`: `max-w-lg` → `max-w-lg mx-auto`
- `FormBlock`: same pattern
- `HeroBlock`: same pattern

This ensures all content is centered on desktop/tablet while mobile remains unaffected (content already fills the width).

## Files Changed
1. `src/components/BlockRenderer.tsx` — add `mx-auto` to every inner wrapper div

No database changes needed. No new files.

