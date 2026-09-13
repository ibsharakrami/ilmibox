export type ProductEdition = {
  name: string
  description: string
  image: string
  accent: string
}

export type ProductHighlight = {
  title: string
  description: string
}

export type ProductDetail = {
  label: string
  value: string
}

export type Product = {
  id: string
  slug: string
  name: string
  tagline: string
  /** Headline used on the home page hero slider. */
  heroTitle: string
  /** Trailing phrase of the hero headline, rendered with a highlight. */
  heroHighlight?: string
  shortDescription: string
  description: string
  badge?: string
  sku: string
  rating: number
  reviewCount: number
  /** Tailwind background class behind the gallery image and thumbnails. */
  imageBg: string
  /** Key/value rows shown under "Product details". */
  details: ProductDetail[]
  // India pricing (INR)
  priceIndia: number
  originalPriceIndia: number
  savingsIndia: number
  // US pricing (USD)
  priceUS: number
  originalPriceUS: number
  savingsUS: number
  // International pricing (AED)
  priceInternational: number
  originalPriceInternational: number
  savingsInternational: number
  features: string[]
  images: string[]
  cardImage: string
  whatsappMessage: string
  highlights: ProductHighlight[]
  inTheBox: string[]
  editions?: ProductEdition[]
}

export const WHATSAPP_NUMBER = '971524569983'

export const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

export const laptopProduct: Product = {
  id: '1',
  slug: 'yamani-islamic-learning-laptop',
  name: 'Yamani Laptop',
  tagline: 'Fun Islamic Learning Toy Laptop for Kids (50+ Activities)',
  heroTitle: 'Fun Islamic Learning Toy Laptop for Kids',
  heroHighlight: '(50+ Activities)',
  shortDescription:
    'An interactive Islamic learning laptop for kids aged 3+, packed with 50+ activities.',
  description:
    'Experience the perfect blend of performance and portability with our premium Yamani Laptop. Designed for professionals and students alike, this laptop delivers exceptional power in a sleek, lightweight package.',
  badge: 'Best Seller',
  sku: 'ILMI-YL-001',
  rating: 4.8,
  reviewCount: 267,
  imageBg: 'bg-sky-100',
  details: [
    { label: 'Age', value: '3 years and above' },
    { label: 'Content', value: '50+ activities — Surahs, Ahadith, Duas, nasheeds, Q&A' },
    { label: 'Power', value: 'Battery operated (batteries included)' },
    { label: 'Perfect for', value: 'Gifting, daily learning, Eid & birthdays' },
  ],
  // India pricing
  priceIndia: 2400,
  originalPriceIndia: 2999,
  savingsIndia: 599,
  // US pricing (USD)
  priceUS: 30,
  originalPriceUS: 40,
  savingsUS: 10,
  // International pricing (AED)
  priceInternational: 99,
  originalPriceInternational: 120,
  savingsInternational: 21,
  features: [
    'High-quality educational content',
    'Durable and kid-friendly design',
    'Clear audio pronunciation',
    'Battery operated (included)',
    'Perfect gift for kids aged 3 and above',
    'Encourages islamic learning',
  ],
  images: [
    '/images/deen/product.jpg',
    '/images/deen/product2.jpg',
    '/images/deen/product3.jpg',
    '/images/deen/product4.png',
  ],
  cardImage: '/images/deen/product.jpg',
  whatsappMessage:
    'Hi, I saw the Yamani Islamic Learning Laptop for Kids with 50+ activities.\n\nI would like to place an order. Is it available for delivery?\n\nPlease assist. Thank you!',
  highlights: [
    {
      title: '50+ Activities',
      description:
        'Surahs, Ahadith, Duas, Islamic songs and interactive Q&A in one device.',
    },
    {
      title: 'Built for Little Hands',
      description:
        'Durable, lightweight and kid-friendly design made for ages 3 and above.',
    },
    {
      title: 'Clear Pronunciation',
      description:
        'Crisp audio that helps children memorise and recite with confidence.',
    },
  ],
  inTheBox: ['1x Yamani Learning Laptop', 'Batteries included', 'User guide'],
}

export const quranAudioMagnet: Product = {
  id: '2',
  slug: 'quran-audio-magnet',
  name: 'Quran Audio Magnet',
  tagline: 'A Quran Companion for Every Home',
  heroTitle: 'Quran Audio Magnet for Every Home',
  heroHighlight: '(Makkah & Madinah)',
  shortDescription:
    'A slim magnetic Quran speaker for your fridge or any metal surface — available in Makkah and Madinah editions.',
  description:
    'The Quran Audio Magnet turns any fridge, door or metal surface into a place of remembrance. Slim, elegant and beautifully finished with imagery of the Haramain, it plays the Quran at the touch of a button — so recitation flows through your home all day long. Choose the Makkah Edition or the Madinah Edition, each arriving in a premium gift box.',
  badge: 'New Arrival',
  sku: 'ILMI-QAM-002',
  rating: 4.9,
  reviewCount: 84,
  imageBg: 'bg-emerald-100',
  details: [
    { label: 'Editions', value: 'Makkah Edition, Madinah Edition' },
    { label: 'Mount', value: 'Strong built-in magnet — fridge or any metal surface' },
    { label: 'Power', value: 'Rechargeable (charging cable included)' },
    { label: 'Perfect for', value: 'Kitchen, office, gifting, a new home' },
  ],
  // India pricing
  priceIndia: 4500,
  originalPriceIndia: 6000,
  savingsIndia: 1500,
  // US pricing (USD)
  priceUS: 55,
  originalPriceUS: 75,
  savingsUS: 20,
  // International pricing (AED)
  priceInternational: 185,
  originalPriceInternational: 245,
  savingsInternational: 60,
  features: [
    'Complete Quran audio in a slim magnetic speaker',
    'Two editions: Makkah (Kaaba) and Madinah (Green Dome)',
    'Strong built-in magnet — sticks to any fridge or metal surface',
    'Clear, room-filling sound with renowned reciters',
    'Rechargeable and fully portable',
    'Arrives in a premium gift box — perfect for gifting',
  ],
  images: [
    '/images/deen/magnet/ilm1.jpeg', // Makkah Edition magnet
    '/images/deen/magnet/ilm2.jpeg', // Madinah Edition magnet
    '/images/deen/magnet/ilm4.jpeg', // Makkah Edition gift box
    '/images/deen/magnet/ilm3.jpeg', // Madinah Edition gift box
    '/images/deen/magnet/ilm5.jpeg', // back of magnet - speaker + magnet disc
  ],
  cardImage: '/images/deen/magnet/ilm1.jpeg',
  whatsappMessage:
    'Hi, I saw the Quran Audio Magnet (A Quran Companion for Every Home).\n\nI would like to place an order. Please share the available editions and delivery details.\n\nThank you!',
  highlights: [
    {
      title: 'Quran in Every Room',
      description:
        'Place it on the fridge, the kitchen door or the office cabinet — recitation is always one tap away.',
    },
    {
      title: 'Haramain Artwork',
      description:
        'High-definition Makkah and Madinah imagery with a protective glossy finish that stays beautiful for years.',
    },
    {
      title: 'Gift-Ready Packaging',
      description:
        'Each magnet ships in a window gift box, making it a thoughtful gift for Eid, Nikkah or a new home.',
    },
  ],
  inTheBox: [
    '1x Quran Audio Magnet (Makkah or Madinah Edition)',
    'Premium window gift box',
    'Charging cable',
    'Quick start guide',
  ],
  editions: [
    {
      name: 'Makkah Edition',
      description:
        'The door of the Kaaba in rich black and gold — a striking centrepiece for any home.',
      image: '/images/deen/magnet/ilm1.jpeg',
      accent: 'bg-slate-900',
    },
    {
      name: 'Madinah Edition',
      description:
        'The Green Dome of Masjid an-Nabawi, captured in calm emerald tones.',
      image: '/images/deen/magnet/ilm2.jpeg',
      accent: 'bg-emerald-700',
    },
  ],
}

export const products: Product[] = [laptopProduct, quranAudioMagnet]

export const getProductBySlug = (slug: string): Product | undefined =>
  products.find((product) => product.slug === slug)
