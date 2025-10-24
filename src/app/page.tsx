"use client";
import { useMemo, useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Users, Sparkles, Clock, GraduationCap, LayoutDashboard, ShieldCheck, Star, ArrowRight, MessageCircleQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// --- Countdown component (to cohort start) ---
function useCountdown(targetDate: Date) {
  const [diff, setDiff] = useState<number>(() => targetDate.getTime() - Date.now());
  useEffect(() => {
    const id = setInterval(() => setDiff(targetDate.getTime() - Date.now()), 1000);
    return () => clearInterval(id);
  }, [targetDate]);
  const total = Math.max(0, diff);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((total / (1000 * 60)) % 60);
  const seconds = Math.floor((total / 1000) % 60);
  return { days, hours, minutes, seconds };
}

const CohortStart = new Date("2025-11-01T13:00:00-04:00"); // Oct 20, 2025 1:00 PM ET

export default function Home() {
  const { days, hours, minutes, seconds } = useCountdown(CohortStart);
  const countdownDone = useMemo(() => days + hours + minutes + seconds <= 0, [days, hours, minutes, seconds]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-900">
      {/* Decorative background blobs */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-blue-100 blur-3xl opacity-40" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-indigo-100 blur-3xl opacity-40" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <Link href="#" className="flex items-center gap-2 font-semibold">
            <Sparkles className="h-5 w-5 text-blue-600" />
            <span>NextEd Cohort</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#curriculum" className="hover:text-blue-700">Curriculum</a>
            <a href="#how" className="hover:text-blue-700">How it works</a>
            <a href="#cohort" className="hover:text-blue-700">Cohort & Pricing</a>
            <a href="/all-seminars" className="hover:text-blue-700">Free Seminars</a>
            <a href="#faq" className="hover:text-blue-700">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <Button asChild variant="outline" className="hidden sm:inline-flex"> 
              <Link href="#curriculum">View syllabus</Link>
            </Button>
            
            <Button asChild variant="outline">
              <Link href="/login">Login</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge className="mb-4" variant="secondary">Fall 2025 • Limited seats</Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Build a portfolio recruiters love —
              <span className="text-blue-600"> together</span>
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              A 12‑week, community‑driven program that blends <strong>ML</strong>, <strong>Data Systems</strong>, <strong>Databases</strong>, and <strong>Cloud</strong> to ship real projects and level up your career.
            </p>

            {/* Countdown */}
            <div className="mt-6">
              <p className="text-sm font-medium text-slate-500">Cohort kickoff — <time dateTime="2025-10-20">Oct 20, 2025</time> (ET)</p>
              <div className="mt-2 flex items-center gap-3 text-center">
                {([['Days', days], ['Hours', hours], ['Min', minutes], ['Sec', seconds]] as const).map(([label, val]) => (
                  <div key={label} className="rounded-xl border bg-white/70 backdrop-blur px-4 py-2 min-w-[70px]">
                    <div className="text-2xl font-bold tabular-nums">{countdownDone ? '00' : String(val).padStart(2,'0')}</div>
                    <div className="text-[11px] uppercase tracking-wide text-slate-500">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="gap-2">
                <Link href="/cohort">Join the Cohort <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#how">See how it works</Link>
              </Button>
            </div>

            <div className="mt-6 flex items-center gap-4 text-slate-600 text-sm">
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> Small groups (5 per cohort)</div>
              <div className="flex items-center gap-2"><Star className="h-4 w-4" /> Mentor feedback weekly</div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }} className="relative">
            <div className="rounded-3xl border bg-white p-4 shadow-sm">
              {/* Illustration / preview */}
              <div className="rounded-2xl bg-slate-900 p-6 text-slate-100">
                <p className="text-sm opacity-80">Sample project dashboard</p>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="rounded-xl bg-slate-800 p-4">
                    <div className="text-slate-400 text-xs">KPI</div>
                    <div className="text-2xl font-bold">92%</div>
                    <div className="text-xs text-slate-400">Model accuracy</div>
                  </div>
                  <div className="rounded-xl bg-slate-800 p-4">
                    <div className="text-slate-400 text-xs">ETL Latency</div>
                    <div className="text-2xl font-bold">1.2s</div>
                    <div className="text-xs text-slate-400">p95 pipeline</div>
                  </div>
                  <div className="rounded-xl bg-slate-800 p-4 col-span-2">
                    <div className="text-slate-400 text-xs">Cloud Spend</div>
                    <div className="mt-1 h-2 w-full rounded-full bg-slate-700">
                      <div className="h-2 w-3/5 rounded-full bg-blue-400" />
                    </div>
                    <div className="text-xs text-slate-400 mt-2">$61 / $100 budget</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <section id="how" className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-3xl font-bold">Steps to get started</h2>
          <ol className="mt-4 space-y-2 text-slate-600">
            <li className="flex gap-2"><Check className="h-4 w-4 text-blue-600" /> Submit your application</li>
            <li className="flex gap-2"><Check className="h-4 w-4 text-blue-600" /> Wait for the application to be reviewed</li>
            <li className="flex gap-2"><Check className="h-4 w-4 text-blue-600" /> If accepted, you will be notified and you will be able to join the cohort</li>
        </ol>

        </section>





      {/* Benefits */}
      <section className="mx-auto max-w-6xl px-4 py-8" id="benefits">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: <LayoutDashboard className="h-5 w-5" />, title: "Portfolio-first", desc: "Ship 3 real projects combining ML, Databases, and Cloud. Every sprint ends with a demo." },
            { icon: <Users className="h-5 w-5" />, title: "Tiny cohorts", desc: "Only 5 learners. Get real feedback, code reviews, and accountability." },
            { icon: <GraduationCap className="h-5 w-5" />, title: "Career outcomes", desc: "Resume revamps, mock interviews, and LinkedIn proof posts to signal your skills." },
          ].map((b) => (
            <Card key={b.title} className="rounded-2xl">
              <CardHeader className="flex flex-row items-center gap-3">
                <div className="rounded-xl bg-blue-50 p-2 text-blue-600">{b.icon}</div>
                <CardTitle className="text-xl">{b.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">{b.desc}</CardContent>
            </Card>
          ))}
        </div>
      </section>

       
      {/* Curriculum */}
      <section id="curriculum" className="mx-auto max-w-6xl px-4 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Curriculum Tracks</h2>
          <p className="mt-2 text-slate-600">Carefully sequenced so concepts reinforce each other.</p>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            { title: "Data Structures & Algorithms", points: ["Problem patterns & complexity", "Interview-style drills", "Project: Search & ranking engine"] },
            { title: "Database Systems", points: ["Modeling & indexing", "Transactions & scaling", "Project: Inventory + analytics DB"] },
            { title: "Advanced Databases", points: ["NoSQL flavors: MongoDB (JSON), columnar & key–value","Advanced SQL & PL/SQL + JSON/XML features & indexing","Graph DB & Cypher (Neo4j) capstone project"] },
            { title: "Machine Learning", points: ["Feature pipelines", "Modeling & eval", "Project: Demand forecasting"] },
            { title: "App Development", points: ["Full-stack with cloud", "Auth & payments", "Project: Launchable app"] },
            { title: "Distributed Data Engineering", points: ["ETL on Spark", "Event-driven with Kafka", "Cloud deploy on Kubernetes"] },


          ].map((c) => (
            <Card key={c.title} className="rounded-2xl">
              <CardHeader>
                <CardTitle>{c.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600">
                  {c.points.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <Check className="mt-1 h-4 w-4 text-blue-600" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="mx-auto max-w-6xl px-4 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold">How it works</h2>
          <p className="mt-2 text-slate-600">Two complementary layers keep you moving forward.</p>
        </div>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
        <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Clock className="h-5 w-5 text-blue-600" /> Pre-Screening Call</CardTitle>
            </CardHeader>
            <CardContent>
              <p>The purpose of the pre-screening call is to assess whether or not you are team player or not.</p>
              <ul className="space-y-1">
                <li className="flex gap-2"><Check className="h-4 w-4 text-blue-600" /> Team player</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-blue-600" /> Willing to learn</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-blue-600" /> Willing to contribute</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Clock className="h-5 w-5 text-blue-600" /> Weekly Synchronous Sessions</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-600 space-y-2">
              <p>Live Zoom workshops, code reviews, and Q&A. You’ll receive a focused sprint brief every week and leave with clear next steps.</p>
              <ul className="space-y-1">
                <li className="flex gap-2"><Check className="h-4 w-4 text-blue-600" /> Standups + accountability</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-blue-600" /> Pair‑programming + debugging</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-blue-600" /> Mentor feedback within 48h</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><LayoutDashboard className="h-5 w-5 text-blue-600" /> Monthly Project Layer</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-600 space-y-2">
              <p>Each month culminates in a portfolio‑ready project that integrates multiple tracks. You’ll present a demo and receive actionable critiques.</p>
              <ul className="space-y-1">
                <li className="flex gap-2"><Check className="h-4 w-4 text-blue-600" /> Clear rubrics + scoring</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-blue-600" /> Public write‑ups for LinkedIn/GitHub</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-blue-600" /> Career signals (badges & proof)</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><LayoutDashboard className="h-5 w-5 text-blue-600" />Evaluation Report</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-600 space-y-2">
              <p>Modern evaluation Report (optional) </p>
              <ul className="space-y-1">
                <li className="flex gap-2"><Check className="h-4 w-4 text-blue-600" />  Mark based on your real feedback by sharing your intuition on topics iteraratively</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-blue-600" /> The highest mark will be reward by connecting you with any mentor from mentorcruise  </li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-blue-600" /> Other students will be able to stay in the community and continue to contribute to the projects</li>
              </ul>
            </CardContent>
          </Card>
         
        </div>
      </section>

      {/* Cohort & Pricing */}
      <section id="cohort" className="mx-auto max-w-6xl px-4 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Cohort & Pricing</h2>
          <p className="mt-2 text-slate-600">November 01, 2025-March 29, 2026 → 12 weeks • 5 students per cohort</p>
        </div>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Standard</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-extrabold">$500 <span className="text-base font-medium text-slate-500">/ cohort</span></div>
              <ul className="mt-4 space-y-2 text-slate-600">
                <li className="flex gap-2"><Check className="h-4 w-4 text-blue-600" /> 12 weeks of guided sprints</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-blue-600" /> Select up to 3 subjects per cohort</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-blue-600" /> Weekly mentor sessions</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-blue-600" /> 3 portfolio projects + reviews</li>
              </ul>
              
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-blue-200">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>First Pilot Program</CardTitle>
                <Badge>Free</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-extrabold">$0 <span className="text-base font-medium text-slate-500">/ cohort</span></div>
              <p className="mt-3 text-slate-600">
                Earn the discount by submitting short <em>AI‑assisted learning reflections</em> for each project. Share a few screenshots of your ChatGPT interactions and a 3‑minute summary of what you tried, what worked, and what you learned.
              </p>
              <ul className="mt-4 space-y-2 text-slate-600">
                <li className="flex gap-2"><Check className="h-4 w-4 text-blue-600" /> Demonstrate thoughtful prompts & debugging</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-blue-600" /> Highlight your intuition & iterations</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-blue-600" /> Get targeted feedback to go deeper</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-blue-600" /> Get targeted feedback to go deeper</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-blue-600" /> Get $30 credit per month for your GPT plus subscription</li>
                <li className="flex gap-2"><Check className="h-4 w-4 text-blue-600" />Earn extra credits (cap at $100) by completing better quality intuition reports</li>
              </ul>
        
            </CardContent>
          </Card>

          




        </div>
        <Button asChild size="lg" className="mt-6 w-full" variant="secondary">
                <Link href="#apply">Apply Now</Link>
        </Button>
        <p className="mt-4 text-center text-sm text-slate-500">* Scholarships limited; selection favors curiosity, effort, and growth.</p>
      </section>

     

      {/* Who it's for */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Who is it for?</h2>
          <p className="mt-2 text-slate-600">Motivated learners ready to go beyond coursework and build proof.</p>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            "Recent grads who want a portfolio edge",
            "Career switchers aiming for practical skills",
            "Developers who want accountability & momentum",
          ].map((item) => (
            <Card key={item} className="rounded-2xl">
              <CardContent className="pt-6 text-slate-700">{item}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-4xl px-4 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold">FAQ</h2>
        </div>
        <div className="mt-8 space-y-4">
          <details className="group rounded-2xl border bg-white p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between">
              <span className="font-medium">How much time should I budget weekly?</span>
              <MessageCircleQuestion className="h-5 w-5 text-blue-600 transition-transform group-open:rotate-45" />
            </summary>
            <p className="mt-3 text-slate-600">Plan 6–10 hours: 2h live + 4–8h project work. More time in project weeks.</p>
          </details>
          <details className="group rounded-2xl border bg-white p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between">
              <span className="font-medium">What if I’m new to ML or Cloud?</span>
              <MessageCircleQuestion className="h-5 w-5 text-blue-600 transition-transform group-open:rotate-45" />
            </summary>
            <p className="mt-3 text-slate-600">We start with fundamentals and build up. Clear briefs, scaffolding code, and peer support keep you moving.</p>
          </details>
          <details className="group rounded-2xl border bg-white p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between">
              <span className="font-medium">How are scholarships awarded?</span>
              <MessageCircleQuestion className="h-5 w-5 text-blue-600 transition-transform group-open:rotate-45" />
            </summary>
            <p className="mt-3 text-slate-600">We review your AI‑assisted learning reflections for depth, clarity, and iteration. Curiosity and effort matter most.</p>
          </details>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-3xl border bg-gradient-to-br from-blue-50 via-indigo-50 to-white p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold">Ready to join a focused cohort and ship real work?</h3>
          <p className="mt-2 text-slate-600">Spots are limited to 5 — secure yours now.</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" className="gap-2">
              <Link href="/cohort">Apply now <ArrowRight className="h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#curriculum">Review curriculum</Link>
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t bg-white/70">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-slate-500 flex flex-col md:flex-row items-center justify-between gap-2">
          <div>© {new Date().getFullYear()} NextEd Cohort</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-blue-700">Privacy</a>
            <a href="#" className="hover:text-blue-700">Terms</a>
            <a href="#" className="hover:text-blue-700">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
