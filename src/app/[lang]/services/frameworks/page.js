import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "../../dictionaries";
import { CheckCircle } from "lucide-react";

export default async function FrameworksPage({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const d = dict.frameworks;

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 bg-dark-slate text-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{d.title}</h1>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            {d.hero_subtitle}
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-heading mb-6">{d.intro_title}</h2>
          <p className="text-foreground/70 mb-4">{d.intro_p1}</p>
          <p className="text-primary font-semibold text-lg mb-4">{d.intro_p2}</p>
          <p className="text-foreground/70">{d.intro_p3}</p>
        </div>
      </section>

      {/* Framework Logos Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {d.framework_list.map((fw, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-100 p-6 flex flex-col items-center justify-center text-center hover:border-primary/30 hover:shadow-sm transition-all min-h-[120px]"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                  <span className="text-primary font-bold text-sm">
                    {fw.split(" ")[0].substring(0, 3).toUpperCase()}
                  </span>
                </div>
                <p className="text-sm font-medium text-heading leading-tight">{fw}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-heading mb-6">{d.approach_title}</h2>
          <p className="text-foreground/70 mb-6">{d.approach_intro}</p>
          <p className="font-medium text-heading mb-4">{d.approach_includes}</p>
          <ul className="space-y-3">
            {d.approach_items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground/80">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ESG Ratings */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-100">
            <div className="w-1 h-12 bg-primary rounded-full mb-6" />
            <h2 className="text-2xl font-bold text-heading mb-4">{d.ratings_title}</h2>
            <p className="text-foreground/70 leading-relaxed">{d.ratings_text}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-dark-slate to-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">{d.cta_title}</h2>
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
