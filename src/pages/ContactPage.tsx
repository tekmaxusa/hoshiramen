import { useState, type FormEvent } from 'react';
import {
  CheckCircle2,
  Clock,
  ExternalLink,
  Info,
  MapPin,
  Navigation,
  Phone,
  Send,
} from 'lucide-react';
import { BUSINESS_HOURS, RESTAURANT_INFO } from '../data/restaurant';
import {
  validateContactForm,
  type ContactFormValues,
  type ValidationErrors,
} from '../utils/validation';
import { SeoHead } from '../components/SeoHead';

export function ContactPage() {
  const [values, setValues] = useState<ContactFormValues>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<ValidationErrors<ContactFormValues>>({});
  const [submitted, setSubmitted] = useState<ContactFormValues | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validation = validateContactForm(values);
    setErrors(validation);
    if (Object.keys(validation).length === 0) {
      setSubmitted({ ...values });
    }
  };

  return (
    <>
      <SeoHead
        title="Contact & Location – Hoshi Ramen Keller | Keller, TX"
        description="Visit Hoshi Ramen Keller at 1301 Keller Pkwy Ste 200, Keller, TX 76248 or call +1 (682) 593-0743. View business hours, directions, and send an inquiry."
      />

      {/* Header */}
      <section className="bg-[#161412] text-[#FAF7F2] py-14 border-b border-[#2D2823]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-3">
          <p className="text-xs font-semibold tracking-wider uppercase text-[#E5736E]">
            Contact &amp; Location
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight">
            {RESTAURANT_INFO.name}
          </h1>
          <p className="text-sm sm:text-base text-[#D4CCC1] max-w-2xl leading-relaxed">
            Questions about menu ingredients, group dining, or pickup timing? Reach out
            by phone or visit us on Keller Parkway.
          </p>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-12">
        {/* Top Row: Details + Hours */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Details & Map Card */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white border border-[#E4DDD2] rounded-lg p-6 sm:p-8 space-y-5">
              <h2 className="font-display text-3xl font-semibold text-[#161412]">
                Restaurant Location
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <MapPin
                    className="w-5 h-5 text-[#B92B27] mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <div className="space-y-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#6B625A]">
                      Address
                    </p>
                    <p className="text-sm sm:text-base font-medium text-[#161412]">
                      {RESTAURANT_INFO.street}
                    </p>
                    <p className="text-sm text-[#5C554E]">
                      {RESTAURANT_INFO.cityStateZip}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone
                    className="w-5 h-5 text-[#B92B27] mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <div className="space-y-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#6B625A]">
                      Phone
                    </p>
                    <a
                      href={RESTAURANT_INFO.phoneHref}
                      className="inline-block text-base font-semibold text-[#161412] hover:text-[#B92B27] underline underline-offset-4 tabular-nums"
                    >
                      {RESTAURANT_INFO.phoneDisplay}
                    </a>
                    <p className="text-xs text-[#6B625A]">
                      Tap to call during open hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Clean Keller Pkwy Architectural Locator Map (Google Maps embed disabled by user preference) */}
              <div className="rounded-lg border border-[#E4DDD2] bg-[#FAF7F2] overflow-hidden">
                <div className="relative h-60 w-full bg-[#EFE9DF] p-5 flex flex-col justify-between">
                  {/* Subtle Street Grid SVG */}
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 600 220"
                    className="absolute inset-0 w-full h-full opacity-55"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 115 L600 115"
                      stroke="#D6CEC2"
                      strokeWidth="12"
                    />
                    <path
                      d="M170 0 L170 220 M420 0 L420 220"
                      stroke="#DFD7CB"
                      strokeWidth="8"
                    />
                    <path
                      d="M0 45 L600 45 M0 180 L600 180"
                      stroke="#E6DFD5"
                      strokeWidth="4"
                    />
                    <text
                      x="24"
                      y="107"
                      fill="#6B625A"
                      fontSize="11"
                      fontFamily="sans-serif"
                    >
                      Keller Pkwy (FM 1709)
                    </text>
                    <text
                      x="180"
                      y="28"
                      fill="#6B625A"
                      fontSize="10"
                      fontFamily="sans-serif"
                    >
                      Rufe Snow Dr
                    </text>
                    <text
                      x="430"
                      y="28"
                      fill="#6B625A"
                      fontSize="10"
                      fontFamily="sans-serif"
                    >
                      Keller Smithfield Rd
                    </text>
                  </svg>

                  <div className="relative z-10 flex items-center justify-between gap-2">
                    <span className="text-xs font-semibold text-[#3A342F] bg-white/90 px-3 py-1 rounded border border-[#E4DDD2]">
                      Keller, TX 76248
                    </span>
                    <a
                      href={RESTAURANT_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md bg-[#161412] hover:bg-[#2E2924] text-[#FAF7F2] text-xs font-semibold transition-colors"
                    >
                      <Navigation className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3 h-3" aria-hidden="true" />
                    </a>
                  </div>

                  <div className="relative z-10 self-center flex flex-col items-center">
                    <div className="px-3.5 py-2 rounded-md bg-[#B92B27] text-[#FAF7F2] shadow-md text-xs font-semibold flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Hoshi Ramen Keller · Ste 200</span>
                    </div>
                  </div>

                  <div className="relative z-10 text-[11px] text-[#5C554E] bg-white/85 px-3 py-1.5 rounded border border-[#E4DDD2] self-start">
                    Interactive Google Maps embed is inactive (no API key enabled). Use
                    “Open in Google Maps” above for turn-by-turn directions.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Business Hours */}
          <div className="lg:col-span-5 bg-white border border-[#E4DDD2] rounded-lg p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2.5">
                <Clock className="w-5 h-5 text-[#B92B27]" aria-hidden="true" />
                <h2 className="font-display text-3xl font-semibold text-[#161412]">
                  Business Hours
                </h2>
              </div>
              <p className="text-sm text-[#5C554E]">
                Open seven days a week for lunch, dinner, dine-in, and pickup.
              </p>
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

            <div className="pt-4 border-t border-[#E4DDD2] flex items-center justify-between text-sm">
              <span className="text-[#5C554E]">Follow us</span>
              <div className="flex items-center gap-4 font-medium">
                <a
                  href={RESTAURANT_INFO.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#161412] hover:text-[#B92B27] underline underline-offset-4"
                >
                  Facebook
                </a>
                <a
                  href={RESTAURANT_INFO.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#161412] hover:text-[#B92B27] underline underline-offset-4"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white border border-[#E4DDD2] rounded-lg p-6 sm:p-8 max-w-3xl">
          {submitted ? (
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 rounded-md bg-[#F2ECE3] border border-[#D6CEC2]">
                <CheckCircle2
                  className="w-6 h-6 text-[#B92B27] shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <div className="space-y-1">
                  <h2 className="font-display text-2xl font-semibold text-[#161412]">
                    Message Preview Recorded
                  </h2>
                  <p className="text-sm text-[#3A342F] leading-relaxed">
                    <strong>Demonstration Notice:</strong> Thank you, {submitted.name}.
                    No email backend is connected to this site, so your message has not
                    been sent. For immediate assistance, please call{' '}
                    <a
                      href={RESTAURANT_INFO.phoneHref}
                      className="underline font-semibold text-[#161412]"
                    >
                      {RESTAURANT_INFO.phoneDisplay}
                    </a>
                    .
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(null);
                  setValues({ name: '', email: '', subject: '', message: '' });
                }}
                className="px-5 py-2.5 min-h-[42px] rounded-md border border-[#D6CEC2] hover:bg-[#F2ECE3] text-sm font-medium text-[#161412]"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="space-y-1 pb-3 border-b border-[#E4DDD2]">
                <h2 className="font-display text-3xl font-semibold text-[#161412]">
                  Send Us a Message
                </h2>
                <p className="text-xs text-[#6B625A]">
                  Ask about catering trays, dietary notes, or general questions.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-semibold text-[#3A342F] mb-1.5"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={values.name}
                    onChange={(e) =>
                      setValues((prev) => ({ ...prev, name: e.target.value }))
                    }
                    placeholder="Full name"
                    className="w-full min-h-[44px] px-3.5 py-2 text-sm bg-white border border-[#D6CEC2] rounded-md focus:outline-none focus:ring-2 focus:ring-[#B92B27]"
                  />
                  {errors.name && (
                    <p className="text-xs text-[#B92B27] mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-semibold text-[#3A342F] mb-1.5"
                  >
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={values.email}
                    onChange={(e) =>
                      setValues((prev) => ({ ...prev, email: e.target.value }))
                    }
                    placeholder="you@example.com"
                    className="w-full min-h-[44px] px-3.5 py-2 text-sm bg-white border border-[#D6CEC2] rounded-md focus:outline-none focus:ring-2 focus:ring-[#B92B27]"
                  />
                  {errors.email && (
                    <p className="text-xs text-[#B92B27] mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-xs font-semibold text-[#3A342F] mb-1.5"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={values.subject}
                  onChange={(e) =>
                    setValues((prev) => ({ ...prev, subject: e.target.value }))
                  }
                  placeholder="Question about menu, group dining, or hours"
                  className="w-full min-h-[44px] px-3.5 py-2 text-sm bg-white border border-[#D6CEC2] rounded-md focus:outline-none focus:ring-2 focus:ring-[#B92B27]"
                />
                {errors.subject && (
                  <p className="text-xs text-[#B92B27] mt-1">{errors.subject}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-semibold text-[#3A342F] mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={values.message}
                  onChange={(e) =>
                    setValues((prev) => ({ ...prev, message: e.target.value }))
                  }
                  placeholder="How can we help?"
                  className="w-full px-3.5 py-2 text-sm bg-white border border-[#D6CEC2] rounded-md focus:outline-none focus:ring-2 focus:ring-[#B92B27]"
                />
                {errors.message && (
                  <p className="text-xs text-[#B92B27] mt-1">{errors.message}</p>
                )}
              </div>

              <div className="flex items-start gap-2.5 p-3.5 rounded-md bg-[#FAF7F2] border border-[#E4DDD2] text-xs text-[#5C554E]">
                <Info
                  className="w-4 h-4 text-[#B92B27] shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <p>
                  Form submissions on this frontend preview are for demonstration only.
                  For direct restaurant support, please call{' '}
                  <a
                    href={RESTAURANT_INFO.phoneHref}
                    className="underline font-medium text-[#161412]"
                  >
                    {RESTAURANT_INFO.phoneDisplay}
                  </a>
                  .
                </p>
              </div>

              <button
                type="submit"
                className="min-h-[46px] px-6 py-3 rounded-md bg-[#B92B27] hover:bg-[#961F1C] text-[#FAF7F2] text-sm font-semibold inline-flex items-center justify-center gap-2 transition-colors"
              >
                <Send className="w-4 h-4" aria-hidden="true" />
                <span>Send Message</span>
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
