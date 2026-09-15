import { useState } from "react";
import { Salad, Droplets, Moon, Footprints, HandHeart, Brain, Smile, Sun } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { SectionHeading } from "./SectionHeading";
import { btnGhost } from "./ui";

const tips = [
  {
    icon: Salad,
    title: "Healthy Eating",
    summary: "Simple tips for maintaining a balanced diet.",
    detail:
      "Fill half your plate with vegetables and fruit, choose whole grains where you can, and keep added sugar and fried food occasional rather than daily.",
  },
  {
    icon: Droplets,
    title: "Stay Hydrated",
    summary: "Learn why adequate hydration is important for your health.",
    detail:
      "Water supports digestion, temperature control and concentration. Keep a bottle nearby and drink more in hot weather or after activity.",
  },
  {
    icon: Moon,
    title: "Better Sleep",
    summary: "Simple habits that can support healthy sleep.",
    detail:
      "Aim for a regular sleep and wake time, dim screens an hour before bed, and keep the room cool, dark and quiet.",
  },
  {
    icon: Footprints,
    title: "Stay Active",
    summary: "Small ways to include physical activity in your day.",
    detail:
      "Short walks, stairs instead of lifts and light stretching all count. Around 30 minutes of movement most days is a good target.",
  },
  {
    icon: HandHeart,
    title: "Personal Hygiene",
    summary: "Everyday habits that lower the risk of infection.",
    detail:
      "Wash hands with soap before meals and after travel, cover coughs, and keep personal items such as towels separate.",
  },
  {
    icon: Brain,
    title: "Stress Management",
    summary: "Ways to keep everyday pressure manageable.",
    detail:
      "Regular breaks, slow breathing, time outdoors and talking to someone you trust all help. Persistent stress is worth discussing with a doctor.",
  },
  {
    icon: Smile,
    title: "Dental Care",
    summary: "Keeping teeth and gums healthy.",
    detail:
      "Brush twice daily with fluoride toothpaste, clean between teeth, and have a dental check-up roughly once a year.",
  },
  {
    icon: Sun,
    title: "Sun Protection",
    summary: "Protecting your skin during the day.",
    detail:
      "Avoid long exposure in the middle of the day, wear a hat or light long sleeves, and use sunscreen on exposed skin.",
  },
];

export function HealthTips() {
  const { ref, revealed } = useReveal<HTMLDivElement>();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="health-tips" className="section-y">
      <div className="shell">
        <SectionHeading
          eyebrow="Health tips"
          title="Everyday habits, made simple"
          description="Small, practical steps you can build into an ordinary day."
        />

        <div ref={ref} className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {tips.map((t, i) => {
            const open = openIndex === i;
            return (
              <article
                key={t.title}
                data-revealed={revealed}
                style={{ transitionDelay: `${i * 60}ms` }}
                className="reveal surface-card card-lift flex flex-col p-6"
              >
                <span className="grid size-12 place-items-center rounded-xl bg-turquoise/15 text-turquoise">
                  <t.icon className="size-6" strokeWidth={1.5} />
                </span>
                <h3 className="font-display mt-5 text-lg font-bold text-foreground">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.summary}</p>
                {open ? (
                  <p className="mt-3 border-t border-hairline pt-3 text-sm leading-relaxed text-muted-foreground">
                    {t.detail}
                  </p>
                ) : null}
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  className={`${btnGhost} mt-auto self-start px-0 text-primary hover:bg-transparent`}
                >
                  {open ? "Show Less" : "Read More"}
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
