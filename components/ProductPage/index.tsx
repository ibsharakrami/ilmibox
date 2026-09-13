"use client";
import Reveal from "@/components/Common/Reveal";
import Link from "next/link";
import ProductDisplay from "@/components/ProductDisplay";
import OrderSteps from "@/components/OrderSteps";
import { whatsappLink, type Product } from "@/data/productData";

const ProductPage = ({ product }: { product: Product }) => {
  return (
    <main>
      {/* Hero */}
      <section className="bg-slate-900 pb-16 pt-35 md:pt-40">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <nav className="mb-6 flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <span>/</span>
            <Link href="/products" className="transition hover:text-white">
              Products
            </Link>
            <span>/</span>
            <span className="text-slate-200">{product.name}</span>
          </nav>

          <Reveal immediate direction="up" delay={0.1} className="max-w-3xl">
            {product.badge && (
              <span className="inline-flex rounded-full bg-emerald-500/20 px-4 py-1 text-sm font-semibold text-emerald-300">
                {product.badge}
              </span>
            )}
            <h1 className="mt-5 text-3xl font-bold text-white xl:text-hero">
              {product.name}
            </h1>
            <p className="mt-3 text-xl font-medium text-emerald-300">
              {product.tagline}
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              {product.shortDescription}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Gallery + details + pricing */}
      <section className="bg-slate-100 py-12 lg:py-16">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <ProductDisplay product={product} />
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <div className="grid gap-6 md:grid-cols-3">
            {product.highlights.map((highlight, index) => (
              <Reveal
                key={highlight.title}
                direction="up"
                delay={0.1 * index}
                className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-slate-900">
                  {highlight.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">
                  {highlight.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Editions */}
      {product.editions && product.editions.length > 0 && (
        <section className="py-20">
          <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
            <Reveal direction="up" className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                Available Editions
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Pick the edition that speaks to your heart — or collect both.
              </p>
            </Reveal>

            <div className="grid gap-8 md:grid-cols-2">
              {product.editions.map((edition, index) => (
                <Reveal
                  key={edition.name}
                  direction="up"
                  delay={0.12 * index}
                  className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm"
                >
                  <div className="aspect-square bg-slate-50">
                    <img
                      src={edition.image}
                      alt={edition.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold text-slate-900">
                      {edition.name}
                    </h3>
                    <p className="mt-3 leading-7 text-slate-600">
                      {edition.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* What's in the box */}
      <section className="bg-slate-900 py-20">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <Reveal direction="left">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                What&apos;s in the Box
              </h2>
              <ul className="mt-8 space-y-4">
                {product.inTheBox.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-200">
                    <svg
                      className="mt-1 h-5 w-5 flex-shrink-0 text-emerald-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="leading-7">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal
              direction="right"
              delay={0.1}
              className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur"
            >
              <h3 className="text-xl font-semibold text-white">
                Ready to order {product.name}?
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                Message us on WhatsApp and our team will confirm availability,
                shipping and payment options for your location.
              </p>
              <a
                href={whatsappLink(product.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-green-500 px-8 py-3 font-semibold text-white transition hover:bg-green-600"
              >
                🛒 Order via WhatsApp
              </a>
              <div className="mt-6 flex flex-wrap gap-5 text-sm text-slate-300">
                <span>🟢 COD Available</span>
                <span>🟢 Safe Payment</span>
                <span>🟢 Fast Delivery</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <OrderSteps productName={product.name} />
    </main>
  );
};

export default ProductPage;
