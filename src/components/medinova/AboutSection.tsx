import { Target, Eye, HeartHandshake } from "lucide-react";
import heroImage from "@/assets/service-telemedicine.jpg";
import { SectionHeading } from "./SectionHeading";
import { useReveal } from "@/hooks/use-reveal";

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    body: "To provide accessible, reliable and respectful healthcare for individuals and families in our community.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    body: "A community where people understand their health and can act on it with confidence.",
  },
  {
    icon: HeartHandshake,
    title: "Our Values",
    body: "Care, honesty and clarity — in every consultation, every test and every conversation.",
  },
];

export function AboutSection() {
  const { ref, revealed } = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="section-y">
      <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            align="left"
            eyebrow="About us"
            title="About MediNova"
            description="MediNova Medical Center provides accessible and reliable healthcare services for individuals and families. Our goal is to create a comfortable environment where patients can receive professional care and trustworthy health information."
          />

          <div ref={ref} className="mt-8 grid gap-4">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                data-revealed={revealed}
                style={{ transitionDelay: `${i * 90}ms` }}
                className="reveal surface-card flex gap-4 p-5"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/12 text-primary">
                  <p.icon className="size-5" strokeWidth={1.5} />
                </span>
                <div>
                  <h3 className="font-display font-bold text-foreground">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <img
            src={heroImage}
            alt="A doctor speaking with a patient inside MediNova Medical Center"
            width={1200}
            height={900}
            loading="lazy"
            className="aspect-4/3 w-full rounded-3xl object-cover shadow-lift"
          />
          <div className="surface-glass float-slow absolute -bottom-6 left-4 rounded-2xl px-5 py-4">
            <p className="text-numeric text-2xl text-primary">15+</p>
            <p className="text-xs font-medium text-muted-foreground">Years caring for families</p>
          </div>
        </div>
      </div>
    </section>
  );
}
