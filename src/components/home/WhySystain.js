import { Check } from "lucide-react";

export default function WhySystain({ dict }) {
  const d = dict.why_systain;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
            {d.title}
          </h2>
          <p className="text-lg text-foreground/70 mb-10">{d.subtitle}</p>
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {d.points.map((point, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-gray-50 p-5 rounded-xl border border-gray-100"
              >
                <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground/80">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
