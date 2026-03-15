

# Lock Media Containers + Image Optimization

## Changes

### 1. `src/components/AdminMediaBlock.tsx` — Major rewrite

**New props:**
```typescript
interface AdminMediaBlockProps {
  section: string;
  slotKey: string;
  className?: string;
  aspectRatio?: string;   // "16/9", "3/2", "1/1" — default "16/9"
  maxItems?: number;       // default 4
}
```

**Container enforcement (public view):**
- All images wrapped in `<div className="relative w-full overflow-hidden rounded-lg" style={{ aspectRatio }}>` with `<img className="absolute inset-0 w-full h-full object-cover object-center">`
- YouTube: already 16:9 — add `overflow-hidden`
- Google Drive: replace inline iframe with a **preview card** (file icon + filename + "View Presentation" button opening new tab). No more inline iframes that break mobile.
- Gallery grid: each cell gets the same aspect-ratio container
- Carousel: each item gets the same container

**maxItems enforcement (admin view):**
- When `items.length >= maxItems`, hide the "Add Image / Add Video / Add File" buttons

### 2. `src/contexts/AdminContext.tsx` — Image optimization

Add a `compressImage()` helper that uses Canvas API before upload:
- Resize to max 1200px wide (covers all mobile/tablet/desktop needs)
- Convert to JPEG at 0.8 quality
- This runs client-side before the storage upload in both `uploadImage` and `uploadMediaItem`

### 3. `src/pages/Index.tsx` — Overflow guard

Add `overflow-x-hidden` to root div.

### 4. All 13 section components — Pass props

Update each `<AdminMediaBlock>` with section-appropriate props:
- `HeroSection`: `aspectRatio="16/9" maxItems={1}`
- `ProofSection`: `aspectRatio="3/2" maxItems={8}`
- `TeamSection`: `aspectRatio="1/1" maxItems={4}`
- All others: `aspectRatio="16/9" maxItems={4}`

### 5. `mem://removals.md` — Record constraint

Save the "no horizontal scrolling ever" and "media containers are fixed geometry" rules.

## Files to edit
1. `src/components/AdminMediaBlock.tsx`
2. `src/contexts/AdminContext.tsx`
3. `src/pages/Index.tsx`
4. 13 section components (prop additions only)
5. `mem://removals.md`

