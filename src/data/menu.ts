import { MEDIA } from './media';

export type MenuCategory =
  | 'Appetizers'
  | 'Ramen'
  | 'Special Noodles'
  | 'Rice Bowl'
  | 'Kids Menu'
  | 'Dessert'
  | 'Drinks';

export interface MenuItem {
  id: string;
  code?: string;
  name: string;
  category: MenuCategory;
  price: number;
  description: string;
  image: string;
  featured?: boolean;
  dietaryNote?: string;
}

export interface CategoryMeta {
  id: MenuCategory;
  label: string;
  description: string;
}

export const MENU_CATEGORIES: CategoryMeta[] = [
  {
    id: 'Appetizers',
    label: 'Appetizers',
    description:
      'Crispy, savory, and shareable bites to start your meal—perfect for pairing with drinks or sharing at the table.',
  },
  {
    id: 'Ramen',
    label: 'Ramen',
    description:
      'Soul-warming noodle soups in rich, slow-simmered broths with bold flavors and classic toppings.',
  },
  {
    id: 'Special Noodles',
    label: 'Special Noodles',
    description:
      'Savory stir-fried yakisoba and comforting thick udon bowls crafted in traditional dashi and Japanese curry broths.',
  },
  {
    id: 'Rice Bowl',
    label: 'Rice Bowl',
    description:
      'Steamed rice topped with savory proteins, crisp vegetables, and signature sauces for a complete, satisfying meal.',
  },
  {
    id: 'Kids Menu',
    label: 'Kids Menu',
    description:
      'Specially crafted smaller portions of our favorite dishes, tailored with mild, approachable flavors for younger diners.',
  },
  {
    id: 'Dessert',
    label: 'Dessert',
    description:
      'Sweet Japanese and Asian-inspired confections from chewy mochi ice cream to shaved ice bingsu.',
  },
  {
    id: 'Drinks',
    label: 'Drinks',
    description:
      'Refreshing Japanese sodas, cold-brewed oolong and green teas, Hawaiian Sun, and warm teapot service.',
  },
];

export const MENU_ITEMS: MenuItem[] = [
  // APPETIZERS (13)
  {
    id: 'app-edamame',
    code: 'A1',
    name: 'Edamame',
    category: 'Appetizers',
    price: 5,
    description:
      'Lightly salted steamed young soybeans served in the pod. A healthy, protein-rich appetizer that is perfect for snacking and sharing.',
    image: MEDIA.refEdamame,
    dietaryNote: 'Vegetarian',
  },
  {
    id: 'app-korokke',
    code: 'A3',
    name: 'Korokke',
    category: 'Appetizers',
    price: 7,
    description:
      'Crispy golden croquettes filled with creamy mashed potato and sweet pumpkin, served with thinly sliced cabbage. Crunchy outside with a soft, flavorful center.',
    image: MEDIA.refKorokke,
    dietaryNote: 'Vegetarian',
  },
  {
    id: 'app-spring-roll',
    code: 'A4',
    name: 'Fried Spring Roll (4pcs)',
    category: 'Appetizers',
    price: 8,
    description:
      'Crispy golden spring rolls filled with a savory mix of vegetables, deep-fried until light, crunchy, and ready for dipping.',
    image: MEDIA.refSpringRoll,
    dietaryNote: 'Vegetarian',
  },
  {
    id: 'app-gyoso',
    code: 'A5',
    name: 'Gyoso (6pcs)',
    category: 'Appetizers',
    price: 7,
    description:
      'Crispy pan-fried dumplings filled with seasoned meat or vegetables, served with a savory soy dipping sauce—golden outside and juicy inside.',
    image: MEDIA.refGyoza,
    featured: true,
  },
  {
    id: 'app-takoyaki',
    code: 'A6',
    name: 'Takoyaki (5pcs)',
    category: 'Appetizers',
    price: 7,
    description:
      'Crispy-on-the-outside, soft-on-the-inside savory octopus balls topped with creamy mayo, sweet takoyaki sauce, and delicate bonito flakes.',
    image: MEDIA.refTakoyaki,
    featured: true,
  },
  {
    id: 'app-chicken-karaage',
    code: 'A9',
    name: 'Chicken Karaage',
    category: 'Appetizers',
    price: 10,
    description:
      'Japanese-style marinated crispy fried chicken—juicy on the inside, golden and crunchy on the outside, served with crisp sliced cabbage.',
    image: MEDIA.refKaraage,
  },
  {
    id: 'app-squid-karaage',
    code: 'A10',
    name: 'Squid Karaage',
    category: 'Appetizers',
    price: 10,
    description:
      'Tender pieces of squid lightly seasoned and deep-fried to crispy perfection, served with sliced cabbage for a refreshing crunch.',
    image: MEDIA.refSquidKaraage,
  },
  {
    id: 'app-chashu-bun',
    code: 'A11',
    name: 'Chashu Bun (2pcs)',
    category: 'Appetizers',
    price: 7,
    description:
      'Steamed bao buns filled with tender pork chashu, drizzled with spicy mayo and sweet-savory katsu sauce, layered with crisp sliced cabbage.',
    image: MEDIA.refChashuBun,
    featured: true,
  },
  {
    id: 'app-chicken-bun',
    code: 'A12',
    name: 'Chicken Bun',
    category: 'Appetizers',
    price: 7,
    description:
      'Fluffy steamed bao buns stuffed with juicy fried chicken, topped with spicy mayo, tangy katsu sauce, and crisp sliced cabbage.',
    image: MEDIA.refChickenBun,
  },
  {
    id: 'app-ebi-fry',
    code: 'A13',
    name: 'Ebi Fry (5pcs)',
    category: 'Appetizers',
    price: 10,
    description:
      'Crispy golden-breaded shrimp fried until light, crunchy, and juicy inside, served with savory soy dipping sauce.',
    image: MEDIA.refSpringRoll,
  },
  {
    id: 'app-korean-pancake',
    code: 'A14',
    name: 'Korean Pancake (2pcs)',
    category: 'Appetizers',
    price: 10,
    description:
      'Crispy-edged, tender savory pancakes pan-fried with fresh vegetables and seafood to golden perfection.',
    image: MEDIA.refKorokke,
  },
  {
    id: 'app-yakitori',
    name: 'Yakitori (3pcs)',
    category: 'Appetizers',
    price: 10,
    description:
      'Three flame-grilled skewers of tender chicken and sweet onion glazed in a savory-sweet tare sauce.',
    image: MEDIA.refKaraage,
  },
  {
    id: 'app-seaweed-salad',
    name: 'Seaweed Salad',
    category: 'Appetizers',
    price: 5,
    description:
      'Chilled seasoned wakame seaweed tossed with toasted sesame oil and sesame seeds for a crisp, refreshing starter.',
    image: MEDIA.refEdamame,
    dietaryNote: 'Vegetarian',
  },

  // RAMEN (6)
  {
    id: 'ramen-hoshi',
    code: 'R1',
    name: 'Hoshi Ramen',
    category: 'Ramen',
    price: 15,
    description:
      'Our signature bowl—choose your broth and enjoy tender pork chashu, soft-boiled egg, green onion, bean sprouts, black mushroom, and sweet corn.',
    image: MEDIA.heroRamen,
    featured: true,
  },
  {
    id: 'ramen-texan',
    code: 'R2',
    name: 'Texan Ramen',
    category: 'Ramen',
    price: 18,
    description:
      'A bold take on our Hoshi Ramen, topped with tender beef brisket and juicy chicken—rich in smoky, savory flavor for meat lovers.',
    image: MEDIA.specialtyRamen,
    featured: true,
  },
  {
    id: 'ramen-kimchi',
    code: 'R3',
    name: 'Kimchi Ramen',
    category: 'Ramen',
    price: 17,
    description:
      'A spicy and tangy spin on our Hoshi Ramen topped with fermented kimchi, crispy onion flakes, and roasted garlic flakes.',
    image: MEDIA.specialtyRamen,
    dietaryNote: 'Spicy',
  },
  {
    id: 'ramen-garlic',
    code: 'R4',
    name: 'Garlic Ramen',
    category: 'Ramen',
    price: 16,
    description:
      'Our signature Hoshi Ramen enhanced with fragrant roasted garlic oil and crispy garlic flakes for deep, aromatic flavor in every bite.',
    image: MEDIA.refHero,
  },
  {
    id: 'ramen-vegetable',
    code: 'R5',
    name: 'Vegetable Ramen',
    category: 'Ramen',
    price: 17,
    description:
      'Fragrant vegetable broth cradling crispy tofu, black mushrooms, crunchy bean sprouts, sweet corn, vibrant green onions, and caramelized onions and carrots.',
    image: MEDIA.heroRamen,
    dietaryNote: 'Vegetarian',
  },
  {
    id: 'ramen-bulgogi',
    code: 'R6',
    name: 'Bulgogi Ramen',
    category: 'Ramen',
    price: 18,
    description:
      'Savory Hoshi broth layered with tender marinated bulgogi beef, green onion, bean sprouts, black mushroom, corn, garlic oil, and crispy onion flakes.',
    image: MEDIA.specialtyRamen,
  },

  // SPECIAL NOODLES (3)
  {
    id: 'noodle-yakisoba',
    code: 'SN1',
    name: 'Yakisoba',
    category: 'Special Noodles',
    price: 13,
    description:
      'Stir-fried noodles in savory yakisoba sauce with your choice of protein, crisp cabbage, green beans, carrots, and onions, finished with bonito flakes and mayo.',
    image: MEDIA.udonYakisoba,
  },
  {
    id: 'noodle-regular-udon',
    code: 'SN2',
    name: 'Regular Udon',
    category: 'Special Noodles',
    price: 15,
    description:
      'Thick udon noodles in a light dashi broth with 2 crispy shrimp tempura, green onion, seaweed, kamaboko fish cake, tenkasu, and shiitake mushroom.',
    image: MEDIA.udonYakisoba,
    featured: true,
  },
  {
    id: 'noodle-curry-udon',
    name: 'Curry Udon',
    category: 'Special Noodles',
    price: 16,
    description:
      'Thick chewy udon noodles bathed in warm, savory Japanese curry broth with 2 crispy fried shrimp, green onion, kamaboko, and zuke pickles.',
    image: MEDIA.udonYakisoba,
  },

  // RICE BOWL (8)
  {
    id: 'rice-bulgogi',
    code: 'B1',
    name: 'Bulgogi',
    category: 'Rice Bowl',
    price: 17,
    description:
      'Tender marinated beef over steamed rice accompanied by two crispy gyoza dumplings, sweet corn, green onions, spicy mayo, and savory soy glaze.',
    image: MEDIA.riceTonkatsu,
  },
  {
    id: 'rice-spicy-pork',
    code: 'B2',
    name: 'Spicy Pork',
    category: 'Rice Bowl',
    price: 15,
    description:
      'Fiery marinated pork over steaming rice with two golden gyoza dumplings, green onions, sweet corn, spicy mayo, and rich soy glaze.',
    image: MEDIA.riceTonkatsu,
    dietaryNote: 'Spicy',
  },
  {
    id: 'rice-teriyaki',
    code: 'B3',
    name: 'Teriyaki',
    category: 'Rice Bowl',
    price: 15,
    description:
      'Glazed marinated chicken on fluffy rice with two crispy gyoza, finished with fresh green onions, sweet corn, spicy mayo, and soy glaze.',
    image: MEDIA.riceTonkatsu,
  },
  {
    id: 'rice-fried-rice',
    code: 'B4',
    name: 'Fried Rice',
    category: 'Rice Bowl',
    price: 10,
    description:
      'Flat-iron teppan grilled rice tossed with sweet corn, green peas, cut green beans, lima beans, and carrots, finished with a savory soy glaze.',
    image: MEDIA.riceTonkatsu,
  },
  {
    id: 'rice-curry',
    code: 'B5',
    name: 'Curry Rice',
    category: 'Rice Bowl',
    price: 15,
    description:
      'Rich aromatic Japanese curry sauce paired with your choice of crispy chicken or fried ebi shrimp, served with steamed rice and pickled vegetables.',
    image: MEDIA.riceTonkatsu,
  },
  {
    id: 'rice-tonkatsu',
    code: 'B6',
    name: 'Tonkatsu',
    category: 'Rice Bowl',
    price: 18,
    description:
      'Crispy panko-crusted pork cutlet served with steamed rice and fresh sliced cabbage, drizzled with tangy tonkatsu sauce and bright parsley.',
    image: MEDIA.riceTonkatsu,
    featured: true,
  },
  {
    id: 'rice-cheese-tonkatsu',
    code: 'B7',
    name: 'Cheese Tonkatsu',
    category: 'Rice Bowl',
    price: 19,
    description:
      'Golden panko-crusted pork cutlet filled with melted cheese, served with steamed rice, fresh sliced cabbage, and tangy tonkatsu sauce.',
    image: MEDIA.riceTonkatsu,
  },
  {
    id: 'rice-chashu',
    code: 'B8',
    name: 'Chashu Rice',
    category: 'Rice Bowl',
    price: 15,
    description:
      'Steamed rice topped with tender pork chashu, sweet corn, green onion, spicy mayo, and soy glaze—served with 2 crispy gyoza on the side.',
    image: MEDIA.riceTonkatsu,
  },

  // KIDS MENU (3)
  {
    id: 'kids-ramen',
    code: 'KM1',
    name: 'Kids Ramen',
    category: 'Kids Menu',
    price: 8,
    description:
      'Child-sized bowl with choice of Tonkotsu, Shoyu, Miso, or Vegetable broth and tender noodles, topped with one slice of chashu, soft-boiled egg, and sweet corn.',
    image: MEDIA.heroRamen,
  },
  {
    id: 'kids-rice-bowl',
    code: 'KM2',
    name: 'Kids Rice Bowl',
    category: 'Kids Menu',
    price: 9,
    description:
      'Kid-friendly portion of steamed rice topped with choice of Bulgogi, Teriyaki, or Chashu, served with a soft-boiled egg for added protein.',
    image: MEDIA.riceTonkatsu,
  },
  {
    id: 'kids-fried-rice',
    code: 'KM3',
    name: 'Kids Fried Rice',
    category: 'Kids Menu',
    price: 8,
    description:
      'Teppan-grilled rice with colorful corn, sweet peas, green beans, lima beans, and carrots, finished with a mild, kid-friendly soy glaze.',
    image: MEDIA.riceTonkatsu,
  },

  // DESSERT (5)
  {
    id: 'dessert-mochi',
    name: 'Mochi Ice Cream (2pcs)',
    category: 'Dessert',
    price: 5,
    description:
      'Soft, chewy pounded rice mochi wrapped around creamy ice cream—a refreshing, sweet finish to a warm bowl of ramen.',
    image: MEDIA.dessertTea,
  },
  {
    id: 'dessert-mont-blanc',
    name: 'Mont Blanc Cake',
    category: 'Dessert',
    price: 5,
    description:
      'A delicate Japanese café cake layered with whipped cream and roasted chestnut purée over light sponge cake.',
    image: MEDIA.dessertTea,
  },
  {
    id: 'dessert-cheesecake',
    name: 'Baked Cheese Cake (2pcs)',
    category: 'Dessert',
    price: 5,
    description:
      'Rich, velvety Japanese-style baked cheesecake with a lightly caramelized golden top.',
    image: MEDIA.dessertTea,
  },
  {
    id: 'dessert-bingsu',
    name: 'Bingsu',
    category: 'Dessert',
    price: 7,
    description:
      'Fluffy snow-fine shaved ice dessert layered with sweet condensed milk and seasonal toppings for a light, cooling treat.',
    image: MEDIA.dessertTea,
  },
  {
    id: 'dessert-ice-pop',
    name: 'Ice Pop',
    category: 'Dessert',
    price: 3,
    description:
      'Chilled fruit ice pop—crisp, sweet, and ideal for younger guests or a quick refreshment.',
    image: MEDIA.dessertTea,
  },

  // DRINKS (10)
  {
    id: 'drink-bottled-water',
    name: 'Bottled Water',
    category: 'Drinks',
    price: 2,
    description: 'Chilled purified bottled spring water.',
    image: MEDIA.dessertTea,
  },
  {
    id: 'drink-soft-drink',
    name: 'Soft Drink',
    category: 'Drinks',
    price: 3,
    description: 'Classic fountain or canned sodas served chilled over ice.',
    image: MEDIA.dessertTea,
  },
  {
    id: 'drink-iced-tea',
    name: 'Iced Tea',
    category: 'Drinks',
    price: 3,
    description: 'Freshly brewed iced black tea served crisp over ice.',
    image: MEDIA.dessertTea,
  },
  {
    id: 'drink-sparkling-water',
    name: 'Sparkling Water',
    category: 'Drinks',
    price: 3,
    description: 'Effervescent sparkling mineral water served cold.',
    image: MEDIA.dessertTea,
  },
  {
    id: 'drink-oolong-tea',
    name: 'Cold Oolong Tea',
    category: 'Drinks',
    price: 4,
    description:
      'Unsweetened Japanese roasted oolong tea served chilled—clean and crisp alongside rich tonkotsu broth.',
    image: MEDIA.dessertTea,
  },
  {
    id: 'drink-cold-green-tea',
    name: 'Cold Green Tea',
    category: 'Drinks',
    price: 4,
    description:
      'Chilled unsweetened Japanese sencha green tea with bright, refreshing botanical notes.',
    image: MEDIA.dessertTea,
  },
  {
    id: 'drink-japanese-soda',
    name: 'Japanese Soda',
    category: 'Drinks',
    price: 4,
    description: 'Assorted imported Japanese sparkling fruit and citrus sodas.',
    image: MEDIA.dessertTea,
  },
  {
    id: 'drink-ramune',
    name: 'Ramune',
    category: 'Drinks',
    price: 4,
    description:
      'Iconic Japanese marble-sealed carbonated soda with bright, nostalgic citrus-lemonade fizz.',
    image: MEDIA.dessertTea,
  },
  {
    id: 'drink-hawaiian-sun',
    name: 'Hawaiian Sun',
    category: 'Drinks',
    price: 3.5,
    description: 'Tropical island fruit nectar canned drinks in classic flavors.',
    image: MEDIA.dessertTea,
  },
  {
    id: 'drink-green-tea-pot',
    name: 'Green Tea Pot',
    category: 'Drinks',
    price: 5,
    description:
      'Hot brewed Japanese green tea served in a traditional pot for relaxing table sipping.',
    image: MEDIA.dessertTea,
  },
];
