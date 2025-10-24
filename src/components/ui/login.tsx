"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Eye,
  EyeOff,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

// A modern, all-in-one Auth page with Sign in, Sign up, and Forgot password flows.
// Unique touches: passkey CTA, magic-link option, password strength meter, subtle glassmorphism, and a brand panel.

function PasswordStrength({ value }: { value: string }) {
  const score = useMemo(() => {
    let s = 0;
    if (value.length >= 8) s++;
    if (/[A-Z]/.test(value)) s++;
    if (/[0-9]/.test(value)) s++;
    if (/[^A-Za-z0-9]/.test(value)) s++;
    return s; // 0..4
  }, [value]);
  const labels = ["Too short", "Weak", "Okay", "Good", "Strong"];
  return (
    <div>
      <div className="h-2 w-full rounded-full bg-slate-200 overflow-hidden">
        <div
          className={"h-2 rounded-full transition-all " +
            (score === 0
              ? "w-0"
              : score === 1
              ? "w-1/5 bg-red-400"
              : score === 2
              ? "w-2/5 bg-orange-400"
              : score === 3
              ? "w-3/5 bg-yellow-400"
              : "w-4/5 bg-green-500")}
        />
      </div>
      <div className="mt-1 text-xs text-slate-500">{labels[score]}</div>
    </div>
  );
}

export default function AuthPage() {
  const [mode, setMode] = useState<"signin" | "signup" | "forgot">("signin");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* soft background blobs */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-blue-100/60 dark:bg-blue-900/30 blur-3xl" />
        <div className="absolute -bottom-28 -right-28 h-96 w-96 rounded-full bg-indigo-100/60 dark:bg-indigo-900/30 blur-3xl" />
      </div>

      <header className="px-6 py-4">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold">
            <Sparkles className="h-5 w-5 text-blue-600" />
            <span>NextEd</span>
            <Badge variant="secondary" className="ml-2 hidden sm:inline-flex">Beta</Badge>
          </div>
          <Button asChild variant="ghost" className="text-sm">
            <Link href="/">← Back</Link>
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-6">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Brand / Marketing panel */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden lg:block"
          >
            <Card className="rounded-3xl border-blue-200/60 bg-white/70 backdrop-blur shadow-sm dark:bg-slate-900/60">
              <CardContent className="p-10">
                <div className="text-sm text-blue-700 inline-flex items-center gap-2 bg-blue-50 rounded-full px-3 py-1">
                  <ShieldCheck className="h-4 w-4" /> Secure by design
                </div>
                <h1 className="mt-5 text-4xl font-extrabold leading-tight">
                  Welcome to <span className="text-blue-600">NextEd Cohort</span>
                </h1>
                <p className="mt-3 text-slate-600 dark:text-slate-300">
                  Ship real projects with a tight-knit community. One account unlocks your dashboard, cohort chat, and badges.
                </p>
              
              </CardContent>
            </Card>
          </motion.div>

          {/* Auth Card */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <Card className="rounded-3xl bg-white/80 backdrop-blur shadow-sm dark:bg-slate-900/70">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl font-bold">
                    {mode === "signin" && "Sign in"}
                    {mode === "signup" && "Create account"}
                    {mode === "forgot" && "Reset password"}
                  </CardTitle>
                  <div className="flex items-center gap-1 rounded-full border px-1">
                    <button
                      className={`px-3 py-1 text-sm rounded-full ${mode === "signin" ? "bg-blue-600 text-white" : "hover:bg-slate-100 dark:hover:bg-slate-800"}`}
                      onClick={() => setMode("signin")}
                    >Sign in</button>
                   
                    <button
                      className={`px-3 py-1 text-sm rounded-full ${mode === "forgot" ? "bg-blue-600 text-white" : "hover:bg-slate-100 dark:hover:bg-slate-800"}`}
                      onClick={() => setMode("forgot")}
                    >Forgot</button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                {/* OAuth & Passkey row */}
             
                <div className="my-4"><Separator /></div>

                {mode !== "forgot" && (
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" placeholder="you@domain.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <div className="relative">
                        <Input
                          id="password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          placeholder={mode === "signup" ? "At least 8 characters" : "••••••••"}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                          type="button"
                          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1 text-slate-500 hover:bg-slate-100"
                          onClick={() => setShowPassword((s) => !s)}
                          aria-label={showPassword ? "Hide password" : "Show password"}
                        >
                          {showPassword ? <EyeOff className="h-4 w-4"/> : <Eye className="h-4 w-4"/>}
                        </button>
                      </div>
                      {mode === "signup" && <PasswordStrength value={password} />}
                    </div>

                    {mode === "signup" && (
                      <div className="space-y-2">
                        <Label htmlFor="name">Full name</Label>
                        <Input id="name" name="name" placeholder="Jane Doe" />
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      <label className="flex items-center gap-2 text-sm text-slate-600">
                        <input type="checkbox" className="h-4 w-4 rounded" />
                        Remember me
                      </label>
                      <button className="text-sm text-blue-700 underline" onClick={(e) => {e.preventDefault(); setMode("forgot");}}>Forgot password?</button>
                    </div>
                  
                  </form>
                )}

                {mode === "forgot" && (
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="reset-email">Email</Label>
                      <Input id="reset-email" name="email" type="email" placeholder="you@domain.com" />
                    </div>
                    <Button className="w-full gap-2" type="button">
                      Send reset link <ArrowRight className="h-4 w-4"/>
                    </Button>
                    <p className="text-center text-sm text-slate-600">
                      Remembered it? <button className="underline" onClick={(e)=>{e.preventDefault(); setMode("signin");}}>Back to sign in</button>
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>

      <footer className="px-6 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} NextEd — Secure. Private. Passkey‑ready.
      </footer>
    </div>
  );
}