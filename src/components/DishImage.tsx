import { useState } from 'react';
import { UtensilsCrossed } from 'lucide-react';

interface DishImageProps {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
}

export function DishImage({
  src,
  alt,
  className = 'w-full h-full object-cover',
  eager = false,
}: DishImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="w-full h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#24201C] via-[#1C1815] to-[#2E2620] text-[#FAF7F2]/80 p-4 text-center"
      >
        <UtensilsCrossed className="w-7 h-7 text-[#B92B27]" aria-hidden="true" />
        <span className="font-display text-sm tracking-wide">{alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      loading={eager ? 'eager' : 'lazy'}
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
