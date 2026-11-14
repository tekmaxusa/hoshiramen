import { Link } from 'react-router-dom';
import { ExternalLink, MapPin, Phone } from 'lucide-react';
import { BUSINESS_HOURS, RESTAURANT_INFO } from '../data/restaurant';
import { MEDIA } from '../data/media';

export function Footer() {
  return (
    <footer className="bg-[#161412] text-[#FAF7F2] border-t border-[#2D2823]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <img
                src={MEDIA.logo}
                alt="Hoshi Ramen Keller"
                referrerPolicy="no-referrer"
                className="h-10 w-auto object-contain rounded-sm bg-white p-1"
              />
              <span className="font-display text-2xl font-semibold tracking-tight text-[#FAF7F2]">
                {RESTAURANT_INFO.name}
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-[#D4CCC1] max-w-sm">
              {RESTAURANT_INFO.tagline} Serving handcrafted Japanese ramen, special noodles,
              savory rice bowls, and warm izakaya-inspired starters in Keller, Texas.
            </p>
            <div className="flex items-center gap-5 pt-2 text-sm text-[#D4CCC1]">
              <a
                href={RESTAURANT_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white underline underline-offset-4 transition-colors"
              >
                Facebook
              </a>
              <a
                href={RESTAURANT_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white underline underline-offset-4 transition-colors"
              >
                Instagram
              </a>
              <a
                href={RESTAURANT_INFO.orderingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-white underline underline-offset-4 transition-colors"
              >
                <span>TekMax Ordering</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-display text-lg font-semibold text-[#FAF7F2]">
              Explore
            </h3>
            <ul className="space-y-2 text-sm text-[#D4CCC1]">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-white transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <a
                  href={RESTAURANT_INFO.orderingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Order Online
                </a>
              </li>
              <li>
                <Link to="/reservations" className="hover:text-white transition-colors">
                  Reservations
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Hours Column */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-display text-lg font-semibold text-[#FAF7F2]">
              Opening Hours
            </h3>
            <dl className="space-y-1.5 text-sm text-[#D4CCC1]">
              {BUSINESS_HOURS.map((row) => (
                <div key={row.day} className="flex items-center justify-between gap-3">
                  <dt className="text-[#EDE7DE]">{row.day}</dt>
                  <dd className="tabular-nums text-xs sm:text-sm text-[#C7BEB2]">
                    {row.hours}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Contact & Location Column */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-display text-lg font-semibold text-[#FAF7F2]">
              Visit Us
            </h3>
            <div className="space-y-3 text-sm text-[#D4CCC1]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B92B27] mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <p>{RESTAURANT_INFO.street}</p>
                  <p>{RESTAURANT_INFO.cityStateZip}</p>
                  <a
                    href={RESTAURANT_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#FAF7F2] underline underline-offset-4 mt-1 hover:text-[#E5736E]"
                  >
                    <span>Get Directions</span>
                    <ExternalLink className="w-3 h-3" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B92B27] shrink-0" aria-hidden="true" />
                <a
                  href={RESTAURANT_INFO.phoneHref}
                  className="hover:text-white transition-colors tabular-nums"
                >
                  {RESTAURANT_INFO.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#2D2823] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#A79E92]">
          <p>
            © {new Date().getFullYear()} {RESTAURANT_INFO.name}. All rights reserved.
          </p>
          <p>1301 Keller Pkwy Ste 200, Keller, TX 76248</p>
        </div>
      </div>
    </footer>
  );
}
