import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Linkedin, ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-ink/10">
      {/* Laser accent line across top border */}
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-aurora-2/40 to-transparent" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 pt-20 pb-12 grid md:grid-cols-12 gap-12">
        {/* Brand Summary Column */}
        <div className="md:col-span-4 lg:col-span-5 flex flex-col justify-between">
          <div>
            <Logo />
            <p className="mt-6 max-w-sm text-ink-soft text-sm leading-relaxed">
              AtS Constructions & Engineering — a Singapore-based partner building refineries,
              pipelines, commercial spaces and homes engineered to outlast their decade.
            </p>
          </div>
          <div className="mt-8 flex gap-3">
            {[Linkedin].map((I, i) => (
              <a
                key={i}
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-amber-glow/10 transition-colors duration-300"
              >
                <I size={16} className="text-ink-soft hover:text-ink transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation Links Column */}
        <div className="md:col-span-3 lg:col-span-3">
          <p className="label-mono mb-6 text-xs uppercase tracking-widest text-ink/40">Navigate</p>
          <ul className="space-y-3.5 text-sm text-ink-soft">
            {[
              ["/", "Home"],
              ["/about", "About"],
              ["/services", "Services"],
              ["/certifications", "Certifications"],
              ["/blog", "Insights"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link
                  to={to}
                  className="relative hover:text-ink transition-colors duration-300 pb-0.5 group inline-block"
                >
                  {label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-ink transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Structural Interactive Office Cards Column */}
        <div className="md:col-span-5 lg:col-span-4">
          <p className="label-mono mb-6 text-xs uppercase tracking-widest text-ink/40">
            Singapore Head Office
          </p>

          <div className="flex flex-col gap-3">
            {/* Map Location Card */}
            <a
              href="https://maps.google.com/?q=61A+Tuas+South+Avenue+1,+Singapore+637326"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-start gap-4 p-4 rounded-2xl border border-ink/5 bg-ink/[0.01] hover:bg-amber-glow/[0.02] hover:border-aurora-2/30 transition-all duration-300 text-left"
            >
              <div className="p-2.5 rounded-xl bg-ink/[0.03] text-ink-soft group-hover:text-aurora-2 group-hover:bg-aurora-2/10 transition-colors duration-300 shrink-0">
                <MapPin size={16} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] uppercase tracking-widest text-ink-soft/50 font-mono mb-1">
                  HQ Coordinates
                </p>
                <p className="text-xs md:text-sm font-medium text-ink leading-relaxed">
                  61A TUAS SOUTH AVENUE 1,
                  <br />
                  SINGAPORE 637326
                </p>
              </div>
              <ArrowUpRight
                size={14}
                className="text-ink-soft/20 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-aurora-2 shrink-0 self-center"
              />
            </a>

            {/* Communication Hub Grid row Split */}
            <div className="grid sm:grid-cols-2 gap-3">
              {/* Phone Line Card */}
              <a
                href="tel:+917092345407"
                className="group flex items-center gap-3.5 p-4 rounded-2xl border border-ink/5 bg-ink/[0.01] hover:bg-amber-glow/[0.02] hover:border-aurora-2/30 transition-all duration-300 text-left"
              >
                <div className="p-2.5 rounded-xl bg-ink/[0.03] text-ink-soft group-hover:text-aurora-2 group-hover:bg-aurora-2/10 transition-colors duration-300 shrink-0">
                  <Phone size={15} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] uppercase tracking-widest text-ink-soft/50 font-mono mb-0.5">
                    Direct
                  </p>
                  <p className="text-xs font-semibold text-ink tracking-tight truncate">
                    +91 7092 345407
                  </p>
                </div>
              </a>

              {/* Email Gateway Card */}
              <a
                href="mailto:info@atsce.com.sg"
                className="group flex items-center gap-3.5 p-4 rounded-2xl border border-ink/5 bg-ink/[0.01] hover:bg-amber-glow/[0.02] hover:border-aurora-2/30 transition-all duration-300 text-left"
              >
                <div className="p-2.5 rounded-xl bg-ink/[0.03] text-ink-soft group-hover:text-aurora-2 group-hover:bg-aurora-2/10 transition-colors duration-300 shrink-0">
                  <Mail size={15} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] uppercase tracking-widest text-ink-soft/50 font-mono mb-0.5">
                    Inquiries
                  </p>
                  <p className="text-xs font-semibold text-ink tracking-tight truncate">
                    info@atsce.com.sg
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Sub-floor info panel bar */}
      <div className="border-t border-ink/10 bg-ink/[0.01]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row justify-between gap-4 text-[11px] text-ink-soft/60 label-mono tracking-wider">
          <span className="flex items-center gap-2.5">
            <Link
              to="/admin"
              aria-label="Admin Portal"
              className="w-2 h-2 rounded-full bg-amber-glow/60 hover:bg-amber-glow transition-colors duration-300 inline-block shrink-0 ring-4 ring-amber-glow/10"
            />
            © {new Date().getFullYear()} AtS Constructions & Engineering
          </span>
          <span>SYSTEM ARCHITECTURE BY FYFT TECHNOLOGIES</span>
        </div>
      </div>
    </footer>
  );
}
