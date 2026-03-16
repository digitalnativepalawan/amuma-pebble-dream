import { useState } from "react";
import { useBlocks, PageBlock } from "@/contexts/BlockContext";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Plus, Trash2 } from "lucide-react";

interface NumberCard {
  label: string;
  value: string;
  description: string;
}

interface Props {
  block: PageBlock;
  open: boolean;
  onClose: () => void;
}

const NumbersBlockEditor = ({ block, open, onClose }: Props) => {
  const { updateBlock } = useBlocks();
  const [numbers, setNumbers] = useState<NumberCard[]>(
    (block.content.numbers || []).map((n: any) => ({ ...n }))
  );
  const [layout, setLayout] = useState(block.content.layout || "3-column");

  const updateCard = (idx: number, field: keyof NumberCard, val: string) => {
    setNumbers(numbers.map((n, i) => i === idx ? { ...n, [field]: val } : n));
  };

  const addCard = () => {
    setNumbers([...numbers, { label: "", value: "", description: "" }]);
  };

  const removeCard = (idx: number) => {
    setNumbers(numbers.filter((_, i) => i !== idx));
  };

  const save = async () => {
    await updateBlock(block.id, { numbers, layout });
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="sm:max-w-lg max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display">Edit Numbers</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 pt-2">
          <div>
            <Label className="font-body text-xs uppercase tracking-wider">Layout</Label>
            <div className="flex gap-2 mt-1">
              {["2-column", "3-column", "4-column"].map((l) => (
                <button
                  key={l}
                  onClick={() => setLayout(l)}
                  className={`px-3 py-1.5 rounded font-body text-sm ${
                    layout === l ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          {numbers.map((card, i) => (
            <div key={i} className="border border-border rounded-lg p-3 space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-body text-xs text-muted-foreground">Card {i + 1}</span>
                <button onClick={() => removeCard(i)} className="text-destructive hover:bg-destructive/10 p-1 rounded">
                  <Trash2 className="w-3 h-3" />
                </button>
              </div>
              <Input placeholder="Value (e.g. ₱500,000)" value={card.value} onChange={(e) => updateCard(i, "value", e.target.value)} />
              <Input placeholder="Label" value={card.label} onChange={(e) => updateCard(i, "label", e.target.value)} />
              <Input placeholder="Description" value={card.description} onChange={(e) => updateCard(i, "description", e.target.value)} />
            </div>
          ))}

          <Button variant="outline" onClick={addCard} className="w-full">
            <Plus className="w-4 h-4 mr-1" /> Add Card
          </Button>

          <div className="flex justify-end gap-2 pt-4">
            <Button variant="outline" onClick={onClose}>Cancel</Button>
            <Button onClick={save}>Save</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NumbersBlockEditor;
