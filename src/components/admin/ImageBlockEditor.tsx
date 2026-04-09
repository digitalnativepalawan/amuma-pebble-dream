import { useState, useRef } from "react";
import { useBlocks, PageBlock } from "@/contexts/BlockContext";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Upload, ImageIcon, Link } from "lucide-react";
import BlockMediaEditor, { MediaData, emptyMedia } from "./BlockMediaEditor";

interface Props { block: PageBlock; open: boolean; onClose: () => void; }

const ImageBlockEditor = ({ block, open, onClose }: Props) => {
  const { updateBlock, uploadMedia, mediaItems } = useBlocks();
  const [imageUrl, setImageUrl] = useState(block.content.image_url || "");
  const [caption, setCaption] = useState(block.content.caption || "");
  const [maxHeight, setMaxHeight] = useState(block.content.max_height || 128);
  const [showLibrary, setShowLibrary] = useState(false);
  const [showUrlInput, setShowUrlInput] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [media, setMedia] = useState<MediaData>(block.content.media || { ...emptyMedia });
  const fileRef = useRef<HTMLInputElement>(null);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const item = await uploadMedia(file);
    if (item) setImageUrl(item.url);
    setUploading(false);
  };

  const save = async () => {
    await updateBlock(block.id, { image_url: imageUrl, alt_text: caption, caption, alignment: "center", max_height: maxHeight, media });
    onClose();
  };

  const sizeLabels = ["Tiny", "Small", "Medium", "Large", "Full"];
  const sizeIndex = Math.round((maxHeight - 40) / (600 - 40) * 4);

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="sm:max-w-lg max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-lg">📷 Edit Photo</DialogTitle>
          <p className="font-body text-sm text-muted-foreground">Upload a photo or paste an image link</p>
        </DialogHeader>

        <div className="space-y-5 pt-2">
          {/* Preview */}
          {imageUrl && (
            <div className="rounded-xl overflow-hidden bg-muted flex items-center justify-center p-3">
              <img src={imageUrl} alt={caption} style={{ maxHeight: `${maxHeight}px` }} className="w-auto object-contain rounded" />
            </div>
          )}

          {/* Upload options */}
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => fileRef.current?.click()}
              disabled={uploading}
              className="flex flex-col items-center gap-2 p-4 border-2 border-dashed border-primary/30 rounded-xl hover:border-primary hover:bg-primary/5 transition-all"
            >
              <Upload className="w-6 h-6 text-primary" />
              <span className="font-body text-sm font-medium text-foreground">{uploading ? "Uploading..." : "Upload Photo"}</span>
              <span className="font-body text-xs text-muted-foreground">From your device</span>
            </button>
            <button
              onClick={() => setShowLibrary(!showLibrary)}
              className="flex flex-col items-center gap-2 p-4 border-2 border-dashed border-border rounded-xl hover:border-primary hover:bg-primary/5 transition-all"
            >
              <ImageIcon className="w-6 h-6 text-muted-foreground" />
              <span className="font-body text-sm font-medium text-foreground">Photo Library</span>
              <span className="font-body text-xs text-muted-foreground">Previously uploaded</span>
            </button>
          </div>

          <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleUpload} />

          {/* Media library */}
          {showLibrary && (
            <div className="space-y-2">
              <p className="font-body text-xs text-muted-foreground">Tap a photo to use it</p>
              <div className="grid grid-cols-4 gap-2 max-h-48 overflow-y-auto border border-border rounded-xl p-2">
                {mediaItems.filter(m => m.media_type === "image").length === 0 && (
                  <p className="col-span-4 font-body text-xs text-muted-foreground text-center py-4">No photos uploaded yet</p>
                )}
                {mediaItems.filter(m => m.media_type === "image").map(m => (
                  <button key={m.id} onClick={() => { setImageUrl(m.url); setShowLibrary(false); }}
                    className="relative aspect-square overflow-hidden rounded-lg border border-border hover:ring-2 hover:ring-primary transition-all">
                    <img src={m.url} alt={m.alt_text || ""} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* URL option */}
          <button onClick={() => setShowUrlInput(!showUrlInput)} className="flex items-center gap-2 font-body text-sm text-primary hover:underline">
            <Link className="w-3.5 h-3.5" />
            {showUrlInput ? "Hide" : "Or paste an image link from the web"}
          </button>
          {showUrlInput && (
            <Input value={imageUrl} onChange={e => setImageUrl(e.target.value)} placeholder="https://example.com/photo.jpg" />
          )}

          {/* Caption */}
          <div className="space-y-1.5">
            <label className="font-body text-sm font-medium text-foreground">Caption <span className="text-muted-foreground font-normal">(optional)</span></label>
            <Input value={caption} onChange={e => setCaption(e.target.value)} placeholder="e.g. Sunset view from the beach" />
          </div>

          {/* Size */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <label className="font-body text-sm font-medium text-foreground">Photo size</label>
              <span className="font-body text-sm text-primary font-medium">{sizeLabels[Math.max(0, Math.min(4, sizeIndex))]}</span>
            </div>
            <input type="range" min={40} max={600} step={40} value={maxHeight}
              onChange={e => setMaxHeight(Number(e.target.value))}
              className="w-full accent-primary" />
            <div className="flex justify-between">
              <span className="font-body text-xs text-muted-foreground">Tiny</span>
              <span className="font-body text-xs text-muted-foreground">Full size</span>
            </div>
          </div>

          <BlockMediaEditor media={media} onChange={setMedia} blockType="image" />

          <div className="flex gap-2 pt-2">
            <Button variant="outline" onClick={onClose} className="flex-1">Cancel</Button>
            <Button onClick={save} className="flex-1">Save Photo</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageBlockEditor;
