import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { AuroraBackground } from "./AuroraBackground";
import { WhatsAppHelmet } from "./WhatsAppHelmet";
import { useReveal } from "@/lib/use-reveal";

export function Layout({ children }: { children: ReactNode }) {
  useReveal();
  return (
    <div className="min-h-screen flex flex-col text-ink relative">
      <AuroraBackground />
      <Header />
      <main className="flex-1 pt-28 md:pt-32">{children}</main>
      <Footer />
      <WhatsAppHelmet />
    </div>
  );
}
