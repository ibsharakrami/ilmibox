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
import { laptopProduct } from "@/data/productData";

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
        <ProductDisplay product={laptopProduct} />
      <Feature />
      {/* <About /> */}
      <FeaturesTab />
      <FunFact />
      {/* <Integration /> */}
      {/* <CTA />
      <FAQ /> */}
      <Testimonial />
      {/* <Pricing /> */}
    
      <Contact />
      {/* <Blog /> */}
    </main>
  );
}
