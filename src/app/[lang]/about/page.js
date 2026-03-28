import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "../dictionaries";
import { Phone } from "lucide-react";

export default async function AboutPage({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const d = dict.about;

  const valueIcons = [
    "/images/about/value-responsibility.png",
    "/images/about/value-integrity.png",
    "/images/about/value-innovation.png",
    "/images/about/value-cooperation.png",
    "/images/about/value-local.png",
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-dark-slate text-white">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/landscapes/landscape-1.jpg" alt="Algeria" fill className="object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{d.title}</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-foreground leading-relaxed mb-6">{d.intro}</p>
              <p className="text-foreground/80 mb-4">{d.frameworks_intro}</p>
              <ul className="grid grid-cols-2 gap-2 mb-6">
                {d.frameworks.map((fw, i) => (
                  <li key={i} className="text-sm text-primary flex items-center gap-2">
                    <span>✓</span> {fw}
                  </li>
                ))}
              </ul>
              <p className="text-foreground/70 italic">{d.geo}</p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/about/about-graphic.png"
                alt="About Systain"
                width={450}
                height={400}
                className="w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founder Message */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
            <div className="w-1 h-12 bg-primary rounded-full mb-6" />
            <p className="text-lg text-foreground italic mb-4">
              &ldquo;{d.founder_message.p1}&rdquo;
            </p>
            <p className="text-foreground/80 mb-4">{d.founder_message.p2}</p>
            <p className="text-foreground/80 mb-8">{d.founder_message.p3}</p>
            <div>
              <p className="font-semibold text-heading">{d.founder_message.name}</p>
              <p className="text-sm text-primary">{d.founder_message.role}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-heading text-center mb-14">
            {d.values_title}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {d.values.map((value, i) => (
              <div key={i} className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4">
                  <Image
                    src={valueIcons[i]}
                    alt={value.title}
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="font-semibold text-heading mb-2">{value.title}</h3>
                <p className="text-sm text-foreground/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Algeria Gallery */}
      <section className="py-16 bg-dark-slate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              "/images/landscapes/landscape-2.jpg",
              "/images/landscapes/landscape-3.jpg",
              "/images/landscapes/landscape-4.jpg",
              "/images/landscapes/landscape-5.jpg",
              "/images/landscapes/landscape-6.jpg",
              "/images/landscapes/landscape-7.jpg",
              "/images/landscapes/algeria-aerial.jpg",
              "/images/backgrounds/office.jpg",
            ].map((src, i) => (
              <div key={i} className="relative h-44 rounded-lg overflow-hidden">
                <Image
                  src={src}
                  alt="Systain Algeria"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-heading mb-6">{d.team_title}</h2>
              <p className="text-foreground/80 leading-relaxed">{d.team_text}</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-heading mb-6">{d.vision_title}</h2>
              <p className="text-foreground/80 leading-relaxed">{d.vision_text}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-dark-slate to-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">{dict.cta.title}</h2>
          <p className="text-white/70 mb-6">{dict.cta.subtitle}</p>
          <div className="flex items-center justify-center gap-2 text-primary mb-8">
            <Phone className="w-5 h-5" />
            <span className="text-lg font-medium">{dict.cta.phone}</span>
          </div>
          <Link
            href={`/${lang}/contact`}
            className="inline-block px-10 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-colors"
          >
            {dict.cta.button}
          </Link>
        </div>
      </section>
    </>
  );
}
