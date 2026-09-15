import { CalendarClock, ShieldCheck, FileLock2, Zap, Siren } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { SectionHeading } from "./SectionHeading";

const features = [
  {
    icon: CalendarClock,
    title: "Convenient Opening Hours",
    body: "Open Monday to Saturday, 8:00 AM to 8:00 PM, for consultations and testing.",
    tone: "primary",
  },
  {
    icon: ShieldCheck,
    title: "Qualified & Caring Doctors",
    body: "An experienced team covering general medicine, paediatrics and women's health.",
    tone: "turquoise",
  },
  {
    icon: FileLock2,
    title: "Careful Patient Records",
    body: "Your history, prescriptions and lab results kept organised and confidential.",
    tone: "info",
  },
  {
    icon: Zap,
    title: "On-site Laboratory",
    body: "Routine blood tests and screening handled in-house, with clear explanations.",
    tone: "amber",
  },
  {
    icon: Siren,
    title: "Comfortable Environment",
    body: "A calm, clean centre where patients are guided at every step of their visit.",
    tone: "destructive",
  },
] as const;

const toneClass: Record<string, string> = {
  primary: "bg-primary/12 text-primary group-hover:bg-primary group-hover:text-primary-foreground",
  turquoise: "bg-turquoise/15 text-turquoise group-hover:bg-turquoise group-hover:text-primary-foreground",
  info: "bg-info/12 text-info group-hover:bg-info group-hover:text-primary-foreground",
  amber: "bg-accent/15 text-accent group-hover:bg-accent group-hover:text-accent-foreground",
  destructive:
    "bg-destructive/10 text-destructive group-hover:bg-destructive group-hover:text-destructive-foreground",
};

export function WhyChooseUs() {
  const { ref, revealed } = useReveal<HTMLDivElement>();

  return (
    <section id="why" className="section-y">
      <div className="shell">
        <SectionHeading
          eyebrow="Why MediNova"
          title="Care that feels considered, not clinical"
          description="Every part of the centre is arranged around one question: would this feel calm and clear to someone who isn't feeling well?"
        />

        <div
          ref={ref}
          className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:mt-14 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible lg:grid-cols-6"
        >
          {features.map((f, i) => (
            <article
              key={f.title}
              data-revealed={revealed}
              style={{ transitionDelay: `${i * 80}ms` }}
              className={`reveal surface-card card-lift group w-[78vw] shrink-0 snap-center p-7 md:w-auto md:p-8 ${
                i < 3 ? "lg:col-span-2" : "lg:col-span-3"
              }`}
            >
              <span
                className={`grid size-12 place-items-center rounded-xl transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08] ${toneClass[f.tone]}`}
              >
                <f.icon className="size-6" strokeWidth={1.5} />
              </span>
              <h3 className="text-h4 mt-5 text-foreground">{f.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{f.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-4 flex justify-center gap-1.5 md:hidden" aria-hidden="true">
          {features.map((f, i) => (
            <span
              key={f.title}
              className={`size-1.5 rounded-full ${i === 0 ? "bg-primary" : "bg-border"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
