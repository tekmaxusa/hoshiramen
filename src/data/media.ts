import heroRamenImg from '../assets/images/hero_ramen_bowl_1794619876313.jpg';
import specialtyRamenImg from '../assets/images/dish_ramen_specialty_1794619876084.jpg';
import riceTonkatsuImg from '../assets/images/dish_rice_tonkatsu_1794619876886.jpg';
import udonYakisobaImg from '../assets/images/dish_udon_yakisoba_1794619877405.jpg';
import interiorImg from '../assets/images/restaurant_interior_clean_1794619892765.jpg';
import dessertTeaImg from '../assets/images/dish_dessert_tea_1794619878840.jpg';

/** Prefix public/ assets with Vite base (needed for GitHub project Pages). */
function publicAsset(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  const normalizedPath = path.replace(/^\//, '');
  return `${normalizedBase}${normalizedPath}`;
}

/** Tekmax order-site dish photos (public/images/menu) */
const MENU = publicAsset('images/menu');

export const MEDIA = {
  logo: publicAsset('images/hoshi-logo.png'),
  refHero: publicAsset('images/ref-hero.jpg'),
  heroRamen: heroRamenImg,
  specialtyRamen: specialtyRamenImg,
  riceTonkatsu: riceTonkatsuImg,
  udonYakisoba: udonYakisobaImg,
  interior: interiorImg,
  dessertTea: dessertTeaImg,

  // Appetizers
  edamame: `${MENU}/edamame.jpg`,
  korokke: `${MENU}/korokke.jpg`,
  springRoll: `${MENU}/spring-roll.jpg`,
  gyoza: `${MENU}/gyoza.jpg`,
  takoyaki: `${MENU}/takoyaki.jpg`,
  chickenKaraage: `${MENU}/chicken-karaage.jpg`,
  squidKaraage: `${MENU}/squid-karaage.jpg`,
  chashuBun: `${MENU}/chashu-bun.jpg`,
  chickenBun: `${MENU}/chicken-bun.jpg`,
  ebiFry: `${MENU}/ebi-fry.jpg`,
  koreanPancake: `${MENU}/korean-pancake.jpg`,

  // Ramen
  hoshiRamen: `${MENU}/hoshi-ramen.jpg`,
  texanRamen: `${MENU}/texan-ramen.jpg`,
  kimchiRamen: `${MENU}/kimchi-ramen.jpg`,
  garlicRamen: `${MENU}/garlic-ramen.jpg`,
  vegetableRamen: `${MENU}/vegetable-ramen.jpg`,
  bulgogiRamen: `${MENU}/bulgogi-ramen.jpg`,

  // Special noodles
  yakisoba: `${MENU}/yakisoba.jpg`,
  regularUdon: `${MENU}/regular-udon.jpg`,

  // Rice bowls
  bulgogiBowl: `${MENU}/bulgogi-bowl.jpg`,
  spicyPork: `${MENU}/spicy-pork.jpg`,
  teriyakiBowl: `${MENU}/teriyaki-bowl.jpg`,
  friedRice: `${MENU}/fried-rice.jpg`,
  curryRice: `${MENU}/curry-rice.jpg`,
  tonkatsu: `${MENU}/tonkatsu.jpg`,
  cheeseTonkatsu: `${MENU}/cheese-tonkatsu.jpg`,

  // Dessert
  mochi: `${MENU}/mochi.jpg`,
  montBlanc: `${MENU}/mont-blanc.jpg`,
  cheesecake: `${MENU}/cheesecake.jpg`,

  // Legacy aliases (kept for any remaining refs)
  refEdamame: `${MENU}/edamame.jpg`,
  refKorokke: `${MENU}/korokke.jpg`,
  refSpringRoll: `${MENU}/spring-roll.jpg`,
  refGyoza: `${MENU}/gyoza.jpg`,
  refTakoyaki: `${MENU}/takoyaki.jpg`,
  refKaraage: `${MENU}/chicken-karaage.jpg`,
  refSquidKaraage: `${MENU}/squid-karaage.jpg`,
  refChashuBun: `${MENU}/chashu-bun.jpg`,
  refChickenBun: `${MENU}/chicken-bun.jpg`,
} as const;
