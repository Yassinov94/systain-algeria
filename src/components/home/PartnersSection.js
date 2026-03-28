import Image from "next/image";
import { Users, Building2, Wrench, ShieldCheck, Lightbulb } from "lucide-react";

const partnerIcons = [Users, Building2, Wrench, ShieldCheck, Lightbulb];

export default function PartnersSection({ dict }) {
  const d = dict.partners;

  return (
    <section className="relative py-20 bg-dark-slate text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/images/partners/partners.jpg"
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{d.title}</h2>
            <p className="text-white/70 mb-6">{d.description}</p>
            <ul className="space-y-3">
              {d.partner_types.map((type, i) => {
                const Icon = partnerIcons[i];
                return (
                  <li key={i} className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-primary" />
                    <span className="text-white/80">{type}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <p className="text-white/70 mb-6">{d.expertise_intro}</p>
            <div className="grid grid-cols-2 gap-3">
              {d.expertise_areas.map((area, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-lg p-4 text-center"
                >
                  <span className="text-sm text-white/80">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
