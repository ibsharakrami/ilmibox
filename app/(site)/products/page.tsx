import type { Metadata } from "next";
import Products from "@/components/Products";
import OrderSteps from "@/components/OrderSteps";

export const metadata: Metadata = {
  title: "Our Products | ilmiBox",
  description:
    "Explore ilmiBox products — the Yamani Islamic Learning Laptop for kids and the Quran Audio Magnet for every home.",
};

export default function ProductsPage() {
  return (
    <main>
      <section className="bg-slate-900 pb-16 pt-35 md:pt-40">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <h1 className="text-3xl font-bold text-white xl:text-hero">
            Our Products
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Thoughtfully designed products that bring the Quran and Islamic
            learning into your home and into your children&apos;s daily routine.
          </p>
        </div>
      </section>

      <Products showHeader={false} />
      <OrderSteps />
    </main>
  );
}
