import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Quote, Star } from "lucide-react";
import patient1 from "@/assets/patient-1.jpg";
import patient2 from "@/assets/patient-2.jpg";
import patient3 from "@/assets/patient-3.jpg";
import { SectionHeading } from "./SectionHeading";

const testimonials = [
  {
    quote:
      "The doctor took time to explain my blood pressure readings properly instead of rushing me out. I left understanding exactly what to do next.",
    name: "Nirmala Perera",
    caption: "General Medicine Patient",
    photo: patient1,
  },
  {
    quote:
      "My son had a high fever and the staff were gentle and quick. The paediatrician explained everything to him in words he could follow.",
    name: "Dilan Fernando",
    caption: "Pediatric Care Patient",
    photo: patient2,
  },
  {
    quote:
      "I came in for a full health screening. The lab results were explained clearly the same week, with simple advice on diet and exercise.",
    name: "Ranjith Silva",
    caption: "Health Screening Patient",
    photo: patient3,
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(id);
  }, [paused]);

  const t = testimonials[index] ?? testimonials[0]!;

  return (
    <section
      id="reviews"
      className="section-y relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/6 via-turquoise/5 to-transparent"
      />
      <div className="shell">
        <SectionHeading
          eyebrow="Patient stories"
          title="What our patients say"
          description="A few words from patients who visited MediNova Medical Center recently."
        />

        <div className="mt-12 md:mt-14">
          <AnimatePresence mode="wait">
            <motion.figure
              key={index}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="surface-card mx-auto max-w-3xl p-8 md:p-10"
            >
              <motion.span
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block text-accent"
                aria-hidden="true"
              >
                <Quote className="size-9 fill-accent/20" strokeWidth={1.5} />
              </motion.span>

              <blockquote className="font-display mt-4 text-lg leading-[1.6] font-medium text-foreground italic md:text-xl">
                {t.quote}
              </blockquote>

              <hr className="my-6 border-hairline" />

              <figcaption className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 sm:flex sm:justify-between">
                <div className="flex min-w-0 items-center gap-3">
                  <img
                    src={t.photo}
                    alt={`Portrait of ${t.name}`}
                    width={512}
                    height={512}
                    loading="lazy"
                    className="size-12 shrink-0 rounded-full object-cover"
                  />
                  <div className="min-w-0">
                    <p className="truncate font-display font-bold text-foreground">{t.name}</p>
                    <p className="truncate text-xs text-muted-foreground">{t.caption}</p>
                  </div>
                </div>
                <span className="flex shrink-0 gap-0.5">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.6 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.25, delay: 0.2 + i * 0.06 }}
                    >
                      <Star className="size-4 fill-accent text-accent" />
                    </motion.span>
                  ))}
                </span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>

          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((item, i) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show review from ${item.name}`}
                aria-current={i === index}
                className="grid h-11 place-items-center px-1"
              >
                <span
                  className={`h-1.5 rounded-full transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    i === index ? "w-7 bg-primary" : "w-1.5 bg-border"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
