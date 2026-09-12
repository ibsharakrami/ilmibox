'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useLocationPricing } from '@/hooks/useLocationPricing'
import { whatsappLink, type Product } from '@/data/productData'

interface ProductDisplayProps {
  product: Product
  /** Anchor id for the section. Defaults to the product slug. */
  sectionId?: string
  /** When set, renders a secondary link to the product's own page. */
  detailsHref?: string
}

export default function ProductDisplay({ product, sectionId, detailsHref }: ProductDisplayProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const pricing = useLocationPricing(product.priceIndia, product.priceInternational, product.priceUS)

  const currentPrice = pricing.isIndia ? product.priceIndia : pricing.isUS ? product.priceUS : product.priceInternational
  const originalPrice = pricing.isIndia ? product.originalPriceIndia : pricing.isUS ? product.originalPriceUS : product.originalPriceInternational
  const savings = pricing.isIndia ? product.savingsIndia : pricing.isUS ? product.savingsUS : product.savingsInternational
  const currencySymbol = pricing.isIndia ? '₹' : pricing.isUS ? '$' : 'AED '

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  return (
    <div id={sectionId ?? product.slug} className="container mx-auto lg:px-18 py-8 px-8 scroll-mt-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
        {/* Left side - Image Gallery */}
        <div className="space-y-6">
          {/* Main Image */}
          <div className="relative">
            <div className="mx-auto rounded-lg overflow-hidden flex items-center justify-center">
              <img
                src={product.images[currentImageIndex]}
                alt={product.name}
                className="object-contain"
                style={{ maxWidth: '500px', maxHeight: '500px' }}
              />
            </div>
            
            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-colors"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-colors"
              aria-label="Next image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Thumbnail Images */}
          <div
            className="grid gap-2"
            style={{ gridTemplateColumns: `repeat(${Math.min(product.images.length, 5)}, minmax(0, 1fr))` }}
          >
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                  currentImageIndex === index
                    ? 'border-green-500 scale-105'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <img
                  src={image}
                  alt={`${product.name} - Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right side - Product Details */}
        <div className="space-y-6">
          {/* Product Title */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="mt-2 text-lg text-gray-500">{product.tagline}</p>
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed">
            {product.description}
          </p>

          {/* Editions */}
          {product.editions && product.editions.length > 0 && (
            <div className="space-y-3">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                Choose your edition
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {product.editions.map((edition) => (
                  <div
                    key={edition.name}
                    className="rounded-xl border border-gray-200 p-4 transition-colors hover:border-green-400"
                  >
                    <div className="flex items-center space-x-2">
                      <span className={`h-3 w-3 rounded-full ${edition.accent}`} />
                      <span className="font-semibold text-gray-900">{edition.name}</span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {edition.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Features */}
          <div className="space-y-3">
            {product.features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          {/* Pricing */}
          <div className="bg-gray-50 rounded-lg p-6 space-y-3">
            <div className="flex items-baseline space-x-2">
              <span className="text-3xl font-bold text-green-600">
                {currencySymbol}{pricing.isIndia ? currentPrice.toLocaleString('en-IN') : currentPrice}
              </span>
              <span className="text-lg text-gray-400 line-through">
                {currencySymbol}{pricing.isIndia ? originalPrice.toLocaleString('en-IN') : originalPrice}
              </span>
            </div>
            <div className="text-green-600 font-medium">
              You Save: {currencySymbol}{pricing.isIndia ? savings.toLocaleString('en-IN') : savings}
            </div>
          </div>

          {/* Additional Info */}
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Pay on Delivery available</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Easy 14 days return & exchange available</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Usually delivered in 5-7 days</span>
            </div>
          </div>

          {/* CTA Button */}
          <a 
            href={whatsappLink(product.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            <span>Order Now on WhatsApp</span>
          </a>

          {/* Link to the dedicated product page */}
          {detailsHref && (
            <Link
              href={detailsHref}
              className="block w-full rounded-lg border border-gray-300 py-4 px-6 text-center font-semibold text-gray-900 transition-colors duration-200 hover:border-gray-900"
            >
              View Full Details
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
