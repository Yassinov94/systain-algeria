import Image from "next/image";

export default function MethodologySection({ dict }) {
  const d = dict.methodology;
  const phaseColors = ["bg-primary", "bg-primary-light", "bg-primary-warm", "bg-primary-medium"];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-heading text-center mb-14">
          {d.title}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {d.phases.map((phase, i) => (
            <div key={i} className="relative">
              <div className="text-center">
                <div
                  className={`w-16 h-16 ${phaseColors[i]} rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold`}
                >
                  {i + 1}
                </div>
                <h3 className="text-lg font-semibold text-heading mb-2">
                  {phase.title}
                </h3>
                <p className="text-sm text-foreground/70 mb-4">
                  {phase.description}
                </p>
                <ul className="text-left space-y-2">
                  {phase.items.map((item, j) => (
                    <li
                      key={j}
                      className="text-sm text-foreground/60 flex items-start gap-2"
                    >
                      <span className="text-primary mt-0.5">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {i < 3 && (
                <div className="hidden lg:block absolute top-8 -right-3 w-6 h-0.5 bg-primary/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
