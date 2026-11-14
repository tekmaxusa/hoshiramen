import { ExternalLink } from 'lucide-react';
import { MENU_ITEMS } from '../data/menu';
import { RESTAURANT_INFO } from '../data/restaurant';
import { DishImage } from '../components/DishImage';
import { SeoHead } from '../components/SeoHead';

const GALLERY_ITEMS = MENU_ITEMS.filter(
  (item) =>
    item.image.includes('images/menu/') &&
    !['Drinks', 'Kids Menu'].includes(item.category)
);

export function GalleryPage() {
  return (
    <>
      <SeoHead
        title="Gallery – Hoshi Ramen Keller | Food Photos from Our Kitchen"
        description="Browse photos of Hoshi Ramen Keller dishes—ramen bowls, Japanese appetizers, rice bowls, udon, and desserts from our Keller, TX kitchen."
      />

      <section className="bg-[#161412] text-[#FAF7F2] py-14 sm:py-16 border-b border-[#2D2823]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <p className="text-xs font-semibold tracking-wider uppercase text-[#E5736E]">
              Kitchen Gallery
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight">
              Dishes Fresh from Our Keller Kitchen
            </h1>
            <p className="text-sm sm:text-base text-[#D4CCC1] leading-relaxed">
              Real photos of the ramen, appetizers, noodles, rice bowls, and desserts
              served at Hoshi Ramen Keller—the same menu available for pickup and
              delivery online.
            </p>
          </div>

          <a
            href={RESTAURANT_INFO.orderingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 min-h-[46px] rounded-md bg-[#B92B27] hover:bg-[#961F1C] text-[#FAF7F2] text-sm font-semibold transition-colors whitespace-nowrap shrink-0"
          >
            <span>Order Online</span>
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {GALLERY_ITEMS.map((item) => (
            <figure
              key={item.id}
              className="break-inside-avoid overflow-hidden rounded-lg border border-[#E4DDD2] bg-white"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-[#EFE9DF]">
                <DishImage
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption className="px-4 py-3 space-y-0.5">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-[#B92B27]">
                  {item.category}
                  {item.code ? ` · ${item.code}` : ''}
                </p>
                <p className="font-display text-lg font-semibold text-[#161412] leading-snug">
                  {item.name}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
