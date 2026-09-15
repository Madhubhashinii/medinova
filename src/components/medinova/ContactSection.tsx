import { MapPin, Phone, Mail, Clock, Info } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { inputBase } from "./ui";

const details = [
  { icon: MapPin, label: "Address", value: "123 Main Street, Colombo, Sri Lanka" },
  { icon: Phone, label: "Phone", value: "011 234 5678" },
  { icon: Mail, label: "Email", value: "info@medinova.com" },
  { icon: Clock, label: "Opening hours", value: "Monday – Saturday, 8:00 AM – 8:00 PM" },
];

export function ContactSection() {
  return (
    <section id="contact" className="section-y bg-muted/40">
      <div className="shell">
        <SectionHeading
          eyebrow="Contact"
          title="Get in touch"
          description="Visit us, call us, or send a message — our reception team is happy to help."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="grid gap-4 sm:grid-cols-2">
            {details.map((d) => (
              <div key={d.label} className="surface-card p-6">
                <span className="grid size-11 place-items-center rounded-xl bg-primary/12 text-primary">
                  <d.icon className="size-5" strokeWidth={1.5} />
                </span>
                <p className="mt-4 text-xs font-semibold tracking-[0.08em] text-muted-foreground uppercase">
                  {d.label}
                </p>
                <p className="mt-1 text-[15px] leading-relaxed font-medium text-foreground">{d.value}</p>
              </div>
            ))}
          </div>

          <div className="surface-card p-7 md:p-8">
            <h3 className="text-h4 text-foreground">Send us a message</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              This website is a static demonstration, so the form below is for layout purposes only and
              does not send or store anything.
            </p>

            <div className="mt-6 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-foreground">
                  Full name
                  <input className={inputBase} placeholder="Your name" disabled />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-foreground">
                  Phone
                  <input className={inputBase} placeholder="011 234 5678" disabled />
                </label>
              </div>
              <label className="grid gap-2 text-sm font-semibold text-foreground">
                Email
                <input className={inputBase} placeholder="you@example.com" disabled />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-foreground">
                Message
                <textarea className={`${inputBase} min-h-28 resize-none`} placeholder="How can we help?" disabled />
              </label>
              <p className="flex gap-2 rounded-xl bg-muted p-4 text-xs leading-relaxed text-muted-foreground">
                <Info className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={1.75} />
                <span>
                  For appointments or enquiries, please call{" "}
                  <strong className="text-foreground">011 234 5678</strong> or visit us during opening
                  hours.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
