import logoSrc from "@/assets/ats-logo.webp";

export function Logo() {
  return (
    <div className="flex items-center gap-3 select-none">
      <img
        src={logoSrc}
        alt="AtS Constructions & Engineering"
        width={140}
        height={80}
        className="relative h-9 md:h-10 w-auto object-contain"
        style={{ mixBlendMode: "multiply" }}
      />
    </div>
  );
}
