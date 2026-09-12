import type { Metadata } from "next";
import ProductPage from "@/components/ProductPage";
import { quranAudioMagnet } from "@/data/productData";

export const metadata: Metadata = {
  title: "Quran Audio Magnet | A Quran Companion for Every Home",
  description: quranAudioMagnet.shortDescription,
  openGraph: {
    title: "Quran Audio Magnet | A Quran Companion for Every Home",
    description: quranAudioMagnet.shortDescription,
    images: [quranAudioMagnet.cardImage],
  },
};

export default function QuranAudioMagnetPage() {
  return <ProductPage product={quranAudioMagnet} />;
}
