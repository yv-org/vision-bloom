import { useState } from "react";
import { Heart, ShieldCheck, Sparkles } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

const cards = [
  "Sponsor a Mental Health Session",
  "Support a Youth Mentorship Program",
  "Fund an SDG Community Project",
  "Sponsor Event Materials",
  "Support School & University Outreach",
  "Help Build Youth Vision Chapters",
];

const amounts = [1000, 2500, 5000, 10000];

const allocation = [
  { p: 40, l: "Youth programs & workshops" },
  { p: 25, l: "Mental health & wellbeing campaigns" },
  { p: 20, l: "Community service & SDG projects" },
  { p: 10, l: "Digital awareness content" },
  { p: 5, l: "Operations & volunteer coordination" },
];

export function Donate() {
  const [amt, setAmt] = useState<number | "custom">(2500);
  const [custom, setCustom] = useState("");

  return (
    <section id="donate" className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 bg-aurora opacity-30 animate-aurora pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Donate & Support"
          title={<>Every contribution becomes <span className="text-gradient-primary">hope, guidance, and opportunity</span>.</>}
          description="Your support helps Youth Vision create mental health awareness programs, mentorship, spiritual growth sessions, leadership workshops, SDG projects, and community campaigns."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {cards.map((c, i) => (
            <Reveal key={c} delay={(i % 3) * 0.08}>
              <div className="group rounded-2xl p-6 bg-card border border-border hover:border-accent/40 shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-1">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition">
                  <Heart className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{c}</h3>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <form
              onSubmit={(e) => { e.preventDefault(); alert("Thank you. Donation flow coming soon."); }}
              className="rounded-3xl p-8 bg-card border border-border shadow-elegant"
            >
              <h3 className="font-display text-2xl font-semibold text-foreground">Make a Donation</h3>
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-5 gap-2">
                {amounts.map((a) => (
                  <button
                    type="button"
                    key={a}
                    onClick={() => setAmt(a)}
                    className={`py-3 rounded-xl text-sm font-semibold border transition ${amt === a ? "bg-primary text-primary-foreground border-transparent shadow-soft" : "bg-background border-border hover:border-accent/40"}`}
                  >
                    LKR {a.toLocaleString()}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => setAmt("custom")}
                  className={`py-3 rounded-xl text-sm font-semibold border transition ${amt === "custom" ? "bg-primary text-primary-foreground border-transparent shadow-soft" : "bg-background border-border hover:border-accent/40"}`}
                >
                  Custom
                </button>
              </div>

              {amt === "custom" && (
                <input
                  type="number"
                  min={100}
                  placeholder="Enter amount in LKR"
                  value={custom}
                  onChange={(e) => setCustom(e.target.value)}
                  className="mt-3 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              )}

              <div className="mt-5 grid sm:grid-cols-2 gap-3">
                <Input label="Name" name="name" />
                <Input label="Email" name="email" type="email" />
                <Input label="Phone" name="phone" />
                <Input label="Country" name="country" defaultValue="Sri Lanka" />
                <Input label="Donation Purpose" name="purpose" placeholder="e.g. Mental health session" className="sm:col-span-2" />
                <label className="sm:col-span-2 block">
                  <span className="text-xs font-semibold text-muted-foreground">Message</span>
                  <textarea name="message" rows={3} className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                </label>
                <Input label="Payment Method" name="method" placeholder="Card / Bank / Mobile" className="sm:col-span-2" />
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold shadow-soft hover:opacity-90 transition">
                  <Heart className="h-4 w-4" /> Donate Now
                </button>
                <button type="button" className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-6 py-3 text-sm font-semibold hover:opacity-90 transition">
                  Become a Monthly Supporter
                </button>
                <button type="button" className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-6 py-3 text-sm font-semibold hover:bg-muted transition">
                  Partner as a Sponsor
                </button>
              </div>

              <div className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
                <ShieldCheck className="h-4 w-4 text-accent" />
                Secure & transparent. Every contribution helps us reach more young people.
              </div>
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl p-8 bg-hero text-white shadow-elegant relative overflow-hidden h-full">
              <div className="absolute inset-0 bg-aurora opacity-50 animate-aurora" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full glass-dark px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
                  <Sparkles className="h-3.5 w-3.5 text-gold" /> Where Your Donation Goes
                </div>
                <h3 className="mt-4 font-display text-3xl font-semibold">Transparent by design.</h3>
                <p className="mt-2 text-white/75 text-sm">A simple breakdown of how every rupee is invested back into the movement.</p>

                <div className="mt-8 space-y-5">
                  {allocation.map((a) => (
                    <div key={a.l}>
                      <div className="flex justify-between text-sm">
                        <span className="text-white/85">{a.l}</span>
                        <span className="font-semibold text-gold">{a.p}%</span>
                      </div>
                      <div className="mt-2 h-2 rounded-full bg-white/10 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-gold to-emerald"
                          style={{ width: `${a.p}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-8 italic text-white/85 border-l-2 border-gold pl-4">
                  "Every contribution helps us reach more young people with hope, guidance, and opportunity."
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Input({ label, name, type = "text", placeholder, defaultValue, className = "" }: { label: string; name: string; type?: string; placeholder?: string; defaultValue?: string; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="text-xs font-semibold text-muted-foreground">{label}</span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </label>
  );
}
