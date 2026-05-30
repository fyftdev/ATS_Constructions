import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/certifications", label: "Certifications" },
  { to: "/blog", label: "Insights" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* OPTIMIZED: Adjusted top placement to give the bigger floating navbar enough space */}
      <header className="fixed top-4 md:top-8 inset-x-0 z-40 px-4 md:px-8">
        {/* CHANGED: Swapped py-3 md:py-4 for a deeper py-4 md:py-5 layout, increased tracking padding */}
        <div className="max-w-[1340px] mx-auto glass-strong rounded-full pl-6 md:pl-10 pr-3 md:pr-4 py-4 md:py-5 flex items-center justify-between gap-6 shadow-xl transition-all duration-300">
          {/* CHANGED: Increased logo container wrapper space and applied scale styling */}
          <Link
            to="/"
            className="shrink-0 flex items-center scale-105 md:scale-115 origin-left transition-transform duration-300"
            onClick={() => setOpen(false)}
          >
            <Logo />
          </Link>

          {/* OPTIMIZED: Balanced text size and horizontal spacing for the larger structural flow */}
          <nav className="hidden lg:flex items-center gap-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="nav-pill-link text-sm md:text-base font-medium tracking-wide px-4 py-2"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            {/* OPTIMIZED: Slightly broader structural CTA button block matching the deeper nav layout */}
            <Link
              to="/contact"
              className="btn-primary !py-3.5 !px-6 md:!px-7 !text-xs md:!text-sm hidden sm:inline-flex items-center gap-2 font-medium"
            >
              Get a Quote <ArrowUpRight size={16} />
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="lg:hidden w-12 h-12 rounded-full glass flex items-center justify-center"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile sheet */}
      <div
        className={`fixed inset-0 z-30 lg:hidden transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setOpen(false)}
      >
        <div className="absolute inset-0 bg-midnight-deep/60 backdrop-blur-sm" />
        {/* OPTIMIZED: Shifted downward to top-28 to clear the deeper navbar height layout */}
        <div
          className={`absolute top-28 left-4 right-4 glass-strong rounded-3xl p-6 transition-transform duration-300 ${open ? "translate-y-0" : "-translate-y-4"}`}
          onClick={(e) => e.stopPropagation()}
        >
          <nav className="flex flex-col">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                onClick={() => setOpen(false)}
                className="py-3 px-4 rounded-2xl font-display text-2xl text-ink hover:bg-amber-glow/10 transition"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-4 justify-center py-3.5"
            >
              Get a Quote <ArrowUpRight size={14} />
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
