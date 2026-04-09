import { useState } from "react";
import { useBlocks, PageBlock } from "@/contexts/BlockContext";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Youtube } from "lucide-react";
import BlockMediaEditor, { MediaData, emptyMedia } from "./BlockMediaEditor";

interface Props { block: PageBlock; open: boolean; onClose: () => void; }

const extractYouTubeId = (url: string): string => {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : url;
};

const VideoBlockEditor = ({ block, open, onClose }: Props) => {
  const { updateBlock } = useBlocks();
  const [videoUrl, setVideoUrl] = useState(block.content.video_id || "");
  const [caption, setCaption] = useState(block.content.caption || "");
  const [media, setMedia] = useState<MediaData>(block.content.media || { ...emptyMedia });

  const save = async () => {
    const videoId = extractYouTubeId(videoUrl);
    await updateBlock(block.id, { video_type: "youtube", video_id: videoId, caption, media });
    onClose();
  };

  const previewId = extractYouTubeId(videoUrl);
  const hasValidId = previewId.length === 11;

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="sm:max-w-lg max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-lg">▶️ Add YouTube Video</DialogTitle>
          <p className="font-body text-sm text-muted-foreground">Paste the link from any YouTube video</p>
        </DialogHeader>

        <div className="space-y-5 pt-2">
          {/* How to get the link */}
          <div className="bg-muted rounded-xl p-4 space-y-1">
            <p className="font-body text-xs font-semibold text-foreground">How to get your YouTube link:</p>
            <ol className="space-y-0.5">
              {["Open the video on YouTube", "Click Share → Copy Link", "Paste it below"].map((step, i) => (
                <li key={i} className="font-body text-xs text-muted-foreground flex items-start gap-1.5">
                  <span className="font-semibold text-primary shrink-0">{i + 1}.</span> {step}
                </li>
              ))}
            </ol>
          </div>

          {/* URL input */}
          <div className="space-y-1.5">
            <label className="font-body text-sm font-medium text-foreground flex items-center gap-2">
              <Youtube className="w-4 h-4 text-red-500" /> YouTube Link
            </label>
            <Input
              value={videoUrl}
              onChange={e => setVideoUrl(e.target.value)}
              placeholder="https://youtube.com/watch?v=..."
              className="font-body"
            />
            {videoUrl && !hasValidId && (
              <p className="font-body text-xs text-destructive">That doesn't look like a valid YouTube link. Try copying it again.</p>
            )}
          </div>

          {/* Preview */}
          {hasValidId && (
            <div className="space-y-2">
              <p className="font-body text-xs text-muted-foreground">Preview:</p>
              <div className="relative w-full overflow-hidden rounded-xl" style={{ aspectRatio: "16/9" }}>
                <iframe src={`https://www.youtube.com/embed/${previewId}`}
                  className="absolute inset-0 w-full h-full" allowFullScreen />
              </div>
            </div>
          )}

          {/* Caption */}
          <div className="space-y-1.5">
            <label className="font-body text-sm font-medium text-foreground">Caption <span className="text-muted-foreground font-normal">(optional)</span></label>
            <Input value={caption} onChange={e => setCaption(e.target.value)} placeholder="e.g. Take a tour of our resort" />
          </div>

          <BlockMediaEditor media={media} onChange={setMedia} blockType="video" />

          <div className="flex gap-2 pt-2">
            <Button variant="outline" onClick={onClose} className="flex-1">Cancel</Button>
            <Button onClick={save} className="flex-1" disabled={!hasValidId}>Save Video</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoBlockEditor;
