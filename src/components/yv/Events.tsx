import { Calendar } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

const events = [
  { day: "12", mon: "MAR", t: "Mental Health Awareness Week", loc: "Colombo · 7-day series" },
  { day: "04", mon: "APR", t: "Youth Leadership Bootcamp", loc: "Western Province · Weekend" },
  { day: "18", mon: "APR", t: "Meditation & Mindfulness Circle", loc: "Online · Open to all" },
  { day: "02", mon: "MAY", t: "SDG Volunteer Day", loc: "Multi-city · Field action" },
  { day: "16", mon: "MAY", t: "School Motivation Session", loc: "Partner schools · Tour" },
  { day: "30", mon: "MAY", t: "Community Kindness Drive", loc: "Colombo neighborhoods" },
];

export function Events() {
  return (
    <section id="events" className="section-pad relative bg-soft">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Events & Campaigns"
          title={<>What's next on the <span className="text-gradient-primary">Youth Vision calendar</span>.</>}
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((e, i) => (
            <Reveal key={e.t} delay={(i % 3) * 0.08}>
              <article className="group rounded-2xl p-6 bg-card border border-border hover:border-accent/40 transition-all duration-500 hover:-translate-y-1 shadow-soft hover:shadow-elegant flex gap-5">
                <div className="shrink-0 w-16 rounded-xl bg-gradient-to-b from-primary to-accent text-white text-center py-3 shadow-glow">
                  <div className="font-display text-2xl font-bold leading-none">{e.day}</div>
                  <div className="text-[10px] tracking-[0.2em] mt-1 opacity-90">{e.mon}</div>
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">{e.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5" /> {e.loc}
                  </p>
                  <a href="#contact" className="mt-3 inline-block text-xs font-semibold text-accent">RSVP →</a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
