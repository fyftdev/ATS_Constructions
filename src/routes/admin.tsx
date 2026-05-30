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
} from "lucide-react";

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

  // Function to dynamically update completion status directly in Supabase table layer
  const handleStatusToggle = async (id: string, currentStatus: boolean) => {
    setUpdatingId(id);
    const nextStatus = !currentStatus;

    try {
      const { error } = await supabase
        .from("admin_submissions")
        .update({ is_completed: nextStatus })
        .eq("id", id);

      if (error) throw error;

      // Real-time local state engine layout updates
      setSubmissions((prev) =>
        prev.map((item) => (item.id === id ? { ...item, is_completed: nextStatus } : item)),
      );

      if (nextStatus) {
        toast.success("Lead marked as completed successfully.");
      } else {
        toast.info("Lead returned to active queue.");
      }
    } catch (err: unknown) {
      toast.error(`Database synchronization failed: ${err instanceof Error ? err.message : String(err)}`);
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
          /* --- VIEW A: SECURE DASHBOARD DATA VIEW --- */
          <div className="pt-4 md:pt-4 pb-24 max-w-[1340px] mx-auto px-4 md:px-6 space-y-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-zinc-200 pb-8">
              <div>
                <p className="text-amber-600 font-mono text-xs tracking-widest uppercase mb-4">
                  Control Center
                </p>
                <h1 className="font-display text-[clamp(1.5rem,3.5vw,2.8rem)] leading-[1.1] text-zinc-900 tracking-tighter pr-2 overflow-visible">
                  Operational{" "}
                  <em className="italic text-gradient pr-3 pb-1 inline-block">Dashboard</em>
                </h1>
                <p className="text-zinc-600 text-base mt-4 max-w-xl leading-relaxed">
                  Secure telemetry capturing real-time client inquiries and structural project
                  specifications.
                </p>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-red-200 bg-red-50 hover:bg-red-100 text-red-600 text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm shrink-0 cursor-pointer"
              >
                <LogOut size={14} /> Log Out
              </button>
            </div>

            <div className="bg-white/80 rounded-3xl overflow-hidden shadow-xl border border-zinc-200/60 backdrop-blur-md">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader className="bg-zinc-50 border-b border-zinc-200">
                    <TableRow className="hover:bg-transparent border-none">
                      {/* NEW STATUS CHECKBOX HEADER FIELD */}
                      <TableHead className="font-mono !text-amber-600 py-4 pl-6 text-center w-[80px]">
                        <CheckCircle2 size={13} className="inline mr-1" />
                        Status
                      </TableHead>
                      <TableHead className="font-mono !text-amber-600 py-4">
                        <Calendar size={13} className="inline mr-1.5" />
                        Date
                      </TableHead>
                      <TableHead className="font-mono !text-amber-600 py-4">
                        <User size={13} className="inline mr-1.5" />
                        Client
                      </TableHead>
                      <TableHead className="font-mono !text-amber-600 py-4">
                        <Mail size={13} className="inline mr-1.5" />
                        Email
                      </TableHead>
                      <TableHead className="font-mono !text-amber-600 py-4">
                        <Phone size={13} className="inline mr-1.5" />
                        Contact
                      </TableHead>
                      <TableHead className="font-mono !text-amber-600 py-4">
                        <Briefcase size={13} className="inline mr-1.5" />
                        Interest Scope
                      </TableHead>
                      <TableHead className="font-mono !text-amber-600 py-4 pr-6">
                        <MessageSquare size={13} className="inline mr-1.5" />
                        Message
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {submissions.length === 0 ? (
                      <TableRow>
                        <TableCell
                          colSpan={7}
                          className="text-center py-20 text-zinc-400 font-mono text-sm"
                        >
                          No project inquiries recorded in this partition database.
                        </TableCell>
                      </TableRow>
                    ) : (
                      submissions.map((row) => (
                        <TableRow
                          key={row.id}
                          className={`border-b border-zinc-100 transition-colors duration-200 ${
                            row.is_completed
                              ? "bg-green-50/30 hover:bg-green-50/50"
                              : "hover:bg-zinc-50/50"
                          }`}
                        >
                          {/* INTERACTIVE TOGGLE CHECKBOX ELEMENT */}
                          <TableCell className="py-5 pl-6 text-center whitespace-nowrap">
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
                                  className="h-4 w-4 rounded border-zinc-300 text-amber-600 accent-[#CC5500] focus:ring-amber-500 cursor-pointer"
                                />
                              )}
                            </div>
                          </TableCell>

                          <TableCell
                            className={`text-zinc-500 font-mono text-xs py-5 whitespace-nowrap ${
                              row.is_completed ? "line-through text-zinc-400" : ""
                            }`}
                          >
                            {new Date(row.created_at).toLocaleDateString(undefined, {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </TableCell>
                          <TableCell
                            className={`font-medium text-zinc-900 py-5 whitespace-nowrap ${
                              row.is_completed ? "text-zinc-400 line-through" : ""
                            }`}
                          >
                            {row.full_name}
                          </TableCell>
                          <TableCell
                            className={`text-zinc-600 py-5 break-all max-w-[180px] text-sm ${
                              row.is_completed ? "text-zinc-400 line-through" : ""
                            }`}
                          >
                            {row.email}
                          </TableCell>
                          <TableCell
                            className={`text-zinc-500 py-5 whitespace-nowrap font-mono text-xs ${
                              row.is_completed ? "text-zinc-400 line-through" : ""
                            }`}
                          >
                            {row.phone || "—"}
                          </TableCell>
                          <TableCell className="py-5 whitespace-nowrap">
                            <span
                              className={`px-3 py-1 rounded-full text-[11px] font-medium tracking-wide uppercase border ${
                                row.is_completed
                                  ? "bg-zinc-100 text-zinc-400 border-zinc-200"
                                  : "bg-amber-50 text-amber-700 border-amber-200"
                              }`}
                            >
                              {row.interest_of_scope || "General Inquiry"}
                            </span>
                          </TableCell>
                          <TableCell
                            className={`text-zinc-600 py-5 pr-6 max-w-sm text-sm leading-relaxed ${
                              row.is_completed ? "text-zinc-400 line-through" : ""
                            }`}
                          >
                            {row.message}
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        ) : (
          /* --- VIEW B: ADMIN LOGIN SCREEN --- */
          <div className="pt-8 md:pt-10 pb-32 flex flex-col items-center justify-start px-4 md:px-6">
            <div className="w-full max-w-md space-y-8">
              <div className="text-center space-y-2">
                <p className="text-amber-600 font-mono text-[11px] uppercase tracking-widest">
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
