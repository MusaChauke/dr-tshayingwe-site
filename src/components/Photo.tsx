/** Practice photo with WebP + JPEG sources. Files live in /public/photos. */
export default function Photo({
  name,
  alt,
  width,
  height,
  className = '',
  priority = false,
  sizes = '(min-width: 768px) 50vw, 100vw',
}: {
  name: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <picture>
      <source srcSet={`/photos/${name}.webp`} type="image/webp" sizes={sizes} />
      <img
        src={`/photos/${name}.jpg`}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        // @ts-expect-error fetchpriority is valid HTML but missing from React 18 types
        fetchpriority={priority ? 'high' : undefined}
        className={className}
      />
    </picture>
  );
}
