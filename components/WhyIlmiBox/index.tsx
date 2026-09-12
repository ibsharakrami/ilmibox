"use client";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Heart,
  Truck,
  Gift,
  Volume2,
  RotateCcw,
} from "lucide-react";
import { whatsappLink } from "@/data/productData";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Authentic Islamic Content",
    description:
      "Surahs, Ahadith, Duas and recitation that families can trust — checked for accuracy and pronunciation.",
    accent: "bg-emerald-100 text-emerald-700",
  },
  {
    icon: Heart,
    title: "Made for Every Home",
    description:
      "From a toddler's first Surah to Quran playing in the kitchen — products designed around real family routines.",
    accent: "bg-rose-100 text-rose-600",
  },
  {
    icon: Volume2,
    title: "Clear, Beautiful Audio",
    description:
      "Crisp recitation and pronunciation so children learn correctly and adults enjoy listening.",
    accent: "bg-sky-100 text-sky-700",
  },
  {
    icon: Truck,
    title: "Fast Delivery & COD",
    description:
      "Cash on delivery available, free delivery across the UAE and US, pan-India shipping in 5–7 days.",
    accent: "bg-amber-100 text-amber-700",
  },
  {
    icon: Gift,
    title: "Gift-Ready Packaging",
    description:
      "Premium boxes that look as good as they feel — perfect for Eid, a Nikkah, a new baby or a new home.",
    accent: "bg-violet-100 text-violet-700",
  },
  {
    icon: RotateCcw,
    title: "14-Day Easy Returns",
    description:
      "Not what you expected? Message us on WhatsApp within 14 days for a hassle-free return or exchange.",
    accent: "bg-teal-100 text-teal-700",
  },
];

const WhyIlmiBox = () => {
  return (
    <section id="why" className="scroll-mt-28 bg-white py-20">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <span className="inline-flex rounded-full bg-emerald-100 px-4 py-1 text-sm font-semibold text-emerald-700">
            Why ilmiBox
          </span>
          <h2 className="mt-6 text-4xl font-bold text-slate-900 sm:text-5xl">
            Islamic learning your family will actually use
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            We build simple, beautiful products that make the Quran and Islamic
            knowledge part of everyday life — for kids, parents and grandparents.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.08 * index }}
                className="group rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${reason.accent}`}
                >
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  {reason.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{reason.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-12 flex flex-col items-center justify-between gap-6 rounded-[28px] bg-slate-900 px-8 py-8 text-center md:flex-row md:text-left"
        >
          <div>
            <p className="text-lg font-semibold text-white">
              Still deciding which product is right for you?
            </p>
            <p className="mt-1 text-slate-300">
              Chat with us — we&apos;ll help you pick, and answer any question.
            </p>
          </div>
          <a
            href={whatsappLink(
              "Hi, I am looking at ilmiBox products and would like some help choosing. Could you tell me more?",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-shrink-0 items-center justify-center rounded-full bg-green-500 px-7 py-3 font-semibold text-white transition hover:bg-green-600"
          >
            💬 Chat on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyIlmiBox;
