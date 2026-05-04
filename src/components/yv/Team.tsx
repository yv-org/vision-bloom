import { Phone, Mail } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

const team = [
  { name: "Mahdiya S", role: "Founder · Youth Vision Lead", phone: "+94 740 472 228", tone: "from-primary to-accent" },
  { name: "Daleela", role: "International Relations & Volunteer Support", phone: "+44 7309 025959", tone: "from-accent to-sky" },
  { name: "Abdulla", role: "Community Outreach Coordinator", phone: "+94 775 206 851", tone: "from-sky to-primary" },
];

export function Team() {
  return (
    <section className="section-pad relative bg-soft">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Contact Our Team"
          title={<>Real people, ready to <span className="text-gradient-primary">walk with you</span>.</>}
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.1}>
              <article className="group relative rounded-3xl p-8 bg-card border border-border hover:border-accent/40 shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                <div className={`absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gradient-to-br ${m.tone} opacity-20 blur-3xl group-hover:opacity-40 transition-opacity`} />
                <div className={`relative h-20 w-20 rounded-2xl bg-gradient-to-br ${m.tone} text-white flex items-center justify-center font-display text-3xl font-bold shadow-glow`}>
                  {m.name[0]}
                </div>
                <h3 className="relative mt-6 font-display text-xl font-semibold text-foreground">{m.name}</h3>
                <p className="relative text-sm text-muted-foreground">{m.role}</p>
                <div className="relative mt-5 space-y-2 text-sm">
                  <a href={`tel:${m.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 text-foreground/80 hover:text-accent transition">
                    <Phone className="h-4 w-4 text-accent" /> {m.phone}
                  </a>
                  <a href="mailto:youthvision.lk@gmail.com" className="flex items-center gap-2 text-foreground/80 hover:text-accent transition">
                    <Mail className="h-4 w-4 text-accent" /> youthvision.lk@gmail.com
                  </a>
                </div>
                <a
                  href={`tel:${m.phone.replace(/\s/g, "")}`}
                  className="relative mt-6 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold shadow-soft hover:opacity-90 transition"
                >
                  Contact {m.name.split(" ")[0]}
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
