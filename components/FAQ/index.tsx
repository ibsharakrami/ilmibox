"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import FAQItem from "./FAQItem";
import faqData from "./faqData";
import { whatsappLink } from "@/data/productData";

const FAQ = () => {
  const [activeFaq, setActiveFaq] = useState(1);

  const handleFaqToggle = (id: number) => {
    setActiveFaq((current) => (current === id ? 0 : id));
  };

  const half = Math.ceil(faqData.length / 2);
  const columns = [faqData.slice(0, half), faqData.slice(half)];

  return (
    <section id="faq" className="scroll-mt-28 bg-white py-20">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <span className="inline-flex rounded-full bg-sky-100 px-4 py-1 text-sm font-semibold text-sky-700">
            FAQ
          </span>
          <h2 className="mt-6 text-4xl font-bold text-slate-900 sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Everything about ordering, delivery, returns and the products themselves.
          </p>
        </motion.div>

        <div className="grid gap-4 lg:grid-cols-2 lg:gap-6">
          {columns.map((column, columnIndex) => (
            <motion.div
              key={columnIndex}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + columnIndex * 0.15 }}
              className="space-y-4"
            >
              {column.map((faq) => (
                <FAQItem
                  key={faq.id}
                  faqData={{ ...faq, activeFaq, handleFaqToggle }}
                />
              ))}
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center text-slate-600"
        >
          Didn&apos;t find your answer?{" "}
          <a
            href={whatsappLink("Hi, I have a question about ilmiBox products.")}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald-600 underline-offset-4 hover:underline"
          >
            Ask us on WhatsApp
          </a>
          .
        </motion.p>
      </div>
    </section>
  );
};

export default FAQ;
