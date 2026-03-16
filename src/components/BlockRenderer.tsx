import { useBlocks } from "@/contexts/BlockContext";

interface BlockRendererProps {
  pageSlug: string;
}

const layoutCols: Record<string, string> = {
  "2-column": "grid-cols-1 sm:grid-cols-2",
  "3-column": "grid-cols-2 sm:grid-cols-3",
  "4-column": "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
};

const TextBlock = ({ content }: { content: any }) => (
  <section className="section-padding">
    <div className="container max-w-4xl mx-auto px-6" style={{ textAlign: content.alignment || "left" }}>
      {content.heading && (
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
          {content.heading}
        </h2>
      )}
      {content.subheading && (
        <p className="font-body text-lg text-secondary mb-6">{content.subheading}</p>
      )}
      {content.body && (
        <div className="font-body text-base text-foreground/80 leading-relaxed whitespace-pre-wrap">
          {content.body}
        </div>
      )}
    </div>
  </section>
);

const TableBlock = ({ content }: { content: any }) => {
  const table = content.table;
  if (!table) return null;
  return (
    <section className="section-padding">
      <div className="container max-w-4xl mx-auto px-6">
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                {table.headers.map((h: string, i: number) => (
                  <th key={i} className="font-body text-xs uppercase tracking-wider px-4 py-3 text-left">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.rows.map((row: string[], ri: number) => (
                <tr key={ri} className={ri % 2 === 0 ? "bg-card" : "bg-muted/30"}>
                  {row.map((cell: string, ci: number) => (
                    <td key={ci} className="font-body text-sm px-4 py-3 text-foreground">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {table.footnote && (
          <p className="font-body text-xs text-muted-foreground mt-3 italic">{table.footnote}</p>
        )}
      </div>
    </section>
  );
};

const NumbersBlock = ({ content }: { content: any }) => {
  const gridClass = layoutCols[content.layout] || layoutCols["3-column"];
  return (
    <section className="section-padding">
      <div className="container max-w-4xl mx-auto px-6">
        <div className={`grid ${gridClass} gap-6`}>
          {(content.numbers || []).map((n: any, i: number) => (
            <div key={i} className="bg-card rounded-2xl p-6 border border-border text-center">
              <p className="font-display text-2xl md:text-3xl font-bold text-primary">{n.value}</p>
              <p className="font-body text-sm font-medium text-foreground mt-2">{n.label}</p>
              {n.description && (
                <p className="font-body text-xs text-muted-foreground mt-1">{n.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StatsBlock = ({ content }: { content: any }) => (
  <section className="section-padding bg-primary text-primary-foreground">
    <div className="container max-w-4xl mx-auto px-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {(content.stats || []).map((s: any, i: number) => (
          <div key={i} className="text-center">
            <p className="font-display text-3xl md:text-4xl font-bold">{s.value}</p>
            <p className="font-body text-sm mt-1 opacity-80">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ImageBlock = ({ content }: { content: any }) => {
  if (!content.image_url) return null;
  return (
    <section className="section-padding">
      <div className="container max-w-4xl mx-auto px-6">
        <div className="relative w-full overflow-hidden rounded-lg" style={{ aspectRatio: "16/9" }}>
          <img
            src={content.image_url}
            alt={content.alt_text || ""}
            className="absolute inset-0 w-full h-full object-cover object-center"
            loading="lazy"
          />
        </div>
        {content.caption && (
          <p className="font-body text-xs text-muted-foreground mt-3 text-center italic">{content.caption}</p>
        )}
      </div>
    </section>
  );
};

const VideoBlock = ({ content }: { content: any }) => {
  if (!content.video_id) return null;
  return (
    <section className="section-padding">
      <div className="container max-w-4xl mx-auto px-6">
        <div className="relative w-full overflow-hidden rounded-lg" style={{ aspectRatio: "16/9" }}>
          <iframe
            src={`https://www.youtube.com/embed/${content.video_id}`}
            className="absolute inset-0 w-full h-full"
            allowFullScreen
            loading="lazy"
          />
        </div>
        {content.caption && (
          <p className="font-body text-xs text-muted-foreground mt-3 text-center italic">{content.caption}</p>
        )}
      </div>
    </section>
  );
};

const HeroBlock = ({ content }: { content: any }) => (
  <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
    {content.image_url && (
      <img
        src={content.image_url}
        alt={content.alt_text || ""}
        className="absolute inset-0 w-full h-full object-cover"
      />
    )}
    <div className="absolute inset-0 bg-foreground/40" />
    <div className="relative z-10 text-center px-6 max-w-3xl">
      {content.heading && (
        <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-4">
          {content.heading}
        </h1>
      )}
      {content.subheading && (
        <p className="font-body text-lg md:text-xl text-white/90">{content.subheading}</p>
      )}
    </div>
  </section>
);

const blockComponents: Record<string, React.FC<{ content: any }>> = {
  hero: HeroBlock,
  text: TextBlock,
  table: TableBlock,
  numbers: NumbersBlock,
  stats: StatsBlock,
  image: ImageBlock,
  video: VideoBlock,
};

const BlockRenderer = ({ pageSlug }: BlockRendererProps) => {
  const { getBlocksForPage, loading } = useBlocks();
  const blocks = getBlocksForPage(pageSlug);
  const visibleBlocks = blocks.filter((b) => b.is_visible);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="font-body text-sm text-muted-foreground animate-pulse">Loading...</p>
      </div>
    );
  }

  if (visibleBlocks.length === 0) return null;

  return (
    <>
      {visibleBlocks.map((block) => {
        const Component = blockComponents[block.block_type];
        if (!Component) return null;
        return <Component key={block.id} content={block.content} />;
      })}
    </>
  );
};

export default BlockRenderer;
