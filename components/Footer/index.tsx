"use client";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <>
      <footer className="bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* <!-- Footer Top --> */}
          <div className="py-20 lg:py-24">
            <div className="flex flex-col items-center justify-center text-center">
              <motion.div
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -20,
                  },

                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.1 }}
                viewport={{ once: true }}
                className="animate_top"
              >
                <a href="/" className="relative mb-8 inline-block">
                  <div className="text-4xl font-bold">
                    <span className="text-white">ilmi</span>
                    <span className="text-amber-400">box</span>
                  </div>
                </a>

                <p className="mb-8 max-w-2xl text-base leading-relaxed text-slate-300">
                  Nurturing young minds with Islamic knowledge through fun and interactive learning
                </p>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center sm:gap-6 mb-12">
                  <div className="flex items-center gap-2 text-slate-200">
                    <span className="text-sm">IN India</span>
                  </div>
                  <div className="hidden sm:block h-4 w-0.5 bg-slate-600"></div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <span className="text-sm">us USA</span>
                  </div>
                  <div className="hidden sm:block h-4 w-0.5 bg-slate-600"></div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <svg className="h-4 w-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">Worldwide Shipping</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
          {/* <!-- Footer Top --> */}

          {/* <!-- Footer Bottom --> */}
          <div className="flex flex-col items-center justify-center gap-4 border-t border-slate-700 py-8">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <p className="text-sm text-slate-400">
                &copy; {new Date().getFullYear()} ilmibox. All rights reserved.
              </p>
            </motion.div>
          </div>
          {/* <!-- Footer Bottom --> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
