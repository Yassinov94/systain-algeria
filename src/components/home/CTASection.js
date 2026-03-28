import Link from "next/link";
import { Phone } from "lucide-react";

export default function CTASection({ dict, lang }) {
  return (
    <section className="relative py-20 bg-gradient-to-r from-dark-slate to-dark text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{dict.cta.title}</h2>
        <p className="text-white/70 text-lg mb-6">{dict.cta.subtitle}</p>
        <div className="flex items-center justify-center gap-2 text-primary mb-8">
          <Phone className="w-5 h-5" />
          <a href={`tel:${dict.cta.phone}`} className="text-lg font-medium">
            {dict.cta.phone}
          </a>
        </div>
        <Link
          href={`/${lang}/contact`}
          className="inline-block px-10 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-colors text-lg"
        >
          {dict.cta.button}
        </Link>
      </div>
    </section>
  );
}
