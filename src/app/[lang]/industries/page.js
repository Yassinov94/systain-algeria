import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "../dictionaries";
import {
  Wheat, Factory, Utensils, Landmark, Truck, Building2, Zap, ShoppingCart, Rocket,
} from "lucide-react";

const icons = [Wheat, Factory, Utensils, Landmark, Truck, Building2, Zap, ShoppingCart, Rocket];

export default async function IndustriesPage({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const d = dict.industries;

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-dark-slate text-white">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/backgrounds/meeting.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{d.title}</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl text-primary font-medium mb-6">{d.intro}</p>
          <p className="text-foreground/80 mb-4">{d.intro_p2}</p>
          <p className="text-foreground/70">{d.intro_p3}</p>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {d.sectors.map((sector, i) => {
              const Icon = icons[i];
              const isEven = i % 2 === 0;
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
                >
                  <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                    {/* Icon side */}
                    <div className="lg:w-1/4 bg-gradient-to-br from-dark-slate to-dark flex items-center justify-center p-8 lg:p-12">
                      <Icon className="w-16 h-16 text-primary" />
                    </div>
                    {/* Content side */}
                    <div className="lg:w-3/4 p-8">
                      <h3 className="text-2xl font-bold text-heading mb-3">
                        {sector.title}
                      </h3>
                      <p className="text-primary font-medium mb-3">{sector.intro}</p>
                      <p className="text-foreground/70 mb-3">{sector.description}</p>
                      {sector.frameworks && (
                        <p className="text-foreground/60 text-sm mb-4 italic">
                          {sector.frameworks}
                        </p>
                      )}
                      <div>
                        <p className="text-sm font-semibold text-heading mb-2">
                          {d.typical_use_cases}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {sector.use_cases.map((uc, j) => (
                            <span
                              key={j}
                              className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                            >
                              {uc}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-dark-slate to-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">{d.cta_title}</h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">{d.cta_text}</p>
          <Link
            href={`/${lang}/contact`}
            className="inline-block px-10 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-colors"
          >
            {d.cta_button}
          </Link>
        </div>
      </section>
    </>
  );
}
