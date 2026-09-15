import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { X, GraduationCap, Languages, Stethoscope } from "lucide-react";
import { doctors as staticDoctors } from "@/data/doctors";
import { doctorPhoto, type Doctor } from "./doctor-assets";
import { SectionHeading } from "./SectionHeading";
import { btnOutline } from "./ui";

function DoctorCard({ doc, onOpen }: { doc: Doctor; onOpen: (d: Doctor) => void }) {
  return (
    <article className="surface-card card-lift group flex flex-col overflow-hidden">
      <img
        src={doctorPhoto(doc.photo_slug)}
        alt={`Portrait of ${doc.name}`}
        width={640}
        height={800}
        loading="lazy"
        className="aspect-4/5 w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
      />

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="min-w-0">
          <h3 className="text-h4 truncate text-foreground">{doc.name}</h3>
          <span className="mt-1.5 inline-flex rounded-full bg-primary/8 px-2.5 py-0.5 text-xs font-semibold text-primary">
            {doc.specialty}
          </span>
        </div>

        <p className="text-numeric text-sm text-muted-foreground">
          {doc.experience_years} Years Experience
        </p>

        <p className="text-[13px] leading-relaxed text-muted-foreground">{doc.focus}</p>

        <button type="button" onClick={() => onOpen(doc)} className={`${btnOutline} mt-auto w-full`}>
          View Profile
        </button>
      </div>
    </article>
  );
}

function ProfileDialog({ doc, onClose }: { doc: Doctor | null; onClose: () => void }) {
  useEffect(() => {
    if (!doc) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [doc, onClose]);

  if (!doc) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Profile of ${doc.name}`}
      className="fixed inset-0 z-100 grid place-items-center bg-ink/50 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="surface-card max-h-[88vh] w-full max-w-lg overflow-y-auto p-6 md:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex min-w-0 items-center gap-4">
            <img
              src={doctorPhoto(doc.photo_slug)}
              alt=""
              width={640}
              height={800}
              className="size-16 shrink-0 rounded-2xl object-cover"
            />
            <div className="min-w-0">
              <h3 className="text-h4 truncate text-foreground">{doc.name}</h3>
              <p className="truncate text-sm font-semibold text-primary">{doc.specialty}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close profile"
            className="grid size-10 shrink-0 place-items-center rounded-xl border border-hairline text-muted-foreground hover:text-foreground"
          >
            <X className="size-4" />
          </button>
        </div>

        <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">{doc.bio}</p>

        <Link
          to="/doctors/$doctorId"
          params={{ doctorId: doc.id }}
          onClick={onClose}
          className={`${btnOutline} mt-5 w-full`}
        >
          Open full profile
        </Link>

        <ul className="mt-6 grid gap-3 text-sm">
          <li className="flex gap-3">
            <GraduationCap className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={1.75} />
            <span className="text-muted-foreground">{doc.qualifications}</span>
          </li>
          <li className="flex gap-3">
            <Stethoscope className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={1.75} />
            <span className="text-muted-foreground">
              {doc.experience_years} years of clinical experience · {doc.focus}
            </span>
          </li>
          <li className="flex gap-3">
            <Languages className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={1.75} />
            <span className="text-muted-foreground">{doc.languages.join(", ")}</span>
          </li>
        </ul>
      </motion.div>
    </div>
  );
}

export function FeaturedDoctors() {
  const [selected, setSelected] = useState<Doctor | null>(null);

  return (
    <section id="doctors" className="section-y">
      <div className="shell">
        <SectionHeading
          eyebrow="Our doctors"
          title="Meet our medical team"
          description="Qualified professionals across general medicine, paediatrics, dental and long-term condition care."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {staticDoctors.map((doc, i) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="flex"
            >
              <div className="flex w-full">
                <DoctorCard doc={doc} onOpen={setSelected} />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link to="/doctors" className={btnOutline}>
            View all doctors
          </Link>
        </div>
      </div>

      <ProfileDialog doc={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
