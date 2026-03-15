

# Admin Media Blocks: Images, Videos, and External Files

Extending the previously approved plan to support three media types in any section.

## Media Types

| Type | Source | How it renders |
|------|--------|---------------|
| **Image** | Upload to storage | `<img>` tag |
| **Video** | YouTube URL paste | Responsive `<iframe>` embed (converts watch URLs to embed format) |
| **File/Deck** | Google Drive URL paste | Embedded Google Drive viewer `<iframe>` or a styled link card |

## Database: `section_media` table

```sql
CREATE TABLE section_media (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  section_id text NOT NULL,
  slot_key text NOT NULL,
  media_type text NOT NULL DEFAULT 'image',  -- 'image', 'youtube', 'gdrive'
  image_url text,           -- for uploaded images
  external_url text,        -- for YouTube or Google Drive URLs
  sort_order integer NOT NULL DEFAULT 0,
  display_mode text NOT NULL DEFAULT 'single',
  caption text,
  created_at timestamptz DEFAULT now()
);
```

Public read/write RLS (matching existing `site_content` pattern).

## AdminMediaBlock component

One reusable component placed in every section.

**Admin mode UI** — three action buttons:
- **Add Image** → file picker, uploads to `site-images` bucket
- **Add Video** → text input for YouTube URL
- **Add File/Deck** → text input for Google Drive share URL

Each item shows a delete button and move up/down arrows. Toggle between single/gallery/carousel display modes (carousel only for images).

**Public rendering by type:**
- `image` → `<img>` (single, grid, or carousel depending on display_mode)
- `youtube` → responsive 16:9 iframe. URL converted: `youtube.com/watch?v=ID` → `youtube.com/embed/ID`
- `gdrive` → Google Drive embed iframe using `/preview` URL pattern, or a styled link card with file icon if embed fails

**Empty + non-admin** → renders nothing (zero visual impact).

## AdminContext additions

New methods:
- `loadMedia()` — fetches all `section_media` rows on init
- `uploadMediaItem(section, slot, file)` — image upload flow
- `addExternalMedia(section, slot, url, type)` — inserts YouTube/GDrive row
- `deleteMediaItem(id)` — removes row
- `updateMediaMode(section, slot, mode)` — changes display mode
- `getMedia(section, slot)` — returns cached array

## Section integration

Add `<AdminMediaBlock section="X" slotKey="after_body" />` to every section component (Hero, Vision, Proof, Model, Build, LongBeach, Technology, Roadmap, Calculator, Join, FAQ, Team). Renders nothing when empty.

## Files

1. **New migration** — `section_media` table + RLS
2. **New component** — `src/components/AdminMediaBlock.tsx`
3. **Edit** — `src/contexts/AdminContext.tsx` (media state + methods)
4. **Edit** — all 12 section components (add one `<AdminMediaBlock>` each)

No layout or styling changes. Existing `ImagePlaceholder` and `EditableField` continue working unchanged.

