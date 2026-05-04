import { motion } from "framer-motion";
import { ArrowRight, Heart, Handshake, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/yv-logo.jpeg";

export function Hero() {
  const stars = Array.from({ length: 24 });
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden bg-hero">
      {/* Background image */}
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />
      {/* Aurora overlay */}
      <div className="absolute inset-0 bg-aurora animate-aurora" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" aria-hidden="true" />

      {/* Floating stars */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {stars.map((_, i) => (
          <span
            key={i}
            className="absolute block rounded-full bg-gold/80 animate-twinkle"
            style={{
              top: `${(i * 37) % 100}%`,
              left: `${(i * 53) % 100}%`,
              width: `${(i % 3) + 2}px`,
              height: `${(i % 3) + 2}px`,
              animationDelay: `${(i % 7) * 0.4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 pt-36 pb-24 sm:pt-40 lg:pt-48 min-h-[100svh] flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-medium text-white/90 mb-6">
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            <span className="tracking-wide">A Global Youth Movement · Founded 2025 · Colombo</span>
          </div>

          <h1 className="font-display text-white text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.02] font-semibold">
            Empowering youth to rise with{" "}
            <span className="italic text-gradient-gold">vision</span>,{" "}
            <span className="italic text-gradient-gold">strength</span>{" "}
            <span className="text-white/90">&amp;</span>{" "}
            <span className="italic text-gradient-gold">purpose</span>.
          </h1>

          <p className="mt-6 max-w-2xl text-lg sm:text-xl text-white/80 leading-relaxed">
            Youth Vision Organisation supports young people through mental health awareness,
            spiritual growth, mentorship, motivation, and community impact.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#join"
              className="group inline-flex items-center gap-2 rounded-full bg-white text-primary px-6 py-3.5 text-sm font-semibold shadow-glow hover:shadow-glow-blue transition-all duration-500"
            >
              Join the Movement
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#volunteer"
              className="inline-flex items-center gap-2 rounded-full glass-dark text-white px-6 py-3.5 text-sm font-semibold hover:bg-white/15 transition"
            >
              <Heart className="h-4 w-4 text-gold" /> Become a Volunteer
            </a>
            <a
              href="#collaborate"
              className="inline-flex items-center gap-2 rounded-full glass-dark text-white px-6 py-3.5 text-sm font-semibold hover:bg-white/15 transition"
            >
              <Handshake className="h-4 w-4 text-emerald" /> Partner With Us
            </a>
          </div>

          <div className="mt-14 flex items-center gap-6 text-white/70">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-white/95 p-1 ring-1 ring-white/30 animate-glow-pulse">
                <img src={logo} alt="" className="h-full w-full object-contain" />
              </div>
              <div className="text-sm">
                <div className="font-semibold text-white">Your Vision. Your Power. Your Future.</div>
                <div className="text-xs">A movement for the next generation</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom flowing wave */}
      <svg
        className="absolute bottom-0 inset-x-0 w-full h-24 sm:h-32 text-background"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          d="M0,64 C240,120 480,0 720,32 C960,64 1200,120 1440,64 L1440,120 L0,120 Z"
        />
      </svg>
    </section>
  );
}
