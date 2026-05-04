import { Eye, Target } from "lucide-react";
import { Reveal } from "./Reveal";

export function VisionMission() {
  return (
    <section className="section-pad relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid gap-8 lg:grid-cols-2">
        <Reveal>
          <div className="relative h-full rounded-3xl p-10 bg-hero text-white overflow-hidden shadow-elegant">
            <div className="absolute inset-0 bg-aurora opacity-60 animate-aurora" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full glass-dark px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/90 mb-6">
                <Eye className="h-3.5 w-3.5 text-gold" /> Our Vision
              </div>
              <h3 className="font-display text-3xl sm:text-4xl font-semibold leading-tight">
                A generation that is emotionally strong, spiritually grounded, mentally healthy — and ready to lead positive change.
              </h3>
              <p className="mt-5 text-white/75">
                We picture a world where every young person has the inner clarity and outer
                community to live with meaning and lead with heart.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative h-full rounded-3xl p-10 bg-card border border-border shadow-soft overflow-hidden">
            <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 text-accent px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] mb-6">
                <Target className="h-3.5 w-3.5" /> Our Mission
              </div>
              <h3 className="font-display text-3xl sm:text-4xl font-semibold leading-tight text-foreground">
                Empower youth through inspiring content, mentorship, wellness programs, leadership, and meaningful collaborations.
              </h3>
              <p className="mt-5 text-muted-foreground">
                From classrooms in Colombo to communities around the world — we build
                programs that meet young people where they are and walk with them where they're going.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
