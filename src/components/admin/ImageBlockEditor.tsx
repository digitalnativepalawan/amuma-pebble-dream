const ImageBlock = ({ content }: { content: any }) => {
  if (!content.image_url) return null;
  const maxHeight = content.max_height || 128;
  return (
    <div className="container px-6">
      <div className="max-w-lg mx-auto">
        <img
          src={content.image_url}
          alt={content.alt_text || ""}
          style={{ maxHeight: `${maxHeight}px` }}
          className="w-auto object-contain mx-auto"
          loading="lazy"
        />
        {content.caption && <p className="font-body text-xs text-muted-foreground mt-3 text-center italic">{content.caption}</p>}
        <BlockMediaDisplay media={content.media} />
      </div>
    </div>
  );
};
