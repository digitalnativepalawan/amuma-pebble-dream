import { useState } from "react";
import { useBlocks, PageBlock } from "@/contexts/BlockContext";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import BlockMediaEditor, { MediaData, emptyMedia } from "./BlockMediaEditor";

interface Props { block: PageBlock; open: boolean; onClose: () => void; }

const TextBlockEditor = ({ block, open, onClose }: Props) => {
  const { updateBlock } = useBlocks();
  const [heading, setHeading] = useState(block.content.heading || "");
  const [subheading, setSubheading] = useState(block.content.subheading || "");
  const [body, setBody] = useState(block.content.body || "");
  const [alignment, setAlignment] = useState(block.content.alignment || "left");
  const [media, setMedia] = useState<MediaData>(block.content.media || { ...emptyMedia });

  const save = async () => {
    await updateBlock(block.id, { heading, subheading, body, alignment, media });
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="sm:max-w-lg max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-lg">✍️ Edit Text</DialogTitle>
          <p className="font-body text-sm text-muted-foreground">Write your heading, subtitle, and main text</p>
        </DialogHeader>

        <div className="space-y-4 pt-2">
          {/* Heading */}
          <div className="space-y-1.5">
            <label className="font-body text-sm font-medium text-foreground">
              Title <span className="text-muted-foreground font-normal">(large heading)</span>
            </label>
            <Input value={heading} onChange={e => setHeading(e.target.value)} placeholder="e.g. About Our Resort" />
          </div>

          {/* Subheading */}
          <div className="space-y-1.5">
            <label className="font-body text-sm font-medium text-foreground">
              Subtitle <span className="text-muted-foreground font-normal">(smaller line below title)</span>
            </label>
            <Input value={subheading} onChange={e => setSubheading(e.target.value)} placeholder="e.g. A peaceful escape in Palawan" />
          </div>

          {/* Body */}
          <div className="space-y-1.5">
            <label className="font-body text-sm font-medium text-foreground">
              Main Text <span className="text-muted-foreground font-normal">(your paragraphs)</span>
            </label>
            <Textarea
              value={body}
              onChange={e => setBody(e.target.value)}
              rows={6}
              placeholder="Write your text here. Press Enter twice to start a new paragraph."
              className="font-body text-sm"
            />
            <p className="font-body text-xs text-muted-foreground">Tip: Press Enter twice for a new paragraph</p>
          </div>

          {/* Alignment */}
          <div className="space-y-1.5">
            <label className="font-body text-sm font-medium text-foreground">Text position</label>
            <div className="flex gap-2">
              {[
                { value: "left", label: "⬅ Left" },
                { value: "center", label: "↔ Center" },
                { value: "right", label: "➡ Right" },
              ].map(a => (
                <button key={a.value} onClick={() => setAlignment(a.value)}
                  className={`flex-1 py-2 rounded-lg font-body text-sm transition-colors border ${
                    alignment === a.value
                      ? "bg-primary text-white border-primary"
                      : "bg-background border-border text-muted-foreground hover:text-foreground"
                  }`}>
                  {a.label}
                </button>
              ))}
            </div>
          </div>

          <BlockMediaEditor media={media} onChange={setMedia} blockType="text" />

          <div className="flex gap-2 pt-2">
            <Button variant="outline" onClick={onClose} className="flex-1">Cancel</Button>
            <Button onClick={save} className="flex-1">Save Text</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TextBlockEditor;
