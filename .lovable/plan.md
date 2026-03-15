

# Fix ImagePlaceholder Delete + Ensure Responsive Media

Two issues to address:

## 1. Add Delete Button to ImagePlaceholder

The `ImagePlaceholder` component (used in Hero, Vision, Proof, Model, Build, LongBeach sections) only shows "Replace Image" when an image exists. It needs a **Delete** button so admins can remove uploaded images.

**Changes:**
- **`src/contexts/AdminContext.tsx`**: Add a `deleteImage(section, key)` method that sets `image_url` to `null` in `site_content` and updates local state. Expose it in the context type.
- **`src/components/ImagePlaceholder.tsx`**: Import `Trash2` from lucide-react. When `isAdminMode && imageUrl`, show a delete button (small red trash icon in the corner) alongside the existing replace overlay. Wire it to `deleteImage`.

## 2. Ensure All Media is Responsive (Mobile-First)

Review and fix the `AdminMediaBlock` and `MediaRenderer` to guarantee uniform rendering across mobile, tablet, and desktop.

**Changes in `src/components/AdminMediaBlock.tsx`:**
- **YouTube iframes**: Already using `padding-bottom: 56.25%` (16:9 ratio) — this is responsive. No change needed.
- **Google Drive iframes**: Already using `padding-bottom: 75%` — responsive. No change needed.
- **Images**: Already `w-full h-auto object-cover` — responsive. No change needed.
- **Gallery grid**: Currently `grid-cols-2 sm:grid-cols-3`. Good for mobile-first. No change needed.
- **Carousel arrows**: Currently `-left-4` / `-right-4` which may overflow on small screens. Change to position them inside the carousel on mobile: use `left-2 right-2` with semi-transparent background so they're visible and tappable on all devices.
- **Admin controls (URL inputs)**: The `flex gap-2` layout for video/drive URL inputs can break on narrow screens. Change to `flex flex-col sm:flex-row` so inputs stack vertically on mobile.

**Summary**: The media rendering is already responsive. Minor fixes to carousel arrow positioning and admin input layout on mobile. The main actionable fix is adding the delete button to `ImagePlaceholder`.

## Files to Edit
1. `src/contexts/AdminContext.tsx` — add `deleteImage` method
2. `src/components/ImagePlaceholder.tsx` — add delete button
3. `src/components/AdminMediaBlock.tsx` — minor mobile tweaks for carousel arrows and URL input layout

