type MarathonThumbProps = {
  src: string;
  alt: string;
  className?: string;
};

/** SVG e previews do tablet usam img nativo — next/image quebra layout nos cards. */
export function MarathonThumb({ src, alt, className }: MarathonThumbProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={className}
      width={1200}
      height={630}
      decoding="async"
      loading="lazy"
    />
  );
}
