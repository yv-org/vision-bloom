import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { ArrowRight } from "lucide-react";

const sdgs = [
  { n: 1, t: "No Poverty", c: "#E5243B" },
  { n: 2, t: "Zero Hunger", c: "#DDA63A" },
  { n: 3, t: "Good Health", c: "#4C9F38" },
  { n: 4, t: "Quality Education", c: "#C5192D" },
  { n: 5, t: "Gender Equality", c: "#FF3A21" },
  { n: 6, t: "Clean Water", c: "#26BDE2" },
  { n: 7, t: "Clean Energy", c: "#FCC30B" },
  { n: 8, t: "Decent Work", c: "#A21942" },
  { n: 9, t: "Innovation", c: "#FD6925" },
  { n: 10, t: "Reduced Inequalities", c: "#DD1367" },
  { n: 11, t: "Sustainable Cities", c: "#FD9D24" },
  { n: 12, t: "Responsible Consumption", c: "#BF8B2E" },
  { n: 13, t: "Climate Action", c: "#3F7E44" },
  { n: 14, t: "Life Below Water", c: "#0A97D9" },
  { n: 15, t: "Life on Land", c: "#56C02B" },
  { n: 16, t: "Peace & Justice", c: "#00689D" },
  { n: 17, t: "Partnerships", c: "#19486A" },
];

const groups = [
  { title: "Wellbeing & Human Dignity", goals: [1, 2, 3, 4, 5] },
  { title: "Planet & Sustainability", goals: [6, 7, 12, 13, 14, 15] },
  { title: "Innovation & Opportunity", goals: [8, 9, 10, 11] },
  { title: "Peace & Partnerships", goals: [16, 17] },
];

export function SDG() {
  return (
    <section id="sdg" className="section-pad relative bg-soft">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="The 17 SDG Impact Hub"
          title={<>Aligned with all <span className="text-gradient-primary">17 UN Sustainable Development Goals</span>.</>}
          description="Youth Vision connects youth volunteers, schools, clubs, and community organizations to support every SDG through meaningful action."
        />

        <div className="mt-14 grid gap-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6">
          {sdgs.map((s, i) => (
            <Reveal key={s.n} delay={(i % 6) * 0.04}>
              <div
                className="group relative aspect-square rounded-2xl p-4 flex flex-col justify-between text-white overflow-hidden cursor-default transition-all duration-500 hover:-translate-y-1 hover:shadow-elegant"
                style={{ backgroundColor: s.c }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="text-3xl font-display font-bold">{String(s.n).padStart(2, "0")}</div>
                <div className="text-xs font-semibold leading-tight">{s.t}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.08}>
              <div className="rounded-2xl p-5 bg-card border border-border shadow-soft h-full">
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{g.title}</div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {g.goals.map((n) => {
                    const sdg = sdgs.find((x) => x.n === n)!;
                    return (
                      <span
                        key={n}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold text-white"
                        style={{ backgroundColor: sdg.c }}
                      >
                        {n}
                      </span>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 rounded-3xl p-8 sm:p-10 bg-hero text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-aurora opacity-50 animate-aurora" />
            <div className="relative">
              <h3 className="font-display text-2xl sm:text-3xl font-semibold">
                Have a project related to any SDG?
              </h3>
              <p className="mt-2 text-white/80">Collaborate with Youth Vision and amplify your impact.</p>
              <a
                href="#collaborate"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white text-primary px-6 py-3 text-sm font-semibold shadow-glow hover:shadow-glow-blue transition"
              >
                Start a Joint Project <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
