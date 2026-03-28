"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { i18n } from "@/i18n-config";

export default function Header({ dict, lang }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: `/${lang}`, label: dict.nav.home },
    { href: `/${lang}/about`, label: dict.nav.about },
    { href: `/${lang}/services`, label: dict.nav.services },
    { href: `/${lang}/blog`, label: dict.nav.blog },
    { href: `/${lang}/contact`, label: dict.nav.contact },
  ];

  const switchLocale = (locale) => {
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const langNames = { en: "English", fr: "Français", ar: "العربية" };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href={`/${lang}`} className="flex-shrink-0">
            <Image
              src="/images/logos/logo.png"
              alt="Systain Algeria"
              width={160}
              height={45}
              className="h-10 w-auto"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                  pathname === link.href
                    ? "text-primary"
                    : "text-white/80 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="relative ml-2">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-3 py-2 text-sm text-white/80 hover:text-primary transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="uppercase">{lang}</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              {langOpen && (
                <div className="absolute right-0 mt-1 w-36 bg-white rounded-lg shadow-lg py-1 z-50">
                  {i18n.locales.map((locale) => (
                    <Link
                      key={locale}
                      href={switchLocale(locale)}
                      onClick={() => setLangOpen(false)}
                      className={`block px-4 py-2 text-sm hover:bg-gray-50 ${
                        locale === lang
                          ? "text-primary font-medium"
                          : "text-gray-700"
                      }`}
                    >
                      {langNames[locale]}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href={`/${lang}/auth/login`}
              className="ml-3 px-5 py-2 bg-primary text-white text-sm font-medium rounded-full hover:bg-primary-dark transition-colors"
            >
              {dict.nav.login}
            </Link>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-dark-slate border-t border-white/10">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-3 text-sm font-medium rounded-md ${
                  pathname === link.href
                    ? "text-primary bg-white/5"
                    : "text-white/80 hover:text-primary hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-3 border-t border-white/10 mt-3">
              {i18n.locales.map((locale) => (
                <Link
                  key={locale}
                  href={switchLocale(locale)}
                  onClick={() => setMobileOpen(false)}
                  className={`px-3 py-1.5 text-xs rounded-full ${
                    locale === lang
                      ? "bg-primary text-white"
                      : "bg-white/10 text-white/70"
                  }`}
                >
                  {langNames[locale]}
                </Link>
              ))}
            </div>
            <Link
              href={`/${lang}/auth/login`}
              onClick={() => setMobileOpen(false)}
              className="block mt-3 text-center px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-full"
            >
              {dict.nav.login}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
