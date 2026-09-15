"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import menuData from "./menuData";

const ORDER_LINK =
  "https://wa.me/971524569983?text=Hi%2C%20I%20saw%20the%20Yamani%20Islamic%20Learning%20Laptop%20for%20Kids%20with%2050%2B%20activities.%0A%0AI%20would%20like%20to%20place%20an%20order.%20Is%20it%20available%20for%20delivery%3F%0A%0APlease%20assist.%20Thank%20you%21";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);

  useEffect(() => {
    const handleStickyMenu = () => setStickyMenu(window.scrollY >= 80);
    handleStickyMenu();
    window.addEventListener("scroll", handleStickyMenu, { passive: true });
    return () => window.removeEventListener("scroll", handleStickyMenu);
  }, []);

  // Close the mobile menu on Escape, and if the viewport grows to desktop.
  useEffect(() => {
    if (!navigationOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setNavigationOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1280) setNavigationOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [navigationOpen]);

  const solidBar = stickyMenu || navigationOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-300 ${
        solidBar
          ? "bg-slate-950/95 py-3 shadow-lg backdrop-blur-xl xl:py-4"
          : "bg-transparent py-4 xl:py-6"
      }`}
    >
      <div className="mx-auto flex max-w-c-1390 items-center justify-between px-4 md:px-8 2xl:px-0">
        <Link
          href="/"
          className="flex items-center"
          onClick={() => setNavigationOpen(false)}
        >
          <Image
            src="/images/deen/logo.png"
            alt="ilmiBox logo"
            width={200}
            height={80}
            priority
            className="h-14 w-auto sm:h-16 xl:h-14"
          />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 xl:flex">
          <nav>
            <ul className="flex items-center gap-8 text-sm font-medium text-slate-200">
              {menuData.map((menuItem) => (
                <li key={menuItem.id}>
                  <Link
                    href={menuItem.path ?? "/"}
                    className="transition-colors duration-200 hover:text-white"
                  >
                    {menuItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href={ORDER_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400"
          >
            Order Now
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label={navigationOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={navigationOpen}
          aria-controls="mobile-nav"
          onClick={() => setNavigationOpen((open) => !open)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-white/20 bg-white/5 transition hover:bg-white/10 xl:hidden"
        >
          <span
            className={`block h-0.5 w-5 rounded-full bg-white transition-transform duration-300 ${
              navigationOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 rounded-full bg-white transition-opacity duration-300 ${
              navigationOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-5 rounded-full bg-white transition-transform duration-300 ${
              navigationOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile navigation panel */}
      <div
        id="mobile-nav"
        className={`overflow-hidden transition-[max-height,opacity] duration-300 xl:hidden ${
          navigationOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mt-3 max-h-[80vh] overflow-y-auto border-t border-white/10 bg-slate-950/95 px-4 pb-6 pt-4 backdrop-blur-xl">
          <ul className="flex flex-col gap-1 text-base font-medium text-slate-200">
            {menuData.map((menuItem) => (
              <li key={menuItem.id}>
                <Link
                  href={menuItem.path ?? "/"}
                  className="block rounded-2xl px-4 py-3 transition hover:bg-white/5 hover:text-white"
                  onClick={() => setNavigationOpen(false)}
                >
                  {menuItem.title}
                </Link>
              </li>
            ))}
            <li className="mt-3">
              <a
                href={ORDER_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-full bg-green-500 px-4 py-3.5 text-center font-semibold text-white transition hover:bg-emerald-400"
                onClick={() => setNavigationOpen(false)}
              >
                Order Now
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
