

# AMUMA "Quiet Luxury" Complete Redesign

## Summary
Strip every component down to a minimal, spacious, editorial aesthetic. Replace all card backgrounds/shadows/borders with pure spacing and thin dividers. Swap Montserrat for Inter. Update color palette to darker, moodier tones. Remove all emoji icons.

## Design System Changes

### `src/index.css`
- Replace Google Fonts import: swap Montserrat for Inter (300/400/500)
- Update CSS variables:
  - `--primary`: HSL of #0A4D4D (173 78% 17%)
  - `--secondary`: HSL of #C9A77D (30 38% 64%)
  - `--background`: HSL of #F8F6F2 (37 30% 96%)
  - `--foreground`: HSL of #1E1E1E (0 0% 12%)
  - `--muted-foreground`: HSL of #5C5C5C (0 0% 36%)
  - `--border`: HSL of #E0D9D1 (30 16% 85%)
  - `--card`: same as background (no distinct card color)
- Remove `.card-premium` class entirely (no card styling)
- Remove `.btn-primary` filled style, replace with outline-only button
- Update `.section-padding` to `py-20`
- Add utility: `.divider` — 1px border-bottom in #E0D9D1

### `tailwind.config.ts`
- Replace `body` font family: `Inter` instead of `Montserrat`
- Keep `display` as Playfair Display

## Component Rewrites (all files)

### Navbar (`Navbar.tsx`)
- Transparent background, no border, minimal. `bg-transparent` until scrolled, then `bg-background/90 backdrop-blur-lg`
- Logo: "AMUMA" Playfair uppercase, tracking-widest
- Menu icon: Lucide `Menu` with strokeWidth 1.5

### Hero (`HeroSection.tsx`)
- Remove all overlays and gradients
- Light placeholder background image area
- "AMUMA" in Playfair 6xl uppercase, Deep Teal, tracking-wide, `-tracking-[0.02em]`
- Subtitle lowercase Inter text-xl text-secondary-color (#5C5C5C)
- Tagline italic Inter
- CTA: border-only button (1.5px Deep Teal border), no bg, rounded-full, `hover:bg-primary/5`
- Left-aligned on mobile? No — hero stays centered per spec

### Vision (`VisionSection.tsx`)
- "THE VISION" uppercase, tracking-widest
- Stats: NO emoji, NO card backgrounds, NO shadows
- Just number (Playfair text-7xl Deep Teal) + label (Inter text-sm uppercase tracking-wide text-secondary)
- Thin divider line between stat pairs or grid separation by spacing only

### Proof (`ProofSection.tsx`)
- Remove carousel — static 2-column image grid with placeholder divs
- Remove 📷 emoji
- Scores: "LOCATION 9.3" format, all caps Inter, thin dividers between
- Reviews: large `"` character in Warm Sand, quote text Inter, attribution — no cards
- Metrics: stacked uppercase lines, no cards

### Model (`ModelSection.tsx`)
- Remove checkmark icons, use em-dash (—) prefix
- Remove card backgrounds and left borders — use spacing + thin dividers
- Two columns on `md:`, stacked on mobile
- Revenue flow: plain stacked text lines, no emoji

### Build (`BuildSection.tsx`)
- Remove card backgrounds
- Large number (Playfair 7xl), label below, progress bar, stats text
- Thin divider between the two entries

### Long Beach (`LongBeachSection.tsx`)
- Remove emoji icons (🏡, 🌟, 🛏️)
- No card backgrounds — unit type uppercase Playfair, rate Playfair 5xl Deep Teal, description Inter text-sm
- Thin divider lines between units
- Badge → simple text

### Calculator (`CalculatorSection.tsx`)
- Remove glassmorphism card wrapper
- Inputs: border-bottom only (1px #E0D9D1), no background, no rounded
- Remove scenario preset buttons — convert to subtle text links
- Results: 2x2 grid, numbers in Playfair, labels in Inter uppercase small, no card backgrounds

### Roadmap (`RoadmapSection.tsx`)
- Remove emoji (🇮🇹, ✅, 🔄)
- Year in Playfair 4xl Deep Teal, description Inter small — side by side layout
- Thin vertical line connecting entries
- No cards
- Land status: use "Secured" / "Scouting" text instead of emoji

### Team (`TeamSection.tsx`)
- Minimal: founder name Playfair, title Inter, quote italic
- No avatar component — just initials in a simple circle or skip entirely
- Remove advisor cards (they're all TBA placeholders)
- Stats as plain text with thin dividers

### Join (`JoinSection.tsx`)
- Form inputs: border-bottom only, no background, no rounded corners
- Submit: Deep Teal border, no background, rounded-full, hover effect
- Benefits: em-dash list, no checkmark icons
- Remove Progress bar component — use text only

### FAQ (`FAQSection.tsx`)
- Remove card backgrounds and shadows from accordion items
- Thin bottom border only
- Clean typography

### Footer (`Footer.tsx`)
- Update background to #0A4D4D
- Keep accordion legal sections
- Maintain existing structure, update colors

## Memory Update
- Update `mem://index.md` with new design system (Inter font, #0A4D4D primary, no-card design)

## Files to modify (13 total)
1. `src/index.css` — colors, fonts, utilities
2. `tailwind.config.ts` — font family
3. `src/components/Navbar.tsx`
4. `src/components/HeroSection.tsx`
5. `src/components/VisionSection.tsx`
6. `src/components/ProofSection.tsx`
7. `src/components/ModelSection.tsx`
8. `src/components/BuildSection.tsx`
9. `src/components/LongBeachSection.tsx`
10. `src/components/CalculatorSection.tsx`
11. `src/components/RoadmapSection.tsx`
12. `src/components/TeamSection.tsx`
13. `src/components/JoinSection.tsx`
14. `src/components/FAQSection.tsx`
15. `src/components/Footer.tsx`
16. `.lovable/memory/index.md`

No database changes needed. No new dependencies (Inter loaded via Google Fonts CDN).

