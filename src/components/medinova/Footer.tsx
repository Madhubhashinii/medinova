import { useState } from "react";
import { useSectionHref } from "./section-href";
import {
  HeartPulse,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  Siren,
  ChevronDown,
} from "lucide-react";

const groups = [
  {
    title: "Quick Links",
    links: [
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Doctors", href: "#doctors" },
      { label: "Packages", href: "#packages" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Health Info",
    links: [
      { label: "Health Tips", href: "#health-tips" },
      { label: "Common Diseases", href: "#diseases" },
      { label: "Why MediNova", href: "#why" },
      { label: "Patient Stories", href: "#reviews" },
    ],
  },
];

const socials = [Facebook, Instagram, Twitter, Linkedin];

function LinkColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  const [open, setOpen] = useState(false);
  const to = useSectionHref();

  return (
    <div className="border-b border-white/10 py-3 md:border-0 md:py-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex min-h-11 w-full items-center justify-between text-left md:pointer-events-none md:min-h-0"
      >
        <h3 className="font-display text-sm font-bold tracking-wide text-white uppercase">{title}</h3>
        <ChevronDown
          className={`size-4 text-white/50 transition-transform md:hidden ${open ? "rotate-180" : ""}`}
        />
      </button>
      <ul className={`${open ? "grid" : "hidden"} gap-2.5 pt-3 md:grid md:pt-4`}>
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={to(l.href)}
              className="inline-flex min-h-9 items-center text-sm text-white/60 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const to = useSectionHref();

  return (
    <footer className="bg-ink text-white">
      <div className="shell grid gap-8 py-14 md:grid-cols-[1.4fr_1fr_1fr_1.2fr] md:gap-10 md:py-16">
        <div className="flex flex-col gap-4">
          <a href={to("#top")} className="flex items-center gap-2.5">
            <span className="gradient-brand grid size-10 place-items-center rounded-xl text-white">
              <HeartPulse className="size-5" strokeWidth={1.75} />
            </span>
            <span className="font-display text-lg font-extrabold tracking-[-0.02em]">MediNova</span>
          </a>
          <p className="max-w-[34ch] text-sm leading-relaxed text-white/60">
            Accessible, reliable everyday healthcare for individuals and families — consultations,
            laboratory testing and health screening under one roof.
          </p>
          <div className="flex gap-2">
            {socials.map((Icon, i) => (
              <a
                key={i}
                href={to("#top")}
                aria-label="MediNova social profile"
                className="grid size-11 place-items-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-primary hover:bg-primary hover:text-white"
              >
                <Icon className="size-4" strokeWidth={1.75} />
              </a>
            ))}
          </div>
        </div>

        {groups.map((g) => (
          <LinkColumn key={g.title} title={g.title} links={g.links} />
        ))}

        <div className="flex flex-col gap-4">
          <h3 className="font-display text-sm font-bold tracking-wide text-white uppercase">Contact</h3>
          <ul className="grid gap-3 text-sm text-white/60">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-turquoise" strokeWidth={1.75} />
              <span>123 Main Street, Colombo, Sri Lanka</span>
            </li>
            <li className="flex gap-2.5">
              <Phone className="mt-0.5 size-4 shrink-0 text-turquoise" strokeWidth={1.75} />
              <a href="tel:0112345678" className="hover:text-white">
                011 234 5678
              </a>
            </li>
            <li className="flex gap-2.5">
              <Mail className="mt-0.5 size-4 shrink-0 text-turquoise" strokeWidth={1.75} />
              <a href="mailto:info@medinova.com" className="hover:text-white">
                info@medinova.com
              </a>
            </li>
            <li className="flex gap-2.5 font-semibold text-accent">
              <Siren className="mt-0.5 size-4 shrink-0" strokeWidth={2} />
              <span>Open Mon – Sat, 8:00 AM – 8:00 PM</span>
            </li>
          </ul>
          <a
            href="tel:0112345678"
            className="inline-flex min-h-11 w-fit items-center gap-2 rounded-full bg-primary px-5 text-sm font-bold text-primary-foreground"
          >
            <Siren className="size-4" strokeWidth={2} />
            Call Reception
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="shell flex flex-col items-center justify-between gap-3 py-5 text-xs text-white/45 sm:flex-row">
          <p>© {new Date().getFullYear()} MediNova Health (Pvt) Ltd. All rights reserved.</p>
          <div className="flex gap-5">
            <a href={to("#top")} className="hover:text-white/80">
              Privacy Policy
            </a>
            <a href={to("#top")} className="hover:text-white/80">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
