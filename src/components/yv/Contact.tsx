import { Mail, Phone, MapPin } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

const interests = ["Join as Volunteer", "Become a Partner Club", "Invite Us for a Session", "General Contact"];

export function Contact() {
  return (
    <section id="contact" className="section-pad relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Get In Touch"
          title={<>Let's build something <span className="text-gradient-primary">meaningful</span> together.</>}
          description="Whether you want to volunteer, collaborate, invite us for a session, or just say hello — we're listening."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="rounded-3xl p-8 bg-hero text-white shadow-elegant relative overflow-hidden h-full">
              <div className="absolute inset-0 bg-aurora opacity-50 animate-aurora" />
              <div className="relative">
                <h3 className="font-display text-2xl font-semibold">Youth Vision Organisation</h3>
                <p className="mt-2 text-white/80 text-sm">Your Vision. Your Power. Your Future.</p>
                <div className="mt-8 space-y-5 text-sm">
                  <a href="mailto:youthvision.lk@gmail.com" className="flex items-start gap-3 hover:text-gold transition">
                    <Mail className="h-5 w-5 text-gold mt-0.5" />
                    <div>
                      <div className="text-xs uppercase tracking-wider text-white/60">Email</div>
                      <div>youthvision.lk@gmail.com</div>
                    </div>
                  </a>
                  <a href="tel:+94112417309" className="flex items-start gap-3 hover:text-gold transition">
                    <Phone className="h-5 w-5 text-gold mt-0.5" />
                    <div>
                      <div className="text-xs uppercase tracking-wider text-white/60">Landline</div>
                      <div>+94 112 417 309</div>
                    </div>
                  </a>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-gold mt-0.5" />
                    <div>
                      <div className="text-xs uppercase tracking-wider text-white/60">Headquarters</div>
                      <div>Colombo, Western Province, Sri Lanka</div>
                    </div>
                  </div>
                </div>
                <div className="mt-10 pt-6 border-t border-white/15 text-xs text-white/60">
                  Founded 2025 · Non-profit Organization
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <form
              onSubmit={(e) => { e.preventDefault(); alert("Thank you — we'll be in touch soon."); }}
              className="rounded-3xl p-8 bg-card border border-border shadow-elegant"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Name" name="name" required />
                <Field label="Email" type="email" name="email" required />
                <Field label="Phone" name="phone" />
                <Field label="City / Country" name="city" defaultValue="Colombo, Sri Lanka" />
                <Field label="School / University / Organization" name="org" className="sm:col-span-2" />
                <label className="sm:col-span-2 block">
                  <span className="text-xs font-semibold text-muted-foreground">Interest Area</span>
                  <select name="interest" className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                    {interests.map((i) => <option key={i}>{i}</option>)}
                  </select>
                </label>
                <label className="sm:col-span-2 block">
                  <span className="text-xs font-semibold text-muted-foreground">Message</span>
                  <textarea name="message" rows={4} required className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
                </label>
              </div>
              <button type="submit" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold shadow-soft hover:opacity-90 transition">
                Send Message
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required, defaultValue, className = "" }: { label: string; name: string; type?: string; required?: boolean; defaultValue?: string; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="text-xs font-semibold text-muted-foreground">{label}{required && <span className="text-destructive ml-0.5">*</span>}</span>
      <input
        name={name}
        type={type}
        required={required}
        defaultValue={defaultValue}
        className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </label>
  );
}
