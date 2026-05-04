import { Brain, Sparkles, Flame, Crown } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

const pillars = [
  { icon: Brain, title: "Mental Health & Wellbeing", desc: "Safe spaces, awareness, and tools to nurture emotional resilience." , tone: "from-sky/20 to-sky/5" },
  { icon: Sparkles, title: "Spiritual Growth & Self-Discovery", desc: "Mindfulness, meaning, and inner clarity — inclusive of all paths." , tone: "from-emerald/20 to-emerald/5" },
  { icon: Flame, title: "Motivation & Personal Success", desc: "Inspiration, discipline, and the courage to chase a brighter future." , tone: "from-gold/25 to-gold/5" },
  { icon: Crown, title: "Leadership & Social Impact", desc: "Mentorship, projects, and a generation ready to lead with purpose." , tone: "from-primary/15 to-primary/0" },
];

export function About() {
  return (
    <section id="about" className="section-pad relative bg-soft">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="About Youth Vision"
          title={<>A movement for <span className="text-gradient-primary">confident, resilient, purpose-driven</span> youth.</>}
          description="We believe true growth begins when mental health, spirituality, and motivation come together to create balance and strength. Youth Vision is a youth-led movement empowering young people to rise with confidence, clarity, and purpose."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className={`group relative h-full rounded-3xl p-6 bg-gradient-to-b ${p.tone} border border-border/60 hover:border-accent/40 transition-all duration-500 hover:-translate-y-1 shadow-soft hover:shadow-elegant overflow-hidden`}>
                <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-accent/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-soft mb-5">
                    <p.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
