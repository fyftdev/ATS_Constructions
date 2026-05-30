import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { useState } from "react";
import { MapPin, Phone, Mail, ArrowUpRight, Check, AlertCircle, Clock } from "lucide-react";
import { z } from "zod";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { services } from "@/lib/services-data";

const countryCodes = [
  { code: "+65", iso: "SG", flag: "🇸🇬", name: "Singapore" },
  { code: "+60", iso: "MY", flag: "🇲🇾", name: "Malaysia" },
  { code: "+62", iso: "ID", flag: "🇮🇩", name: "Indonesia" },
  { code: "+66", iso: "TH", flag: "🇹🇭", name: "Thailand" },
  { code: "+84", iso: "VN", flag: "🇻🇳", name: "Vietnam" },
  { code: "+63", iso: "PH", flag: "🇵🇭", name: "Philippines" },
  { code: "+91", iso: "IN", flag: "🇮🇳", name: "India" },
  { code: "+92", iso: "PK", flag: "🇵🇰", name: "Pakistan" },
  { code: "+880", iso: "BD", flag: "🇧🇩", name: "Bangladesh" },
  { code: "+86", iso: "CN", flag: "🇨🇳", name: "China" },
  { code: "+852", iso: "HK", flag: "🇭🇰", name: "Hong Kong" },
  { code: "+81", iso: "JP", flag: "🇯🇵", name: "Japan" },
  { code: "+82", iso: "KR", flag: "🇰🇷", name: "South Korea" },
  { code: "+61", iso: "AU", flag: "🇦🇺", name: "Australia" },
  { code: "+64", iso: "NZ", flag: "🇳🇿", name: "New Zealand" },
  { code: "+971", iso: "AE", flag: "🇦🇪", name: "United Arab Emirates" },
  { code: "+966", iso: "SA", flag: "🇸🇦", name: "Saudi Arabia" },
  { code: "+974", iso: "QA", flag: "🇶🇦", name: "Qatar" },
  { code: "+968", iso: "OM", flag: "🇴🇲", name: "Oman" },
  { code: "+973", iso: "BH", flag: "🇧🇭", name: "Bahrain" },
  { code: "+965", iso: "KW", flag: "🇰🇼", name: "Kuwait" },
  { code: "+44", iso: "GB", flag: "🇬🇧", name: "United Kingdom" },
  { code: "+1", iso: "US", flag: "🇺🇸", name: "United States" },
  { code: "+1", iso: "CA", flag: "🇨🇦", name: "Canada" },
  { code: "+49", iso: "DE", flag: "🇩🇪", name: "Germany" },
  { code: "+33", iso: "FR", flag: "🇫🇷", name: "France" },
  { code: "+31", iso: "NL", flag: "🇳🇱", name: "Netherlands" },
  { code: "+39", iso: "IT", flag: "🇮🇹", name: "Italy" },
  { code: "+34", iso: "ES", flag: "🇪🇸", name: "Spain" },
];

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — AtS Constructions & Engineering" },
      {
        name: "description",
        content:
          "Speak with a senior AtS engineer. Singapore office, project enquiries, partnership conversations. We respond within one business day.",
      },
      { property: "og:title", content: "Contact AtS" },
      {
        property: "og:description",
        content: "Let's engineer it. Senior response within one business day.",
      },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name too long"),
  company: z.string().trim().max(120, "Company too long").optional(),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().max(40).optional(),
  scope: z.string().min(1, "Please select a scope"),
  message: z
    .string()
    .trim()
    .min(10, "Tell us a little more (min 10 chars)")
    .max(1500, "Message too long"),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

function Contact() {
  const [status, setStatus] = useState<"idle" | "sent" | "submitting">("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [country, setCountry] = useState(countryCodes[0]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const raw = Object.fromEntries(fd.entries()) as Record<string, string>;
    const phoneNumber = (raw.phone || "").trim();
    const fullPhone = phoneNumber ? `${country.code} ${phoneNumber}` : "";
    const data = { ...raw, phone: fullPhone };
    const result = schema.safeParse(data);

    if (!result.success) {
      const errs: Errors = {};
      for (const issue of result.error.issues) {
        const k = issue.path[0] as keyof Errors;
        if (k && !errs[k]) errs[k] = issue.message;
      }
      setErrors(errs);
      return;
    }

    setErrors({});
    setStatus("submitting");

    try {
      const { error } = await supabase.from("admin_submissions").insert([
        {
          full_name: result.data.name,
          email: result.data.email,
          phone: result.data.phone || "",
          interest_of_scope: result.data.scope,
          message: result.data.message,
        },
      ]);

      if (error) throw error;

      toast.success("Quote request logged in database!");
      setStatus("sent");
    } catch (err: unknown) {
      toast.error(
        `Database Error: ${err instanceof Error ? err.message : "Failed to sync entries"}`,
      );
      setStatus("idle");
    }
  }

  return (
    <Layout>
      <section className="px-4 md:px-6 pt-12 md:pt-20 pb-10">
        <div className="max-w-[1280px] mx-auto">
          <p className="blueprint-header-strip inline-flex items-center gap-3 px-5 py-2.5 mb-6 reveal">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span
                className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full"
                style={{ background: "linear-gradient(135deg, #b45309, #d97706)" }}
              />
              <span
                className="relative inline-flex h-2.5 w-2.5 rounded-full"
                style={{ background: "linear-gradient(135deg, #b45309, #d97706)" }}
              />
            </span>
            Contact
          </p>
          <h1 className="font-display text-[clamp(2.5rem,7vw,6.5rem)] leading-[0.98] reveal text-ink">
            HAVE A BUILD IN MIND?
            <br />
            <em className="italic text-gradient">LET'S ENGINEER IT</em>
          </h1>
          <p className="mt-6 max-w-xl text-base md:text-lg text-ink-soft leading-relaxed reveal">
            A senior engineer will personally reply within one business day.
          </p>
        </div>
      </section>

      <section className="px-4 md:px-6 pb-24">
        <div className="max-w-[1280px] mx-auto grid lg:grid-cols-12 gap-6 lg:gap-8">
          <div className="lg:col-span-7 reveal glass-strong rounded-3xl p-6 md:p-10">
            {status === "sent" ? (
              <div className="text-center py-8">
                <div className="inline-flex w-14 h-14 rounded-full bg-amber-glow/20 items-center justify-center mb-5">
                  <Check size={26} className="text-aurora-2" />
                </div>
                <h2 className="font-display text-3xl md:text-4xl text-ink mb-3">
                  Message received.
                </h2>
                <p className="text-ink-soft max-w-md mx-auto">
                  We'll be in touch within one business day. For urgent matters, call our office
                  directly.
                </p>
                <button onClick={() => setStatus("idle")} className="btn-ghost mt-8">
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field
                    label="Name"
                    name="name"
                    placeholder="Your full name"
                    error={errors.name}
                    required
                    autoComplete="name"
                  />
                  <Field
                    label="Company"
                    name="company"
                    placeholder="Optional"
                    error={errors.company}
                    autoComplete="organization"
                  />
                </div>
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  error={errors.email}
                  required
                  autoComplete="email"
                  inputMode="email"
                />
                <div>
                  <label className="label-mono text-ink-soft block mb-2">Phone</label>
                  <div className="flex gap-2">
                    <select
                      value={country.iso}
                      onChange={(e) => {
                        const c = countryCodes.find((x) => x.iso === e.target.value);
                        if (c) setCountry(c);
                      }}
                      aria-label="Country code"
                      className="field-input w-[180px] shrink-0 pr-2"
                    >
                      {countryCodes.map((c) => (
                        <option key={c.iso} value={c.iso}>
                          {c.flag} {c.code} {c.name}
                        </option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone number"
                      autoComplete="tel-national"
                      inputMode="tel"
                      className="field-input flex-1 min-w-0"
                    />
                  </div>
                  {errors.phone && <ErrorLine msg={errors.phone} />}
                </div>
                <div>
                  <label className="label-mono text-ink-soft block mb-2">Scope of interest</label>
                  <select name="scope" defaultValue={services[0].title} className="field-input">
                    {services.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Something else">Something else</option>
                  </select>
                  {errors.scope && <ErrorLine msg={errors.scope} />}
                </div>

                <div>
                  <label className="label-mono text-ink-soft block mb-2">
                    Tell us about your project
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Site location, scope, indicative timeline…"
                    className="field-input resize-none"
                  />
                  {errors.message && <ErrorLine msg={errors.message} />}
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <p className="text-xs text-ink-soft flex items-center gap-2">
                    <Clock size={14} /> We reply within 1 business day.
                  </p>
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="btn-primary w-full sm:w-auto justify-center"
                  >
                    {status === "submitting" ? "Connecting..." : "Send Message"}{" "}
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </form>
            )}
          </div>

          <aside className="lg:col-span-5 space-y-5 reveal">
            <div className="glass rounded-3xl p-7">
              <p className="blueprint-header-strip inline-flex items-center gap-3 px-5 py-2.5 mb-5">
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span
                    className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full"
                    style={{ background: "linear-gradient(135deg, #b45309, #d97706)" }}
                  />
                  <span
                    className="relative inline-flex h-2.5 w-2.5 rounded-full"
                    style={{ background: "linear-gradient(135deg, #b45309, #d97706)" }}
                  />
                </span>
                Singapore Office
              </p>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <MapPin size={18} className="mt-1 shrink-0 text-aurora-2" />
                  <p className="leading-relaxed text-ink">
                    18 Cross Street
                    <br />
                    #11-08 Cross Street Exchange
                    <br />
                    Singapore 048423
                  </p>
                </div>
                <div className="flex gap-4">
                  <Phone size={18} className="mt-1 shrink-0 text-aurora-2" />
                  <a href="tel:+6561234567" className="hover:text-aurora-2 transition text-ink">
                    +65 6123 4567
                  </a>
                </div>
                <div className="flex gap-4">
                  <Mail size={18} className="mt-1 shrink-0 text-aurora-2" />
                  <a
                    href="mailto:info@atsce.com.sg"
                    className="hover:text-aurora-2 transition text-ink break-all"
                  >
                    info@atsce.com.sg
                  </a>
                </div>
              </div>
            </div>

            <div className="glass rounded-3xl overflow-hidden">
              <div className="aspect-[4/3] relative">
                <iframe
                  title="AtS Singapore office map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=103.846%2C1.282%2C103.852%2C1.286&layer=mapnik&marker=1.284%2C103.849"
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                />
              </div>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  error,
  required,
  autoComplete,
  inputMode,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: string;
  required?: boolean;
  autoComplete?: string;
  inputMode?: "text" | "email" | "tel" | "numeric" | "search" | "url";
}) {
  return (
    <div>
      <label className="label-mono text-ink-soft block mb-2">
        {label}
        {required && <span className="text-aurora-2"> *</span>}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        autoComplete={autoComplete}
        inputMode={inputMode}
        className="field-input"
      />
      {error && <ErrorLine msg={error} />}
    </div>
  );
}

function ErrorLine({ msg }: { msg: string }) {
  return (
    <p className="mt-2 text-xs text-destructive flex items-center gap-1.5">
      <AlertCircle size={12} /> {msg}
    </p>
  );
}
