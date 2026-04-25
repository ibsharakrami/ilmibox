import { useState, useEffect } from 'react'

interface LocationPricing {
  isIndia: boolean
  inrPrice: number
  aedPrice: number
  displayPrice: string
  currency: string
  loading: boolean
}

export const useLocationPricing = (inrPrice: number, aedPrice: number): LocationPricing => {
  const [isIndia, setIsIndia] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const detectLocation = async () => {
      try {
        // Try to get location from IP geolocation service
        const response = await fetch('https://ipapi.co/json/')
        const data = await response.json()
        
        // Check if country code is IN for India
        const inIndiaRegion = data.country_code === 'IN'
        setIsIndia(inIndiaRegion)
      } catch (error) {
        // Fallback: Try using browser's timezone API
        try {
          const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
          // Common India timezones
          setIsIndia(timezone === 'Asia/Kolkata' || timezone === 'Asia/Calcutta')
        } catch {
          // Default to international pricing if detection fails
          setIsIndia(false)
        }
      } finally {
        setLoading(false)
      }
    }

    detectLocation()
  }, [])

  return {
    isIndia,
    inrPrice,
    aedPrice,
    displayPrice: isIndia ? `₹${inrPrice.toLocaleString('en-IN')}` : `AED ${aedPrice}`,
    currency: isIndia ? 'INR' : 'AED',
    loading
  }
}
