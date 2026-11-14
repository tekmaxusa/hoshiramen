import { Link } from 'react-router-dom';
import { ArrowRight, Clock, MapPin, Phone, Star } from 'lucide-react';
import { MEDIA } from '../data/media';
import { MENU_ITEMS } from '../data/menu';
import {
  BUSINESS_HOURS,
  RESTAURANT_INFO,
  TESTIMONIALS,
  WHY_CHOOSE_PILLARS,
} from '../data/restaurant';
import { getFeaturedDishes } from '../utils/menuFilter';
import { MenuCard } from '../components/MenuCard';
import { DishImage } from '../components/DishImage';
import { SeoHead } from '../components/SeoHead';

const CATEGORY_HIGHLIGHTS = [
  {
    title: 'Signature Ramen Bowls',
    category: 'Ramen',
    summary:
      'Rich Tonkotsu, Shoyu, Miso, and Vegetable broths topped with braised pork chashu, brisket, kimchi, and soft-boiled egg.',
    image: MEDIA.specialtyRamen,
  },
  {
    title: 'Rice Bowls & Crispy Katsu',
    category: 'Rice Bowl',
    summary:
      'Steamed rice layered with marinated bulgogi, spicy pork, teriyaki chicken, or golden panko-crusted tonkatsu.',
    image: MEDIA.riceTonkatsu,
  },
  {
    title: 'Udon & Stir-Fried Yakisoba',
    category: 'Special Noodles',
    summary:
      'Thick chewy udon noodles in aromatic dashi or Japanese curry alongside savory teppan-tossed yakisoba.',
    image: MEDIA.udonYakisoba,
  },
];

export function HomePage() {
  const featuredDishes = getFeaturedDishes(MENU_ITEMS).slice(0, 6);

  return (
    <>
      <SeoHead
        title="Hoshi Ramen Keller – Authentic Japanese Ramen & Cuisine in Keller, TX"
        description="Authentic Japanese flavors, made with passion at Hoshi Ramen Keller. Explore slow-simmered ramen, rice bowls, udon, and appetizers at 1301 Keller Pkwy Ste 200."
      />

      {/* 1. Hero Section */}
      <section className="relative bg-[#161412] text-[#FAF7F2] overflow-hidden">
        <div className="absolute inset-0">
          <DishImage
            src={MEDIA.heroRamen}
            alt="Steaming bowl of signature Hoshi Ramen with pork chashu and soft-boiled egg"
            eager
            className="w-full h-full object-cover object-center opacity-80"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-b from-[#161412]/80 via-[#161412]/70 to-[#161412]/85 md:bg-gradient-to-r md:from-[#161412]/95 md:via-[#161412]/70 md:to-[#161412]/35"
          />
        </div>

        <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 py-20 sm:py-28 lg:py-36">
          <div className="max-w-2xl space-y-6">
            <p className="text-xs sm:text-sm font-medium tracking-wider text-[#E8DDD0]">
              Keller, Texas · 1301 Keller Pkwy Ste 200
            </p>
            <h1
              className="font-display font-semibold tracking-tight text-[#FAF7F2] leading-[1.06]"
              style={{
                fontSize: 'clamp(2.5rem, 4.8vw, 4.1rem)',
                textWrap: 'balance',
              }}
            >
              {RESTAURANT_INFO.tagline}
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-[#E4DDD2] max-w-xl">
              Welcome to Hoshi Ramen Keller—your neighborhood destination for slow-simmered
              ramen broths, crispy Japanese starters, hearty rice bowls, and warm table
              hospitality.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/order-online"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[46px] rounded-md bg-[#B92B27] hover:bg-[#961F1C] text-[#FAF7F2] text-sm font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FAF7F2]"
              >
                <span>Order Online</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                to="/menu"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[46px] rounded-md bg-[#FAF7F2]/10 hover:bg-[#FAF7F2]/20 border border-[#FAF7F2]/35 text-[#FAF7F2] text-sm font-semibold backdrop-blur-sm transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FAF7F2]"
              >
                <span>Explore Our Menu</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Featured Dishes */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div className="space-y-2 max-w-xl">
            <p className="text-xs font-semibold tracking-wider uppercase text-[#B92B27]">
              Guest Favorites
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#161412] tracking-tight">
              Featured Dishes from Our Kitchen
            </h2>
          </div>
          <Link
            to="/menu"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#161412] hover:text-[#B92B27] transition-colors whitespace-nowrap shrink-0"
          >
            <span>View Full 48-Item Menu</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredDishes.map((dish) => (
            <MenuCard key={dish.id} item={dish} />
          ))}
        </div>
      </section>

      {/* 3. Restaurant Introduction */}
      <section className="bg-[#F2ECE3] border-y border-[#E4DDD2]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            <div className="lg:col-span-6 rounded-lg overflow-hidden border border-[#E4DDD2] min-h-[300px]">
              <DishImage
                src={MEDIA.interior}
                alt="Warm oak dining counter and paper lanterns inside Hoshi Ramen Keller"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:col-span-6 flex flex-col justify-center space-y-5">
              <p className="text-xs font-semibold tracking-wider uppercase text-[#B92B27]">
                Our Kitchen &amp; Table
              </p>
              <h2
                className="font-display text-3xl sm:text-4xl font-semibold text-[#161412] tracking-tight leading-tight"
                style={{ textWrap: 'balance' }}
              >
                Japanese Culinary Tradition Meets Neighborhood Comfort in Keller
              </h2>
              <p className="text-base leading-relaxed text-[#4A433D]">
                Every bowl at Hoshi Ramen Keller starts with thoughtful preparation—rich,
                fragrant broths paired with springy wheat noodles, tender braised pork
                chashu, and crisp garden toppings.
              </p>
              <p className="text-base leading-relaxed text-[#4A433D]">
                Whether you are craving our signature Hoshi Ramen, a smoky Texan Ramen
                with beef brisket, crispy chicken karaage to share, or steamed chashu bao
                buns, our dining room welcomes families, friends, and quick weekday
                lunches alike.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-5 py-2.5 min-h-[42px] rounded-md bg-[#161412] hover:bg-[#2E2924] text-[#FAF7F2] text-sm font-medium transition-colors"
                >
                  <span>Read Our Story</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <Link
                  to="/reservations"
                  className="inline-flex items-center gap-2 px-5 py-2.5 min-h-[42px] rounded-md border border-[#161412]/25 hover:border-[#161412] text-[#161412] text-sm font-medium transition-colors"
                >
                  <span>Reserve a Table</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Hoshi Ramen */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-2xl space-y-2 mb-12">
          <p className="text-xs font-semibold tracking-wider uppercase text-[#B92B27]">
            Why Choose Hoshi Ramen
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#161412] tracking-tight">
            Crafted with Patience, Served Fresh to Order
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
          {WHY_CHOOSE_PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="pt-5 border-t border-[#E4DDD2] space-y-2"
            >
              <div className="flex items-baseline gap-3">
                <span className="text-sm font-semibold text-[#B92B27] tabular-nums">
                  {pillar.number}.
                </span>
                <h3 className="font-display text-2xl font-semibold text-[#161412]">
                  {pillar.title}
                </h3>
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-[#5C554E] pl-8">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Special Menu Highlights */}
      <section className="bg-[#161412] text-[#FAF7F2]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div className="space-y-2 max-w-xl">
              <p className="text-xs font-semibold tracking-wider uppercase text-[#E5736E]">
                Special Menu Highlights
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#FAF7F2] tracking-tight">
                Beyond the Ramen Bowl
              </h2>
            </div>
            <Link
              to="/menu"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#FAF7F2] hover:text-[#E5736E] transition-colors whitespace-nowrap shrink-0"
            >
              <span>Browse All Categories</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CATEGORY_HIGHLIGHTS.map((cat) => (
              <Link
                key={cat.category}
                to={`/menu?category=${encodeURIComponent(cat.category)}`}
                className="group block bg-[#201D19] border border-[#2F2A25] rounded-lg overflow-hidden hover:border-[#B92B27] transition-colors"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <DishImage
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="font-display text-2xl font-semibold text-[#FAF7F2]">
                    {cat.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#C7BEB2]">
                    {cat.summary}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E5736E] pt-2">
                    <span>Explore {cat.category}</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Customer Testimonials */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="space-y-2 mb-10">
          <p className="text-xs font-semibold tracking-wider uppercase text-[#B92B27]">
            Community Voices
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#161412] tracking-tight">
            What Guests Are Sharing
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.id}
              className="flex flex-col justify-between bg-white border border-[#E4DDD2] rounded-lg p-6 space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-[#B92B27]" aria-label="5 out of 5 stars">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <Star
                      key={star}
                      className="w-4 h-4 fill-current"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <blockquote className="text-sm sm:text-base leading-relaxed text-[#3A342F]">
                  “{t.quote}”
                </blockquote>
              </div>
              <figcaption className="pt-4 border-t border-[#E4DDD2]/80">
                <p className="text-sm font-semibold text-[#161412]">{t.name}</p>
                <p className="text-xs text-[#6B625A] mt-0.5">
                  {t.context} · {t.dishOrdered}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* 7. Location & Opening Hours */}
      <section className="bg-[#F2ECE3] border-t border-[#E4DDD2]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <p className="text-xs font-semibold tracking-wider uppercase text-[#B92B27]">
                  Visit Hoshi Ramen Keller
                </p>
                <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#161412] tracking-tight">
                  Dine In or Pick Up Along Keller Parkway
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#3A342F]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#B92B27] mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-[#161412]">Address</p>
                    <p>{RESTAURANT_INFO.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#B92B27] mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-[#161412]">Phone</p>
                    <a
                      href={RESTAURANT_INFO.phoneHref}
                      className="text-[#161412] hover:text-[#B92B27] underline underline-offset-4 tabular-nums"
                    >
                      {RESTAURANT_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-2.5 min-h-[42px] rounded-md bg-[#161412] hover:bg-[#2E2924] text-[#FAF7F2] text-sm font-medium transition-colors"
                >
                  Open in Google Maps
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-5 py-2.5 min-h-[42px] rounded-md border border-[#161412]/25 hover:border-[#161412] text-[#161412] text-sm font-medium transition-colors"
                >
                  Contact &amp; Directions
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 bg-white border border-[#E4DDD2] rounded-lg p-6 sm:p-8">
              <div className="flex items-center gap-2.5 mb-5">
                <Clock className="w-5 h-5 text-[#B92B27]" aria-hidden="true" />
                <h3 className="font-display text-2xl font-semibold text-[#161412]">
                  Opening Hours
                </h3>
              </div>
              <dl className="divide-y divide-[#E4DDD2]">
                {BUSINESS_HOURS.map((row) => (
                  <div
                    key={row.day}
                    className="py-3 flex items-center justify-between gap-4 text-sm sm:text-base"
                  >
                    <dt className="font-medium text-[#161412]">{row.day}</dt>
                    <dd className="tabular-nums text-[#5C554E]">{row.hours}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
