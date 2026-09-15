import {
  Stethoscope,
  FlaskConical,
  HeartPulse,
  Pill,
  Baby,
  Flower2,
  Smile,
  Salad,
} from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { SectionHeading } from "./SectionHeading";

const services = [
  {
    icon: Stethoscope,
    title: "General Consultation",
    body: "Everyday medical advice, examinations and follow-up visits.",
  },
  {
    icon: FlaskConical,
    title: "Laboratory Services",
    body: "Routine blood tests and sample collection with clear reports.",
  },
  {
    icon: HeartPulse,
    title: "Health Screening",
    body: "Blood pressure, sugar, cholesterol and general health checks.",
  },
  {
    icon: Pill,
    title: "Pharmacy",
    body: "Prescribed medicines with guidance on correct use.",
  },
  {
    icon: Baby,
    title: "Pediatric Care",
    body: "Care for infants, children and teenagers.",
  },
  {
    icon: Flower2,
    title: "Women's Health",
    body: "Consultations and screening for women of every age.",
  },
  {
    icon: Smile,
    title: "Dental Care",
    body: "Routine dental checks, cleaning and treatment.",
  },
  {
    icon: Salad,
    title: "Nutrition & Wellness",
    body: "Practical guidance on diet, weight and daily habits.",
  },
];

export function ServicesSection() {
  const { ref, revealed } = useReveal<HTMLDivElement>();

  return (
    <section id="services" className="section-y bg-muted/40">
      <div className="shell">
        <SectionHeading
          eyebrow="What we offer"
          title="Our medical services"
          description="A focused set of everyday healthcare services, all under one roof."
        />

        <div ref={ref} className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <article
              key={s.title}
              data-revealed={revealed}
              style={{ transitionDelay: `${i * 60}ms` }}
              className="reveal surface-card card-lift group p-6"
            >
              <span className="grid size-12 place-items-center rounded-xl bg-primary/12 text-primary transition-all duration-200 group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="size-6" strokeWidth={1.5} />
              </span>
              <h3 className="font-display mt-5 text-lg font-bold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
