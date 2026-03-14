

# Add "THE MEMBER PORTAL" Section

## What to build
A new `MemberPortalSection.tsx` component placed after Calculator and before Roadmap, following the existing "Quiet Luxury" design patterns.

## Implementation

### 1. Create `src/components/MemberPortalSection.tsx`
- Use `useScrollReveal` hook (same pattern as other sections)
- Section heading: "THE MEMBER PORTAL" — Playfair Display, uppercase, tracking-wide, Deep Teal
- Subheading + description paragraph in Inter
- 2-column grid (`md:grid-cols-2`, stacked on mobile) with thin vertical divider via border
- Left column: "Booking & Lifestyle" label + 4 features with em-dash prefix
- Right column: "Finance & Community" label + 7 features with em-dash prefix
- Bottom note: "Keeping investors in the loop. Always." in text-sm, muted
- No cards, no backgrounds, no icons — spacing only, matching existing section patterns

### 2. Update `src/pages/Index.tsx`
- Import `MemberPortalSection`
- Place it between `<CalculatorSection />` and `<RoadmapSection />`

