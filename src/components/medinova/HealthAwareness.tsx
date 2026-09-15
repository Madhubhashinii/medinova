import { ArrowRight, HeartPulse } from "lucide-react";

export function HealthAwareness() {
  return (
    <section className="section-y">
      <div className="shell">
        <div className="surface-card relative overflow-hidden p-8 text-center md:p-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-primary/8 via-turquoise/6 to-transparent"
          />
          <span className="gradient-brand mx-auto grid size-12 place-items-center rounded-xl text-primary-foreground">
            <HeartPulse className="size-6" strokeWidth={1.75} />
          </span>
          <h2 className="text-h2 mx-auto mt-5 max-w-2xl text-foreground">
            Take care of your health every day.
          </h2>
          <p className="mx-auto mt-4 max-w-[62ch] text-base leading-[1.7] text-muted-foreground">
            Explore simple health tips, learn about common health conditions, and discover practical ways
            to maintain a healthier lifestyle.
          </p>
          <a
            href="#health-tips"
            className="group mt-7 inline-flex min-h-11 items-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.02]"
          >
            Explore Health Tips
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
          </a>
        </div>
      </div>
    </section>
  );
}
