'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Minus, Plus, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { useLocationPricing } from '@/hooks/useLocationPricing'
import { whatsappLink, type Product } from '@/data/productData'
import Reveal from '@/components/Common/Reveal'

interface ProductDisplayProps {
  product: Product
  /** Anchor id for the section. Defaults to the product slug. */
  sectionId?: string
  /** When set, renders a secondary link to the product's own page. */
  detailsHref?: string
}

const WhatsAppIcon = ({ className }: { className: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
)

export default function ProductDisplay({ product, sectionId, detailsHref }: ProductDisplayProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [selectedEdition, setSelectedEdition] = useState<string | null>(
    product.editions?.[0]?.name ?? null,
  )

  const pricing = useLocationPricing(product.priceIndia, product.priceInternational, product.priceUS)

  const currentPrice = pricing.isIndia ? product.priceIndia : pricing.isUS ? product.priceUS : product.priceInternational
  const originalPrice = pricing.isIndia ? product.originalPriceIndia : pricing.isUS ? product.originalPriceUS : product.originalPriceInternational
  const savings = pricing.isIndia ? product.savingsIndia : pricing.isUS ? product.savingsUS : product.savingsInternational
  const currencySymbol = pricing.isIndia ? '₹' : pricing.isUS ? '$' : 'AED '
  const format = (value: number) => (pricing.isIndia ? value.toLocaleString('en-IN') : String(value))
  const money = (value: number) => (pricing.loading ? '...' : currencySymbol + format(value))

  const total = currentPrice * quantity

  // The pre-filled WhatsApp message carries the shopper's exact selection.
  const orderMessage = [
    product.whatsappMessage,
    '',
    'Product: ' + product.name,
    selectedEdition ? 'Edition: ' + selectedEdition : null,
    'Quantity: ' + quantity,
  ]
    .filter((line) => line !== null)
    .join('\n')

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
  const prevImage = () =>
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length)

  const filledStars = Math.round(product.rating)

  return (
    <div
      id={sectionId ?? product.slug}
      className="scroll-mt-28 rounded-[32px] bg-white p-5 shadow-sm sm:p-8 lg:p-10"
    >
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
        {/* ---------------- Gallery ---------------- */}
        <Reveal direction="left">
          <div className={`relative aspect-[4/3] overflow-hidden rounded-3xl ${product.imageBg}`}>
            {product.badge && (
              <span className="absolute left-4 top-4 z-10 rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
                {product.badge}
              </span>
            )}

            <AnimatePresence mode="wait" initial={false}>
              <motion.img
                key={currentImageIndex}
                src={product.images[currentImageIndex]}
                alt={product.name + ' - image ' + (currentImageIndex + 1)}
                className="h-full w-full object-cover"
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              />
            </AnimatePresence>

            {product.images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={prevImage}
                  aria-label="Previous image"
                  className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow transition hover:bg-white"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={nextImage}
                  aria-label="Next image"
                  className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow transition hover:bg-white"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
          </div>

          {/* Thumbnails */}
          <div
            className="mt-4 grid gap-3"
            style={{ gridTemplateColumns: `repeat(${Math.min(product.images.length, 5)}, minmax(0, 1fr))` }}
          >
            {product.images.map((image, index) => {
              const isActive = currentImageIndex === index
              return (
                <button
                  key={image}
                  type="button"
                  onClick={() => setCurrentImageIndex(index)}
                  aria-label={'Show image ' + (index + 1)}
                  aria-current={isActive}
                  className={`aspect-square overflow-hidden rounded-2xl ${product.imageBg} ring-2 ring-offset-2 transition ${
                    isActive ? 'ring-slate-900' : 'ring-transparent hover:ring-slate-300'
                  }`}
                >
                  <img src={image} alt="" className="h-full w-full object-cover" />
                </button>
              )
            })}
          </div>
        </Reveal>

        {/* ---------------- Details ---------------- */}
        <Reveal direction="right" delay={0.1} className="flex flex-col">
          <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-tight text-slate-900 sm:text-5xl">
            {product.name}
          </h2>
          <p className="mt-3 text-sm text-slate-500">SKU: {product.sku}</p>

          {/* Price + rating */}
          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-extrabold text-red-600">{money(currentPrice)}</span>
              {!pricing.loading && (
                <span className="text-lg text-slate-400 line-through">{money(originalPrice)}</span>
              )}
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5" aria-label={product.rating + ' out of 5 stars'}>
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < filledStars ? 'fill-amber-400 text-amber-400' : 'fill-slate-200 text-slate-200'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-slate-500">({product.reviewCount} reviews)</span>
            </div>
          </div>
          {!pricing.loading && (
            <p className="mt-2 text-sm font-semibold text-emerald-600">You save {money(savings)}</p>
          )}

          {/* Edition picker */}
          {product.editions && product.editions.length > 0 && (
            <div className="mt-7">
              <p className="text-sm font-semibold text-slate-900">Edition</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.editions.map((edition) => {
                  const isSelected = selectedEdition === edition.name
                  return (
                    <button
                      key={edition.name}
                      type="button"
                      onClick={() => setSelectedEdition(edition.name)}
                      aria-pressed={isSelected}
                      className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                        isSelected
                          ? 'border-slate-900 bg-slate-900 text-white'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-slate-400'
                      }`}
                    >
                      {edition.name}
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {/* Quantity + CTA */}
          <div className="mt-7 flex flex-wrap items-center gap-4">
            <div className="inline-flex items-center rounded-full border border-slate-200">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
                className="flex h-12 w-12 items-center justify-center rounded-full text-slate-700 transition hover:bg-slate-100"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-10 text-center font-semibold tabular-nums text-slate-900">
                {String(quantity).padStart(2, '0')}
              </span>
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.min(10, q + 1))}
                aria-label="Increase quantity"
                className="flex h-12 w-12 items-center justify-center rounded-full text-slate-700 transition hover:bg-slate-100"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>

            <a
              href={whatsappLink(orderMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-w-[220px] flex-1 items-center justify-center gap-2 rounded-full bg-yellow-400 px-6 py-3.5 font-bold text-slate-900 transition hover:bg-yellow-300"
            >
              <WhatsAppIcon className="h-5 w-5" />
              <span>Order on WhatsApp · {money(total)}</span>
            </a>
          </div>

          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-xs text-slate-500">
            <span>✓ Pay on Delivery</span>
            <span>✓ 14-day return &amp; exchange</span>
            <span>✓ Delivered in 5–7 days</span>
          </div>

          {/* Description */}
          <div className="mt-8">
            <h3 className="text-sm font-semibold text-slate-900">Product description</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{product.description}</p>
          </div>

          {/* Details */}
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-slate-900">Product details</h3>
            <dl className="mt-2 divide-y divide-slate-100">
              {product.details.map((detail) => (
                <div key={detail.label} className="flex items-baseline justify-between gap-6 py-2.5 text-sm">
                  <dt className="shrink-0 text-slate-500">{detail.label}</dt>
                  <dd className="text-right font-medium text-slate-800">{detail.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {detailsHref && (
            <Link
              href={detailsHref}
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 underline-offset-4 hover:underline"
            >
              View full details
              <ChevronRight className="h-4 w-4" />
            </Link>
          )}
        </Reveal>
      </div>
    </div>
  )
}
