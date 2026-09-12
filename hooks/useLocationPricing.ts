import { useState, useEffect } from 'react'

interface LocationPricing {
  isIndia: boolean
  isUS: boolean
  isUAE: boolean
  inrPrice: number
  aedPrice: number
  usdPrice: number
  displayPrice: string
  currency: string
  region: string
  loading: boolean
}

export const useLocationPricing = (inrPrice: number, aedPrice: number, usdPrice: number): LocationPricing => {
  const [isIndia, setIsIndia] = useState(false)
  const [isUS, setIsUS] = useState(false)
  const [isUAE, setIsUAE] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const detectLocation = async () => {
      // Dev-only: allow forcing region via localStorage for testing (does not use URL)
      try {
        if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
          const forcedLS = window.localStorage.getItem('forceRegion')
          if (forcedLS === 'US') {
            setIsUS(true)
            setIsIndia(false)
            setIsUAE(false)
            setLoading(false)
            return
          }
          if (forcedLS === 'IN') {
            setIsIndia(true)
            setIsUS(false)
            setIsUAE(false)
            setLoading(false)
            return
          }
          if (forcedLS === 'AE') {
            setIsUAE(true)
            setIsIndia(false)
            setIsUS(false)
            setLoading(false)
            return
          }
        }
      } catch {
        // ignore localStorage access errors
      }
      // IP geolocation API requests are blocked by CORS in the browser, so use client-side
      // heuristics for region detection instead. This is best-effort and avoids runtime failure.
      try {
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || ''
        const lang = typeof navigator !== 'undefined'
          ? (navigator.language || (navigator.languages && navigator.languages[0]) || '')
          : ''

        const tzLooksLikeUS = timezone.startsWith('America/')
        const langLooksLikeUS = typeof lang === 'string' && lang.toLowerCase().includes('en-us')

        const tzIsIndia = timezone === 'Asia/Kolkata' || timezone === 'Asia/Calcutta'
        const tzIsUAE = timezone === 'Asia/Dubai'

        setIsIndia((prev) => prev || tzIsIndia)
        setIsUS((prev) => prev || (tzLooksLikeUS && langLooksLikeUS))
        setIsUAE((prev) => prev || tzIsUAE || (typeof lang === 'string' && lang.toLowerCase().includes('ae')))
      } catch {
        // ignore fallback failures
      }

      setLoading(false)
    }

    detectLocation()
  }, [])

  const displayPrice = isIndia
    ? `₹${inrPrice.toLocaleString('en-IN')}`
    : isUS
    ? `$${usdPrice}`
    : `AED ${aedPrice}`

  const currency = isIndia ? 'INR' : isUS ? 'USD' : isUAE ? 'AED' : 'AED'

  const region = isIndia ? 'IN' : isUS ? 'US' : isUAE ? 'AE' : 'INT'

  return {
    isIndia,
    isUS,
    isUAE,
    inrPrice,
    aedPrice,
    usdPrice,
    displayPrice,
    currency,
    region,
    loading
  }
}
