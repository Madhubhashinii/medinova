import { ArrowRight, Star, Activity, CalendarCheck } from "lucide-react";
import heroImage from "@/assets/hero-doctor.jpg";
import patient1 from "@/assets/patient-1.jpg";
import patient2 from "@/assets/patient-2.jpg";
import patient3 from "@/assets/patient-3.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import { btnPrimary, btnOutline } from "./ui";
import { Eyebrow } from "./SectionHeading";

const avatars = [patient1, patient2, patient3];

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden pt-10 pb-8 md:pt-16 md:pb-12">
      {/* Ambient background: radial wash + soft organic blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-32 size-[620px] rounded-full bg-turquoise/10 blur-3xl" />
        <div className="absolute top-40 -left-40 size-[420px] rounded-[46%_54%_38%_62%/58%_42%_58%_42%] bg-primary/8 blur-3xl" />
        <div className="absolute right-1/4 bottom-0 size-[320px] rounded-[58%_42%_62%_38%/44%_56%_44%_56%] bg-accent/8 blur-3xl" />
      </div>

      <div className="shell grid items-center gap-12 lg:grid-cols-[58%_42%] lg:gap-10">
        {/* Copy column */}
        <div className="order-2 flex flex-col items-start gap-6 lg:order-1">
          <div className="animate-fade-in">
            <Eyebrow>Trusted family healthcare in Colombo</Eyebrow>
          </div>

          <h1
            className="animate-fade-in text-display max-w-[15ch] text-foreground"
            style={{ animationDelay: "0.1s", animationFillMode: "backwards" }}
          >
            Your health, in caring hands.
          </h1>

          <p
            className="animate-fade-in max-w-[52ch] text-lg leading-[1.7] text-muted-foreground"
            style={{ animationDelay: "0.2s", animationFillMode: "backwards" }}
          >
            MediNova Medical Center offers everyday consultations, laboratory testing, health
            screening and family care in one calm, welcoming place.
          </p>

          <div
            className="animate-fade-in flex flex-wrap items-center gap-3"
            style={{ animationDelay: "0.3s", animationFillMode: "backwards" }}
          >
            <a href="#services" className={btnPrimary}>
              Our Services
            </a>
            <a href="#doctors" className={btnOutline}>
              Meet Our Doctors
              <ArrowRight
                className="size-4 transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1"
                strokeWidth={2}
              />
            </a>
          </div>

          <div
            className="animate-fade-in flex min-w-0 items-center gap-3"
            style={{ animationDelay: "0.4s", animationFillMode: "backwards" }}
          >
            <div className="flex shrink-0 -space-x-3">
              {avatars.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  width={512}
                  height={512}
                  loading="lazy"
                  className="size-10 rounded-full border-2 border-card object-cover"
                />
              ))}
              <span className="grid size-10 place-items-center rounded-full border-2 border-card bg-primary/10 text-[10px] font-bold text-primary">
                +9k
              </span>
            </div>
            <p className="min-w-0 text-sm text-muted-foreground">
              <span className="text-numeric text-foreground">25,000+</span> patients cared for across
              Sri Lanka
            </p>
          </div>
        </div>

        {/* Visual column */}
        <div className="animate-scale-in relative order-1 lg:order-2">
          <img
            src={heroImage}
            alt="A doctor smiling with a patient during a consultation"
            width={1200}
            height={1408}
            className="aspect-4/5 w-full rounded-3xl object-cover shadow-float"
          />

          {/* Next appointment card */}
          <div
            aria-hidden="true"
            className="surface-glass float-slow absolute -bottom-6 -left-4 w-[19rem] max-w-[85%] rounded-2xl p-4 sm:-left-8"
          >
            <p className="flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.08em] text-primary uppercase">
              <CalendarCheck className="size-3.5" strokeWidth={2} />
              Today at the centre
            </p>
            <div className="mt-3 flex min-w-0 items-center gap-3">
              <img
                src={doctor2}
                alt=""
                width={640}
                height={800}
                loading="lazy"
                className="size-11 shrink-0 rounded-full object-cover"
              />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-bold text-foreground">Dr. Amara Okonjo</p>
                <p className="truncate text-xs text-muted-foreground">General Medicine · 8 AM – 8 PM</p>
              </div>
              <span className="shrink-0 rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground">
                Open
              </span>
            </div>
          </div>

          {/* Satisfaction card */}
          <div
            aria-hidden="true"
            className="surface-glass float-slower absolute -top-4 -right-2 rounded-2xl p-4 sm:-right-6"
          >
            <svg viewBox="0 0 120 32" className="h-8 w-28 text-turquoise" fill="none">
              <path
                d="M0 20h18l6-12 8 22 7-16 6 8h12l5-10 7 14 6-6h45"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDasharray="160"
                className="animate-[mn-dash_2.4s_linear_infinite]"
              />
            </svg>
            <p className="text-numeric mt-1 text-2xl text-foreground">98%</p>
            <p className="flex items-center gap-1 text-xs text-muted-foreground">
              <Star className="size-3 fill-accent text-accent" />
              Satisfaction
            </p>
          </div>

          <div
            aria-hidden="true"
            className="absolute top-1/2 -left-6 hidden rounded-2xl bg-card/85 p-3 shadow-lift backdrop-blur-md xl:block"
          >
            <Activity className="size-5 text-primary" strokeWidth={1.75} />
          </div>
        </div>
      </div>
    </section>
  );
}
