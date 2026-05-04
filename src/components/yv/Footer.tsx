import { Instagram, Linkedin, Facebook, Youtube, Music2 } from "lucide-react";
import logo from "@/assets/yv-logo.jpeg";

export function Footer() {
  return (
    <footer className="relative bg-hero text-white overflow-hidden">
      <div className="absolute inset-0 bg-aurora opacity-30 animate-aurora" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-white p-1 shadow-soft">
                <img src={logo} alt="Youth Vision Organisation" className="h-full w-full object-contain" />
              </div>
              <div>
                <div className="font-display text-lg font-semibold">Youth Vision Organisation</div>
                <div className="text-xs text-white/70 uppercase tracking-[0.2em]">YV Org</div>
              </div>
            </div>
            <p className="mt-5 text-sm text-white/75 max-w-md">
              A youth-led nonprofit movement empowering young people through mental health,
              spirituality, mentorship, motivation, and community impact.
            </p>
            <p className="mt-6 font-display text-xl text-gradient-gold italic">
              Your Vision. Your Power. Your Future.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-[0.2em] text-white/60">Quick Links</h4>
            <ul className="mt-5 space-y-2 text-sm">
              {[
                ["About", "#about"], ["Programs", "#programs"], ["SDG Impact", "#sdg"],
                ["Collaborate", "#collaborate"], ["Volunteer", "#volunteer"], ["Donate", "#donate"], ["Contact", "#contact"],
              ].map(([l, h]) => (
                <li key={l}><a href={h} className="text-white/80 hover:text-gold transition">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-[0.2em] text-white/60">Contact</h4>
            <ul className="mt-5 space-y-2 text-sm text-white/80">
              <li><a href="mailto:youthvision.lk@gmail.com" className="hover:text-gold transition">youthvision.lk@gmail.com</a></li>
              <li><a href="tel:+94112417309" className="hover:text-gold transition">+94 112 417 309</a></li>
              <li>Colombo, Western Province</li>
              <li>Sri Lanka · Founded 2025</li>
            </ul>
            <div className="mt-5 flex gap-2">
              {[Instagram, Linkedin, Facebook, Music2, Youtube].map((I, i) => (
                <a key={i} href="#" aria-label="Social link" className="h-9 w-9 rounded-full glass-dark flex items-center justify-center hover:bg-white/15 transition">
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/60">
          <div>© {new Date().getFullYear()} Youth Vision Organisation. All rights reserved.</div>
          <div>Industry: Non-profit Organizations</div>
        </div>
      </div>
    </footer>
  );
}
