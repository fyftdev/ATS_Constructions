import logoSrc from "@/assets/ats-logo-transparent.png";

export function Logo() {
  return (
    <div className="flex items-center gap-3 select-none">
      <img
        src={logoSrc}
        alt="AtS Constructions & Engineering"
        className="relative h-9 md:h-10 w-auto object-contain"
        style={{
          mixBlendMode: "multiply",
          backgroundColor: "transparent",
        }}
      />
    </div>
  );
}
