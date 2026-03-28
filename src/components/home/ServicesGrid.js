import {
  BarChart3, Leaf, FileText, Shield, Globe2, Recycle, CircleDollarSign, Lightbulb,
} from "lucide-react";

const icons = [BarChart3, Leaf, FileText, Shield, Globe2, Recycle, CircleDollarSign, Lightbulb];

export default function ServicesGrid({ dict }) {
  const d = dict.services;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-heading text-center mb-14">
          {d.title}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {d.items.map((service, i) => {
            const Icon = icons[i];
            return (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-heading text-lg mb-3">
                  {service.title}
                </h3>
                <ul className="space-y-2">
                  {service.items.map((item, j) => (
                    <li
                      key={j}
                      className="text-sm text-foreground/70 flex items-start gap-2"
                    >
                      <span className="text-primary mt-1">•</span>
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
  );
}
