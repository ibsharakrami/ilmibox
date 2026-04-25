"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Testimonial = () => {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
            Happy Customers
          </span>
          <h2 className="mt-6 text-4xl font-bold text-slate-900 sm:text-5xl">
            Kids Love It!
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            See the joy on children&apos;s faces as they learn and play with the Yamani Laptop.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid gap-6 md:grid-cols-2"
        >
          <div className="group relative overflow-hidden rounded-[32px] bg-white shadow-xl shadow-slate-200">
            <div className="absolute right-4 top-4 z-10 rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-white ">
              <span className="inline-flex items-center gap-2">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 12H4" />
                  <path d="M12 4L12 20" />
                </svg>
                Loved by Kids
              </span>
            </div>
            <div className="relative h-80 sm:h-[420px]">
              <Image
                src="/images/deen/child1.jpeg"
                alt="Child enjoying Yamani laptop"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-[32px] bg-white shadow-xl shadow-slate-200">
            <div className="absolute right-4 top-4 z-10 rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-white ">
              <span className="inline-flex items-center gap-2">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 12H4" />
                  <path d="M12 4L12 20" />
                </svg>
                Loved by Kids
              </span>
            </div>
            <div className="relative h-80 sm:h-[420px]">
              <Image
                src="/images/deen/child2.jpg"
                alt="Child using laptop at home"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          <div className="rounded-[24px] bg-white p-8 text-center ">
            <p className="text-4xl font-bold text-slate-900">250+</p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-500">Happy Families</p>
          </div>
          <div className="rounded-[24px] bg-white p-8 text-center ">
            <p className="text-4xl font-bold text-sky-600">4.8★</p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-500">Customer Rating</p>
          </div>
          <div className="rounded-[24px] bg-white p-8 text-center ">
            <p className="text-4xl font-bold text-emerald-600">50+</p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-500">Learning Activities</p>
          </div>
          <div className="rounded-[24px] bg-white p-8 text-center ">
            <p className="text-4xl font-bold text-amber-600">3+</p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-500">Years Age Group</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
