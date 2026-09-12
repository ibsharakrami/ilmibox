import type { Metadata } from "next";
import ProductPage from "@/components/ProductPage";
import { laptopProduct } from "@/data/productData";

export const metadata: Metadata = {
  title: "Yamani Laptop | Fun Islamic Learning Toy Laptop for Kids",
  description: laptopProduct.shortDescription,
  openGraph: {
    title: "Yamani Laptop | Fun Islamic Learning Toy Laptop for Kids",
    description: laptopProduct.shortDescription,
    images: [laptopProduct.cardImage],
  },
};

export default function YamaniLaptopPage() {
  return <ProductPage product={laptopProduct} />;
}
