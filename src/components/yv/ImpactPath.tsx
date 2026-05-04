import { useState } from "react";
import { User, HandHeart, Handshake, LifeBuoy, Flag, ArrowRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

const paths = [
  { id: "self", icon: User, t: "Improve Myself", d: "Programs for mental health, mindfulness, and personal growth.", cta: "Explore MindCare", href: "#programs" },
  { id: "vol", icon: HandHeart, t: "Volunteer", d: "Join our orientation and choose your impact area.", cta: "Apply to Volunteer", href: "#contact" },
  { id: "partner", icon: Handshake, t: "Partner", d: "Bring Youth Vision into your club, school or organization.", cta: "Become a Partner", href: "#collaborate" },
  { id: "support", icon: LifeBuoy, t: "I Need Support", d: "A safe, judgement-free space — we will respond with care.", cta: "Reach Out", href: "#contact" },
  { id: "chapter", icon: Flag, t: "Start a YV Chapter", d: "Lead the movement in your city, campus or country.", cta: "Open a Chapter", href: "#contact" },
];

export function ImpactPath() {
  const [active, setActive] = useState("self");
  return (
    <section className="section-pad relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Choose Your Impact Path"
          title={<>Where does your story <span className="text-gradient-primary">begin</span>?</>}
          description="Five gentle doors into the movement. Pick the one that feels right today."
        />
        <div className="mt-14 grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {paths.map((p, i) => {
            const isActive = active === p.id;
            return (
              <Reveal key={p.id} delay={i * 0.06}>
                <button
                  onClick={() => setActive(p.id)}
                  className={`w-full text-left rounded-2xl p-5 border transition-all duration-500 ${
                    isActive
                      ? "bg-hero text-white border-transparent shadow-elegant scale-[1.02]"
                      : "bg-card border-border hover:border-accent/40 hover:-translate-y-0.5 shadow-soft"
                  }`}
                >
                  <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${isActive ? "bg-white/15 text-white" : "bg-accent/10 text-accent"}`}>
                    <p.icon className="h-5 w-5" />
                  </div>
                  <div className={`mt-4 font-display text-lg font-semibold ${isActive ? "text-white" : "text-foreground"}`}>{p.t}</div>
                </button>
              </Reveal>
            );
          })}
        </div>
        <Reveal delay={0.2}>
          <div className="mt-8 rounded-3xl p-8 bg-soft border border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            <p className="text-lg text-foreground max-w-2xl">
              {paths.find((p) => p.id === active)?.d}
            </p>
            <a
              href={paths.find((p) => p.id === active)?.href}
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold shadow-soft hover:opacity-90 transition shrink-0"
            >
              {paths.find((p) => p.id === active)?.cta}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
