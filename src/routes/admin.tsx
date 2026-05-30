import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Layout } from "@/components/Layout";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { toast } from "sonner";
import {
  ShieldCheck,
  LogOut,
  Loader2,
  Calendar,
  User,
  Mail,
  Phone,
  Briefcase,
  MessageSquare,
  ArrowUpRight,
  CheckCircle2,
  Eye,
  FileText,
  Clock,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin Portal — AtS Constructions & Engineering" },
      { name: "description", content: "Secure operations entry and telemetry pipeline dashboard." },
    ],
  }),
  component: AdminComponent,
});

function AdminComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authLoading, setAuthLoading] = useState(true);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [submissions, setSubmissions] = useState<Record<string, any>[]>([]);
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [selectedLead, setSelectedLead] = useState<Record<string, any> | null>(null);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();
        if (session) {
          setIsLoggedIn(true);
          await fetchDashboardData();
        }
      } catch (err) {
        console.error("Session verification error:", err);
      } finally {
        setAuthLoading(false);
      }
    };
    checkSession();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const { data, error } = await supabase
        .from("admin_submissions")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      if (data) setSubmissions(data);
    } catch (error: unknown) {
      console.error(error);
    }
  };

  const handleStatusToggle = async (id: string, currentStatus: boolean) => {
    setUpdatingId(id);
    const nextStatus = !currentStatus;

    try {
      const { error } = await supabase
        .from("admin_submissions")
        .update({ is_completed: nextStatus })
        .eq("id", id);

      if (error) throw error;

      setSubmissions((prev) =>
        prev.map((item) => (item.id === id ? { ...item, is_completed: nextStatus } : item)),
      );

      if (selectedLead && selectedLead.id === id) {
        setSelectedLead((prev) => (prev ? { ...prev, is_completed: nextStatus } : null));
      }

      if (nextStatus) {
        toast.success("Lead marked as completed successfully.");
      } else {
        toast.info("Lead returned to active queue.");
      }
    } catch (err: unknown) {
      toast.error(
        `Database synchronization failed: ${err instanceof Error ? err.message : String(err)}`,
      );
    } finally {
      setUpdatingId(null);
    }
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password: password,
      });

      if (error) {
        toast.error(`Access Denied: ${error.message}`);
        return;
      }

      if (data?.user) {
        toast.success("Authenticated successfully.");
        setIsLoggedIn(true);
        await fetchDashboardData();
      }
    } catch (err) {
      toast.error("An error occurred during verification.");
    } finally {
      setSubmitLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsLoggedIn(false);
    setSubmissions([]);
    setSelectedLead(null);
    setEmail("");
    setPassword("");
    toast.success("Session closed securely.");
  };

  if (authLoading) {
    return (
      <Layout>
        <div className="flex flex-col items-center justify-center min-h-[50vh]">
          <Loader2 className="h-6 w-6 animate-spin text-amber-500 mb-2" />
          <p className="text-zinc-400 font-mono text-xs tracking-widest">VERIFYING PIPELINE...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="w-full text-zinc-900 bg-transparent">
        {isLoggedIn ? (
          /* --- VIEW A: SECURE MANAGEMENT MATRIX --- */
          <div className="pt-6 pb-24 max-w-[1340px] mx-auto px-4 md:px-6 space-y-10">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 border-b border-zinc-100 pb-8">
              <div>
                <p className="blueprint-header-strip inline-flex items-center gap-3 px-5 py-2.5 mb-4">
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
                  Operational Control Core
                </p>
                <h1 className="font-display text-[clamp(1.5rem,3.2vw,2.5rem)] font-bold tracking-tight text-zinc-950">
                  <span className="mr-3.5">OPERATIONAL</span>
                  <em className="italic text-gradient pr-2">DASHBOARD</em>
                </h1>
                <p className="text-zinc-500 text-sm mt-2 max-w-xl">
                  Secure data matrix captures real-time industrial incoming project briefs. Select
                  any row parameters to inspect deep blueprint specs.
                </p>
              </div>

              {/* UPDATED: Logout button styled cleanly in solid red and white text */}
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-sm border border-transparent cursor-pointer animate-fade-in"
              >
                <LogOut size={13} /> LOGOUT
              </button>
            </div>

            <div className="bg-transparent rounded-none border-none mt-12">
              <div className="overflow-x-auto">
                <Table className="border-separate border-spacing-y-4 w-full">
                  {/* CHANGED: Made table headers significantly bigger (text-sm) and bold (font-black) with tracking adjustments */}
                  <TableHeader
                    className="rounded-2xl shadow-[0_4px_14px_rgba(0,0,0,0.08)]"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.45 0.1 30) 0%, oklch(0.55 0.15 45) 55%, oklch(0.7 0.16 60) 100%)",
                    }}
                  >
                    <TableRow className="hover:bg-transparent border-none shadow-none">
                      <TableHead className="font-mono text-sm !font-black uppercase tracking-wider !text-white text-center w-[100px] py-5 px-3 rounded-l-2xl border-r border-white/10">
                        MARK
                      </TableHead>
                      <TableHead className="font-mono text-sm !font-black uppercase tracking-wider !text-white py-5 px-4 border-r border-white/10 w-[240px]">
                        QUEUE STATUS
                      </TableHead>
                      <TableHead className="font-mono text-sm !font-black uppercase tracking-wider !text-white py-5 px-4 border-r border-white/10 w-[140px]">
                        LOG DATE
                      </TableHead>
                      <TableHead className="font-mono text-sm !font-black uppercase tracking-wider !text-white py-5 px-4 border-r border-white/10 w-[200px]">
                        CLIENT PRINCIPAL
                      </TableHead>
                      <TableHead className="font-mono text-sm !font-black uppercase tracking-wider !text-white py-5 px-4 border-r border-white/10 w-[380px]">
                        COMMUNICATION & PROJECT DESCRIPTION
                      </TableHead>
                      <TableHead className="font-mono text-sm !font-black uppercase tracking-wider !text-white py-5 px-5 rounded-r-2xl">
                        PROJECT SCOPE SEGMENT
                      </TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody className="before:leading-5 before:block before:text-transparent">
                    {submissions.length === 0 ? (
                      <TableRow className="bg-white border border-zinc-100 rounded-2xl shadow-sm">
                        <TableCell
                          colSpan={6}
                          className="text-center py-24 text-zinc-400 font-mono text-xs tracking-widest uppercase rounded-2xl"
                        >
                          No project inquiries recorded in this partition database block.
                        </TableCell>
                      </TableRow>
                    ) : (
                      submissions.map((row) => (
                        <TableRow
                          key={row.id}
                          onClick={() => setSelectedLead(row)}
                          className={`group bg-white border border-zinc-200/60 rounded-2xl transition-all duration-300 cursor-pointer shadow-[0_2px_8px_-3px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_20px_-6px_rgba(0,0,0,0.07)] hover:border-zinc-400 relative ${row.is_completed ? "opacity-75 bg-zinc-50/50" : ""
                            }`}
                        >
                          {/* Column 1: Checkbox */}
                          <TableCell
                            className="py-5 pl-6 text-center rounded-l-2xl border-y border-l border-zinc-200/50 group-hover:border-zinc-300/80 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <div className="flex items-center justify-center">
                              {updatingId === row.id ? (
                                <Loader2 className="h-4 w-4 animate-spin text-amber-600" />
                              ) : (
                                <input
                                  type="checkbox"
                                  checked={row.is_completed || false}
                                  onChange={() =>
                                    handleStatusToggle(row.id, row.is_completed || false)
                                  }
                                  className="h-4 w-4 rounded-md border-zinc-300 text-amber-600 accent-[#CC5500] focus:ring-amber-500/30 cursor-pointer transition"
                                />
                              )}
                            </div>
                          </TableCell>

                          {/* Column 2: Explicit Conditions Status Badges */}
                          <TableCell className="py-5 border-y border-zinc-200/50 group-hover:border-zinc-300/80 transition-colors">
                            {row.is_completed ? (
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-green-50 text-green-700 border border-green-200/80">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />✓ Lead
                                Completed
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-amber-50 text-amber-800 border border-amber-200/60">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                                ● Lead Is Still Active
                              </span>
                            )}
                          </TableCell>

                          {/* Column 3: Log Date */}
                          <TableCell className="py-5 text-zinc-500 font-mono text-[11px] font-medium border-y border-zinc-200/50 group-hover:border-zinc-300/80 transition-colors">
                            <div className="flex items-center gap-1.5 text-zinc-400 group-hover:text-zinc-600 transition-colors">
                              <Clock size={12} />
                              {new Date(row.created_at).toLocaleDateString(undefined, {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })}
                            </div>
                          </TableCell>

                          {/* Column 4: Client Principal */}
                          <TableCell className="py-5 border-y border-zinc-200/50 group-hover:border-zinc-300/80 transition-colors">
                            <div
                              className={`font-bold text-zinc-900 group-hover:text-amber-600 transition-colors text-sm ${row.is_completed ? "text-zinc-400 line-through font-medium" : ""
                                }`}
                            >
                              {row.full_name}
                            </div>
                          </TableCell>

                          {/* Column 5: Communication Vectors & Project Inline Summary Description */}
                          <TableCell className="py-5 border-y border-zinc-200/50 group-hover:border-zinc-300/80 transition-colors">
                            <div className="flex flex-col gap-1.5 max-w-[340px]">
                              <div className="flex items-center gap-3 text-xs text-zinc-600 font-medium">
                                <span>{row.email}</span>
                                <span className="text-zinc-300">|</span>
                                <span className="font-mono text-[11px] text-zinc-400">
                                  {row.phone || "—"}
                                </span>
                              </div>
                              <p
                                className={`text-xs text-zinc-500 leading-relaxed bg-zinc-50/80 p-2.5 rounded-xl border border-zinc-100/80 font-normal ${row.is_completed ? "text-zinc-400/80 line-through" : ""
                                  }`}
                              >
                                {row.message}
                              </p>
                            </div>
                          </TableCell>

                          {/* Column 6: Project Segment Scope */}
                          <TableCell className="py-5 pr-6 rounded-r-2xl border-y border-r border-zinc-200/50 group-hover:border-zinc-300/80 transition-colors">
                            <div className="flex items-center justify-between gap-4">
                              <span
                                className={`px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase tracking-wide border shrink-0 ${row.is_completed
                                  ? "bg-zinc-50 text-zinc-400 border-zinc-200/60"
                                  : "bg-zinc-900 text-white border-zinc-900"
                                  }`}
                              >
                                {row.interest_of_scope || "General Brief"}
                              </span>
                              <div className="flex items-center gap-1 text-xs text-zinc-400 font-mono group-hover:text-zinc-900 transition-colors opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                                inspect <ArrowUpRight size={13} />
                              </div>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            </div>

            {/* --- ARCHITECTURAL SLIDING DRAWER DETAIL SHEET --- */}
            <Sheet open={!!selectedLead} onOpenChange={(open) => !open && setSelectedLead(null)}>
              <SheetContent className="sm:max-w-xl bg-white border-l border-zinc-200 p-0 shadow-2xl overflow-y-auto flex flex-col h-full">
                {selectedLead && (
                  <>
                    <div className="border-b border-zinc-100 bg-zinc-50/60 px-6 py-5 flex items-center justify-between">
                      <div className="space-y-1.5 text-left">
                        <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 font-bold flex items-center gap-1">
                          <FileText size={10} className="text-amber-600" /> System Record Partition
                        </p>
                        <SheetTitle className="text-lg font-bold tracking-tight text-zinc-900 font-display">
                          Lead Specification Brief
                        </SheetTitle>
                      </div>

                      <div className="flex items-center gap-3">
                        <button
                          onClick={() =>
                            handleStatusToggle(selectedLead.id, selectedLead.is_completed || false)
                          }
                          className={`flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-mono font-bold uppercase tracking-wider transition-all duration-300 ${selectedLead.is_completed
                            ? "bg-green-50 text-green-700 border-green-200"
                            : "bg-amber-50 text-amber-700 border-amber-200/70"
                            }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${selectedLead.is_completed ? "bg-green-500" : "bg-amber-500 animate-pulse"}`}
                          />
                          {selectedLead.is_completed ? "LEAD COMPLETED" : "LEAD IS STILL ACTIVE"}
                        </button>
                      </div>
                    </div>

                    <div className="p-6 md:p-8 space-y-8 flex-1">
                      <div className="grid grid-cols-2 gap-6 border-b border-zinc-100 pb-6">
                        <div className="space-y-2 text-left">
                          <span className="block font-mono text-xs uppercase font-bold tracking-wider text-zinc-400">
                            STATUS
                          </span>
                          <p
                            className={`text-xs font-bold font-mono uppercase tracking-wider px-2.5 py-1 rounded-md border inline-block ${selectedLead.is_completed
                              ? "bg-green-50/40 text-green-700 border-green-100"
                              : "bg-zinc-50 text-zinc-800 border-zinc-200"
                              }`}
                          >
                            {selectedLead.is_completed
                              ? "✓ LEAD COMPLETED"
                              : "● LEAD IS STILL ACTIVE"}
                          </p>
                        </div>

                        <div className="space-y-2 text-left">
                          <span className="block font-mono text-xs uppercase font-bold tracking-wider text-zinc-400">
                            DATE RECEIVED
                          </span>
                          <p className="text-sm font-semibold text-zinc-800 pt-0.5">
                            {new Date(selectedLead.created_at).toLocaleDateString(undefined, {
                              weekday: "long",
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-b border-zinc-100 pb-6">
                        <div className="space-y-2 text-left md:col-span-2">
                          <span className="block font-mono text-xs uppercase font-bold tracking-wider text-zinc-400">
                            CLIENT
                          </span>
                          <p className="text-xl font-bold text-zinc-900 tracking-tight">
                            {selectedLead.full_name}
                          </p>
                        </div>

                        <div className="space-y-2 text-left">
                          <span className="block font-mono text-xs uppercase font-bold tracking-wider text-zinc-400">
                            EMAIL ADDRESS
                          </span>
                          <a
                            href={`mailto:${selectedLead.email}`}
                            className="text-sm font-medium text-amber-600 hover:text-amber-700 hover:underline transition-all block break-all pt-0.5"
                          >
                            {selectedLead.email}
                          </a>
                        </div>

                        <div className="space-y-2 text-left">
                          <span className="block font-mono text-xs uppercase font-bold tracking-wider text-zinc-400">
                            CONTACT NUMBER
                          </span>
                          {selectedLead.phone ? (
                            <a
                              href={`tel:${selectedLead.phone}`}
                              className="text-sm font-mono font-semibold text-zinc-800 hover:text-amber-600 hover:underline transition-all block pt-0.5"
                            >
                              {selectedLead.phone}
                            </a>
                          ) : (
                            <p className="text-sm text-zinc-400 italic pt-0.5">
                              No configuration log recorded
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2.5 border-b border-zinc-100 pb-6 text-left">
                        <span className="block font-mono text-xs uppercase font-bold tracking-wider text-zinc-400">
                          INTEREST SCOPE
                        </span>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-900 text-white font-mono text-xs font-bold uppercase tracking-wide">
                          {selectedLead.interest_of_scope || "General Project Inquiry"}
                        </div>
                      </div>

                      <div className="space-y-3 text-left">
                        <span className="block font-mono text-xs uppercase font-bold tracking-wider text-zinc-400">
                          MESSAGE / PROJECT DESCRIPTION
                        </span>
                        <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/70 shadow-sm">
                          <p className="text-sm text-zinc-700 leading-relaxed font-normal whitespace-pre-wrap">
                            {selectedLead.message}
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </SheetContent>
            </Sheet>
          </div>
        ) : (
          /* --- VIEW B: ADMIN LOGIN SCREEN --- */
          <div className="pt-8 md:pt-10 pb-32 flex flex-col items-center justify-start px-4 md:px-6">
            <div className="w-full max-w-md space-y-8">
              <div className="text-center space-y-2">
                <p className="blueprint-header-strip inline-flex items-center gap-3 px-5 py-2.5 mb-2">
                  <span className="relative flex h-2.5 w-2.5 shrink-0">
                    <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full" style={{ background: 'linear-gradient(135deg, #b45309, #d97706)' }} />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full" style={{ background: 'linear-gradient(135deg, #b45309, #d97706)' }} />
                  </span>
                  Gateway Vault
                </p>
                <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">
                  Admin <em className="italic text-gradient">Sign In</em>
                </h2>
                <p className="text-zinc-500 text-xs md:text-sm max-w-xs mx-auto leading-relaxed">
                  Enter your credentials to manage incoming operational project briefs.
                </p>
              </div>

              <div className="glass-strong rounded-3xl p-6 md:p-8 border border-zinc-200/80 shadow-xl backdrop-blur-xl bg-white/80">
                <form onSubmit={handleLogin} className="space-y-5">
                  <div>
                    <label className="text-zinc-600 font-mono block mb-2 text-xs tracking-wider">
                      Email Core
                    </label>
                    <input
                      type="email"
                      placeholder="operator@ats-engineering.sg"
                      className="field-input w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-sm text-zinc-900 focus:outline-none focus:border-amber-500 transition-colors"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <label className="text-zinc-600 font-mono block mb-2 text-xs tracking-wider">
                      Access Token Key
                    </label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="field-input w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-2.5 text-sm text-zinc-900 focus:outline-none focus:border-amber-500 transition-colors"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitLoading}
                    className="btn-primary w-full h-11 justify-center rounded-xl font-bold tracking-wide transition-all duration-300 mt-2 flex items-center gap-2 uppercase text-xs cursor-pointer"
                  >
                    {submitLoading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" /> Verifying...
                      </>
                    ) : (
                      <>
                        Authenticate Account <ArrowUpRight size={14} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
