import { useBlocks, PageBlock } from "@/contexts/BlockContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronUp, ChevronDown, Eye, EyeOff, Pencil, Trash2 } from "lucide-react";

interface BlockListProps {
  pageSlug: string;
  onEdit: (block: PageBlock) => void;
  onAdd: () => void;
}

const typeColors: Record<string, string> = {
  hero: "bg-primary text-primary-foreground",
  text: "bg-secondary text-secondary-foreground",
  table: "bg-accent text-accent-foreground",
  numbers: "bg-muted text-foreground",
  stats: "bg-muted text-foreground",
  image: "bg-primary/20 text-primary",
  video: "bg-destructive/20 text-destructive",
};

const getPreview = (block: PageBlock): string => {
  const c = block.content;
  if (c?.heading) return c.heading;
  if (c?.body) return c.body.slice(0, 80) + "...";
  if (c?.table?.headers) return `Table: ${c.table.headers.join(", ")}`;
  if (c?.numbers) return `${c.numbers.length} number cards`;
  if (c?.stats) return `${c.stats.length} stats`;
  if (c?.image_url) return c.caption || "Image block";
  if (c?.video_id) return c.caption || "Video block";
  return "Empty block";
};

const BlockList = ({ pageSlug, onEdit, onAdd }: BlockListProps) => {
  const { getBlocksForPage, deleteBlock, reorderBlock, toggleBlockVisibility } = useBlocks();
  const pageBlocks = getBlocksForPage(pageSlug);

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-display text-xl font-bold text-foreground capitalize">
          {pageSlug} — Blocks
        </h2>
        <Badge variant="secondary">{pageBlocks.length} blocks</Badge>
      </div>

      {pageBlocks.length === 0 && (
        <p className="font-body text-sm text-muted-foreground py-8 text-center">
          No blocks yet. Add your first block below.
        </p>
      )}

      {pageBlocks.map((block, idx) => (
        <div
          key={block.id}
          className={`border border-border rounded-lg p-4 bg-card transition-opacity ${
            !block.is_visible ? "opacity-50" : ""
          }`}
        >
          <div className="flex items-start gap-3">
            <div className="flex flex-col gap-1">
              <button
                onClick={() => reorderBlock(block.id, -1)}
                disabled={idx === 0}
                className="p-1 hover:bg-muted rounded disabled:opacity-30"
              >
                <ChevronUp className="w-4 h-4" />
              </button>
              <button
                onClick={() => reorderBlock(block.id, 1)}
                disabled={idx === pageBlocks.length - 1}
                className="p-1 hover:bg-muted rounded disabled:opacity-30"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className={`text-xs px-2 py-0.5 rounded-full font-body uppercase tracking-wider ${typeColors[block.block_type] || "bg-muted text-foreground"}`}>
                  {block.block_type}
                </span>
              </div>
              <p className="font-body text-sm text-foreground truncate">
                {getPreview(block)}
              </p>
            </div>

            <div className="flex items-center gap-1">
              <button onClick={() => toggleBlockVisibility(block.id)} className="p-2 hover:bg-muted rounded">
                {block.is_visible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
              </button>
              <button onClick={() => onEdit(block)} className="p-2 hover:bg-muted rounded">
                <Pencil className="w-4 h-4" />
              </button>
              <button
                onClick={() => { if (confirm("Delete this block?")) deleteBlock(block.id); }}
                className="p-2 hover:bg-destructive/10 rounded text-destructive"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      ))}

      <Button onClick={onAdd} variant="outline" className="w-full mt-4">
        + Add New Block
      </Button>
    </div>
  );
};

export default BlockList;
