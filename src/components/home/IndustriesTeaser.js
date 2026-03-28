import Link from "next/link";
import { Factory, Landmark, Truck, Building2, Zap, ShoppingCart, Wheat, Utensils, Rocket } from "lucide-react";

const icons = [Wheat, Factory, Utensils, Landmark, Truck, Building2, Zap, ShoppingCart, Rocket];

export default function IndustriesTeaser({ dict, lang }) {
  const d = dict.industries_teaser;
  const sectors = dict.industries?.sectors || [];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">{d.text}</p>
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {sectors.slice(0, 9).map((sector, i) => {
            const Icon = icons[i];
            return (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 text-sm text-foreground/70"
              >
                <Icon className="w-4 h-4 text-primary" />
                {sector.title}
              </div>
            );
          })}
        </div>
        <Link
          href={`/${lang}/industries`}
          className="inline-block px-8 py-3 bg-primary text-white font-medium rounded-full hover:bg-primary-dark transition-colors"
        >
          {d.button} →
        </Link>
      </div>
    </section>
  );
}
