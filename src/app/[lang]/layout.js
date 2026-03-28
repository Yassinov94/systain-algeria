import { Poppins } from "next/font/google";
import "../globals.css";
import { getDictionary } from "./dictionaries";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { i18n } from "@/i18n-config";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
    icons: { icon: "/images/logos/logo-mobile.png" },
  };
}

export default async function LangLayout({ children, params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <html lang={lang} dir={dir} className={`${poppins.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans antialiased">
        <Header dict={dict} lang={lang} />
        <main className="flex-1 pt-20">{children}</main>
        <Footer dict={dict} lang={lang} />
      </body>
    </html>
  );
}
