import helmet from "@/assets/whatsapp-helmet.webp";

const WA_NUMBER = "917092345407"; // edit as needed
const WA_MSG = encodeURIComponent("Hi AtS — I'd like to discuss a project.");

export function WhatsAppHelmet() {
  return (
    <a
      href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with AtS on WhatsApp"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-amber-glow/40 animate-pulse-ring" />
      <span
        className="absolute inset-0 rounded-full bg-amber-glow/20 animate-pulse-ring"
        style={{ animationDelay: "0.8s" }}
      />
      <span className="relative flex items-center justify-center w-16 h-16 md:w-[72px] md:h-[72px] rounded-full bg-gradient-to-br from-amber-glow to-[oklch(0.7_0.16_60)] shadow-[0_18px_50px_-10px_oklch(0.82_0.15_80/0.7)] transition-transform duration-500 group-hover:scale-110 animate-float">
        <img
          src={helmet}
          alt=""
          width={96}
          height={96}
          className="w-12 h-12 md:w-14 md:h-14 object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.35)] -translate-y-0.5"
        />
      </span>
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap glass px-3 py-1.5 rounded-full text-xs text-ink font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Chat with AtS
      </span>
    </a>
  );
}
