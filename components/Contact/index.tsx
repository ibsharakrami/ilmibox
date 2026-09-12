"use client";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import { useLocationPricing } from "@/hooks/useLocationPricing";
import { products, whatsappLink, type Product } from "@/data/productData";

const CheckIcon = () => (
  <svg
    className="h-5 w-5 flex-shrink-0 text-emerald-400"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const WhatsAppIcon = ({ className }: { className: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const Contact = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const selected = products[selectedIndex];
  const pricing = useLocationPricing(
    selected.priceIndia,
    selected.priceInternational,
    selected.priceUS,
  );

  const currencySymbol = pricing.isIndia ? "₹" : pricing.isUS ? "$" : "AED ";
  const format = (value: number) =>
    pricing.isIndia ? value.toLocaleString("en-IN") : String(value);

  const priceOf = (product: Product) =>
    pricing.isIndia
      ? product.priceIndia
      : pricing.isUS
        ? product.priceUS
        : product.priceInternational;

  const originalPriceOf = (product: Product) =>
    pricing.isIndia
      ? product.originalPriceIndia
      : pricing.isUS
        ? product.originalPriceUS
        : product.originalPriceInternational;

  const displayPrice = (product: Product) =>
    pricing.loading ? "..." : currencySymbol + format(priceOf(product));

  // Message used when someone is interested in the whole range.
  const bothProductsMessage =
    "Hi, I am interested in ilmiBox products - " +
    products.map((product) => product.name).join(" and ") +
    ".\n\nCould you share the prices, bundle offers and delivery details?\n\nThank you!";

  const shippingText = pricing.loading
    ? "Checking shipping region..."
    : pricing.region === "AE"
      ? "Free Delivery all over UAE"
      : pricing.region === "US"
        ? "Free Delivery across US"
        : pricing.region === "IN"
          ? "Pan India Delivery"
          : "International shipping available";

  return (
    <>
      {/* <!-- ===== Contact Start ===== --> */}
      <section id="contact" className="scroll-mt-28 px-4 py-20 md:px-8 2xl:px-0">
        <div className="relative mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left Side - Contact Info */}
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left"
            >
              <span className="mb-6 inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                Get in Touch
              </span>

              <h2 className="mb-6 text-4xl font-bold text-slate-900">
                Contact Us
              </h2>

              <p className="mb-12 text-lg leading-8 text-slate-600">
                Questions about the Yamani Laptop or the Quran Audio Magnet?
                Reach out anytime — we&apos;re here to help.
              </p>

              {/* Contact Items */}
              <div className="mb-12 space-y-8">
                {/* Phone / WhatsApp */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-100">
                    <svg className="h-6 w-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-slate-900">
                      Phone / WhatsApp
                    </h3>
                    <p className="text-slate-600">
                      <a
                        href={"https://wa.me/917022550068?text=" + encodeURIComponent(bothProductsMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-emerald-600"
                      >
                        +91 70225 50068
                      </a>
                      {" "}(India)<br />
                      <a
                        href={"https://wa.me/971524569983?text=" + encodeURIComponent(bothProductsMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-emerald-600"
                      >
                        +971 52 456 9983
                      </a>
                      {" "}(UAE)
                    </p>
                  </div>
                </div>

                {/* Website */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100">
                    <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-slate-900">
                      Website
                    </h3>
                    <p className="text-slate-600">
                      www.ilmibox.com
                    </p>
                  </div>
                </div>

                {/* Shipping */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-purple-100">
                    <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-slate-900">
                      Shipping
                    </h3>
                    <p className="text-slate-600">
                      {shippingText}
                    </p>
                  </div>
                </div>
              </div>

              {/* Follow Us */}
              <div>
                <h4 className="mb-4 font-semibold text-slate-900">
                  Follow Us
                </h4>
                <div className="flex gap-4">
                  <a href="#" className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-pink-500 to-rose-500 text-white transition-shadow hover:shadow-lg">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110 2.881 1.44 1.44 0 010-2.881z" />
                    </svg>
                  </a>
                  <a href="#" className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white transition-shadow hover:shadow-lg">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a href="#" className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-600 text-white transition-shadow hover:shadow-lg">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Quick Order for either product */}
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="animate_right rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 p-8 text-white md:p-12"
            >
              <h3 className="mb-4 text-3xl font-bold">Quick Order</h3>

              <p className="mb-8 text-lg leading-relaxed text-slate-200">
                Pick the product you want and order it on WhatsApp in seconds.
              </p>

              {/* Product picker */}
              <div className="mb-8 grid gap-4 sm:grid-cols-2">
                {products.map((product, index) => {
                  const isSelected = index === selectedIndex;
                  return (
                    <button
                      key={product.id}
                      type="button"
                      onClick={() => setSelectedIndex(index)}
                      aria-pressed={isSelected}
                      className={`rounded-2xl border p-4 text-left transition-all duration-200 ${
                        isSelected
                          ? "border-emerald-400 bg-emerald-400/10 shadow-lg"
                          : "border-white/15 bg-white/5 hover:border-white/40"
                      }`}
                    >
                      <div className="mb-3 flex items-center justify-between gap-2">
                        <div className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-xl bg-white">
                          <img
                            src={product.cardImage}
                            alt={product.name}
                            className="h-full w-full object-contain p-1"
                          />
                        </div>
                        <span
                          className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border ${
                            isSelected
                              ? "border-emerald-400 bg-emerald-400"
                              : "border-white/40"
                          }`}
                        >
                          {isSelected && (
                            <svg
                              className="h-3 w-3 text-slate-900"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </span>
                      </div>

                      <p className="text-sm font-semibold leading-snug text-white">
                        {product.name}
                      </p>
                      <div className="mt-2 flex items-baseline gap-2">
                        <span className="text-lg font-bold text-emerald-300">
                          {displayPrice(product)}
                        </span>
                        {!pricing.loading && (
                          <span className="text-xs text-slate-400 line-through">
                            {currencySymbol + format(originalPriceOf(product))}
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Message Details */}
              <div className="mb-8 rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
                <p className="mb-4 font-semibold text-slate-100">
                  Your message will include:
                </p>
                <ul className="space-y-3 text-sm text-slate-200">
                  <li className="flex items-center gap-3">
                    <CheckIcon />
                    <span>Product: {selected.name}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckIcon />
                    <span>Price: {displayPrice(selected)}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckIcon />
                    <span>Your Name &amp; Address</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckIcon />
                    <span>Payment Method (COD/Online)</span>
                  </li>
                </ul>
              </div>

              {/* WhatsApp Button */}
              <a
                href={whatsappLink(selected.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-emerald-500 px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:bg-emerald-600 hover:shadow-lg"
              >
                <WhatsAppIcon className="h-6 w-6" />
                <span>Order {selected.name} on WhatsApp</span>
              </a>

              {/* Both products / more details */}
              <div className="mt-6 flex flex-col items-center gap-3 text-sm sm:flex-row sm:justify-between">
                <a
                  href={"https://wa.me/971524569983?text=" + encodeURIComponent(bothProductsMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-emerald-300 transition hover:text-emerald-200"
                >
                  Want both? Ask about our bundle →
                </a>
                <Link
                  href={"/products/" + selected.slug}
                  className="text-slate-300 transition hover:text-white"
                >
                  View {selected.name} details
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Contact End ===== --> */}
    </>
  );
};

export default Contact;
