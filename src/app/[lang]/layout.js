import { Poppins } from "next/font/google";
import "../globals.css";
import { getDictionary } from "./dictionaries";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { i18n } from "@/i18n-config";
import {
  getOrganizationSchema,
  getLocalBusinessSchema,
  getServicesSchema,
} from "@/lib/structured-data";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const baseUrl = "https://systain-algeria.vercel.app";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const alternateLanguages = {};
  for (const locale of i18n.locales) {
    alternateLanguages[locale] = `${baseUrl}/${locale}`;
  }

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: dict.metadata.title,
      template: `%s | Systain Algeria`,
    },
    description: dict.metadata.description,
    keywords: [
      "ESG advisory",
      "carbon footprint",
      "CBAM",
      "CSRD",
      "climate consulting",
      "sustainability",
      "decarbonisation",
      "GHG Protocol",
      "SBTi",
      "EU Taxonomy",
      "Algeria",
      "MENA",
      "Europe",
      "Systain",
    ],
    authors: [{ name: "Systain Algeria" }],
    creator: "Systain Algeria",
    publisher: "Systain Algeria",
    icons: { icon: "/images/logos/logo-mobile.png" },
    openGraph: {
      type: "website",
      locale: lang === "ar" ? "ar_DZ" : lang === "fr" ? "fr_DZ" : "en_US",
      url: `${baseUrl}/${lang}`,
      siteName: "Systain Algeria",
      title: dict.metadata.title,
      description: dict.metadata.description,
      images: [
        {
          url: `${baseUrl}/images/hero/esg.png`,
          width: 1200,
          height: 630,
          alt: "Systain Algeria – Climate, Carbon & ESG Advisory",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.metadata.title,
      description: dict.metadata.description,
      images: [`${baseUrl}/images/hero/esg.png`],
    },
    alternates: {
      canonical: `${baseUrl}/${lang}`,
      languages: alternateLanguages,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function LangLayout({ children, params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const dir = lang === "ar" ? "rtl" : "ltr";

  const orgSchema = getOrganizationSchema();
  const businessSchema = getLocalBusinessSchema();
  const servicesSchema = getServicesSchema();

  return (
    <html lang={lang} dir={dir} className={`${poppins.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
        />
        <link rel="alternate" hrefLang="en" href={`${baseUrl}/en`} />
        <link rel="alternate" hrefLang="fr" href={`${baseUrl}/fr`} />
        <link rel="alternate" hrefLang="ar" href={`${baseUrl}/ar`} />
        <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/en`} />
      </head>
      <body className="min-h-full flex flex-col font-sans antialiased">
        <Header dict={dict} lang={lang} />
        <main className="flex-1 pt-20">{children}</main>
        <Footer dict={dict} lang={lang} />
      </body>
    </html>
  );
}
