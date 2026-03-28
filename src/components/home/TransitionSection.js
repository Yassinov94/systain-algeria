import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function TransitionSection({ dict }) {
  const d = dict.transition;

  return (
    <section className="relative py-20 bg-dark-slate text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/images/landscapes/algeria-aerial.jpg"
          alt="Algeria landscape"
          fill
          className="object-cover"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              {d.title}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
              {d.subtitle}
            </h2>
            <p className="text-white/70 leading-relaxed mb-8">
              {d.description}
            </p>
          </div>
          <div>
            <ul className="space-y-4">
              {d.areas.map((area, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 bg-white/5 p-4 rounded-lg border border-white/10"
                >
                  <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-white/80 text-sm">{area}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
