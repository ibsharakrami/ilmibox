"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import SmoothScroll from "@/components/Common/SmoothScroll";
import { ThemeProvider } from "next-themes";
import ToasterContext from "../context/ToastContext";

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider
            enableSystem={false}
            attribute="class"
            defaultTheme="light"
        >
            {/* Fixed elements stay outside the smooth-scroll wrapper. */}
            <Lines />
            <Header />
            <ToasterContext />

            <SmoothScroll>
                {children}
                <Footer />
            </SmoothScroll>

            <ScrollToTop />
        </ThemeProvider>
    );
}
