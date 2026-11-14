import { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Search, ShoppingBag, X } from 'lucide-react';
import {
  MENU_CATEGORIES,
  MENU_ITEMS,
  type MenuCategory,
} from '../data/menu';
import { filterMenuItems } from '../utils/menuFilter';
import { formatCurrency } from '../utils/cartLogic';
import { useCart } from '../context/CartContext';
import { MenuCard } from '../components/MenuCard';
import { SeoHead } from '../components/SeoHead';

const VALID_CATEGORIES = new Set<string>(MENU_CATEGORIES.map((c) => c.id));

export function MenuPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCatParam = searchParams.get('category');
  const initialCategory: MenuCategory | 'All' =
    initialCatParam && VALID_CATEGORIES.has(initialCatParam)
      ? (initialCatParam as MenuCategory)
      : 'All';

  const [selectedCategory, setSelectedCategory] = useState<MenuCategory | 'All'>(
    initialCategory
  );
  const [searchQuery, setSearchQuery] = useState('');
  const { totals, lastAddedItemName } = useCart();

  const handleCategoryChange = (cat: MenuCategory | 'All') => {
    setSelectedCategory(cat);
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams, { replace: true });
  };

  const filteredItems = useMemo(
    () => filterMenuItems(MENU_ITEMS, selectedCategory, searchQuery),
    [selectedCategory, searchQuery]
  );

  const visibleCategories = useMemo(() => {
    if (selectedCategory !== 'All') {
      return MENU_CATEGORIES.filter((c) => c.id === selectedCategory);
    }
    return MENU_CATEGORIES.filter((c) =>
      filteredItems.some((item) => item.category === c.id)
    );
  }, [selectedCategory, filteredItems]);

  return (
    <>
      <SeoHead
        title="Menu – Hoshi Ramen Keller | Ramen, Appetizers, Rice Bowls & Udon"
        description="Browse the full Hoshi Ramen Keller menu: Appetizers, Ramen, Special Noodles, Rice Bowls, Kids Menu, Desserts, and Japanese Drinks."
      />

      {/* Header Band */}
      <section className="bg-[#161412] text-[#FAF7F2] py-14 sm:py-16 border-b border-[#2D2823]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <p className="text-xs font-semibold tracking-wider uppercase text-[#E5736E]">
              Kitchen Menu
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight">
              Crafted Bowls, Shareable Starters &amp; Rice Plates
            </h1>
            <p className="text-sm sm:text-base text-[#D4CCC1] leading-relaxed">
              Explore all seven menu categories prepared fresh at Hoshi Ramen Keller.
              Add dishes to your order summary or browse by category below.
            </p>
          </div>

          {totals.itemCount > 0 && (
            <Link
              to="/order-online"
              className="inline-flex items-center gap-3 px-5 py-3 min-h-[46px] rounded-md bg-[#B92B27] hover:bg-[#961F1C] text-[#FAF7F2] text-sm font-semibold transition-colors whitespace-nowrap shrink-0"
            >
              <ShoppingBag className="w-4 h-4" aria-hidden="true" />
              <span className="tabular-nums">
                View Order ({totals.itemCount}) · {formatCurrency(totals.subtotal)}
              </span>
            </Link>
          )}
        </div>
      </section>

      {/* Filter Toolbar */}
      <section className="bg-[#FAF7F2] border-b border-[#E4DDD2]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-5 space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Category Filter Buttons */}
            <div
              role="tablist"
              aria-label="Menu categories"
              className="flex flex-wrap items-center gap-2"
            >
              <button
                type="button"
                role="tab"
                aria-selected={selectedCategory === 'All'}
                onClick={() => handleCategoryChange('All')}
                className={`px-3.5 py-2 min-h-[40px] rounded-md text-xs sm:text-sm font-medium whitespace-nowrap shrink-0 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B92B27] ${
                  selectedCategory === 'All'
                    ? 'bg-[#161412] text-[#FAF7F2]'
                    : 'bg-[#F2ECE3] text-[#3A342F] hover:bg-[#E4DDD2]'
                }`}
              >
                All ({MENU_ITEMS.length})
              </button>
              {MENU_CATEGORIES.map((cat) => {
                const count = MENU_ITEMS.filter((i) => i.category === cat.id).length;
                const active = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`px-3.5 py-2 min-h-[40px] rounded-md text-xs sm:text-sm font-medium whitespace-nowrap shrink-0 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B92B27] ${
                      active
                        ? 'bg-[#B92B27] text-[#FAF7F2]'
                        : 'bg-[#F2ECE3] text-[#3A342F] hover:bg-[#E4DDD2]'
                    }`}
                  >
                    {cat.label} ({count})
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-72 shrink-0">
              <label htmlFor="menu-search" className="sr-only">
                Search menu items
              </label>
              <Search
                className="w-4 h-4 text-[#6B625A] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <input
                id="menu-search"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search ramen, gyoso, udon..."
                className="w-full min-h-[42px] pl-9 pr-9 py-2 text-sm bg-white border border-[#D6CEC2] rounded-md text-[#161412] placeholder:text-[#8A8076] focus:outline-none focus:ring-2 focus:ring-[#B92B27]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear menu search"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-[#6B625A] hover:text-[#161412]"
                >
                  <X className="w-4 h-4" aria-hidden="true" />
                </button>
              )}
            </div>
          </div>

          {lastAddedItemName && (
            <div
              role="status"
              aria-live="polite"
              className="flex flex-wrap items-center justify-between gap-3 px-4 py-2.5 rounded-md bg-[#24201C] text-[#FAF7F2] text-sm"
            >
              <span>
                Added <strong>{lastAddedItemName}</strong> to your order.
              </span>
              <Link
                to="/order-online"
                className="text-xs font-semibold text-[#E5736E] underline underline-offset-4 hover:text-white"
              >
                Go to Order Online
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Menu Category Sections */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12 space-y-16">
        {filteredItems.length === 0 ? (
          <div className="bg-white border border-[#E4DDD2] rounded-lg p-12 text-center space-y-3">
            <h2 className="font-display text-2xl font-semibold text-[#161412]">
              No matching dishes found
            </h2>
            <p className="text-sm text-[#5C554E]">
              Try clearing your search or switching back to all categories.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                handleCategoryChange('All');
              }}
              className="inline-flex items-center justify-center px-5 py-2.5 min-h-[40px] rounded-md bg-[#161412] text-[#FAF7F2] text-sm font-medium hover:bg-[#2E2924]"
            >
              Reset Menu Filters
            </button>
          </div>
        ) : (
          visibleCategories.map((cat) => {
            const categoryItems = filteredItems.filter((i) => i.category === cat.id);
            if (categoryItems.length === 0) return null;

            return (
              <div key={cat.id} className="space-y-6">
                <div className="pb-4 border-b border-[#E4DDD2] flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                  <div className="space-y-1 max-w-2xl">
                    <h2 className="font-display text-3xl font-semibold text-[#161412]">
                      {cat.label}
                    </h2>
                    <p className="text-sm text-[#5C554E] leading-relaxed">
                      {cat.description}
                    </p>
                  </div>
                  <span className="text-xs font-medium text-[#6B625A] tabular-nums shrink-0">
                    {categoryItems.length}{' '}
                    {categoryItems.length === 1 ? 'dish' : 'dishes'}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryItems.map((item) => (
                    <MenuCard key={item.id} item={item} />
                  ))}
                </div>
              </div>
            );
          })
        )}

        <p className="text-xs text-[#6B625A] pt-4 border-t border-[#E4DDD2]">
          Note: Soft-boiled eggs and select proteins may be served lightly cooked upon
          request. Please inform our staff of any food allergies before ordering.
        </p>
      </section>
    </>
  );
}
