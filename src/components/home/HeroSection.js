import Image from "next/image";
import Link from "next/link";

export default function HeroSection({ dict, lang }) {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-dark-slate overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/images/backgrounds/bg-1.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-dark-slate/95 via-dark-slate/80 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              {dict.hero.title}
            </h1>
            <p className="text-lg sm:text-xl text-primary-warm font-light mb-8 max-w-lg">
              {dict.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={`/${lang}/contact`}
                className="px-8 py-3.5 bg-primary text-white font-medium rounded-full hover:bg-primary-dark transition-colors"
              >
                {dict.hero.cta_contact}
              </Link>
              <Link
                href={`/${lang}/auth/login`}
                className="px-8 py-3.5 border-2 border-primary text-primary font-medium rounded-full hover:bg-primary hover:text-white transition-colors"
              >
                {dict.hero.cta_footprint}
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex justify-center">
            <Image
              src="/images/hero/hero-1.png"
              alt="Systain Advisory"
              width={500}
              height={500}
              className="w-full max-w-md"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
