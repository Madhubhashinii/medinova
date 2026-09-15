import { motion } from "motion/react";
import { Building2, Stethoscope, CalendarCheck, Smile } from "lucide-react";
import { useReveal, useCountUp } from "@/hooks/use-reveal";

const stats = [
  { icon: Building2, value: 12, suffix: "", label: "Years of Service" },
  { icon: Stethoscope, value: 30, suffix: "+", label: "Qualified Doctors" },
  { icon: CalendarCheck, value: 25000, suffix: "+", label: "Patients Cared For" },
  { icon: Smile, value: 98, suffix: "%", label: "Patient Satisfaction" },
];

function Stat({ stat, active, index }: { stat: (typeof stats)[number]; active: boolean; index: number }) {
  const value = useCountUp(stat.value, active);

  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <motion.span
        initial={{ opacity: 0, y: 10, scale: 0.9 }}
        animate={active ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="grid size-11 place-items-center rounded-xl bg-card/15 text-primary-foreground backdrop-blur-sm"
      >
        <stat.icon className="size-5" strokeWidth={1.5} />
      </motion.span>
      <p className="text-numeric text-4xl text-primary-foreground md:text-[3.25rem] md:leading-none">
        {value.toLocaleString()}
        {stat.suffix}
      </p>
      <p className="text-sm font-medium text-primary-foreground/80">{stat.label}</p>
    </div>
  );
}

export function StatsCounter() {
  const { ref, revealed } = useReveal<HTMLDivElement>(0.3);

  return (
    <section ref={ref} className="gradient-brand relative overflow-hidden py-14 md:py-20">
      <svg aria-hidden="true" className="absolute inset-0 size-full opacity-[0.07]" role="presentation">
        <defs>
          <pattern id="mn-cross" width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M24 16v16M16 24h16" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#mn-cross)" />
      </svg>

      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {[12, 34, 58, 76, 90].map((left, i) => (
          <motion.span
            key={left}
            animate={{ y: [0, -28, 0], opacity: [0.15, 0.4, 0.15] }}
            transition={{ duration: 7 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
            style={{ left: `${left}%`, top: `${20 + i * 12}%` }}
            className="absolute size-2 rounded-full bg-white"
          />
        ))}
      </div>

      <div className="shell relative grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-8">
        {stats.map((s, i) => (
          <Stat key={s.label} stat={s} active={revealed} index={i} />
        ))}
      </div>
    </section>
  );
}
