import { Users, Megaphone, CalendarHeart, HandCoins, GraduationCap, Brain, Globe2, School } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

const ways = [
  { icon: Users, t: "Volunteer Support" },
  { icon: Megaphone, t: "Awareness Campaigns" },
  { icon: CalendarHeart, t: "Event Partnerships" },
  { icon: HandCoins, t: "Fundraising Support" },
  { icon: GraduationCap, t: "Youth Mentorship" },
  { icon: Brain, t: "Mental Health Sessions" },
  { icon: Globe2, t: "SDG-Based Projects" },
  { icon: School, t: "School & University Outreach" },
];

const partners = [
  "Schools", "Universities", "Student Unions", "Leo Clubs", "Rotaract Clubs",
  "Interact Clubs", "Youth Societies", "Nonprofits", "Mental Health Advocates",
  "Wellness Communities", "SDG Volunteer Groups",
];

export function Collaborate() {
  return (
    <section id="collaborate" className="section-pad relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Collaborate With Youth Vision"
          title={<>Together, we can reach <span className="text-gradient-primary">more lives</span>.</>}
          description="If your club or organization is already doing great work, Youth Vision can collaborate, support, promote, provide volunteers, and amplify your impact."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ways.map((w, i) => (
            <Reveal key={w.t} delay={(i % 4) * 0.06}>
              <div className="group rounded-2xl p-5 bg-card border border-border hover:border-accent/40 hover:-translate-y-0.5 transition-all duration-500 shadow-soft hover:shadow-elegant flex items-center gap-4">
                <div className="h-11 w-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-white transition">
                  <w.icon className="h-5 w-5" />
                </div>
                <div className="font-semibold text-sm text-foreground">{w.t}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-12 rounded-3xl p-8 bg-soft border border-border">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">We collaborate with</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {partners.map((p) => (
                <span key={p} className="px-3 py-1.5 rounded-full bg-card border border-border text-sm text-foreground/80">
                  {p}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-semibold shadow-soft hover:opacity-90 transition">
                Invite Youth Vision to Collaborate
              </a>
              <a href="#contact" className="inline-flex items-center rounded-full bg-accent text-accent-foreground px-5 py-3 text-sm font-semibold hover:opacity-90 transition">
                Request Volunteers
              </a>
              <a href="#contact" className="inline-flex items-center rounded-full bg-card border border-border px-5 py-3 text-sm font-semibold hover:bg-muted transition">
                Start a Joint SDG Project
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
