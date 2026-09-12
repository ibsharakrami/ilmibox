"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import menuData from "./menuData";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);

  const handleStickyMenu = () => {
    setStickyMenu(window.scrollY >= 80);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
    return () => window.removeEventListener("scroll", handleStickyMenu);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-300 ${
        stickyMenu
          ? "bg-slate-950/95 shadow-lg backdrop-blur-xl py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-c-1390 items-center justify-between px-4 md:px-8 2xl:px-0">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/deen/logo.png"
            alt="Ilmi Box Logo"
            width={40}
            height={20}
            className="h-12 w-auto"
          />
        </Link>

        <div className="hidden items-center gap-8 xl:flex">
          <nav>
            <ul className="flex items-center gap-8 text-sm font-medium text-slate-200">
              {menuData.map((menuItem, key) => (
                <li key={key}>
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
            href="https://wa.me/971524569983?text=Hi%2C%20I%20saw%20the%20Yamani%20Islamic%20Learning%20Laptop%20for%20Kids%20with%2050%2B%20activities.%0A%0AI%20would%20like%20to%20place%20an%20order.%20Is%20it%20available%20for%20delivery%3F%0A%0APlease%20assist.%20Thank%20you%21"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400"
          >
            Order Now
          </a>
        </div>

        <button
          aria-label="Toggle navigation"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-600 text-white xl:hidden"
          onClick={() => setNavigationOpen(!navigationOpen)}
        >
          <span className="block h-0.5 w-6 bg-white"></span>
          <span className="mt-1 block h-0.5 w-6 bg-white"></span>
          <span className="mt-1 block h-0.5 w-6 bg-white"></span>
        </button>
      </div>

      <div
        className={`xl:hidden ${navigationOpen ? "block" : "hidden"} border-t border-slate-700 bg-slate-950/95 px-4 pb-5 pt-6 backdrop-blur-xl`}
      >
        <nav>
          <ul className="flex flex-col gap-4 text-sm font-medium text-slate-200">
            {menuData.map((menuItem, key) => (
              <li key={key}>
                <Link
                  href={menuItem.path ?? "/"}
                  className="block rounded-3xl px-4 py-3 transition hover:bg-slate-900 hover:text-white"
                  onClick={() => setNavigationOpen(false)}
                >
                  {menuItem.title}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://wa.me/971524569983?text=Hi%2C%20I%20saw%20the%20Yamani%20Islamic%20Learning%20Laptop%20for%20Kids%20with%2050%2B%20activities.%0A%0AI%20would%20like%20to%20place%20an%20order.%20Is%20it%20available%20for%20delivery%3F%0A%0APlease%20assist.%20Thank%20you%21"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-full bg-green-500 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-emerald-400"
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
