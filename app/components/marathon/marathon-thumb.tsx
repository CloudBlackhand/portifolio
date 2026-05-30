type MarathonThumbProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

/** SVG e previews do tablet usam img nativo — next/image quebra layout nos cards. */
export function MarathonThumb({ src, alt, className, priority = false }: MarathonThumbProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={className}
      width={1200}
      height={630}
      decoding="async"
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
    />
  );
}
