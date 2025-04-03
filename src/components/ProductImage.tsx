
import { FallbackImage } from "@/components/ui/fallback-image";

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function ProductImage({ src, alt, className }: ProductImageProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <FallbackImage
        src={src}
        alt={alt}
        className="object-cover w-full h-full"
      />
    </div>
  );
}
