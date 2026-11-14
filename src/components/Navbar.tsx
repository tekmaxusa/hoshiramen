import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, ShoppingBag, X } from 'lucide-react';
import { MEDIA } from '../data/media';
import { RESTAURANT_INFO } from '../data/restaurant';
import { useCart } from '../context/CartContext';

const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'Menu', to: '/menu' },
  { label: 'About Us', to: '/about' },
  { label: 'Order Online', to: '/order-online' },
  { label: 'Reservations', to: '/reservations' },
  { label: 'Contact', to: '/contact' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totals } = useCart();

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E4DDD2]">
      <div className="max-w-[1200px] mx-auto px-3 sm:px-6 h-16 md:h-[72px] flex items-center justify-between gap-2 sm:gap-4 lg:gap-8">
        {/* Zone 1: Brand Lockup */}
        <Link
          to="/"
          onClick={() => setMobileOpen(false)}
          className="flex items-center gap-2 sm:gap-3 min-w-0 shrink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B92B27] rounded-sm"
        >
          <img
            src={MEDIA.logo}
            alt="Hoshi Ramen Keller logo"
            referrerPolicy="no-referrer"
            className="h-7 sm:h-9 w-auto object-contain rounded-sm shrink-0"
          />
          <span className="font-display text-lg sm:text-2xl font-semibold tracking-tight text-[#161412] whitespace-nowrap truncate">
            {RESTAURANT_INFO.name}
          </span>
        </Link>

        {/* Zone 2: Primary Navigation Links */}
        <nav
          aria-label="Main navigation"
          className="hidden lg:flex items-center gap-6 text-[14px] font-medium text-[#4A433D]"
        >
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B92B27] rounded-sm ${
                  isActive
                    ? 'text-[#161412] font-semibold after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-[#B92B27]'
                    : 'hover:text-[#161412]'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Toggle */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <Link
            to="/order-online"
            onClick={() => setMobileOpen(false)}
            aria-label={
              totals.itemCount > 0
                ? `Order Online, ${totals.itemCount} items in cart`
                : 'Order Online'
            }
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 min-h-[40px] text-xs sm:text-sm font-medium text-[#FAF7F2] bg-[#B92B27] hover:bg-[#961F1C] transition-colors duration-150 rounded-md whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#161412]"
          >
            <ShoppingBag className="w-4 h-4 shrink-0" aria-hidden="true" />
            <span className="hidden sm:inline">
              {totals.itemCount > 0 ? `Order (${totals.itemCount})` : 'Order Online'}
            </span>
            <span className="sm:hidden tabular-nums">
              {totals.itemCount > 0 ? `Order (${totals.itemCount})` : 'Order'}
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-[#E4DDD2] text-[#161412] hover:bg-[#F2ECE3] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B92B27]"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <nav
          aria-label="Mobile navigation"
          className="lg:hidden border-t border-[#E4DDD2] bg-[#FAF7F2] px-4 py-4"
        >
          <div className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-3 min-h-[44px] flex items-center text-base font-medium rounded-md transition-colors ${
                    isActive
                      ? 'bg-[#F2ECE3] text-[#B92B27] font-semibold'
                      : 'text-[#161412] hover:bg-[#F2ECE3]/60'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
