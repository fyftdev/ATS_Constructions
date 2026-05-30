export function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute inset-0" style={{ backgroundColor: "oklch(0.965 0.018 70)" }} />
    </div>
  );
}
