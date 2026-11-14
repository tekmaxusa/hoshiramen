import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { MEDIA } from '../data/media';
import { RESTAURANT_INFO } from '../data/restaurant';
import { DishImage } from '../components/DishImage';
import { SeoHead } from '../components/SeoHead';

export function AboutPage() {
  return (
    <>
      <SeoHead
        title="About Us – Hoshi Ramen Keller | Our Kitchen & Japanese Inspiration"
        description="Learn about Hoshi Ramen Keller, our Japanese culinary inspiration, scratch-prepared ramen broths, and welcoming dining room on Keller Parkway."
      />

      {/* Editorial Header */}
      <section className="bg-[#161412] text-[#FAF7F2] py-16 sm:py-20 border-b border-[#2D2823]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-semibold tracking-wider uppercase text-[#E5736E]">
              About Hoshi Ramen Keller
            </p>
            <h1
              className="font-display text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.08]"
              style={{ textWrap: 'balance' }}
            >
              Thoughtful Japanese Cooking, Built Around Every Bowl
            </h1>
            <p className="text-base sm:text-lg text-[#D4CCC1] leading-relaxed">
              Located at {RESTAURANT_INFO.address}, Hoshi Ramen Keller brings together
              traditional Japanese ramen craft, comforting rice bowls, and warm
              neighborhood hospitality for the Keller and North Fort Worth community.
            </p>
          </div>
        </div>
      </section>

      {/* Story & Atmosphere */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-16 sm:py-20 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          <div className="lg:col-span-7 rounded-lg overflow-hidden border border-[#E4DDD2] min-h-[320px]">
            <DishImage
              src={MEDIA.interior}
              alt="Hoshi Ramen Keller dining room and oak counter seating"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center space-y-5">
            <p className="text-xs font-semibold tracking-wider uppercase text-[#B92B27]">
              Atmosphere &amp; Dining Experience
            </p>
            <h2 className="font-display text-3xl font-semibold text-[#161412]">
              A Warm Room Designed to Slow Down
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#4A433D]">
              From glowing paper lanterns and natural oak woodwork to the comforting
              aroma of simmering broth from the kitchen, Hoshi Ramen Keller is built for
              unhurried meals. Guests stop by for solo lunch bowls, date nights, and
              family dinners with children.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#4A433D]">
              Our dining room pairs attentive, unpretentious service with a menu broad
              enough that everyone at the table—whether a devoted ramen enthusiast or a
              first-time guest—finds a favorite plate.
            </p>
          </div>
        </div>

        {/* Craft & Preparation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          <div className="lg:col-span-5 flex flex-col justify-center space-y-5 order-2 lg:order-1">
            <p className="text-xs font-semibold tracking-wider uppercase text-[#B92B27]">
              Japanese Food Inspiration
            </p>
            <h2 className="font-display text-3xl font-semibold text-[#161412]">
              Broth Balance, Crisp Fry &amp; Honest Toppings
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-[#4A433D]">
              Great ramen depends on balance: savory broth, resilient noodles, and
              contrasting textures. We offer Tonkotsu, Shoyu, Miso, and Vegetable broth
              options alongside signature creations like our Texan Ramen with tender beef
              brisket and chicken, spicy Kimchi Ramen, and roasted Garlic Ramen.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-[#4A433D]">
              Beyond ramen, our kitchen prepares crisp panko-breaded tonkatsu, steamed
              chashu and chicken bao buns, pan-fried gyoso dumplings, takoyaki topped
              with bonito flakes, and comforting dashi or Japanese curry udon.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 gap-4 order-1 lg:order-2">
            <div className="rounded-lg overflow-hidden border border-[#E4DDD2] aspect-[4/3]">
              <DishImage
                src={MEDIA.heroRamen}
                alt="Traditional ramen bowl with braised chashu and egg"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden border border-[#E4DDD2] aspect-[4/3]">
              <DishImage
                src={MEDIA.riceTonkatsu}
                alt="Crispy panko tonkatsu and pan-fried gyoza dumplings"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-2 rounded-lg overflow-hidden border border-[#E4DDD2] aspect-[16/9]">
              <DishImage
                src={MEDIA.udonYakisoba}
                alt="Thick Japanese udon noodles with crispy shrimp tempura"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Three Culinary Principles */}
        <div className="bg-[#F2ECE3] border border-[#E4DDD2] rounded-lg p-8 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <p className="text-xs font-semibold text-[#B92B27] tabular-nums">01.</p>
              <h3 className="font-display text-2xl font-semibold text-[#161412]">
                Prepared to Order
              </h3>
              <p className="text-sm leading-relaxed text-[#5C554E]">
                Noodles are cooked fresh per bowl, and fried starters like karaage,
                korokke, and ebi fry leave the kitchen crisp and hot.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-semibold text-[#B92B27] tabular-nums">02.</p>
              <h3 className="font-display text-2xl font-semibold text-[#161412]">
                Options for Every Guest
              </h3>
              <p className="text-sm leading-relaxed text-[#5C554E]">
                From bold meat-forward ramen and bulgogi bowls to Vegetable Ramen, edamame,
                and a dedicated Kids Menu, everyone eats well together.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-xs font-semibold text-[#B92B27] tabular-nums">03.</p>
              <h3 className="font-display text-2xl font-semibold text-[#161412]">
                Dine-In, Pickup &amp; Delivery
              </h3>
              <p className="text-sm leading-relaxed text-[#5C554E]">
                Enjoy steaming bowls in our dining room or order directly through our
                official TekMax ordering platform for convenient pickup or delivery.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-4 border-t border-[#E4DDD2]">
          <div className="space-y-1">
            <h2 className="font-display text-3xl font-semibold text-[#161412]">
              Ready to Join Us for Lunch or Dinner?
            </h2>
            <p className="text-sm text-[#5C554E]">
              Open daily at 11:00 AM on Keller Parkway.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 px-5 py-2.5 min-h-[42px] rounded-md bg-[#161412] hover:bg-[#2E2924] text-[#FAF7F2] text-sm font-medium transition-colors"
            >
              <span>Explore Menu</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link
              to="/reservations"
              className="inline-flex items-center gap-2 px-5 py-2.5 min-h-[42px] rounded-md bg-[#B92B27] hover:bg-[#961F1C] text-[#FAF7F2] text-sm font-medium transition-colors"
            >
              <span>Book a Table</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
