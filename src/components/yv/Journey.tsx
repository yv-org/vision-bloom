import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

const steps = [
  { n: "01", t: "Discover the Movement", d: "Explore Youth Vision and what it stands for." },
  { n: "02", t: "Apply as a Volunteer", d: "Share your story and what calls you here." },
  { n: "03", t: "Join an Orientation", d: "Meet the team, learn the values, find your people." },
  { n: "04", t: "Choose an Impact Area", d: "Mental health, mentorship, SDGs, leadership, or content." },
  { n: "05", t: "Serve, Lead, and Grow", d: "Take action with guidance and a supportive circle." },
  { n: "06", t: "Become a YV Ambassador", d: "Open chapters, mentor others, lead your region." },
];

export function Journey() {
  return (
    <section id="volunteer" className="section-pad relative bg-soft">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Volunteer Journey"
          title={<>Six gentle steps from <span className="text-gradient-primary">curiosity to leadership</span>.</>}
        />
        <div className="mt-16 relative">
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className="relative">
                  <div className="relative mx-auto h-14 w-14 rounded-full bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center font-display font-bold shadow-glow animate-glow-pulse" style={{ animationDelay: `${i * 0.4}s` }}>
                    {s.n}
                  </div>
                  <div className="mt-5 text-center">
                    <div className="font-display text-lg font-semibold text-foreground">{s.t}</div>
                    <div className="mt-1 text-xs text-muted-foreground leading-relaxed">{s.d}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
