

# Add "Investment Technology" Dedicated Page

## Summary
Create a new `/technology` page containing all 10 sections of Pebbles/blockchain content, styled in the existing Quiet Luxury design system. Add a link from the main landing page to navigate there.

## Files to create/modify

### 1. `src/pages/Technology.tsx` (NEW)
The main page component containing all 10 sections as scroll-linked content blocks:
- Shared Navbar at top, Footer at bottom
- Each of the 10 sections as its own `<section>` with `useScrollReveal`
- Tables rendered with the existing `Table` UI components, styled borderless to match design system
- Code/pseudocode blocks as styled `<pre>` with monospace, subtle background
- FAQ section uses existing `Accordion` component
- Smart contract steps as numbered lists with em-dash styling
- Comparison tables as clean HTML tables with thin dividers
- Flow diagram as styled text steps with arrows (no emoji)
- Disclaimer at bottom in muted text
- No emoji icons anywhere — use thin Lucide icons (strokeWidth 1.5) sparingly or text only

### 2. `src/App.tsx`
- Add route: `<Route path="/technology" element={<Technology />} />`

### 3. `src/components/Navbar.tsx`
- Add "Technology" link to the nav links array
- Make it navigate to `/technology` (use react-router `Link` or `useNavigate`) instead of hash scroll

### 4. Main page link
- Add a CTA or text link in an existing section (e.g., ModelSection or BuildSection) pointing to `/technology` — "Learn how Pebbles work →"

## Design approach
- Same Quiet Luxury styling: Playfair headings, Inter body, no cards, thin dividers, generous spacing
- Tables: minimal borders, header row in uppercase Inter text-xs tracking-wide
- Whitelist tiers table and comparison tables follow same pattern
- Steps rendered as numbered items with Playfair numbers + Inter descriptions
- Total ~10 distinct sections, each separated by `.divider` + generous `py-20` spacing

