import { CheckCircle } from "lucide-react";

export default function ReferencesSection({ dict }) {
  const d = dict.references;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
            {d.title}
          </h2>
          <p className="text-primary font-medium italic mb-10">
            {d.subtitle}
          </p>
          <p className="text-foreground/70 mb-8">{d.description}</p>
          <ul className="space-y-4 text-left max-w-xl mx-auto">
            {d.projects.map((project, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground/80">{project}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-muted mt-8 italic">{d.note}</p>
        </div>
      </div>
    </section>
  );
}
