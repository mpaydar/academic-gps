"use client";
import { useState } from "react";
import Link from "next/link";
import { Sparkles, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Sparkles className="h-5 w-5 text-blue-600" />
          <span>NextEd Cohort</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-800">
          <a href="#curriculum" className="hover:text-blue-700">Curriculum</a>
          <a href="#how" className="hover:text-blue-700">How it works</a>
          <a href="#pricing" className="hover:text-blue-700">Cohort & Pricing</a>
          <a href="/all-seminars" className="hover:text-blue-700">Free Seminars</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-800"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <nav className="flex flex-col items-center py-3 space-y-3 text-slate-800">
            <a href="#curriculum" onClick={() => setOpen(false)}>Curriculum</a>
            <a href="#how" onClick={() => setOpen(false)}>How it works</a>
            <a href="#pricing" onClick={() => setOpen(false)}>Cohort & Pricing</a>
            <a href="/all-seminars" onClick={() => setOpen(false)}>Free Seminars</a>
          </nav>
        </div>
      )}
    </header>
  );
}
