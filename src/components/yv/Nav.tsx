import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/yv-logo.jpeg";

const links = [
  { href: "#about", label: "About" },
  { href: "#programs", label: "Programs" },
  { href: "#sdg", label: "SDG Impact" },
  { href: "#collaborate", label: "Collaborate" },
  { href: "#donate", label: "Donate" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500 ${
            scrolled ? "glass shadow-soft" : "bg-transparent"
          }`}
        >
          <a href="#top" className="flex items-center gap-3 group" aria-label="Youth Vision Organisation home">
            <div className="relative h-10 w-10 rounded-xl overflow-hidden bg-white shadow-soft ring-1 ring-border">
              <img src={logo} alt="Youth Vision Organisation logo" className="h-full w-full object-contain" />
            </div>
            <div className="hidden sm:block leading-tight">
              <div className="font-display text-base font-semibold text-foreground">Youth Vision</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">YV Org · 2025</div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-accent after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#join"
              className="hidden sm:inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90 transition shadow-soft"
            >
              Join the Movement
            </a>
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden mt-2 glass rounded-2xl p-4 shadow-elegant animate-in fade-in slide-in-from-top-2">
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-muted transition"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#join"
                onClick={() => setOpen(false)}
                className="mt-2 text-center rounded-full px-5 py-2.5 text-sm font-semibold bg-primary text-primary-foreground"
              >
                Join the Movement
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
