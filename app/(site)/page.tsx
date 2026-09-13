import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import ProductDisplay from "@/components/ProductDisplay";
import OrderSteps from "@/components/OrderSteps";
import WhyIlmiBox from "@/components/WhyIlmiBox";
import { laptopProduct, quranAudioMagnet } from "@/data/productData";

export const metadata: Metadata = {
  title: "Yamani Islamic Learning Laptop for Kids",

  // other metadata
  description: "An interactive Islamic learning laptop for kids (3+). Includes 50+ fun activities like Surahs, Ahadith, Duas, Islamic songs, and educational games to help children learn Islam in a fun and engaging way."
};

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <Brands /> */}

      <section id="products" className="scroll-mt-28 bg-slate-100 py-16 lg:py-20">
        <div className="mx-auto max-w-c-1390 space-y-10 px-4 md:px-8 2xl:px-0">
          <ProductDisplay
            product={laptopProduct}
            sectionId="product"
            detailsHref={`/products/${laptopProduct.slug}`}
          />

          <ProductDisplay
            product={quranAudioMagnet}
            sectionId="quran-audio-magnet"
            detailsHref={`/products/${quranAudioMagnet.slug}`}
          />
        </div>
      </section>

      <WhyIlmiBox />
      <OrderSteps />
      <Feature />
      {/* <About /> */}
      {/* <FeaturesTab /> */}
      {/* <FunFact /> */}
      {/* <Integration /> */}
      {/* <CTA /> */}
      <Testimonial />
      <FAQ />
      {/* <Pricing /> */}

      <Contact />
      {/* <Blog /> */}
    </main>
  );
}
