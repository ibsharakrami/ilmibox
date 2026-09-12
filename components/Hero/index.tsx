"use client";
import { useEffect, useState, type TouchEvent } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { products, whatsappLink } from "@/data/productData";
import { useLocationPricing } from "@/hooks/useLocationPricing";

const SLIDE_DURATION = 6000;
const MIN_SWIPE_DISTANCE = 50;

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const product = products[activeIndex];
  const pricing = useLocationPricing(
    product.priceIndia,
    product.priceInternational,
    product.priceUS,
  );

  const currentPrice = pricing.isIndia
    ? product.priceIndia
    : pricing.isUS
      ? product.priceUS
      : product.priceInternational;
  const originalPrice = pricing.isIndia
    ? product.originalPriceIndia
    : pricing.isUS
      ? product.originalPriceUS
      : product.originalPriceInternational;
  const savings = pricing.isIndia
    ? product.savingsIndia
    : pricing.isUS
      ? product.savingsUS
      : product.savingsInternational;
  const currencySymbol = pricing.isIndia ? "₹" : pricing.isUS ? "$" : "AED ";
  const format = (value: number) =>
    pricing.isIndia ? value.toLocaleString("en-IN") : String(value);

  const goToSlide = (index: number) => {
    setActiveIndex((index + products.length) % products.length);
  };

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % products.length);
  const prevSlide = () =>
    setActiveIndex((prev) => (prev - 1 + products.length) % products.length);

  // Auto-advance between products, paused while the visitor is interacting.
  useEffect(() => {
    if (isPaused || products.length < 2) return;

    const interval = setInterval(nextSlide, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.touches[0].clientX);
    setTouchEnd(null);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart === null || touchEnd === null) return;
    const distance = touchStart - touchEnd;
    if (Math.abs(distance) > MIN_SWIPE_DISTANCE) {
      if (distance > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <>
      <section className="overflow-hidden bg-slate-900 pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div
          className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="flex flex-col-reverse gap-10 lg:flex-row lg:items-center lg:gap-8 xl:gap-32.5">
            {/* Left - copy, pricing and CTAs */}
            <div className="w-full lg:w-1/2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.45 }}
                >
                  <h4 className="mb-4.5 text-lg font-medium text-white">
                    {product.name}
                  </h4>
                  <h1 className="mb-5 pr-0 text-3xl font-bold text-white xl:text-hero">
                    {product.heroTitle}{" "}
                    {product.heroHighlight && (
                      <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-amber-300/30">
                        {product.heroHighlight}
                      </span>
                    )}
                  </h1>
                  <p className="text-slate-300">{product.shortDescription}</p>

                  <div className="mt-10">
                    <div className="rounded-2xl bg-white/10 p-6 text-white backdrop-blur-md">
                      <div className="flex items-center gap-4">
                        <span className="text-2xl text-gray-300 line-through">
                          {pricing.loading
                            ? "..."
                            : currencySymbol + format(originalPrice)}
                        </span>

                        <span className="text-4xl font-bold text-white">
                          {pricing.loading
                            ? "..."
                            : currencySymbol + format(currentPrice)}
                        </span>
                      </div>

                      <p className="mt-3 font-medium text-yellow-400">
                        {pricing.loading
                          ? "Checking best price..."
                          : "Limited Time Offer - Save " +
                            currencySymbol +
                            format(savings) +
                            "!"}
                      </p>

                      <p className="mt-2 flex items-center gap-2 text-green-400">
                        {pricing.region === "AE"
                          ? "🚚 Free Delivery all over UAE"
                          : pricing.region === "US"
                            ? "🚚 Free Delivery across US"
                            : pricing.region === "IN"
                              ? "🚚 Pan India Delivery"
                              : "🚚 International shipping available"}
                      </p>
                    </div>

                    <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                      <a
                        href={whatsappLink(product.whatsappMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 rounded-full bg-green-500 px-8 py-3 font-semibold text-white transition hover:bg-green-600"
                      >
                        🛒 Order via WhatsApp
                      </a>

                      <Link
                        href={"/products/" + product.slug}
                        className="flex items-center justify-center rounded-full border border-white/30 px-7.5 py-3 font-semibold text-white duration-300 ease-in-out hover:bg-white/10"
                      >
                        Learn More
                      </Link>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-6 text-sm text-white">
                      <span>🟢 COD Available</span>
                      <span>🟢 Safe Payment</span>
                      <span>🟢 Fast Delivery</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right - product image slider */}
            <div className="animate_right w-full lg:w-1/2">
              <div className="relative mx-auto max-w-xl rounded-[32px] border border-white/10 bg-slate-950 shadow-2xl">
                {product.badge && (
                  <span className="absolute left-6 top-6 z-10 rounded-full bg-emerald-500 px-4 py-1 text-xs font-semibold text-white shadow-lg">
                    {product.badge}
                  </span>
                )}

                <div className="relative overflow-hidden rounded-[32px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.45 }}
                      className="relative aspect-[4/3] w-full bg-white"
                    >
                      <img
                        src={product.cardImage}
                        alt={product.name}
                        className="h-full w-full object-contain p-4"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {products.length > 1 && (
                  <>
                    <button
                      onClick={prevSlide}
                      aria-label="Previous product"
                      className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-md transition hover:bg-white"
                    >
                      <svg
                        className="h-6 w-6 text-slate-900"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={nextSlide}
                      aria-label="Next product"
                      className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-md transition hover:bg-white"
                    >
                      <svg
                        className="h-6 w-6 text-slate-900"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </>
                )}
              </div>

              {/* Slide indicators */}
              {products.length > 1 && (
                <div className="mt-6 flex items-center justify-center gap-3">
                  {products.map((item, index) => (
                    <button
                      key={item.id}
                      onClick={() => goToSlide(index)}
                      aria-label={"Show " + item.name}
                      aria-current={index === activeIndex}
                      className={`flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition ${
                        index === activeIndex
                          ? "border-emerald-400 bg-emerald-400/10 text-emerald-300"
                          : "border-white/20 text-slate-400 hover:border-white/40 hover:text-slate-200"
                      }`}
                    >
                      <span
                        className={`h-2 w-2 rounded-full ${
                          index === activeIndex ? "bg-emerald-400" : "bg-slate-500"
                        }`}
                      />
                      {item.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
