"use client";
import { motion } from "framer-motion";
import React from "react";
import { useLocationPricing } from "@/hooks/useLocationPricing";

const Contact = () => {
  const [hasMounted, setHasMounted] = React.useState(false)
  const pricing = useLocationPricing(2400, 99)

  const displayPrice = pricing.isIndia ? '₹2,400' : 'AED 99'

  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    <>
      {/* <!-- ===== Contact Start ===== --> */}
      <section id="support" className="px-4 py-20 md:px-8 2xl:px-0">
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
              <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 mb-6">
                Get in Touch
              </span>
              
              <h2 className="mb-6 text-4xl font-bold text-slate-900">
                Contact Us
              </h2>
              
              <p className="mb-12 text-lg leading-8 text-slate-600">
                Have questions? Reach out to us anytime. We're here to help!
              </p>

              {/* Contact Items */}
              <div className="space-y-8 mb-12">
                {/* Phone / WhatsApp */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 flex-shrink-0">
                    <svg className="h-6 w-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      Phone / WhatsApp
                    </h3>
                    <p className="text-slate-600">
                      <a 
                        href="https://wa.me/917022550068?text=Hi%2C%20I%20saw%20the%20Yamani%20Islamic%20Learning%20Laptop%20for%20Kids%20with%2050%2B%20activities.%0A%0AI%20would%20like%20to%20place%20an%20order.%20Is%20it%20available%20for%20delivery%3F%0A%0APlease%20assist.%20Thank%20you%21"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-emerald-600 transition-colors"
                      >
                        +91 70225 50068
                      </a>
                      {" "}(India)<br />
                      <a 
                        href="https://wa.me/971524569983?text=Hi%2C%20I%20saw%20the%20Yamani%20Islamic%20Learning%20Laptop%20for%20Kids%20with%2050%2B%20activities.%0A%0AI%20would%20like%20to%20place%20an%20order.%20Is%20it%20available%20for%20delivery%3F%0A%0APlease%20assist.%20Thank%20you%21"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-emerald-600 transition-colors"
                      >
                        +971 52 456 9983
                      </a>
                      {" "}(UAE)
                    </p>
                  </div>
                </div>

                {/* Website */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 flex-shrink-0">
                    <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      Website
                    </h3>
                    <p className="text-slate-600">
                      www.ilmibox.com
                    </p>
                  </div>
                </div>

                {/* Shipping */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 flex-shrink-0">
                    <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">
                      Shipping
                    </h3>
                    <p className="text-slate-600">
                      Pan India Delivery | International shipping available
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
                  <a href="#" className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:shadow-lg transition-shadow">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110 2.881 1.44 1.44 0 010-2.881z" />
                    </svg>
                  </a>
                  <a href="#" className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white hover:shadow-lg transition-shadow">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a href="#" className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-600 text-white hover:shadow-lg transition-shadow">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Quick Order */}
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
              className="animate_right rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 p-8 md:p-12 text-white"
            >
              <h3 className="mb-4 text-3xl font-bold">
                Quick Order
              </h3>
              
              <p className="mb-8 text-lg leading-relaxed text-slate-200">
                The fastest way to order is via WhatsApp. Click below and send us your details!
              </p>

              {/* Message Details */}
              <div className="mb-10 rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
                <p className="mb-4 font-semibold text-slate-100">
                  Your message will include:
                </p>
                <ul className="space-y-3 text-sm text-slate-200">
                  <li className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-emerald-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Product: Yamani Laptop</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-emerald-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Price: {displayPrice}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-emerald-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Your Name & Address</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-emerald-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Payment Method (COD/Online)</span>
                  </li>
                </ul>
              </div>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/971524569983?text=Hi%2C%20I%20saw%20the%20Yamani%20Islamic%20Learning%20Laptop%20for%20Kids%20with%2050%2B%20activities.%0A%0AI%20would%20like%20to%20place%20an%20order.%20Is%20it%20available%20for%20delivery%3F%0A%0APlease%20assist.%20Thank%20you%21"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-3 rounded-xl bg-emerald-500 px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:bg-emerald-600 hover:shadow-lg"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span>Order on WhatsApp Now</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Contact End ===== --> */}
    </>
  );
};

export default Contact;
             