"use client";
import { useState } from "react";
import Link from "next/link";
import { Sparkles, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white sm:bg-white/70 sm:backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Sparkles className="h-5 w-5 text-blue-600" />
          <span>NextEd Cohort</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="flex flex-row items-center gap-6 text-sm text-slate-800">
          <a href="#curriculum" className="hover:text-blue-700">Curriculum</a>
          <a href="#how" className="hover:text-blue-700">How it works</a>
          <a href="#cohort" className="hover:text-blue-700">Cohort & Pricing</a>
          <a href="/all-seminars" className="hover:text-blue-700">Free Seminars</a>
          <a href="#faq" className="hover:text-blue-700">FAQ</a>
        </nav>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-3">
          <Button asChild variant="outline" className="hidden sm:inline-flex">
            <Link href="#curriculum">View syllabus</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/login">Login</Link>
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-md hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="flex flex-row bg-white border-t border-slate-200 py-4 flex flex-col items-center gap-4 text-sm text-slate-800">
          <a href="#curriculum" onClick={() => setOpen(false)}>Curriculum</a>
          <a href="#how" onClick={() => setOpen(false)}>How it works</a>
          <a href="#cohort" onClick={() => setOpen(false)}>Cohort & Pricing</a>
          <a href="/all-seminars" onClick={() => setOpen(false)}>Free Seminars</a>
          <a href="#faq" onClick={() => setOpen(false)}>FAQ</a>
        </div>
      )}
    </header>
  );
}
