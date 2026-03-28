import Image from "next/image";
import Link from "next/link";

export default function IntroSection({ dict, lang }) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              {dict.intro.text}
            </p>
            <p className="text-foreground/80 leading-relaxed mb-8">
              {dict.intro.description}
            </p>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-12 bg-primary rounded-full" />
              <p className="text-primary font-semibold italic">
                {dict.intro.standards}
              </p>
            </div>
            <Link
              href={`/${lang}/contact`}
              className="inline-block px-8 py-3 bg-primary text-white font-medium rounded-full hover:bg-primary-dark transition-colors"
            >
              {dict.intro.cta}
            </Link>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/hero/esg.png"
              alt="ESG"
              width={500}
              height={400}
              className="w-full max-w-md rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
