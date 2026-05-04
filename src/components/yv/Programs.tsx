import { Brain, Sparkles, Compass, Mic, Crown, Users, Radio, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

const programs = [
  { icon: Brain, name: "MindCare Youth", desc: "Mental health awareness, emotional support, and stress management." },
  { icon: Sparkles, name: "SoulRise", desc: "Spirituality, mindfulness, meditation, and self-discovery." },
  { icon: Compass, name: "Vision Mentors", desc: "Mentorship, career guidance, and confidence building." },
  { icon: Mic, name: "SpeakUp", desc: "Motivational speaking and inspirational youth content." },
  { icon: Crown, name: "LeadForward", desc: "Leadership development and youth-led projects." },
  { icon: Users, name: "Impact Circles", desc: "Community service and SDG volunteering." },
  { icon: Radio, name: "Digital Hope", desc: "Online content, podcasts, reels, blogs, and youth stories." },
];

export function Programs() {
  return (
    <section id="programs" className="section-pad relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Programs"
          title={<>Pathways for every part of a young person's <span className="text-gradient-primary">becoming</span>.</>}
          description="Seven flagship programs designed to nurture mind, soul, voice, and leadership."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 0.08}>
              <article className="group relative h-full rounded-3xl p-7 bg-card border border-border hover:border-accent/40 shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-accent/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-white shadow-glow">
                    <p.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-semibold text-foreground">{p.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  <a href="#contact" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:gap-2.5 transition-all">
                    Learn more <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
