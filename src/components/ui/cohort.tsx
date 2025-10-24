"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Loader2, Sparkles, ArrowRight, Upload, Github, Linkedin } from "lucide-react";
import { submitApplication } from "@/app/(apply)/actions";

export default function CohortApply() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: "error" | "success"; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage(null);

    const formData = new FormData(formRef.current!);
    const res = await submitApplication(null, formData);

    if (res.success) {
      setMessage({ type: "success", text: res.message });
      formRef.current?.reset();
    } else {
      setMessage({ type: "error", text: res.message  || "An unexpected error occurred. Please try again." });
    }

    setSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Top banner */}
      <header className="sticky top-0 z-20 border-b bg-white/70 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 font-semibold">
            <Sparkles className="h-5 w-5 text-blue-600" /> NextEd Cohort
          </div>
          <Badge variant="secondary" className="hidden sm:inline-flex">
            Oct 20, 2025 • 12 weeks
          </Badge>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Apply to join the <span className="text-blue-600">Fall 2025 Cohort</span>
          </h1>
          <p className="mt-3 text-slate-600 text-lg">
            Tiny cohort. Real projects. Weekly mentorship. Scholarships available.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 mt-10 items-start">
          {/* Form */}
          <Card className="rounded-3xl">
            <CardHeader className="px-6 pt-6">
              <CardTitle>Application Form</CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-8 md:px-10 md:pb-10">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                <input type="hidden" name="courseId" value="temp-course-id" />

                {/* Contact */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full name *</Label>
                    <Input id="fullName" name="fullName" placeholder="Jane Doe" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" name="email" type="email" placeholder="jane@domain.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="linkedin">LinkedIn</Label>
                    <div className="flex gap-2">
                      <span className="inline-flex items-center justify-center rounded-md border px-3 text-slate-500">
                        <Linkedin className="h-4 w-4" />
                      </span>
                      <Input id="linkedin" name="linkedin" placeholder="https://linkedin.com/in/…" className="flex-1" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="github">GitHub</Label>
                    <div className="flex gap-2">
                      <span className="inline-flex items-center justify-center rounded-md border px-3 text-slate-500">
                        <Github className="h-4 w-4" />
                      </span>
                      <Input id="github" name="github" placeholder="https://github.com/…" className="flex-1" />
                    </div>
                  </div>
                </div>

                {/* Experience & time */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label>Experience level *</Label>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { value: "beginner", label: "Beginner" },
                        { value: "intermediate", label: "Intermediate" },
                      ].map((o) => (
                        <label
                          key={o.value}
                          className="flex items-center justify-center gap-2 rounded-xl border p-2.5 text-sm cursor-pointer hover:bg-slate-50"
                        >
                          <input type="radio" name="exp" value={o.value} className="sr-only" />
                          <span>{o.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Weekly time you can commit *</Label>
                    <Select name="time">
                      <SelectTrigger id="time">
                        <SelectValue placeholder="Select hours/week" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="4-6">4–6 hours</SelectItem>
                        <SelectItem value="6-8">6–8 hours</SelectItem>
                        <SelectItem value="8-12">8–12 hours</SelectItem>
                        <SelectItem value=">12">12+ hours</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Motivation */}
                <div className="space-y-2">
                  <Label htmlFor="motivation">Why this cohort? What do you want to build? *</Label>
                  <Textarea
                    id="motivation"
                    name="motivation"
                    placeholder="Share your goals, current skills, and the projects you’re excited to ship."
                    rows={6}
                  />
                </div>

                {/* Resume */}
                <div className="space-y-2">
                  <Label htmlFor="resume">Resume / Portfolio (URL)</Label>
                  <div className="flex gap-2">
                    <span className="inline-flex items-center justify-center rounded-md border px-3 text-slate-500">
                      <Upload className="h-4 w-4" />
                    </span>
                    <Input id="resume" name="resume" placeholder="https://…" className="flex-1" />
                  </div>
                </div>

                {/* Scholarship & Terms */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="scholarship">Scholarship</Label>
                    <Select name="scholarship">
                      <SelectTrigger id="scholarship">
                        <SelectValue placeholder="Interested in Pilot Scholarship?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes — I’ll submit AI-learning reflections</SelectItem>
                        <SelectItem value="no">No — Standard plan</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center gap-2 mt-6 md:mt-8">
                    <Checkbox id="terms" name="terms" />
                    <Label htmlFor="terms" className="text-sm text-slate-600">
                      I agree to the{" "}
                      <Link href="#" className="underline">
                        Terms
                      </Link>{" "}
                      and{" "}
                      <Link href="#" className="underline">
                        Privacy Policy
                      </Link>
                      . *
                    </Label>
                  </div>
                </div>

                {message && (
                  <div
                    className={`rounded-xl border p-3 text-sm ${
                      message.type === "error"
                        ? "border-red-200 bg-red-50 text-red-700"
                        : "border-green-200 bg-green-50 text-green-700"
                    }`}
                  >
                    {message.text}
                  </div>
                )}

                <div className="flex items-center justify-between gap-3 pt-2">
                  <div className="text-sm text-slate-500">
                    You’ll pick your track only after admission.
                  </div>
                  <Button type="submit" disabled={submitting} className="gap-2">
                    {submitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" /> Submitting…
                      </>
                    ) : (
                      <>
                        Submit application <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Sidebar … unchanged … */}
        </div>
      </section>
    </div>
  );
}
