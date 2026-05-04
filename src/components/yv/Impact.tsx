import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";

const stats = [
  { n: 12500, label: "Youth Reached", suffix: "+" },
  { n: 480, label: "Volunteers", suffix: "+" },
  { n: 65, label: "Partner Clubs", suffix: "" },
  { n: 38, label: "Awareness Campaigns", suffix: "" },
  { n: 22, label: "SDG Projects", suffix: "" },
  { n: 1200, label: "Mentorship Sessions", suffix: "+" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          const start = performance.now();
          const dur = 1800;
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.floor(eased * to));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [to]);
  return (
    <span ref={ref}>
      {val.toLocaleString()}
      {suffix}
    </span>
  );
}

export function Impact() {
  return (
    <section className="section-pad relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="relative rounded-[2rem] p-10 sm:p-14 bg-hero text-white overflow-hidden shadow-elegant">
            <div className="absolute inset-0 bg-aurora opacity-60 animate-aurora" />
            <div className="relative">
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">Impact Dashboard</div>
              <h2 className="mt-3 font-display text-3xl sm:text-5xl font-semibold leading-tight max-w-3xl">
                Quiet work. Loud impact. <span className="text-white/70">Numbers that grow with every story.</span>
              </h2>

              <div className="mt-12 grid gap-6 grid-cols-2 lg:grid-cols-6">
                {stats.map((s, i) => (
                  <Reveal key={s.label} delay={i * 0.06}>
                    <div className="text-left">
                      <div className="font-display text-3xl sm:text-4xl font-semibold text-gradient-gold">
                        <Counter to={s.n} suffix={s.suffix} />
                      </div>
                      <div className="mt-1 text-xs text-white/70 uppercase tracking-wider">{s.label}</div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
