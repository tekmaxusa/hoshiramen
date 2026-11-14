import { ExternalLink } from 'lucide-react';
import type { MenuItem } from '../data/menu';
import { formatCurrency } from '../utils/cartLogic';
import { RESTAURANT_INFO } from '../data/restaurant';
import { DishImage } from './DishImage';

interface MenuCardProps {
  item: MenuItem;
}

export function MenuCard({ item }: MenuCardProps) {
  return (
    <article className="group flex flex-col bg-white border border-[#E4DDD2] rounded-lg overflow-hidden transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className="aspect-[4/3] w-full overflow-hidden bg-[#EFE9DF]">
        <DishImage
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex-1 flex flex-col p-5">
        <div className="flex items-center gap-2 text-xs font-medium text-[#6B625A] mb-1.5">
          <span>{item.category}</span>
          {item.code && (
            <>
              <span aria-hidden="true">·</span>
              <span className="tabular-nums">{item.code}</span>
            </>
          )}
          {item.dietaryNote && (
            <>
              <span aria-hidden="true">·</span>
              <span className="text-[#961F1C]">{item.dietaryNote}</span>
            </>
          )}
        </div>

        <div className="flex items-baseline justify-between gap-3 mb-2">
          <h3 className="font-display text-xl font-semibold text-[#161412] leading-snug">
            {item.name}
          </h3>
          <span className="text-[15px] font-semibold text-[#161412] tabular-nums shrink-0">
            {formatCurrency(item.price)}
          </span>
        </div>

        <p className="text-sm leading-relaxed text-[#5C554E] flex-1 mb-5">
          {item.description}
        </p>

        <a
          href={RESTAURANT_INFO.orderingUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Order ${item.name} online`}
          className="w-full min-h-[42px] px-4 py-2 rounded-md text-sm font-medium inline-flex items-center justify-center gap-2 transition-colors duration-150 bg-[#F2ECE3] text-[#161412] hover:bg-[#B92B27] hover:text-[#FAF7F2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B92B27]"
        >
          <span>Order Online</span>
          <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
