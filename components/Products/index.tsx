"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { products, whatsappLink } from "@/data/productData";
import { useLocationPricing } from "@/hooks/useLocationPricing";
import type { Product } from "@/data/productData";

const ProductCard = ({ product, index }: { product: Product; index: number }) => {
  const pricing = useLocationPricing(
    product.priceIndia,
    product.priceInternational,
    product.priceUS,
  );

  const price = pricing.isIndia
    ? product.priceIndia
    : pricing.isUS
      ? product.priceUS
      : product.priceInternational;
  const originalPrice = pricing.isIndia
    ? product.originalPriceIndia
    : pricing.isUS
      ? product.originalPriceUS
      : product.originalPriceInternational;
  const currencySymbol = pricing.isIndia ? "₹" : pricing.isUS ? "$" : "AED ";
  const format = (value: number) =>
    pricing.isIndia ? value.toLocaleString("en-IN") : `${value}`;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.6, delay: 0.1 * index }}
      viewport={{ once: true }}
      className="group flex flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <Link
        href={`/products/${product.slug}`}
        className="relative block aspect-square overflow-hidden bg-slate-50"
      >
        <img
          src={product.cardImage}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white shadow">
            {product.badge}
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold text-slate-900">
          <Link href={`/products/${product.slug}`} className="hover:text-emerald-600">
            {product.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm font-medium text-emerald-600">{product.tagline}</p>
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
          {product.shortDescription}
        </p>

        <div className="mt-5 flex items-baseline gap-3">
          <span className="text-2xl font-bold text-slate-900">
            {pricing.loading ? "..." : `${currencySymbol}${format(price)}`}
          </span>
          {!pricing.loading && (
            <span className="text-base text-slate-400 line-through">
              {`${currencySymbol}${format(originalPrice)}`}
            </span>
          )}
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href={`/products/${product.slug}`}
            className="flex-1 rounded-full border border-slate-300 px-5 py-3 text-center text-sm font-semibold text-slate-900 transition hover:border-slate-900"
          >
            View Details
          </Link>
          <a
            href={whatsappLink(product.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-full bg-green-500 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-green-600"
          >
            Order Now
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Products = ({ showHeader = true }: { showHeader?: boolean }) => {
  return (
    <section id="products" className="bg-white py-20 lg:py-25">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {showHeader && (
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="inline-flex rounded-full bg-emerald-100 px-4 py-1 text-sm font-semibold text-emerald-700">
            Our Products
          </span>
          <h2 className="mt-6 text-3xl font-bold text-slate-900 sm:text-4xl">
            Islamic Learning, Beautifully Made
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Thoughtfully designed products that bring the Quran and Islamic learning
            into your home and into your children&apos;s daily routine.
          </p>
        </div>
        )}

        <div className="grid gap-8 md:grid-cols-2">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
