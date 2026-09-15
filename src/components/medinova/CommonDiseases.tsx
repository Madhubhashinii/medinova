import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Info, X } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { SectionHeading } from "./SectionHeading";
import { btnGhost } from "./ui";

type Category = "Respiratory" | "Digestive" | "General" | "Chronic Conditions";

type Condition = {
  name: string;
  category: Category;
  summary: string;
  symptoms: string[];
  selfCare: string[];
  seekCare: string;
};

const categories: ("All" | Category)[] = [
  "All",
  "Respiratory",
  "Digestive",
  "General",
  "Chronic Conditions",
];

const conditions: Condition[] = [
  {
    name: "Common Cold",
    category: "Respiratory",
    summary: "Common symptoms and general self-care tips.",
    symptoms: ["Runny nose", "Sneezing", "Sore throat", "Mild cough"],
    selfCare: [
      "Get adequate rest",
      "Drink enough fluids",
      "Warm liquids may soothe a sore throat",
      "Maintain good hygiene",
    ],
    seekCare:
      "Seek medical care if a high fever lasts more than three days, breathing becomes difficult, or symptoms keep worsening after a week.",
  },
  {
    name: "Flu",
    category: "Respiratory",
    summary: "How influenza usually feels and how to rest well.",
    symptoms: ["Fever and chills", "Body aches", "Headache", "Tiredness"],
    selfCare: ["Rest at home", "Drink fluids regularly", "Eat light meals", "Avoid close contact with others"],
    seekCare:
      "Seek medical care for shortness of breath, chest pain, confusion, or if symptoms return after improving.",
  },
  {
    name: "Cough",
    category: "Respiratory",
    summary: "General guidance for a short-term cough.",
    symptoms: ["Dry or productive cough", "Throat irritation", "Disturbed sleep"],
    selfCare: ["Sip warm fluids", "Avoid smoke and dust", "Keep the room well ventilated"],
    seekCare:
      "Seek medical care if a cough lasts more than three weeks, brings blood, or comes with weight loss or breathlessness.",
  },
  {
    name: "Sore Throat",
    category: "Respiratory",
    summary: "Soothing a painful throat safely.",
    symptoms: ["Pain on swallowing", "Hoarse voice", "Swollen neck glands"],
    selfCare: ["Warm salt-water gargle", "Drink fluids often", "Rest your voice"],
    seekCare:
      "Seek medical care for difficulty swallowing or breathing, drooling, or a severe sore throat with high fever.",
  },
  {
    name: "Indigestion",
    category: "Digestive",
    summary: "Discomfort after meals and simple adjustments.",
    symptoms: ["Upper abdominal discomfort", "Bloating", "Feeling too full", "Mild nausea"],
    selfCare: ["Eat smaller, slower meals", "Limit spicy and fatty food", "Avoid lying down straight after eating"],
    seekCare:
      "Seek medical care for severe or persistent pain, vomiting blood, black stools, or unexplained weight loss.",
  },
  {
    name: "Diarrhoea",
    category: "Digestive",
    summary: "Staying hydrated is the priority.",
    symptoms: ["Loose stools", "Cramping", "Urgency", "Tiredness"],
    selfCare: ["Drink oral rehydration fluids", "Eat plain, easy food", "Wash hands thoroughly"],
    seekCare:
      "Seek medical care for signs of dehydration, blood in stools, high fever, or symptoms lasting more than two days.",
  },
  {
    name: "Constipation",
    category: "Digestive",
    summary: "Everyday steps that often help.",
    symptoms: ["Infrequent stools", "Straining", "Abdominal fullness"],
    selfCare: ["Increase fibre gradually", "Drink more water", "Stay physically active"],
    seekCare:
      "Seek medical care for a sudden lasting change in bowel habit, bleeding, severe pain, or weight loss.",
  },
  {
    name: "Stomach Ache",
    category: "Digestive",
    summary: "Short-term abdominal pain and general care.",
    symptoms: ["Cramping pain", "Tenderness", "Reduced appetite"],
    selfCare: ["Rest and sip fluids", "Try plain food", "Use a warm compress if it comforts you"],
    seekCare:
      "Seek medical care for severe or worsening pain, pain with fever or vomiting, or pain focused in the lower right abdomen.",
  },
  {
    name: "Headache",
    category: "General",
    summary: "Common triggers and general self-care.",
    symptoms: ["Dull or throbbing pain", "Light sensitivity", "Neck tightness"],
    selfCare: ["Rest in a quiet, dim room", "Drink water", "Take screen breaks", "Keep regular sleep hours"],
    seekCare:
      "Seek medical care for a sudden severe headache, headache after a head injury, or one with fever, weakness or vision changes.",
  },
  {
    name: "Fever",
    category: "General",
    summary: "Monitoring temperature at home.",
    symptoms: ["Raised temperature", "Chills", "Sweating", "Tiredness"],
    selfCare: ["Rest", "Drink fluids regularly", "Wear light clothing", "Record temperature readings"],
    seekCare:
      "Seek medical care for a fever above 39°C, fever lasting more than three days, a rash, stiff neck, or fever in an infant.",
  },
  {
    name: "Mild Dehydration",
    category: "General",
    summary: "Recognising early signs of low fluid levels.",
    symptoms: ["Thirst", "Dry mouth", "Dark urine", "Light-headedness"],
    selfCare: ["Drink water steadily", "Use rehydration solution after illness", "Rest in a cool place"],
    seekCare:
      "Seek medical care for confusion, very little urine, fainting, or an inability to keep fluids down.",
  },
  {
    name: "Diabetes",
    category: "Chronic Conditions",
    summary: "Long-term blood sugar management, with medical supervision.",
    symptoms: ["Increased thirst", "Frequent urination", "Tiredness", "Slow-healing wounds"],
    selfCare: [
      "Follow your prescribed treatment plan",
      "Keep meals regular and balanced",
      "Stay active as advised",
      "Attend review appointments",
    ],
    seekCare:
      "Seek medical care for very high or very low readings, foot wounds that do not heal, or sudden vision changes.",
  },
  {
    name: "High Blood Pressure",
    category: "Chronic Conditions",
    summary: "Often silent, so regular checks matter.",
    symptoms: ["Usually no symptoms", "Occasional headache", "Occasional dizziness"],
    selfCare: ["Reduce added salt", "Stay active", "Limit alcohol", "Take medication exactly as prescribed"],
    seekCare:
      "Seek medical care for chest pain, breathlessness, severe headache, or repeated very high readings.",
  },
  {
    name: "High Cholesterol",
    category: "Chronic Conditions",
    summary: "Diet, activity and periodic testing.",
    symptoms: ["No direct symptoms", "Detected through a blood test"],
    selfCare: ["Choose unsaturated fats", "Increase fibre", "Exercise regularly", "Test as advised"],
    seekCare:
      "Discuss results with a doctor, and seek urgent care for chest pain or breathlessness on exertion.",
  },
  {
    name: "Asthma",
    category: "Chronic Conditions",
    summary: "Managing triggers and inhaler routine.",
    symptoms: ["Wheezing", "Shortness of breath", "Chest tightness", "Night-time cough"],
    selfCare: ["Use inhalers as prescribed", "Identify and avoid triggers", "Keep a reliever inhaler nearby"],
    seekCare:
      "Seek urgent care if a reliever inhaler is not helping, speaking is difficult, or lips look blue.",
  },
];

function DiseaseDialog({ item, onClose }: { item: Condition | null; onClose: () => void }) {
  useEffect(() => {
    if (!item) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.name}
      onClick={onClose}
      className="fixed inset-0 z-100 grid place-items-center bg-ink/50 p-4 backdrop-blur-sm"
    >
      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="surface-card max-h-[88vh] w-full max-w-lg overflow-y-auto p-6 md:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="inline-flex rounded-full bg-primary/8 px-2.5 py-0.5 text-xs font-semibold text-primary">
              {item.category}
            </span>
            <h3 className="text-h3 mt-2 text-foreground">{item.name}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="grid size-10 shrink-0 place-items-center rounded-xl border border-hairline text-muted-foreground hover:text-foreground"
          >
            <X className="size-4" />
          </button>
        </div>

        <h4 className="font-display mt-6 font-bold text-foreground">Common symptoms</h4>
        <ul className="mt-2 grid gap-1.5 text-sm text-muted-foreground">
          {item.symptoms.map((s) => (
            <li key={s} className="flex gap-2">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
              {s}
            </li>
          ))}
        </ul>

        <h4 className="font-display mt-6 font-bold text-foreground">Self-care</h4>
        <ul className="mt-2 grid gap-1.5 text-sm text-muted-foreground">
          {item.selfCare.map((s) => (
            <li key={s} className="flex gap-2">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-turquoise" />
              {s}
            </li>
          ))}
        </ul>

        <h4 className="font-display mt-6 font-bold text-foreground">When to seek medical care</h4>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.seekCare}</p>

        <p className="mt-6 flex gap-2 rounded-xl bg-muted p-4 text-xs leading-relaxed text-muted-foreground">
          <Info className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={1.75} />
          <span>
            <strong className="text-foreground">Disclaimer:</strong> This information is for general
            educational purposes and is not a substitute for professional medical advice, diagnosis, or
            treatment.
          </span>
        </p>
      </motion.div>
    </div>
  );
}

export function CommonDiseases() {
  const { ref, revealed } = useReveal<HTMLDivElement>();
  const [active, setActive] = useState<"All" | Category>("All");
  const [showAll, setShowAll] = useState(false);
  const [selected, setSelected] = useState<Condition | null>(null);

  const filtered = useMemo(
    () => (active === "All" ? conditions : conditions.filter((c) => c.category === active)),
    [active],
  );
  const visible = showAll ? filtered : filtered.slice(0, 8);

  return (
    <section id="diseases" className="section-y bg-muted/40">
      <div className="shell">
        <SectionHeading
          eyebrow="Common diseases"
          title="Common conditions & self-care"
          description="General information on conditions we see often, with guidance on when professional care is appropriate."
        />

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => {
                setActive(c);
                setShowAll(false);
              }}
              aria-pressed={active === c}
              className={`min-h-11 rounded-full px-4 text-sm font-semibold transition-colors ${
                active === c
                  ? "bg-primary text-primary-foreground"
                  : "border border-hairline bg-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div ref={ref} className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((item, i) => (
            <article
              key={item.name}
              data-revealed={revealed}
              style={{ transitionDelay: `${i * 50}ms` }}
              className="reveal surface-card card-lift flex flex-col overflow-hidden"
            >
              <div className="gradient-brand grid h-24 place-items-center">
                <span className="font-display text-sm font-bold tracking-[0.08em] text-primary-foreground uppercase">
                  {item.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <h3 className="font-display text-lg font-bold text-foreground">{item.name}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.summary}</p>
                <button
                  type="button"
                  onClick={() => setSelected(item)}
                  className={`${btnGhost} mt-auto self-start px-0 text-primary hover:bg-transparent`}
                >
                  Learn More
                  <ArrowRight className="size-4" strokeWidth={2} />
                </button>
              </div>
            </article>
          ))}
        </div>

        {filtered.length > 8 ? (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              className="inline-flex min-h-11 items-center gap-2 rounded-xl border-[1.5px] border-primary/30 bg-card px-6 text-sm font-semibold text-primary hover:bg-primary/5"
            >
              {showAll ? "View Less" : "View More"}
            </button>
          </div>
        ) : null}

        <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-muted-foreground">
          <strong className="text-foreground">Disclaimer:</strong> This information is for general
          educational purposes and is not a substitute for professional medical advice, diagnosis, or
          treatment.
        </p>
      </div>

      <DiseaseDialog item={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
