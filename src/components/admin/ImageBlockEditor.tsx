import { useState, useRef } from "react";
import { useBlocks, PageBlock } from "@/contexts/BlockContext";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Upload } from "lucide-react";
import BlockMediaEditor, { MediaData, emptyMedia } from "./BlockMediaEditor";

interface Props {
  block: PageBlock;
  open: boolean;
  onClose: () => void;
}

const ImageBlockEditor = ({ block, open, onClose }: Props) => {
  const { updateBlock, uploadMedia, mediaItems } = useBlocks();
  const [imageUrl, setImageUrl] = useState(block.content.image_url || "");
  const [altText, setAltText] = useState(block.content.alt_text || "");
  const [caption, setCaption] = useState(block.content.caption || "");
  const [showLibrary, setShowLibrary] = useState(false);
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
    await updateBlock(block.id, { image_url: imageUrl, alt_text: altText, caption, alignment: "center", media });
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="sm:max-w-lg max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display">Edit Image</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 pt-2">
          {imageUrl && (
            <div className="relative w-full overflow-hidden rounded-lg" style={{ aspectRatio: "16/9" }}>
              <img src={imageUrl} alt={altText} className="absolute inset-0 w-full h-full object-cover" />
            </div>
          )}

          <div className="flex gap-2">
            <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleUpload} />
            <Button variant="outline" onClick={() => fileRef.current?.click()} disabled={uploading}>
              <Upload className="w-4 h-4 mr-1" /> {uploading ? "Uploading..." : "Upload New"}
            </Button>
            <Button variant="outline" onClick={() => setShowLibrary(!showLibrary)}>
              Media Library
            </Button>
          </div>

          {showLibrary && (
            <div className="grid grid-cols-4 gap-2 max-h-40 overflow-y-auto border border-border rounded-lg p-2">
              {mediaItems.filter((m) => m.media_type === "image").map((m) => (
                <button
                  key={m.id}
                  onClick={() => { setImageUrl(m.url); setShowLibrary(false); }}
                  className="relative aspect-square overflow-hidden rounded border border-border hover:ring-2 hover:ring-primary"
                >
                  <img src={m.url} alt={m.alt_text || ""} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          <div>
            <Label className="font-body text-xs uppercase tracking-wider">Image URL</Label>
            <Input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="https://..." />
          </div>
          <div>
            <Label className="font-body text-xs uppercase tracking-wider">Alt Text</Label>
            <Input value={altText} onChange={(e) => setAltText(e.target.value)} />
          </div>
          <div>
            <Label className="font-body text-xs uppercase tracking-wider">Caption</Label>
            <Input value={caption} onChange={(e) => setCaption(e.target.value)} />
          </div>

          <BlockMediaEditor media={media} onChange={setMedia} blockType="image" />

          <div className="flex justify-end gap-2 pt-4">
            <Button variant="outline" onClick={onClose}>Cancel</Button>
            <Button onClick={save}>Save</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageBlockEditor;
