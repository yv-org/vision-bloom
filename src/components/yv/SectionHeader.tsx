import { Reveal } from "./Reveal";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  align?: "center" | "left";
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <Reveal className={`max-w-3xl ${alignCls}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 rounded-full bg-accent/10 text-accent px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] mb-5`}>
          {eyebrow}
        </div>
      )}
      <h2 className="font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] font-semibold text-foreground">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">{description}</p>
      )}
    </Reveal>
  );
}
