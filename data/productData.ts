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

export type ProductReciter = {
  name: string
  /** Where the reciter is best known from, e.g. "Makkah". */
  origin: string
  description: string
  /**
   * Edition names this reciter is featured on. Omit to show the reciter
   * for every edition.
   */
  editions?: string[]
}

export type ProductSetupStep = {
  title: string
  description: string
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
  /** Reciters featured on the device (from the printed user guide). */
  reciters?: ProductReciter[]
  /** "How to start" steps, mirroring the printed user guide. */
  setup?: ProductSetupStep[]
  /** Care and safety notes from the printed user guide. */
  careNotes?: string[]
  safetyNotes?: string[]
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
    '/images/deen/product4.png',
    '/images/deen/product3.jpg',
    '/images/deen/product2.jpg',
    '/images/deen/product.jpg',
  ],
  cardImage: '/images/deen/product4.png',
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
    'The Quran Audio Magnet turns any fridge, door or metal surface into a place of remembrance. It holds all 114 Surahs of the Holy Quran, plus Morning Adhkar, Evening Adhkar and Ruqyah Shariyah, recited by Sheikh Saud Ash-Shuraim, Sheikh Ali Al-Hudhaify and Sheikh Mishary Rashid Alafasy. Press a Surah number on the remote and recitation begins straight away. Switch to Bluetooth mode and it becomes a speaker for your own audio. Choose the Makkah Edition or the Madinah Edition, each arriving in a premium gift box.',
  badge: 'New Arrival',
  sku: 'ILMI-QAM-002',
  rating: 4.9,
  reviewCount: 84,
  imageBg: 'bg-emerald-100',
  details: [
    { label: 'Editions', value: 'Makkah Edition, Madinah Edition' },
    {
      label: 'Audio content',
      value: 'All 114 Surahs, plus Morning Adhkar, Evening Adhkar and Ruqyah Shariyah',
    },
    { label: 'Connectivity', value: 'Bluetooth' },
    { label: 'Charging port', value: 'USB Type-C' },
    { label: 'Power source', value: 'Rechargeable battery' },
    { label: 'Controls', value: 'Remote control and touch panel' },
    { label: 'Sleep timer', value: '30 or 60 minutes' },
    { label: 'Product size', value: '10 × 10 cm' },
    { label: 'Mount', value: 'Strong magnetic back, desk stand included' },
    { label: 'Brand', value: 'ilmiBox' },
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
    'All 114 Surahs of the Holy Quran in one slim magnetic speaker',
    'Morning Adhkar, Evening Adhkar and Ruqyah Shariyah included',
    'Recited by Sheikh Saud Ash-Shuraim, Sheikh Ali Al-Hudhaify and Sheikh Mishary Rashid Alafasy',
    'Remote control — press a Surah number and recitation starts straight away',
    'Bluetooth mode turns it into a speaker for your own audio',
    '30 and 60 minute sleep timers for bedtime listening',
    'Strong magnetic back for the fridge, with a desk stand in the box',
    'USB-C rechargeable, no batteries to replace',
    'Two editions: Makkah (Kaaba) and Madinah (Green Dome)',
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
      title: 'The Whole Quran, One Tap Away',
      description:
        'All 114 Surahs plus Morning and Evening Adhkar and Ruqyah Shariyah. Press a number on the remote and recitation begins.',
    },
    {
      title: 'Haramain Artwork',
      description:
        'High-definition Makkah and Madinah imagery with a protective glossy finish that stays beautiful for years.',
    },
    {
      title: 'A Speaker Too',
      description:
        'Switch to Bluetooth mode to play your own audio, and set a 30 or 60 minute sleep timer for bedtime.',
    },
  ],
  inTheBox: [
    '1x Quran Audio Magnet (Makkah or Madinah Edition)',
    'Remote control',
    'USB-C charging cable',
    'Desk stand',
    'User guide',
    'Premium gift box',
  ],
  editions: [
    {
      name: 'Makkah Edition',
      description:
        'Inspired by the beauty and spiritual atmosphere of the Holy Kaabah, the Makkah Edition features a luxurious design to bring the beautiful recitation of the Quran into your home.',
      image: '/images/deen/magnet/ilm1.jpeg',
      accent: 'bg-slate-900',
    },
    {
      name: 'Madinah Edition',
      description:
        'Inspired by the peaceful atmosphere of Al-Masjid an-Nabawi, the Madinah Edition is designed to create a calm and spiritual environment in every home.',
      image: '/images/deen/magnet/ilm2.jpeg',
      accent: 'bg-emerald-700',
    },
  ],
  reciters: [
    {
      name: 'Sheikh Saud Ash-Shuraim',
      origin: 'Makkah',
      description:
        'Known for his powerful and emotional Quran recitation from Makkah.',
      editions: ['Makkah Edition'],
    },
    {
      name: 'Sheikh Ali Al-Hudhaify',
      origin: 'Madinah',
      description:
        'Recognised for his calm, clear and beautiful recitation from Madinah.',
      editions: ['Madinah Edition'],
    },
    {
      name: 'Sheikh Mishary Rashid Alafasy',
      origin: 'Worldwide',
      description:
        'Internationally renowned for his Quran recitation, Adhkar and Islamic audio recordings.',
    },
  ],
  setup: [
    {
      title: 'Charge it first',
      description:
        'Connect the included USB-C cable to a power adapter or computer and charge fully before the first use. A red light shows it is charging and turns off once the battery is full.',
    },
    {
      title: 'Switch it on',
      description:
        'Slide the power switch on the side of the device. Audio playback is ready straight away.',
    },
    {
      title: 'Play the Quran',
      description:
        'Tap the front panel to play or pause. On the remote, press a number from 1 to 114 to jump to any Surah, or 115, 116 and 117 for Morning Adhkar, Evening Adhkar and Ruqyah Shariyah.',
    },
    {
      title: 'Adjust as you listen',
      description:
        'Use the remote to change the volume, repeat a Surah, skip to the next or previous one, or set a 30 or 60 minute sleep timer.',
    },
    {
      title: 'Connect by Bluetooth',
      description:
        'Press Mode to switch to Bluetooth, then pair from your phone with "Ilmibox Quran MP3" to play your own audio through the speaker.',
    },
    {
      title: 'Put it where you pray and gather',
      description:
        'The magnetic back holds it on a fridge or any metal surface. Use the included desk stand for shelves, office desks and study spaces.',
    },
  ],
  careNotes: [
    'Keep away from water and excessive heat.',
    'Clean using a soft dry cloth.',
    'Do not use chemical cleaners.',
    'Avoid dropping the device.',
  ],
  safetyNotes: [
    'Keep out of reach of small children.',
    'Do not attempt to open the device.',
    'Use only compatible charging adapters.',
    'Use standard 5V USB charging only.',
  ],
}

export const products: Product[] = [laptopProduct, quranAudioMagnet]

export const getProductBySlug = (slug: string): Product | undefined =>
  products.find((product) => product.slug === slug)
