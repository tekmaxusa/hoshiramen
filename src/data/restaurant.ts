export interface BusinessHourRow {
  day: string;
  hours: string;
}

export interface Testimonial {
  id: string;
  name: string;
  context: string;
  dishOrdered: string;
  quote: string;
}

export const RESTAURANT_INFO = {
  name: 'Hoshi Ramen Keller',
  tagline: 'Authentic Japanese Flavors, Made With Passion.',
  address: '1301 Keller Pkwy Ste 200, Keller, TX 76248, USA',
  street: '1301 Keller Pkwy Ste 200',
  cityStateZip: 'Keller, TX 76248, USA',
  phoneDisplay: '+1 (682) 593-0743',
  phoneHref: 'tel:+16825930743',
  orderingUrl: 'https://hoshiramenkeller.tekmaxorder.com/',
  googleMapsUrl:
    'https://www.google.com/maps/search/?api=1&query=1301+Keller+Pkwy+Ste+200+Keller+TX+76248',
  social: {
    facebook: 'https://www.facebook.com/people/Hoshi-Ramen-in-Fort-Worth/61557874960237/',
    instagram: 'https://www.instagram.com/hoshiramen_fortworth',
  },
} as const;

export const BUSINESS_HOURS: BusinessHourRow[] = [
  { day: 'Monday', hours: '11:00 AM – 9:00 PM' },
  { day: 'Tuesday', hours: '11:00 AM – 9:00 PM' },
  { day: 'Wednesday', hours: '11:00 AM – 9:00 PM' },
  { day: 'Thursday', hours: '11:00 AM – 9:00 PM' },
  { day: 'Friday', hours: '11:00 AM – 10:00 PM' },
  { day: 'Saturday', hours: '11:00 AM – 10:00 PM' },
  { day: 'Sunday', hours: '11:00 AM – 8:00 PM' },
];

export const WHY_CHOOSE_PILLARS = [
  {
    number: '01',
    title: 'Slow-Simmered Broths',
    description:
      'Rich Tonkotsu, savory Shoyu, balanced Miso, and aromatic Vegetable broths prepared with patience so every spoonful carries clean umami depth.',
  },
  {
    number: '02',
    title: 'Freshly Prepared Toppings',
    description:
      'Braised pork chashu, seared beef brisket, soft-boiled eggs, crispy karaage, and hand-trimmed scallions assembled to order for vibrant texture.',
  },
  {
    number: '03',
    title: 'Keller Neighborhood Hospitality',
    description:
      'Welcoming table seating, quick takeout pickup, and a thoughtful kids menu designed for weeknight family dinners and weekend gatherings alike.',
  },
  {
    number: '04',
    title: 'Craft Beyond Ramen',
    description:
      'Alongside signature ramen bowls, our kitchen prepares crisp Japanese appetizers, dashi udon, teppan fried rice, and panko tonkatsu.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'guest-1',
    name: 'Hannah Alvarez',
    context: 'Keller Local · Dine-In',
    dishOrdered: 'Hoshi Ramen & Takoyaki',
    quote:
      'We stopped in for dinner off Keller Parkway and ordered the Hoshi Ramen and takoyaki. The chashu was melt-in-your-mouth tender and the broth stayed piping hot to the last bite.',
  },
  {
    id: 'guest-2',
    name: 'Marcus Tran',
    context: 'Roanoke Neighbor · Pickup',
    dishOrdered: 'Texan Ramen & Chashu Bun',
    quote:
      'The Texan Ramen hits the sweet spot between classic Japanese ramen and hearty brisket. Everything is packed neatly for pickup so the noodles never turn soggy on the drive home.',
  },
  {
    id: 'guest-3',
    name: 'Claire & Daniel Park',
    context: 'Family Dinner · Keller, TX',
    dishOrdered: 'Regular Udon, Tonkatsu & Kids Ramen',
    quote:
      'Having a dedicated Kids Ramen and crispy chicken karaage alongside rich spicy kimchi ramen makes this our go-to weekend spot. Warm service and generous portions every visit.',
  },
];
