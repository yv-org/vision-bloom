import { Quote } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

const stories = [
  { name: "Hasini, 19", role: "Student · Colombo", quote: "Youth Vision helped me understand my worth, find confidence, and believe in my future again." },
  { name: "Imran, 22", role: "Volunteer Lead", quote: "I came looking for direction. I found a circle, a calling, and a stage to grow." },
  { name: "Sasha, 17", role: "School Outreach", quote: "The mindfulness sessions changed how I show up — for myself and my friends." },
];

const tones = ["from-sky/30 to-sky/0", "from-emerald/30 to-emerald/0", "from-gold/30 to-gold/0"];

export function Stories() {
  return (
    <section className="section-pad relative bg-soft">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Stories of Vision"
          title={<>The quiet transformations that <span className="text-gradient-primary">light the way</span>.</>}
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {stories.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.1}>
              <figure className={`relative h-full rounded-3xl p-8 bg-gradient-to-b ${tones[i]} border border-border shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-1`}>
                <Quote className="h-8 w-8 text-accent/60" />
                <blockquote className="mt-4 font-display text-xl text-foreground leading-snug">"{s.quote}"</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <div className="h-11 w-11 rounded-full bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center font-semibold">
                    {s.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">{s.name}</div>
                    <div className="text-xs text-muted-foreground">{s.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
