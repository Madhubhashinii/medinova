import { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import { Menu, X, HeartPulse } from "lucide-react";
import { btnGhost } from "./ui";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Doctors", href: "#doctors" },
  { label: "Health Tips", href: "#health-tips" },
  { label: "Common Diseases", href: "#diseases" },
  { label: "Packages", href: "#packages" },
  { label: "Contact", href: "#contact" },
];

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  // On sub-pages the in-page anchors must point back at the home sections.
  const onHome = pathname === "/";
  const to = (href: string) => (onHome ? href : `/${href}`);
  const homeHref = onHome ? "#top" : "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        scrolled ? "border-b border-hairline bg-card/90 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="shell flex h-18 items-center justify-between gap-4 py-4">
        <a href={homeHref} className="flex min-w-0 items-center gap-2.5">
          <span className="gradient-brand grid size-10 shrink-0 place-items-center rounded-xl text-primary-foreground shadow-soft">
            <HeartPulse className="size-5" strokeWidth={1.75} />
          </span>
          <span className="font-display truncate text-lg font-extrabold tracking-[-0.02em] text-foreground">
            MediNova
          </span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-0.5 xl:flex">
          {links.map((l) => (
            <a key={l.label} href={to(l.href)} className={`${btnGhost} px-3`}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle navigation"
            className="grid size-11 shrink-0 place-items-center rounded-xl border border-hairline bg-card text-foreground xl:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-hairline bg-card xl:hidden">
          <div className="shell flex flex-col gap-1 py-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={to(l.href)}
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center rounded-xl px-3 text-sm font-semibold text-foreground hover:bg-muted"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
