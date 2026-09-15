import { Inter } from "next/font/google";
import "../globals.css";
import type { Metadata } from "next";
import Proivder from "./Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ilmiBox | Islamic Learning for Every Home",
  description:
    "Interactive Islamic learning products for families - the Yamani Islamic Learning Laptop for kids and the Quran Audio Magnet for every home.",
  icons: {
    // Small sizes use the "iB" monogram so they stay readable in a browser tab.
    // Larger tiles use the full ilmiBox wordmark.
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/deen/icon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/images/deen/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/images/deen/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: { url: "/images/deen/apple-icon.png", sizes: "180x180" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`dark:bg-black ${inter.className}`}>
        <Proivder>{children}</Proivder>
      </body>
    </html>
  );
}
