

# Switch Homepage to Block-Based CMS

## Problem
The homepage still renders 13 hardcoded section components. The block CMS exists at `/admin` but doesn't feed the public site. All investment tiers, accommodation tables, roadmap timeline, team bio, FAQ answers, revenue model lists, etc. are hardcoded strings — impossible for James to edit.

## Solution
1. Seed all current content into `page_blocks` as a database migration
2. Add missing block types so every content pattern is covered
3. Replace `Index.tsx` with `BlockRenderer`
4. Keep the application form (JoinSection) as a special block type

## New Block Types Needed

The current BlockRenderer only supports: `hero`, `text`, `table`, `numbers`, `stats`, `image`, `video`.

Missing patterns from the hardcoded sections:
- **`list`** — bullet lists like "— Accommodation", "— Dining", etc. (used ~12 times)
- **`timeline`** — roadmap entries with year/title/detail
- **`faq`** — accordion Q&A pairs
- **`divider`** — section dividers
- **`form`** — the application form (renders JoinSection logic)
- **`columns`** — two-column layout (Future Destinations, Member Portal features)

## Implementation

### 1. Database seed migration
Insert ~45 blocks for `page_slug = 'home'` covering every section in order:
- Hero text block
- Vision heading + body + closing
- Proof heading + body
- Pebbles heading + body + list + note
- Membership Stakes heading + body + list
- Investment Tiers heading + table
- Accommodation Usage heading + suites table + villas table
- Revenue Model heading + body + distribution list + additional revenues list
- Projected Returns heading + list + ROI number
- Future Destinations heading + two-column lists
- Flywheel heading + body
- Build/Palawan heading + body
- Long Beach heading + body + accommodation list + share allocation table
- Roadmap heading + timeline entries
- Team heading + bio + stats
- Calculator (keep as special component or convert to numbers)
- Member Portal heading + two-column lists
- Join heading + offer list + benefits list + form
- FAQ heading + faq entries

### 2. New block type components in `BlockRenderer.tsx`

**ListBlock** — renders `content.items` as `— Item` bullets with optional `content.heading`
**TimelineBlock** — renders `content.entries` as vertical timeline with year/title/detail
**FAQBlock** — renders `content.faqs` as accordion
**DividerBlock** — renders a horizontal rule
**FormBlock** — renders the existing application form
**ColumnsBlock** — renders 2-column layout with heading + items per column

### 3. New admin editors

- `ListBlockEditor` — add/remove/reorder list items + optional heading
- `TimelineBlockEditor` — add/remove timeline entries (year, title, detail)
- `FAQBlockEditor` — add/remove Q&A pairs
- `ColumnsBlockEditor` — edit column headings + items

### 4. Update `AddBlockModal.tsx`
Add the new block types to the type selector.

### 5. Update `AdminDashboard.tsx`
Wire new editors into the `editorForBlock` switch.

### 6. Update `BlockList.tsx`
Add preview logic for new block types.

### 7. Replace `Index.tsx`
Replace all hardcoded section imports with:
```tsx
<Navbar />
<BlockRenderer pageSlug="home" />
<Footer />
<AdminBar />
```

### 8. Update `BlockRenderer.tsx`
- Add all new block components
- Match existing typography/spacing exactly (copy classes from current sections)
- Keep `section-padding`, `container px-6`, `max-w-lg` patterns
- Timeline: vertical line + dots + year/title/detail
- FAQ: accordion with existing styling
- Form: embed the full application form logic

## Files to Create
1. `src/components/admin/ListBlockEditor.tsx`
2. `src/components/admin/TimelineBlockEditor.tsx`
3. `src/components/admin/FAQBlockEditor.tsx`
4. `src/components/admin/ColumnsBlockEditor.tsx`

## Files to Edit
1. `src/components/BlockRenderer.tsx` — add 6 new block components
2. `src/components/admin/AddBlockModal.tsx` — add new types
3. `src/components/admin/BlockList.tsx` — add preview for new types
4. `src/pages/AdminDashboard.tsx` — wire new editors
5. `src/pages/Index.tsx` — replace with BlockRenderer
6. Database migration — seed ~45 blocks with all current content

## What Stays the Same
- Navbar, Footer (not block-managed)
- All CSS/typography/design tokens
- Application form submission logic
- Image compression pipeline
- Admin passkey auth

## Result
After this, James can:
- Edit every heading, paragraph, list item, table cell, timeline entry, FAQ answer
- Add new text/list/table blocks anywhere between existing content
- Reorder all content blocks
- Add his biography text and heading in the Team section
- Change roadmap timeframes
- Update all investment numbers, accommodation rates, revenue splits

