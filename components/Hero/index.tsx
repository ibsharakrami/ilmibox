"use client";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2">
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                 Yamani Islamic Learning Laptop for Kids
              </h4>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                Fun Islamic Learning Toy Laptop for Kids  {"   "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                  (50+ Activities)
                </span>
              </h1>
              <p>
               An interactive Islamic learning laptop for kids (3+). Includes 50+ fun activities like Surahs, Ahadith, Duas, Islamic songs, and educational games to help children learn Islam in a fun and engaging way.
              </p>

              <div className="mt-10">


                  <div className="bg-black/10 dark:bg-white/10 backdrop-blur-md rounded-2xl p-6 text-white">
    
    <div className="flex  items-center gap-4">
      <span className="line-through text-gray-300 text-2xl">
        AED 120
      </span>

      <span className="text-4xl font-bold text-black dark:text-white">
        AED 99
      </span>
    </div>

    <p className="text-yellow-400 mt-3 font-medium">
      Limited Time Offer - Save AED 21!
    </p>

    <p className="text-green-400 mt-2 flex items-center  gap-2">
      🚚 Free Delivery all over UAE
    </p>

  </div>
                  <div className="flex flex-col sm:flex-row  gap-4 mt-6">

    <a
      href="https://wa.me/971XXXXXXXXX"
      className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2"
    >
      🛒 Order via WhatsApp
    </a>


       <button
                      aria-label="get started button"
                      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                      Learn More
                    </button>

  </div>
                  <div className="flex flex-wrap  gap-6 mt-6 text-sm text-black dark:text-white">
    <span>🟢 COD Available</span>
    <span>🟢 Safe Payment</span>
    <span>🟢 Fast Delivery</span>
  </div>
      
              </div>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                />
                <div className=" relative aspect-700/444 w-full">
                  <Image
                    className="shadow-solid-l dark:hidden"
                    src="/images/deen/child1.jpeg"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="hidden shadow-solid-l dark:block"
                    src="/images/deen/child1.jpeg"
                    alt="Hero"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
