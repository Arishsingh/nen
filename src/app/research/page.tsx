import { ChevronRight } from "lucide-react";

const features = [
  {
    title: "Smart Job Matching",
    desc: "Our AI analyses every candidate's skills, experience, and preferences against every live role — and only surfaces matches that are genuinely likely to result in an offer.",
  },
  {
    title: "Verified Company Profiles",
    desc: "Every employer is vetted before going live on OM. We check business registration, team history, and references — so candidates never waste time on unserious companies.",
  },
  {
    title: "Real-Time Application Tracking",
    desc: "Candidates see exactly where every application stands — interviews scheduled, decisions pending, offers received. No more waiting in the dark.",
  },
  {
    title: "Candidate Skill Verification",
    desc: "Optional skill assessments let candidates prove what they know and surface their profiles to employers searching for those specific competencies.",
  },
  {
    title: "Remote-First Infrastructure",
    desc: "OM is built for the modern workforce — async-first filters, timezone preferences, and remote contract support all built into the core platform.",
  },
  {
    title: "Market Intelligence",
    desc: "Live salary benchmarks, demand signals, and hiring trend data help both candidates and employers make better, faster decisions.",
  },
];

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* Hero */}
      <section className="px-6 pt-32 pb-20 max-w-[1100px] mx-auto">
        <a
          href="/"
          className="inline-flex items-center gap-1.5 text-[13px] text-white/40 hover:text-white transition mb-8"
        >
          ← Back
        </a>
        <p className="text-[12px] font-medium tracking-widest text-white/40 uppercase mb-4">
          OM Platform
        </p>
        <h1
          className="text-[48px] md:text-[72px] font-bold leading-[1.05] tracking-tight mb-6"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          The Infrastructure Behind<br />Every Great Hire
        </h1>
        <p className="text-[18px] text-white/60 max-w-[600px] leading-relaxed mb-10">
          OM is building the platform that connects the world&apos;s best talent with
          the teams that need them most — smart, transparent, and built for how
          hiring actually works.
        </p>
        <a
          href="/start"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black text-[14px] font-medium hover:bg-white/90 transition"
        >
          Get Started <ChevronRight className="w-4 h-4" />
        </a>
      </section>

      {/* Platform features */}
      <section className="px-6 pb-32 max-w-[1100px] mx-auto">
        <h2 className="text-[13px] font-medium tracking-widest text-white/40 uppercase mb-10">
          Platform features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="border border-white/10 rounded-2xl p-7 hover:border-white/30 transition"
            >
              <h3 className="text-[17px] font-semibold mb-3">{f.title}</h3>
              <p className="text-[14px] text-white/50 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
