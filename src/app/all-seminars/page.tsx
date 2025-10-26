import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function AllSeminars() {
    return (
        <div className="min-h-screen relative bg-gradient-to-br from-blue-50 via-indigo-100 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-8 overflow-hidden">
            {/* Soft, animated background blobs */}
            <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
                <div className="absolute top-[-10%] left-[-8%] h-[28rem] w-[28rem] rounded-full bg-blue-300/30 dark:bg-blue-900/20 blur-3xl animate-pulse" />
                <div className="absolute bottom-[-12%] right-[-10%] h-[26rem] w-[26rem] rounded-full bg-indigo-300/40 dark:bg-indigo-800/40 blur-3xl animate-ping" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[16rem] w-[16rem] rounded-full bg-purple-100/40 dark:bg-purple-900/30 blur-3xl opacity-30 animate-pulse" />
            </div>

            <div className="max-w-5xl mx-auto px-4 pt-12">
                <header className="mb-10 flex flex-col items-center text-center relative z-10">
                    <div className="mb-4 flex items-center gap-2">
                        <span className="text-4xl">🎓</span>
                        <span className="uppercase tracking-widest text-xs text-blue-700 bg-blue-100 rounded-full px-3 py-1 font-semibold dark:bg-blue-900/40">NextEd Seminars</span>
                    </div>
                    <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent dark:from-blue-300 dark:to-indigo-300 drop-shadow-lg mb-3">
                        Seminars &amp; Research Spotlights
                    </h1>
                    <p className="text-slate-700 dark:text-slate-300 text-xl max-w-2xl mx-auto leading-relaxed">
                        <span className="bg-yellow-100 dark:bg-yellow-900/20 px-2 py-1 rounded-md font-semibold">Curated mini-lectures</span> distilling the most impactful research in Big Data and AI. Unlock actionable insights from cutting-edge work, explained for every learner.
                    </p>
                </header>
                <main>
                    {/* Featured Seminar Announcement */}
                    <section className="grid gap-10 grid-cols-1 md:grid-cols-3 mb-14">
                        {/* Spotlight Card */}
                        <div className="md:col-span-2 flex flex-col justify-center">
                            <Card className="rounded-3xl shadow-xl border-indigo-200 dark:border-indigo-700/40 bg-white/90 dark:bg-slate-900/80 backdrop-blur-2xl transition-transform hover:-translate-y-1 hover:shadow-2xl">
                                <CardHeader className="px-8 pt-8 pb-1">
                                    <CardTitle className="flex items-center gap-3 text-indigo-700 dark:text-indigo-300 text-2xl font-semibold justify-center">
                                        <span className="animate-bounce" role="img" aria-label="AI Seminar">🤖</span>
                                        Upcoming AI Seminar
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="px-8 pb-7 space-y-4">
                                    <div className="text-slate-800 dark:text-slate-100 font-medium text-lg">
                                        <a href="https://crypto.stanford.edu/craig/craig-thesis.pdf" target="_blank" rel="noopener" className="block text-blue-700 dark:text-blue-300 underline hover:text-blue-900 dark:hover:text-blue-200 transition">
                                            Topic: Fully homomorphic encryption scheme - craig gentry
                                        </a>
                                    </div>
                                    <div className="inline-flex gap-3 items-center justify-center mt-1 text-base">
                                        <span className="px-2 py-0.5 bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-200 rounded-full font-semibold">
                                            🗓️ Date: <span className="font-bold">Nov 01, 2025</span>
                                        </span>
                                        <span className="px-2 py-0.5 bg-pink-100 dark:bg-pink-900/40 text-pink-800 dark:text-pink-200 rounded-full font-medium animate-pulse">Live</span>
                                    </div>
                                    <p className="text-slate-600 dark:text-slate-300 text-[1rem] mt-2 text-center leading-relaxed">
                                        Join us for a deep dive in understanding fully homomorphic encryption
                                        <span className="font-bold text-blue-700 dark:text-blue-200"> theory, applications, and real-world case studies</span>
                                    </p>
                                    <div className="flex justify-center">
                                        <a
                                            href="https://docs.google.com/spreadsheets/d/1LYkeH0zyKukAr9YJyrjxtzOr8DRY19aLyTgeqMIZGh4/edit?usp=sharing"
                                            className="inline-block bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-indigo-700 hover:to-blue-900 text-white font-semibold px-5 py-2 rounded-full shadow-lg transition focus-visible:outline focus-visible:ring-2 focus-visible:ring-blue-400"
                                            target="_blank" rel="noopener"
                                        >
                                            Register or View Participants
                                        </a>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                        {/* Quick list or summary section */}
                        <div className="flex flex-col gap-6 justify-between">
                            <div className="bg-gradient-to-br from-violet-100 via-indigo-50 to-white dark:from-violet-950 dark:via-indigo-900 dark:to-slate-950 rounded-2xl px-5 py-7 shadow-md flex flex-col items-center h-full border border-indigo-100 dark:border-indigo-900/60">
                                <div className="mb-3 text-sm uppercase tracking-wide text-violet-500 font-bold opacity-70">What you&apos;ll learn</div>
                                <ul className="text-slate-700 dark:text-slate-300 text-base space-y-2 font-medium text-left w-full max-w-xs mx-auto">
                                    <li className="flex items-center gap-2"><span className="text-indigo-600 dark:text-indigo-300">✔</span> Latest trends in AI cryptography</li>
                                    <li className="flex items-center gap-2"><span className="text-indigo-600 dark:text-indigo-300">✔</span> Practical homomorphic encryption</li>
                                    <li className="flex items-center gap-2"><span className="text-indigo-600 dark:text-indigo-300">✔</span> Implementation case studies</li>
                                    <li className="flex items-center gap-2"><span className="text-indigo-600 dark:text-indigo-300">✔</span> Q&amp;A with researchers</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    {/* List of all seminars */}
                    {/* 
                    <section className="mb-8 mt-16 relative z-10">
                        <h2 className="text-center text-3xl font-bold text-indigo-700 dark:text-indigo-200 mb-6 tracking-tight">
                            <span className="text-base font-normal mr-2">📚</span>
                            Explore All Seminars
                        </h2>
                        <div className="mx-auto max-w-3xl rounded-3xl shadow-lg bg-white/80 dark:bg-slate-800/70 border border-indigo-100 dark:border-indigo-800/30 py-8 px-4 md:px-8">
                            <AllSeminarsComponent />
                        </div>
                    </section>
                    */}
                </main>
                <footer className="mt-16 text-center text-sm text-slate-500 dark:text-slate-400 py-6">
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-2">
                        <span>© {new Date().getFullYear()} <span className="font-bold text-blue-600 dark:text-blue-300">NextEd Seminars</span> &mdash; Learning through research</span>
                        <Link className="inline-block underline underline-offset-2 text-blue-600 dark:text-blue-200 hover:text-indigo-500 transition" href="/">
                            Back to Home
                        </Link>
                    </div>
                </footer>
            </div>
        </div>
    );
}