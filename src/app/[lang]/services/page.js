import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "../dictionaries";
import {
  BarChart3, Leaf, FileText, Shield, Globe2, Recycle, CircleDollarSign, Lightbulb,
} from "lucide-react";

const icons = [BarChart3, Leaf, FileText, Shield, Globe2, Recycle, CircleDollarSign, Lightbulb];

export default async function ServicesPage({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-dark-slate text-white">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/backgrounds/meeting.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{dict.services.title}</h1>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-8">
            {dict.services.items.map((service, i) => {
              const Icon = icons[i];
              return (
                <div
                  key={i}
                  className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-heading">
                      {service.title}
                    </h3>
                  </div>
                  <ul className="space-y-2.5">
                    {service.items.map((item, j) => (
                      <li key={j} className="text-foreground/70 flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-heading text-center mb-14">
            {dict.methodology.title}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {dict.methodology.phases.map((phase, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                  {i + 1}
                </div>
                <h3 className="text-lg font-semibold text-heading mb-2">{phase.title}</h3>
                <p className="text-sm text-foreground/70 mb-4">{phase.description}</p>
                <ul className="text-left space-y-1.5">
                  {phase.items.map((item, j) => (
                    <li key={j} className="text-sm text-foreground/60 flex items-start gap-2">
                      <span className="text-primary">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financing */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-heading text-center mb-8">
            {dict.financing.title}
          </h2>
          <p className="text-foreground/80 mb-8 text-center">{dict.financing.intro}</p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-heading mb-4">{dict.financing.what_we_offer}</h3>
              <ul className="space-y-2">
                {dict.financing.offer_items.map((item, i) => (
                  <li key={i} className="text-foreground/70 flex items-start gap-2 text-sm">
                    <span className="text-primary mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-heading mb-4">{dict.financing.for_whom}</h3>
              <ul className="space-y-2">
                {dict.financing.for_items.map((item, i) => (
                  <li key={i} className="text-foreground/70 flex items-start gap-2 text-sm">
                    <span className="text-primary mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-primary/5 rounded-xl p-6 border border-primary/20">
            <h3 className="font-semibold text-heading mb-2">{dict.financing.value_title}</h3>
            <p className="text-foreground/80">{dict.financing.value_text}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-dark-slate to-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">{dict.cta.title}</h2>
          <p className="text-white/70 mb-8">{dict.cta.subtitle}</p>
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
