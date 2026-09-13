"use client";
import {
  MessageCircle,
  ClipboardCheck,
  PackageCheck,
  Truck,
  ArrowRight,
} from "lucide-react";
import Reveal from "@/components/Common/Reveal";
import { whatsappLink } from "@/data/productData";

const steps = [
  {
    id: 1,
    title: "Message on WhatsApp",
    description:
      "Tap the Order button and send us a message with the product you want.",
    icon: MessageCircle,
    tile: "bg-emerald-500 text-white shadow-emerald-500/30",
  },
  {
    id: 2,
    title: "Confirm Your Order",
    description:
      "Share your delivery address and choose cash on delivery or online payment.",
    icon: ClipboardCheck,
    tile: "bg-sky-500 text-white shadow-sky-500/30",
  },
  {
    id: 3,
    title: "We Pack It",
    description: "Your order is carefully packed and handed to the courier.",
    icon: PackageCheck,
    tile: "bg-violet-500 text-white shadow-violet-500/30",
  },
  {
    id: 4,
    title: "Delivered to You",
    description: "Receive your order at your doorstep and start learning.",
    icon: Truck,
    tile: "bg-amber-500 text-white shadow-amber-500/30",
  },
];

export default function OrderSteps({
  productName,
}: {
  productName?: string;
}) {
  const subject = productName ? `your ${productName}` : "any ilmiBox product";
  const message = productName
    ? `Hi, I would like to order the ${productName}. Could you help me place the order?`
    : "Hi, I would like to place an order. Could you help me get started?";

  return (
    <section id="how-to-order" className="scroll-mt-28 bg-slate-50 py-20">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        {/* Header */}
        <Reveal direction="up" className="mx-auto mb-14 max-w-2xl text-center">
          <span className="inline-flex rounded-full bg-emerald-100 px-4 py-1 text-sm font-semibold text-emerald-700">
            Easy Process
          </span>
          <h2 className="mt-6 text-4xl font-bold text-slate-900 sm:text-5xl">
            How to Order
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Order {subject} in four simple steps, all over WhatsApp. No forms,
            no sign-ups.
          </p>
        </Reveal>

        {/* Timeline */}
        <div className="relative">
          {/* connector line (desktop) */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-8 hidden h-px border-t-2 border-dashed border-slate-300 lg:block"
          />

          <ol className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Reveal
                  as="li"
                  key={step.id}
                  direction="up"
                  delay={0.12 * index}
                  className="group relative flex flex-col items-start lg:items-center lg:text-center"
                >
                  {/* icon + number */}
                  <div className="relative">
                    <div
                      className={`relative z-10 inline-flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg ring-8 ring-slate-50 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105 ${step.tile}`}
                    >
                      <Icon className="h-7 w-7" />
                    </div>
                    <span className="absolute -right-3 -top-3 z-20 inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white ring-4 ring-slate-50">
                      {step.id}
                    </span>
                  </div>

                  {/* text */}
                  <div className="mt-6 rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg lg:mt-8 lg:min-h-[168px] lg:w-full">
                    <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                      Step {step.id}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-slate-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 leading-7 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </div>

        {/* CTA */}
        <Reveal
          direction="up"
          delay={0.15}
          className="mt-14 flex flex-col items-center gap-4 text-center"
        >
          <a
            href={whatsappLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-green-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-green-500/25 transition hover:bg-green-600"
          >
            <MessageCircle className="h-5 w-5" />
            Start your order on WhatsApp
            <ArrowRight className="h-5 w-5" />
          </a>
          <p className="text-sm text-slate-500">
            Cash on delivery available. Free delivery across the UAE and US.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
