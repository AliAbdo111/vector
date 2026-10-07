import { Reveal } from "./Reveal";

type SectionHeaderProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  id?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  id,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  const centered = align === "center";
  return (
    <Reveal className={`${centered ? "mx-auto text-center" : ""} max-w-3xl ${className}`}>
      <p className="eyebrow">
        <span aria-hidden className="h-px w-6 bg-accent-400/70" />
        {eyebrow}
      </p>
      <h2 id={id} className="h-display mt-5 text-4xl leading-[1.04] sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-6 max-w-xl text-pretty text-lg leading-relaxed text-zinc-400 ${
            centered ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
