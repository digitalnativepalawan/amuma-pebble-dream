import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useBlocks, PageBlock } from "@/contexts/BlockContext";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LogOut, Plus } from "lucide-react";
import AdminLogin from "@/components/admin/AdminLogin";
import BlockList from "@/components/admin/BlockList";
import AddBlockModal from "@/components/admin/AddBlockModal";
import TextBlockEditor from "@/components/admin/TextBlockEditor";
import TableBlockEditor from "@/components/admin/TableBlockEditor";
import NumbersBlockEditor from "@/components/admin/NumbersBlockEditor";
import StatsBlockEditor from "@/components/admin/StatsBlockEditor";
import ImageBlockEditor from "@/components/admin/ImageBlockEditor";
import VideoBlockEditor from "@/components/admin/VideoBlockEditor";
import MediaLibrary from "@/components/admin/MediaLibrary";
import SiteSettings from "@/components/admin/SiteSettings";

const DEFAULT_PAGES = ["home", "investment", "palawan", "pebbles", "team", "faq"];

const AdminDashboard = () => {
  const { user, loading: authLoading, signOut } = useAuth();
  const { pages, loading: blocksLoading, createBlock } = useBlocks();
  const [selectedPage, setSelectedPage] = useState("home");
  const [editingBlock, setEditingBlock] = useState<PageBlock | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newPageName, setNewPageName] = useState("");
  const [showNewPage, setShowNewPage] = useState(false);

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="font-body text-sm text-muted-foreground animate-pulse">Loading...</p>
      </div>
    );
  }

  if (!user) return <AdminLogin />;

  const allPages = [...new Set([...DEFAULT_PAGES, ...pages])];

  const handleAddPage = async () => {
    if (!newPageName.trim()) return;
    const slug = newPageName.toLowerCase().replace(/\s+/g, "-");
    // Create a default text block for the new page
    await createBlock(slug, "text", { heading: newPageName, body: "" });
    setSelectedPage(slug);
    setNewPageName("");
    setShowNewPage(false);
  };

  const editorForBlock = (block: PageBlock) => {
    const props = { block, open: true, onClose: () => setEditingBlock(null) };
    switch (block.block_type) {
      case "text": case "hero": return <TextBlockEditor {...props} />;
      case "table": return <TableBlockEditor {...props} />;
      case "numbers": return <NumbersBlockEditor {...props} />;
      case "stats": return <StatsBlockEditor {...props} />;
      case "image": return <ImageBlockEditor {...props} />;
      case "video": return <VideoBlockEditor {...props} />;
      default: return <TextBlockEditor {...props} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="container max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="font-display text-2xl font-bold text-primary">AMUMA CMS</h1>
            <p className="font-body text-xs text-muted-foreground">{user.email}</p>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/" className="font-body text-sm text-primary hover:underline">
              ← View Site
            </Link>
            <Button variant="outline" size="sm" onClick={signOut}>
              <LogOut className="w-4 h-4 mr-1" /> Sign Out
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container max-w-6xl mx-auto px-6 py-8">
        <Tabs defaultValue="pages">
          <TabsList className="mb-6">
            <TabsTrigger value="pages">Pages</TabsTrigger>
            <TabsTrigger value="media">Media Library</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="pages">
            <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8">
              {/* Page Sidebar */}
              <div className="space-y-2">
                <p className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground mb-3">Pages</p>
                {allPages.map((page) => (
                  <button
                    key={page}
                    onClick={() => setSelectedPage(page)}
                    className={`w-full text-left px-3 py-2 rounded font-body text-sm capitalize transition-colors ${
                      selectedPage === page
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted text-foreground"
                    }`}
                  >
                    {page}
                  </button>
                ))}

                {showNewPage ? (
                  <div className="flex gap-1 mt-2">
                    <Input
                      value={newPageName}
                      onChange={(e) => setNewPageName(e.target.value)}
                      placeholder="Page name"
                      className="h-8 text-sm"
                      onKeyDown={(e) => e.key === "Enter" && handleAddPage()}
                    />
                    <Button size="sm" onClick={handleAddPage} className="h-8">Add</Button>
                  </div>
                ) : (
                  <button
                    onClick={() => setShowNewPage(true)}
                    className="w-full text-left px-3 py-2 rounded font-body text-sm text-primary hover:bg-muted flex items-center gap-1"
                  >
                    <Plus className="w-3 h-3" /> Add Page
                  </button>
                )}
              </div>

              {/* Block List */}
              <div>
                {blocksLoading ? (
                  <p className="font-body text-sm text-muted-foreground animate-pulse">Loading blocks...</p>
                ) : (
                  <BlockList
                    pageSlug={selectedPage}
                    onEdit={setEditingBlock}
                    onAdd={() => setShowAddModal(true)}
                  />
                )}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="media">
            <MediaLibrary />
          </TabsContent>

          <TabsContent value="settings">
            <SiteSettings />
          </TabsContent>
        </Tabs>
      </div>

      {/* Modals */}
      {editingBlock && editorForBlock(editingBlock)}
      <AddBlockModal open={showAddModal} onClose={() => setShowAddModal(false)} pageSlug={selectedPage} />
    </div>
  );
};

export default AdminDashboard;
