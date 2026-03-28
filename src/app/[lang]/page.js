import { getDictionary } from "./dictionaries";
import HeroSection from "@/components/home/HeroSection";
import CarbonCTA from "@/components/home/CarbonCTA";
import IntroSection from "@/components/home/IntroSection";
import WhatWeDo from "@/components/home/WhatWeDo";
import WhySystain from "@/components/home/WhySystain";
import TransitionSection from "@/components/home/TransitionSection";
import IndustriesTeaser from "@/components/home/IndustriesTeaser";
import ServicesGrid from "@/components/home/ServicesGrid";
import MethodologySection from "@/components/home/MethodologySection";
import PartnersSection from "@/components/home/PartnersSection";
import ReferencesSection from "@/components/home/ReferencesSection";
import BlogPreview from "@/components/home/BlogPreview";
import CTASection from "@/components/home/CTASection";

export default async function HomePage({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      <HeroSection dict={dict} lang={lang} />
      <CarbonCTA dict={dict} lang={lang} />
      <IntroSection dict={dict} lang={lang} />
      <WhatWeDo dict={dict} lang={lang} />
      <WhySystain dict={dict} />
      <TransitionSection dict={dict} />
      <IndustriesTeaser dict={dict} lang={lang} />
      <ServicesGrid dict={dict} />
      <MethodologySection dict={dict} />
      <PartnersSection dict={dict} />
      <ReferencesSection dict={dict} />
      <BlogPreview dict={dict} lang={lang} />
      <CTASection dict={dict} lang={lang} />
    </>
  );
}
