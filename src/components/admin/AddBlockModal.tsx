import { useState } from "react";
import { useBlocks } from "@/contexts/BlockContext";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const defaultMedia = { images: [], video_url: "", layout: "single" };

interface BlockDef {
  type: string;
  label: string;
  description: string;
  emoji: string;
  category: string;
  defaultContent: any;
}

const blockTypes: BlockDef[] = [
  {
    type: "hero", label: "Cover / Banner", emoji: "🖼️", category: "Essential",
    description: "Big photo with your name and a button. Put this first.",
    defaultContent: { heading: "", subheading: "", body: "", cta: "Contact Us", media: { ...defaultMedia } }
  },
  {
    type: "text", label: "Text Section", emoji: "✍️", category: "Essential",
    description: "A heading with paragraphs. Good for About, Story, or any description.",
    defaultContent: { heading: "", subheading: "", body: "", alignment: "left", media: { ...defaultMedia } }
  },
  {
    type: "image", label: "Photo", emoji: "📷", category: "Essential",
    description: "Add a photo or image to your page.",
    defaultContent: { image_url: "", alt_text: "", caption: "", media: { ...defaultMedia } }
  },
  {
    type: "video", label: "YouTube Video", emoji: "▶️", category: "Essential",
    description: "Embed a YouTube video. Paste the link when editing.",
    defaultContent: { video_type: "youtube", video_id: "", caption: "", media: { ...defaultMedia } }
  },
  {
    type: "list", label: "Bullet List", emoji: "📋", category: "Essential",
    description: "A list of items — services, amenities, or features.",
    defaultContent: { heading: "", items: [""], footnote: "", media: { ...defaultMedia } }
  },
  {
    type: "table", label: "Pricing Table", emoji: "💰", category: "Essential",
    description: "Rows and columns — perfect for rates, menu, or packages.",
    defaultContent: { heading: "", table: { headers: ["Item", "Price"], rows: [["", ""]], footnote: "" }, media: { ...defaultMedia } }
  },
  {
    type: "faq", label: "Q&A / FAQ", emoji: "❓", category: "Essential",
    description: "Common questions and answers that expand when tapped.",
    defaultContent: { heading: "Frequently Asked Questions", faqs: [{ q: "", a: "" }], media: { ...defaultMedia } }
  },
  {
    type: "columns", label: "Two Columns", emoji: "📰", category: "More",
    description: "Two side-by-side lists. Good for comparing or categorizing.",
    defaultContent: { heading: "", columns: [{ heading: "Column 1", items: [] }, { heading: "Column 2", items: [] }], media: { ...defaultMedia } }
  },
  {
    type: "stats", label: "Key Numbers", emoji: "📊", category: "More",
    description: "Highlight important numbers like years open or happy guests.",
    defaultContent: { stats: [{ value: "", label: "" }], media: { ...defaultMedia } }
  },
  {
    type: "numbers", label: "Number Cards", emoji: "🔢", category: "More",
    description: "Bold number cards in a grid. Great for achievements.",
    defaultContent: { numbers: [{ label: "", value: "", description: "" }], layout: "3-column", media: { ...defaultMedia } }
  },
  {
    type: "timeline", label: "Timeline", emoji: "📅", category: "More",
    description: "Events in order by year. Good for your story or milestones.",
    defaultContent: { heading: "", entries: [{ year: "", title: "", detail: "" }], media: { ...defaultMedia } }
  },
  {
    type: "form", label: "Contact Form", emoji: "📬", category: "More",
    description: "A form visitors can fill out to get in touch.",
    defaultContent: {}
  },
  {
    type: "divider", label: "Separator Line", emoji: "➖", category: "More",
    description: "A thin line to separate sections.",
    defaultContent: {}
  },
];

const essential = blockTypes.filter(b => b.category === "Essential");
const more = blockTypes.filter(b => b.category === "More");

interface AddBlockModalProps { open: boolean; onClose: () => void; pageSlug: string; }

const AddBlockModal = ({ open, onClose, pageSlug }: AddBlockModalProps) => {
  const { createBlock } = useBlocks();
  const [showMore, setShowMore] = useState(false);

  const handleAdd = async (type: string, content: any) => {
    await createBlock(pageSlug, type, content);
    onClose();
    setShowMore(false);
  };

  const BlockButton = ({ bt }: { bt: BlockDef }) => (
    <button
      onClick={() => handleAdd(bt.type, bt.defaultContent)}
      className="flex items-start gap-3 p-4 border border-border rounded-xl hover:bg-muted hover:border-primary/40 transition-all text-left w-full"
    >
      <span className="text-2xl shrink-0 mt-0.5">{bt.emoji}</span>
      <div className="min-w-0">
        <p className="font-display text-sm font-semibold text-foreground">{bt.label}</p>
        <p className="font-body text-xs text-muted-foreground mt-0.5 leading-relaxed">{bt.description}</p>
      </div>
    </button>
  );

  return (
    <Dialog open={open} onOpenChange={(o) => { if (!o) { onClose(); setShowMore(false); } }}>
      <DialogContent className="sm:max-w-lg max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-lg">What do you want to add?</DialogTitle>
          <p className="font-body text-sm text-muted-foreground">Pick a section to add to your page</p>
        </DialogHeader>
        <div className="space-y-2 pt-2">
          {essential.map(bt => <BlockButton key={bt.type} bt={bt} />)}
        </div>
        {!showMore ? (
          <button onClick={() => setShowMore(true)}
            className="w-full text-center font-body text-sm text-primary hover:underline py-2 mt-1">
            Show more options →
          </button>
        ) : (
          <div className="space-y-2 mt-2 pt-4 border-t border-border">
            <p className="font-body text-xs uppercase tracking-widest text-muted-foreground px-1">More options</p>
            {more.map(bt => <BlockButton key={bt.type} bt={bt} />)}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AddBlockModal;
