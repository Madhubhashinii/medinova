import { Check } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { SectionHeading } from "./SectionHeading";

const packages = [
  {
    name: "Basic Health Check",
    caption: "A quick overview of the essentials.",
    items: ["Blood pressure", "Blood sugar", "BMI", "Basic health assessment"],
    featured: false,
  },
  {
    name: "Complete Health Check",
    caption: "A fuller picture, including a consultation.",
    items: [
      "Blood pressure",
      "Blood sugar",
      "Cholesterol",
      "Full blood count",
      "BMI",
      "General consultation",
    ],
    featured: true,
  },
  {
    name: "Family Health Check",
    caption: "Simple screening for the whole household.",
    items: ["Basic screening", "Blood pressure", "Blood sugar", "BMI"],
    featured: false,
  },
];

export function HealthPackages() {
  const { ref, revealed } = useReveal<HTMLDivElement>();

  return (
    <section id="packages" className="section-y">
      <div className="shell">
        <SectionHeading
          eyebrow="Health packages"
          title="Health check packages"
          description="Information on the screening packages available at our center. Ask at reception for current details."
        />

        <div ref={ref} className="mt-12 grid gap-6 lg:grid-cols-3">
          {packages.map((p, i) => (
            <article
              key={p.name}
              data-revealed={revealed}
              style={{ transitionDelay: `${i * 80}ms` }}
              className={`reveal card-lift flex flex-col rounded-2xl border p-7 ${
                p.featured
                  ? "gradient-brand border-transparent text-primary-foreground shadow-float"
                  : "surface-card"
              }`}
            >
              {p.featured ? (
                <span className="w-fit rounded-full bg-card/20 px-3 py-1 text-xs font-semibold">
                  Most complete
                </span>
              ) : null}
              <h3 className={`text-h4 mt-4 ${p.featured ? "" : "text-foreground"}`}>{p.name}</h3>
              <p
                className={`mt-2 text-sm leading-relaxed ${
                  p.featured ? "text-primary-foreground/80" : "text-muted-foreground"
                }`}
              >
                {p.caption}
              </p>
              <ul className="mt-6 grid gap-2.5 text-sm">
                {p.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check
                      className={`mt-0.5 size-4 shrink-0 ${p.featured ? "" : "text-primary"}`}
                      strokeWidth={2.25}
                    />
                    <span className={p.featured ? "" : "text-muted-foreground"}>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
