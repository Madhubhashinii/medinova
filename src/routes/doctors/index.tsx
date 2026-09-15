import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { NavBar } from "@/components/medinova/NavBar";
import { Footer } from "@/components/medinova/Footer";
import { SectionHeading } from "@/components/medinova/SectionHeading";
import { btnOutline } from "@/components/medinova/ui";
import { doctorPhoto } from "@/components/medinova/doctor-assets";
import { doctors } from "@/data/doctors";

const title = "Our Doctors — MediNova Medical Center";
const description =
  "Meet the MediNova medical team: general medicine, internal medicine, paediatric and dental care professionals, with qualifications, languages and areas of focus.";

export const Route = createFileRoute("/doctors/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  // Rendered on the server: the loader runs during SSR and the HTML ships complete.
  loader: () => ({ doctors }),
  component: DoctorsIndex,
});

function DoctorsIndex() {
  const { doctors: list } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      <main>
        <section className="section-y">
          <div className="shell">
            <SectionHeading
              eyebrow="Our doctors"
              title="Meet our medical team"
              description="Qualified professionals across general medicine, paediatrics, dental and long-term condition care."
            />

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {list.map((doc) => (
                <article
                  key={doc.id}
                  className="surface-card card-lift group flex flex-col overflow-hidden"
                >
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
                      <h2 className="text-h4 truncate text-foreground">{doc.name}</h2>
                      <span className="mt-1.5 inline-flex rounded-full bg-primary/8 px-2.5 py-0.5 text-xs font-semibold text-primary">
                        {doc.specialty}
                      </span>
                    </div>

                    <p className="text-numeric text-sm text-muted-foreground">
                      {doc.experience_years} Years Experience
                    </p>

                    <p className="text-[13px] leading-relaxed text-muted-foreground">{doc.focus}</p>

                    <Link
                      to="/doctors/$doctorId"
                      params={{ doctorId: doc.id }}
                      className={`${btnOutline} mt-auto w-full`}
                    >
                      View Profile
                      <ArrowRight className="size-4" strokeWidth={1.75} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
