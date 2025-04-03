
import { useState } from "react";

interface FallbackImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

export function FallbackImage({
  src,
  alt,
  fallbackSrc = "/images/product-placeholder.png",
  className,
  ...props
}: FallbackImageProps) {
  const [error, setError] = useState(false);

  return (
    <img
      src={error ? fallbackSrc : src}
      alt={alt}
      className={className}
      onError={() => {
        console.log(`Loading fallback image for: ${alt}`);
        setError(true);
      }}
      {...props}
    />
  );
}
