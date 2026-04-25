"use client";
import Image from "next/image";
import { useEffect, useState, type TouchEvent } from "react";
import { useLocationPricing } from "@/hooks/useLocationPricing";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const pricing = useLocationPricing(2400, 99)

  const galleryImages = [
    "/images/deen/product.jpg",
    "/images/deen/product2.jpg",
    "/images/deen/product3.jpg",
    "/images/deen/product4.png",
  ]

  const currentPrice = pricing.isIndia ? 2400 : 99
  const originalPrice = pricing.isIndia ? 2999 : 120
  const savings = pricing.isIndia ? 599 : 21
  const currencySymbol = pricing.isIndia ? "₹" : "AED "

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const minSwipeDistance = 50

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.touches[0].clientX)
  }

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.touches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart === null || touchEnd === null) return
    const distance = touchStart - touchEnd
    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        nextImage()
      } else {
        setCurrentImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))
      }
    }
    setTouchStart(null)
    setTouchEnd(null)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage()
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <section className="overflow-hidden bg-slate-900 pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse gap-10 lg:flex-row lg:items-center lg:gap-8 xl:gap-32.5">
            <div className="w-full lg:w-1/2">
              <h4 className="mb-4.5 text-lg font-medium text-white">
                 Yamani Islamic Learning Laptop for Kids
              </h4>
              <h1 className="mb-5 pr-0 text-3xl font-bold text-white xl:text-hero ">
                Fun Islamic Learning Toy Laptop for Kids
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-amber-300/30">
                  (50+ Activities)
                </span>
              </h1>
              <p className="text-slate-300">
               An interactive Islamic learning laptop for kids (3+). Includes 50+ fun activities like Surahs, Ahadith, Duas, Islamic songs, and educational games to help children learn Islam in a fun and engaging way.
              </p>

              <div className="mt-10">


                  <div className="bg-black/10 dark:bg-white/10 backdrop-blur-md rounded-2xl p-6 text-white">
    
    <div className="flex  items-center gap-4">
      <span className="line-through text-gray-300 text-2xl">
        {currencySymbol}{pricing.isIndia ? originalPrice.toLocaleString('en-IN') : originalPrice}
      </span>

      <span className="text-4xl font-bold text-white dark:text-white">
        {currencySymbol}{pricing.isIndia ? currentPrice.toLocaleString('en-IN') : currentPrice}
      </span>
    </div>

    <p className="text-yellow-400 mt-3 font-medium">
      Limited Time Offer - Save {currencySymbol}{pricing.isIndia ? savings.toLocaleString('en-IN') : savings}!
    </p>

    <p className="text-green-400 mt-2 flex items-center  gap-2">
      🚚 Free Delivery all over UAE
    </p>

  </div>
                  <div className="flex flex-col sm:flex-row  gap-4 mt-6">

    <a
      href="https://wa.me/971524569983?text=Hi%2C%20I%20saw%20the%20Yamani%20Islamic%20Learning%20Laptop%20for%20Kids%20with%2050%2B%20activities.%0A%0AI%20would%20like%20to%20place%20an%20order.%20Is%20it%20available%20for%20delivery%3F%0A%0APlease%20assist.%20Thank%20you%21"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2"
    >
      🛒 Order via WhatsApp
    </a>


       <button
                      aria-label="get started button"
                      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                      Learn More
                    </button>

  </div>
                  <div className="flex flex-wrap  gap-6 mt-6 text-sm text-white dark:text-white">
    <span>🟢 COD Available</span>
    <span>🟢 Safe Payment</span>
    <span>🟢 Fast Delivery</span>
  </div>
      
              </div>
            </div>

            <div className="animate_right w-full lg:w-1/2">
              <div className="mx-auto max-w-xl rounded-[32px] border border-white/10 bg-slate-950 shadow-2xl">
                <div
                  className="relative overflow-hidden rounded-[32px]"
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={galleryImages[currentImageIndex]}
                      alt={`Yamani product ${currentImageIndex + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
