import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-ink/10">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-aurora-2/40 to-transparent" />
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 pt-20 pb-10 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-6 max-w-md text-ink-soft leading-relaxed">
            AtS Constructions & Engineering — a Singapore-based partner building refineries,
            pipelines, commercial spaces and homes engineered to outlast their decade.
          </p>
          <div className="mt-8 flex gap-3">
            {[Linkedin].map((I, i) => (
              <a
                key={i}
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-amber-glow/10 transition"
              >
                <I size={16} className="text-ink-soft" />
              </a>
            ))}
          </div>
        </div>
        <div className="md:col-span-3">
          <p className="label-mono mb-5">Navigate</p>
          <ul className="space-y-3 text-ink-soft">
            {[
              ["/", "Home"],
              ["/about", "About"],
              ["/services", "Services"],
              ["/certifications", "Certifications"],
              ["/blog", "Insights"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="hover:text-ink transition">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="label-mono mb-5">Singapore Office</p>
          <p className="text-ink-soft leading-relaxed">
            61A TUAS SOUTH AVENUE 1,
            <br />
            SINGAPORE 637326
          </p>
          <p className="mt-4">
            <a href="tel:+917092345407" className="hover:text-aurora-2 transition">
              +91 7092 345407
            </a>
          </p>
          <p>
            <a href="mailto:info@atsce.com.sg" className="hover:text-aurora-2 transition">
              info@atsce.com.sg
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-ink/10">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-ink-soft/80 label-mono">
          <span className="flex items-center gap-2">
            <Link
              to="/admin"
              aria-label="Admin Portal"
              className="w-2.5 h-2.5 rounded-full bg-amber-glow/70 hover:bg-amber-glow transition-colors inline-block shrink-0"
            />
            © {new Date().getFullYear()} AtS Constructions & Engineering
          </span>
          <span>Prep by FYFT Technologies</span>
        </div>
      </div>
    </footer>
  );
}
