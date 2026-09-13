"use client";
import Image from "next/image";
import Link from "next/link";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import Reveal from "@/components/Common/Reveal";
import { products, whatsappLink } from "@/data/productData";

const exploreLinks = [
  { title: "Features", href: "/#features" },
  { title: "Products", href: "/#products" },
  { title: "Why ilmiBox", href: "/#why" },
  { title: "How to Order", href: "/#how-to-order" },
  { title: "FAQ", href: "/#faq" },
  { title: "Contact", href: "/#contact" },
];

const contacts = [
  { label: "India", number: "+91 70225 50068", wa: "917022550068" },
  { label: "UAE", number: "+971 52 456 9983", wa: "971524569983" },
];

const shipsTo = ["India", "UAE", "USA", "Worldwide"];

const helloMessage =
  "Hi, I am interested in ilmiBox products. Could you share prices and delivery details?";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-slate-300">
      {/* soft glows */}
      <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-emerald-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        {/* CTA band */}
        <Reveal
          direction="up"
          className="mt-16 flex flex-col items-center justify-between gap-6 rounded-[28px] border border-white/10 bg-white/5 px-8 py-8 text-center backdrop-blur md:flex-row md:text-left"
        >
          <div>
            <p className="text-xl font-semibold text-white">
              Ready to bring Islamic learning home?
            </p>
            <p className="mt-1 text-slate-400">
              Message us on WhatsApp and we&apos;ll help you pick the right product.
            </p>
          </div>
          <a
            href={whatsappLink(helloMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-green-500 px-7 py-3 font-semibold text-white shadow-lg shadow-green-500/25 transition hover:bg-green-600"
          >
            <MessageCircle className="h-5 w-5" />
            Chat on WhatsApp
          </a>
        </Reveal>

        {/* Link columns */}
        <div className="grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-8 lg:py-20">
          {/* Brand */}
          <Reveal direction="up" delay={0.05}>
            <Link href="/" className="inline-block">
              <Image
                src="/images/deen/logo.png"
                alt="ilmiBox logo"
                width={160}
                height={64}
                className="h-14 w-auto"
              />
            </Link>
            <p className="mt-5 max-w-sm leading-7 text-slate-400">
              Nurturing young minds with Islamic knowledge through fun and
              interactive learning.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {shipsTo.map((place) => (
                <span
                  key={place}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200"
                >
                  <MapPin className="h-3.5 w-3.5 text-emerald-400" />
                  {place}
                </span>
              ))}
            </div>
          </Reveal>

          {/* Explore */}
          <Reveal direction="up" delay={0.1}>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white">
              Explore
            </h4>
            <ul className="mt-5 space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 transition-colors hover:text-white"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Products */}
          <Reveal direction="up" delay={0.15}>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white">
              Products
            </h4>
            <ul className="mt-5 space-y-3">
              {products.map((product) => (
                <li key={product.id}>
                  <Link
                    href={`/products/${product.slug}`}
                    className="text-slate-400 transition-colors hover:text-white"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/products"
                  className="text-slate-400 transition-colors hover:text-white"
                >
                  All products
                </Link>
              </li>
            </ul>
          </Reveal>

          {/* Contact */}
          <Reveal direction="up" delay={0.2}>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white">
              Talk to us
            </h4>
            <ul className="mt-5 space-y-4">
              {contacts.map((contact) => (
                <li key={contact.wa}>
                  <a
                    href={`https://wa.me/${contact.wa}?text=${encodeURIComponent(helloMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3"
                  >
                    <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white/5 text-emerald-400 transition group-hover:bg-emerald-500 group-hover:text-white">
                      <Phone className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wide text-slate-500">
                        WhatsApp {contact.label}
                      </span>
                      <span className="block font-medium text-slate-200 transition group-hover:text-white">
                        {contact.number}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-slate-500">
              Cash on delivery available. 14-day easy returns.
            </p>
          </Reveal>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-7 text-sm text-slate-500 sm:flex-row">
          <p>&copy; {year} ilmiBox. All rights reserved.</p>
          <p className="sm:pr-20">Islamic learning made fun for kids aged 3+.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
