import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, GraduationCap, Languages, Stethoscope } from "lucide-react";

import { NavBar } from "@/components/medinova/NavBar";
import { Footer } from "@/components/medinova/Footer";
import { Eyebrow } from "@/components/medinova/SectionHeading";
import { btnOutline } from "@/components/medinova/ui";
import { doctorPhoto } from "@/components/medinova/doctor-assets";
import { findDoctor } from "@/data/doctors";

export const Route = createFileRoute("/doctors/$doctorId")({
  // Loader runs on the server for the first request, so the profile HTML is
  // fully rendered before it reaches the browser.
  loader: ({ params }) => {
    const doctor = findDoctor(params.doctorId);
    if (!doctor) throw notFound();
    return { doctor };
  },
  head: ({ loaderData }) => {
    const doctor = loaderData?.doctor;
    const title = doctor
      ? `${doctor.name} — ${doctor.specialty} | MediNova Medical Center`
      : "Doctor profile — MediNova Medical Center";
    const description = doctor
      ? `${doctor.name}, ${doctor.qualifications}. ${doctor.experience_years} years of clinical experience at MediNova Medical Center. Focus: ${doctor.focus}.`
      : "Doctor profile at MediNova Medical Center.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "profile" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: DoctorProfile,
});

function DoctorProfile() {
  const { doctor } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      <main>
        <section className="section-y">
          <div className="shell">
            <Link
              to="/doctors"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              <ArrowLeft className="size-4" strokeWidth={1.75} />
              All doctors
            </Link>

            <div className="mt-8 grid gap-8 md:grid-cols-[320px_1fr] md:items-start">
              <img
                src={doctorPhoto(doctor.photo_slug)}
                alt={`Portrait of ${doctor.name}`}
                width={640}
                height={800}
                className="surface-card aspect-4/5 w-full object-cover"
              />

              <div className="flex flex-col gap-5">
                <Eyebrow>{doctor.specialty}</Eyebrow>
                <h1 className="text-h2 text-foreground">{doctor.name}</h1>
                <p className="text-numeric text-sm text-muted-foreground">
                  {doctor.experience_years} Years Experience
                </p>
                <p className="max-w-[640px] text-[15px] leading-relaxed text-muted-foreground">
                  {doctor.bio}
                </p>

                <ul className="mt-2 grid gap-3 text-sm">
                  <li className="flex gap-3">
                    <GraduationCap
                      className="mt-0.5 size-4 shrink-0 text-primary"
                      strokeWidth={1.75}
                    />
                    <span className="text-muted-foreground">{doctor.qualifications}</span>
                  </li>
                  <li className="flex gap-3">
                    <Stethoscope
                      className="mt-0.5 size-4 shrink-0 text-primary"
                      strokeWidth={1.75}
                    />
                    <span className="text-muted-foreground">
                      {doctor.experience_years} years of clinical experience · {doctor.focus}
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <Languages className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={1.75} />
                    <span className="text-muted-foreground">{doctor.languages.join(", ")}</span>
                  </li>
                </ul>

                <Link to="/" hash="contact" className={`${btnOutline} mt-2 self-start`}>
                  Contact the clinic
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
