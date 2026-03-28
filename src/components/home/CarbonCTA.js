import Image from "next/image";
import Link from "next/link";

export default function CarbonCTA({ dict, lang }) {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-dark-slate to-dark rounded-2xl p-8 md:p-12">
          <div className="flex-shrink-0">
            <Image
              src="/images/icons/co2.png"
              alt="CO2"
              width={100}
              height={100}
              className="w-20 h-20 md:w-24 md:h-24"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              {dict.carbon_cta.title}
            </h2>
            <p className="text-white/70 mb-6 max-w-xl">
              {dict.carbon_cta.description}
            </p>
            <Link
              href={`/${lang}/auth/register`}
              className="inline-block px-8 py-3 bg-primary text-white font-medium rounded-full hover:bg-primary-dark transition-colors"
            >
              {dict.carbon_cta.button}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
