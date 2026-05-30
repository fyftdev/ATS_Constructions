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
      <header className="fixed top-3 md:top-6 inset-x-0 z-40 px-3 md:px-4">
        <div className="max-w-[1280px] mx-auto glass-strong rounded-full pl-4 md:pl-5 pr-2 py-2 flex items-center justify-between gap-3">
          <Link to="/" className="shrink-0" onClick={() => setOpen(false)}>
            <Logo />
          </Link>
          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="nav-pill-link"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="btn-primary !py-2.5 !px-4 md:!px-5 !text-xs md:!text-sm hidden sm:inline-flex"
            >
              Get a Quote <ArrowUpRight size={14} />
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="lg:hidden w-10 h-10 rounded-full glass flex items-center justify-center"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
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
        <div
          className={`absolute top-20 left-3 right-3 glass-strong rounded-3xl p-6 transition-transform duration-300 ${open ? "translate-y-0" : "-translate-y-4"}`}
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
              className="btn-primary mt-4 justify-center"
            >
              Get a Quote <ArrowUpRight size={14} />
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
