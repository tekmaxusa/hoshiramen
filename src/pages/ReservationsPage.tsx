import { useState, type FormEvent } from 'react';
import { Calendar, CheckCircle2, Clock, ExternalLink, Info, Phone } from 'lucide-react';
import { BUSINESS_HOURS, RESTAURANT_INFO } from '../data/restaurant';
import {
  validateReservationForm,
  type ReservationFormValues,
  type ValidationErrors,
} from '../utils/validation';
import { SeoHead } from '../components/SeoHead';

const TIME_SLOTS = [
  '11:30 AM',
  '12:00 PM',
  '12:30 PM',
  '1:00 PM',
  '1:30 PM',
  '5:00 PM',
  '5:30 PM',
  '6:00 PM',
  '6:30 PM',
  '7:00 PM',
  '7:30 PM',
  '8:00 PM',
  '8:30 PM',
];

export function ReservationsPage() {
  const todayIso = new Date().toISOString().split('T')[0];

  const [values, setValues] = useState<ReservationFormValues>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '6:30 PM',
    guests: '2',
    specialRequests: '',
  });
  const [errors, setErrors] = useState<ValidationErrors<ReservationFormValues>>({});
  const [submittedRecord, setSubmittedRecord] = useState<ReservationFormValues | null>(
    null
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validateReservationForm(values, todayIso);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmittedRecord({ ...values });
    }
  };

  return (
    <>
      <SeoHead
        title="Table Reservations – Hoshi Ramen Keller | Keller, TX"
        description="Request a table reservation at Hoshi Ramen Keller in Keller, TX. Choose your date, time, party size, and dining preferences."
      />

      {/* Header */}
      <section className="bg-[#161412] text-[#FAF7F2] py-14 border-b border-[#2D2823]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-3">
          <p className="text-xs font-semibold tracking-wider uppercase text-[#E5736E]">
            Table Reservations
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight">
            Reserve Your Table
          </h1>
          <p className="text-sm sm:text-base text-[#D4CCC1] max-w-2xl leading-relaxed">
            Plan your visit for lunch or dinner at {RESTAURANT_INFO.address}. Fill out
            your preferred party size and dining time below.
          </p>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Reservation Form */}
          <div className="lg:col-span-7 bg-white border border-[#E4DDD2] rounded-lg p-6 sm:p-8">
            {submittedRecord ? (
              <div className="space-y-6">
                <div className="flex items-start gap-3 p-4 rounded-md bg-[#F2ECE3] border border-[#D6CEC2]">
                  <CheckCircle2
                    className="w-6 h-6 text-[#B92B27] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div className="space-y-1">
                    <h2 className="font-display text-2xl font-semibold text-[#161412]">
                      Reservation Request Preview Recorded
                    </h2>
                    <p className="text-sm text-[#3A342F] leading-relaxed">
                      <strong>Demonstration Notice:</strong> No live reservation backend
                      is connected to this form, so your request has{' '}
                      <strong>not</strong> been transmitted to the restaurant. To confirm
                      a table, please call{' '}
                      <a
                        href={RESTAURANT_INFO.phoneHref}
                        className="underline font-semibold text-[#161412]"
                      >
                        {RESTAURANT_INFO.phoneDisplay}
                      </a>{' '}
                      or book via our official TekMax portal.
                    </p>
                  </div>
                </div>

                <dl className="divide-y divide-[#E4DDD2] text-sm">
                  <div className="py-2.5 flex justify-between gap-4">
                    <dt className="text-[#6B625A]">Guest Name</dt>
                    <dd className="font-medium text-[#161412]">
                      {submittedRecord.name}
                    </dd>
                  </div>
                  <div className="py-2.5 flex justify-between gap-4">
                    <dt className="text-[#6B625A]">Email</dt>
                    <dd className="font-medium text-[#161412]">
                      {submittedRecord.email}
                    </dd>
                  </div>
                  <div className="py-2.5 flex justify-between gap-4">
                    <dt className="text-[#6B625A]">Phone</dt>
                    <dd className="font-medium text-[#161412] tabular-nums">
                      {submittedRecord.phone}
                    </dd>
                  </div>
                  <div className="py-2.5 flex justify-between gap-4">
                    <dt className="text-[#6B625A]">Date &amp; Time</dt>
                    <dd className="font-medium text-[#161412] tabular-nums">
                      {submittedRecord.date} at {submittedRecord.time}
                    </dd>
                  </div>
                  <div className="py-2.5 flex justify-between gap-4">
                    <dt className="text-[#6B625A]">Party Size</dt>
                    <dd className="font-medium text-[#161412] tabular-nums">
                      {submittedRecord.guests}{' '}
                      {Number(submittedRecord.guests) === 1 ? 'Guest' : 'Guests'}
                    </dd>
                  </div>
                  {submittedRecord.specialRequests && (
                    <div className="py-2.5 flex justify-between gap-4">
                      <dt className="text-[#6B625A]">Special Requests</dt>
                      <dd className="font-medium text-[#161412] text-right max-w-xs">
                        {submittedRecord.specialRequests}
                      </dd>
                    </div>
                  )}
                </dl>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={RESTAURANT_INFO.orderingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 min-h-[42px] rounded-md bg-[#B92B27] hover:bg-[#961F1C] text-[#FAF7F2] text-sm font-medium transition-colors"
                  >
                    <span>Book on Official TekMax Portal</span>
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmittedRecord(null)}
                    className="inline-flex items-center px-5 py-2.5 min-h-[42px] rounded-md border border-[#D6CEC2] hover:bg-[#F2ECE3] text-sm font-medium text-[#161412] transition-colors"
                  >
                    Edit Reservation Details
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="space-y-1 pb-3 border-b border-[#E4DDD2]">
                  <h2 className="font-display text-2xl font-semibold text-[#161412]">
                    Guest &amp; Seating Details
                  </h2>
                  <p className="text-xs text-[#6B625A]">
                    All fields except special requests are required.
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="res-name"
                    className="block text-xs font-semibold text-[#3A342F] mb-1.5"
                  >
                    Customer Name
                  </label>
                  <input
                    id="res-name"
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="res-email"
                      className="block text-xs font-semibold text-[#3A342F] mb-1.5"
                    >
                      Email Address
                    </label>
                    <input
                      id="res-email"
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

                  <div>
                    <label
                      htmlFor="res-phone"
                      className="block text-xs font-semibold text-[#3A342F] mb-1.5"
                    >
                      Phone Number
                    </label>
                    <input
                      id="res-phone"
                      type="tel"
                      value={values.phone}
                      onChange={(e) =>
                        setValues((prev) => ({ ...prev, phone: e.target.value }))
                      }
                      placeholder="(682) 555-0192"
                      className="w-full min-h-[44px] px-3.5 py-2 text-sm bg-white border border-[#D6CEC2] rounded-md focus:outline-none focus:ring-2 focus:ring-[#B92B27]"
                    />
                    {errors.phone && (
                      <p className="text-xs text-[#B92B27] mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label
                      htmlFor="res-date"
                      className="block text-xs font-semibold text-[#3A342F] mb-1.5"
                    >
                      Reservation Date
                    </label>
                    <input
                      id="res-date"
                      type="date"
                      min={todayIso}
                      value={values.date}
                      onChange={(e) =>
                        setValues((prev) => ({ ...prev, date: e.target.value }))
                      }
                      className="w-full min-h-[44px] px-3.5 py-2 text-sm bg-white border border-[#D6CEC2] rounded-md focus:outline-none focus:ring-2 focus:ring-[#B92B27]"
                    />
                    {errors.date && (
                      <p className="text-xs text-[#B92B27] mt-1">{errors.date}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="res-time"
                      className="block text-xs font-semibold text-[#3A342F] mb-1.5"
                    >
                      Reservation Time
                    </label>
                    <select
                      id="res-time"
                      value={values.time}
                      onChange={(e) =>
                        setValues((prev) => ({ ...prev, time: e.target.value }))
                      }
                      className="w-full min-h-[44px] px-3.5 py-2 text-sm bg-white border border-[#D6CEC2] rounded-md focus:outline-none focus:ring-2 focus:ring-[#B92B27]"
                    >
                      {TIME_SLOTS.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                    {errors.time && (
                      <p className="text-xs text-[#B92B27] mt-1">{errors.time}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="res-guests"
                      className="block text-xs font-semibold text-[#3A342F] mb-1.5"
                    >
                      Number of Guests
                    </label>
                    <select
                      id="res-guests"
                      value={values.guests}
                      onChange={(e) =>
                        setValues((prev) => ({ ...prev, guests: e.target.value }))
                      }
                      className="w-full min-h-[44px] px-3.5 py-2 text-sm bg-white border border-[#D6CEC2] rounded-md focus:outline-none focus:ring-2 focus:ring-[#B92B27]"
                    >
                      {Array.from({ length: 12 }, (_, idx) => String(idx + 1)).map(
                        (num) => (
                          <option key={num} value={num}>
                            {num} {num === '1' ? 'Guest' : 'Guests'}
                          </option>
                        )
                      )}
                    </select>
                    {errors.guests && (
                      <p className="text-xs text-[#B92B27] mt-1">{errors.guests}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="res-requests"
                    className="block text-xs font-semibold text-[#3A342F] mb-1.5"
                  >
                    Special Requests (Optional)
                  </label>
                  <textarea
                    id="res-requests"
                    rows={3}
                    value={values.specialRequests}
                    onChange={(e) =>
                      setValues((prev) => ({
                        ...prev,
                        specialRequests: e.target.value,
                      }))
                    }
                    placeholder="High chair, wheelchair access, allergy notes, celebration..."
                    className="w-full px-3.5 py-2 text-sm bg-white border border-[#D6CEC2] rounded-md focus:outline-none focus:ring-2 focus:ring-[#B92B27]"
                  />
                </div>

                <div className="flex items-start gap-2.5 p-3.5 rounded-md bg-[#FAF7F2] border border-[#E4DDD2] text-xs text-[#5C554E]">
                  <Info
                    className="w-4 h-4 text-[#B92B27] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <p>
                    This reservation interface validates and demonstrates booking
                    requests locally; no live booking API is connected. For confirmed
                    table bookings, call{' '}
                    <a
                      href={RESTAURANT_INFO.phoneHref}
                      className="underline font-medium text-[#161412]"
                    >
                      {RESTAURANT_INFO.phoneDisplay}
                    </a>{' '}
                    or use our official TekMax portal.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full min-h-[46px] px-6 py-3 rounded-md bg-[#B92B27] hover:bg-[#961F1C] text-[#FAF7F2] text-sm font-semibold inline-flex items-center justify-center gap-2 transition-colors"
                >
                  <Calendar className="w-4 h-4" aria-hidden="true" />
                  <span>Submit Reservation</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Hours & Direct Phone */}
          <aside className="lg:col-span-5 space-y-6">
            <div className="bg-[#F2ECE3] border border-[#E4DDD2] rounded-lg p-6 sm:p-7 space-y-4">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#B92B27]" aria-hidden="true" />
                <h2 className="font-display text-2xl font-semibold text-[#161412]">
                  Dining Hours
                </h2>
              </div>
              <dl className="divide-y divide-[#E4DDD2]">
                {BUSINESS_HOURS.map((row) => (
                  <div
                    key={row.day}
                    className="py-2.5 flex items-center justify-between gap-3 text-sm"
                  >
                    <dt className="font-medium text-[#161412]">{row.day}</dt>
                    <dd className="tabular-nums text-[#5C554E]">{row.hours}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="bg-white border border-[#E4DDD2] rounded-lg p-6 sm:p-7 space-y-3">
              <h2 className="font-display text-2xl font-semibold text-[#161412]">
                Need Immediate Seating Info?
              </h2>
              <p className="text-sm text-[#5C554E] leading-relaxed">
                For same-day parties of 6 or more, please call the restaurant directly so
                our host team can prepare your table.
              </p>
              <a
                href={RESTAURANT_INFO.phoneHref}
                className="inline-flex items-center gap-2 text-base font-semibold text-[#B92B27] hover:text-[#961F1C] tabular-nums"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>{RESTAURANT_INFO.phoneDisplay}</span>
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
