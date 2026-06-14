"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronRight, ArrowUpRight, Plus, Minus } from "lucide-react";
import TransitionLink from "@/components/TransitionLink";

type CardButton = { label: string; primary: boolean; href?: string };

type Card = {
  image: string;
  title: string;
  desc: string;
  buttons: CardButton[];
};

const faqs = [
  {
    q: "What types of roles can I find on Worket?",
    a: "Worket covers every major category — tech & engineering, design & creative, marketing & growth, remote positions, entry level, and executive roles. Whether you're a recent graduate or a seasoned professional, you'll find opportunities matched to your experience.",
  },
  {
    q: "How does Worket's AI matching work?",
    a: "Our AI analyses your skills, experience, and career goals to surface roles where you have an 85%+ compatibility score. The more you use Worket, the sharper your recommendations become — fewer irrelevant listings, more perfect fits.",
  },
  {
    q: "How long does it take to get hired through Worket?",
    a: "Most candidates receive their first interview within 1–2 weeks. Many land offers within 3–4 weeks. Our matching algorithm is designed to surface best-fit opportunities first, cutting the noise dramatically.",
  },
  {
    q: "Is Worket free for job seekers?",
    a: "Yes. Creating a profile, browsing jobs, and applying is completely free for candidates. We charge employers to access our talent pool and post roles.",
  },
  {
    q: "How do companies post jobs on Worket?",
    a: "Click 'Post Work', fill in your role details — title, description, requirements, compensation, and remote or office preference. Jobs go live within 24 hours after a brief review by our team.",
  },
  {
    q: "Can I direct message hiring leads on Worket?",
    a: "Yes. Once you match with a role at 85%+ compatibility, you can direct chat with hiring leads within the platform — no cold emails, no middlemen.",
  },
];

function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="gutter pb-24">
      <div className="max-w-[1100px] mx-auto">
        <p className="text-[12px] font-medium tracking-widest text-gray-400 uppercase mb-4">
          FAQ
        </p>
        <h2 className="text-[28px] md:text-[36px] font-normal text-gray-900 mb-12 leading-[1.2] max-w-xl">
          Frequently asked questions.
        </h2>
        <div className="flex flex-col divide-y divide-gray-200 border-t border-gray-200">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-6 text-left gap-6 group"
              >
                <span className="text-[16px] font-medium text-gray-900 group-hover:text-black transition">
                  {faq.q}
                </span>
                {open === i ? (
                  <Minus className="w-4 h-4 text-gray-400 flex-shrink-0" />
                ) : (
                  <Plus className="w-4 h-4 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {open === i && (
                <p className="pb-6 text-[14px] text-gray-500 leading-relaxed max-w-2xl">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const heroVideoRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let lenisInstance: import("lenis").default | null = null;
    let rafId: number;

    import("lenis").then(({ default: Lenis }) => {
      lenisInstance = new Lenis({ lerp: 0.08, smoothWheel: true });

      lenisInstance.on("scroll", ({ scroll }: { scroll: number }) => {
        if (heroVideoRef.current) {
          heroVideoRef.current.style.transform = `translateY(${scroll * 0.35}px)`;
        }
        if (heroContentRef.current) {
          heroContentRef.current.style.transform = `translateY(${scroll * 0.15}px)`;
          heroContentRef.current.style.opacity = String(
            Math.max(0, 1 - scroll / 600),
          );
        }
      });

      function raf(time: number) {
        lenisInstance?.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);
    });

    return () => {
      cancelAnimationFrame(rafId);
      lenisInstance?.destroy();
    };
  }, []);

  const heroLinks: string[] = [
    "TECH & ENGINEERING",
    "DESIGN & CREATIVE",
    "REMOTE POSITIONS",
    "PRODUCT & STRATEGY",
    "ENTRY LEVEL",
  ];

  const cards: Card[] = [
    {
      image: "/A1.jpg",
      title: "Tech & Engineering\nRoles at Scale",
      desc: "Full-stack engineers, DevOps, cloud architects, and mobile developers — matched to companies building tomorrow.",
      buttons: [{ label: "Browse Tech Jobs", primary: true, href: "/work" }],
    },
    {
      image: "/A2.jpg",
      title: "Design & Creative\nRoles That Inspire",
      desc: "UI/UX designers, brand strategists, motion artists, and product designers — connect with teams that value great craft.",
      buttons: [{ label: "Browse Design Jobs", primary: true, href: "/work" }],
    },
    {
      image: "/A3.png",
      title: "Remote & Flexible\nWork From Anywhere",
      desc: "Fully remote, hybrid, and async-first roles across every function — built for the way modern teams actually work.",
      buttons: [{ label: "Browse Remote Jobs", primary: true, href: "/work" }],
    },
    {
      image: "/A4.jpg",
      title: "Entry Level\n& Internship Programs",
      desc: "Kick-start your career with structured internships and graduate roles at companies that genuinely invest in growth.",
      buttons: [{ label: "Browse Entry Level", primary: true, href: "/work" }],
    },
  ];

  const footerColumns = [
    {
      heading: "Platform",
      links: [
        { label: "For Job Seekers", href: "/work" },
        { label: "For Companies", href: "/start" },
        { label: "Pricing Plans", href: "/start" },
        { label: "Success Stories", href: "/work" },
      ],
    },
    {
      heading: "Resources",
      links: [
        { label: "Career Blog", href: "/research" },
        { label: "Hiring Guide", href: "/research" },
        { label: "Skill Center", href: "/research" },
        { label: "Referral Program", href: "/start" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About Us", href: "/research" },
        { label: "Contact Support", href: "/start" },
        { label: "Privacy", href: "#" },
        { label: "Terms", href: "#" },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-white text-black font-sans">
      {/* ===== HERO ===== */}
      <section
        id="hero-section"
        className="gutter pt-8 sm:pt-12 md:pt-12 lg:pt-12"
      >
        <div className="relative w-full overflow-hidden rounded-xl md:rounded-2xl">
          <div
            className="relative w-full overflow-hidden"
            style={{ minHeight: "60vh", aspectRatio: "16/9" }}
          >
            {/* parallax image layer */}
            <div
              ref={heroVideoRef}
              className="absolute inset-0 will-change-transform"
              style={{ top: "-15%", bottom: "-15%", height: "130%" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/meow.png"
                alt="Hero"
                className="w-full h-full object-contain object-center"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            {/* parallax content layer */}
            <div
              ref={heroContentRef}
              className="absolute inset-0 will-change-transform"
              style={{ transition: "opacity 0.1s linear" }}
            >
              <div className="absolute left-3 sm:left-5 md:left-6 bottom-3 sm:bottom-5 md:bottom-6 max-w-[90%] sm:max-w-xl">
                <h1 className="text-white text-xl sm:text-3xl md:text-4xl lg:text-[30px] leading-[1.15] font-medium">
                  Smarter
                  <br />
                  Job Searching
                </h1>
                <p className="mt-2 text-white/80 text-[11px] sm:text-[13px] leading-relaxed max-w-xs hidden sm:block">
                  Find high-impact opportunities faster with our AI-driven
                  matching engine. Tailored recommendations, one-tap
                  applications.
                </p>
                <button className="mt-4 inline-flex items-center gap-1 bg-white text-black text-[12px] sm:text-[13px] font-medium px-3 py-1.5 sm:px-4 sm:py-2 rounded-md hover:bg-gray-100 transition">
                  Get Started
                  <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </button>
              </div>

              <div className="absolute right-3 sm:right-5 md:right-8 bottom-3 sm:bottom-5 md:bottom-6 hidden sm:flex flex-col gap-2 md:gap-3 text-right">
                {heroLinks.map((link) => (
                  <a
                    key={link}
                    href="/work"
                    className="text-white/95 text-[11px] md:text-[13px] tracking-wider font-medium hover:opacity-70 transition"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TRUSTED BY ===== */}
      <section className="gutter mt-28">
        <div className="max-w-[800px] mx-auto text-center">
          <p className="text-[20px] text-gray-500 mb-10">
            Trusted by high-growth companies hiring the world&apos;s best
            talent:
          </p>
          <div className="overflow-hidden">
            <div className="flex items-center gap-x-20 animate-marquee whitespace-nowrap w-max">
              {[0, 1].map((copy) => (
                <div key={copy} className="flex items-center gap-x-20">
                  <span className="text-black font-bold tracking-widest text-[18px]">
                    TechWave
                  </span>
                  <span
                    className="text-black font-bold text-[28px] italic"
                    style={{ fontFamily: "Arial, sans-serif" }}
                  >
                    BuildScale
                  </span>
                  <span className="text-black font-semibold text-[20px]">
                    LaunchPad
                  </span>
                  <span className="text-black font-bold tracking-widest text-[18px]">
                    FinEdge
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATEMENT + 4 CARDS ===== */}
      <section className="px-4 sm:px-8 md:px-12 lg:px-16 mt-16 md:mt-28 pb-24">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[20px] md:text-[34px] lg:text-[34px] leading-[1.2] text-gray-700 font-normal mb-10">
            Job seekers needed smarter matches. Companies needed better talent.
            Remote teams needed a direct line. We built Worket.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="flex flex-col group transition-transform duration-300 ease-out hover:-translate-y-2"
              >
                <div className="relative w-full aspect-[3/3] rounded-xl overflow-hidden bg-gray-100 shadow-[0_4px_24px_rgba(0,0,0,0.07)] group-hover:shadow-[0_12px_40px_rgba(0,0,0,0.14)] transition-shadow duration-300">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={card.image}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-5 text-[17px] font-normal text-gray-800 leading-snug whitespace-pre-line">
                  {card.title}
                </h3>
                <p className="mt-3 text-[13px] text-gray-400 leading-relaxed">
                  {card.desc}
                </p>
                <div className="mt-5 flex items-center gap-2">
                  {card.buttons.map((btn, i) =>
                    btn.href ? (
                      <TransitionLink
                        key={i}
                        href={btn.href}
                        className={
                          btn.primary
                            ? "text-[13px] font-medium px-4 py-2 rounded-xl bg-black text-white hover:bg-gray-800 transition"
                            : "text-[13px] font-medium px-4 py-2 rounded-xl border border-gray-300 text-black hover:bg-gray-50 transition"
                        }
                      >
                        {btn.label}
                      </TransitionLink>
                    ) : (
                      <button
                        key={i}
                        className={
                          btn.primary
                            ? "text-[13px] font-medium px-4 py-2 rounded-xl bg-black text-white hover:bg-gray-800 transition"
                            : "text-[13px] font-medium px-4 py-2 rounded-xl border border-gray-300 text-black hover:bg-gray-50 transition"
                        }
                      >
                        {btn.label}
                      </button>
                    ),
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW WORKET WORKS + SOCIAL PROOF ===== */}
      <section className="gutter pt-20 pb-24">
        {/* How Worket Works */}
        <div className="max-w-[1100px] mx-auto mb-20">
          <h2 className="text-[32px] md:text-[42px] font-bold text-center mb-3 text-gray-900">
            How Worket Works
          </h2>
          <p className="text-center text-gray-500 text-[14px] mb-12 max-w-[420px] mx-auto leading-relaxed">
            A seamless experience designed for both businesses looking for
            talent and professionals seeking their next opportunity.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* For Venues */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_6px_28px_rgba(0,0,0,0.15)]">
              <div className="flex items-center gap-3 mb-7">
                <div className="w-10 h-10 rounded-xl bg-gray-900 flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="7" height="7" />
                    <rect x="14" y="3" width="7" height="7" />
                    <rect x="3" y="14" width="7" height="7" />
                    <rect x="14" y="14" width="7" height="7" />
                  </svg>
                </div>
                <h3 className="text-[18px] font-bold text-gray-900">For Venues</h3>
              </div>
              <div className="flex flex-col gap-6">
                {[
                  {
                    n: 1,
                    title: "Post a Job",
                    desc: "Describe the role, requirements, and schedule to attract the right talent.",
                  },
                  {
                    n: 2,
                    title: "Review Applicants",
                    desc: "Browse verified worker profiles with ratings, skills, and past experience.",
                  },
                  {
                    n: 3,
                    title: "Hire & Pay",
                    desc: "Securely manage contracts and payments through our integrated platform.",
                  },
                ].map(({ n, title, desc }) => (
                  <div key={n} className="flex gap-4">
                    <span className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-[12px] font-semibold text-gray-500 flex-shrink-0 mt-0.5">
                      {n}
                    </span>
                    <div>
                      <p className="text-[14px] font-semibold text-gray-900 mb-1">{title}</p>
                      <p className="text-[13px] text-gray-400 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* For Workers */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_6px_28px_rgba(0,0,0,0.15)]">
              <div className="flex items-center gap-3 mb-7">
                <div className="w-10 h-10 rounded-xl bg-[#1e2a10] flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <h3 className="text-[18px] font-bold text-gray-900">For Workers</h3>
              </div>
              <div className="flex flex-col gap-6">
                {[
                  {
                    n: 1,
                    title: "Create a Profile",
                    desc: "Showcase your skills, experience, and availability to stand out to employers.",
                  },
                  {
                    n: 2,
                    title: "Apply to Jobs",
                    desc: "Find roles that match your expertise and apply with a single click.",
                  },
                  {
                    n: 3,
                    title: "Get Hired",
                    desc: "Start working and get paid instantly upon completion of your shifts.",
                  },
                ].map(({ n, title, desc }) => (
                  <div key={n} className="flex gap-4">
                    <span className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-[12px] font-semibold text-gray-500 flex-shrink-0 mt-0.5">
                      {n}
                    </span>
                    <div>
                      <p className="text-[14px] font-semibold text-gray-900 mb-1">{title}</p>
                      <p className="text-[13px] text-gray-400 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-stretch">
            {/* Testimonial card */}
            <div className="bg-white border border-gray-100 rounded-3xl p-10 flex flex-col justify-between shadow-[0_6px_28px_rgba(0,0,0,0.15)] min-h-[340px]">
              <div>
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-[#1e2a10] text-white font-extrabold text-[16px] mb-8 shadow-sm">
                  99
                </div>
                <blockquote className="text-[22px] font-bold leading-[1.45] text-gray-900 italic">
                  &ldquo;Worket completely changed how I look for roles. The AI
                  matches were spot-on, landing me a Senior role at a top studio
                  within 2 weeks.&rdquo;
                </blockquote>
              </div>
              <div className="flex items-center gap-3 mt-10">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-orange-300 to-orange-500 flex-shrink-0 shadow-sm" />
                <div>
                  <p className="text-[14px] font-semibold text-gray-900">Michael Kai</p>
                  <p className="text-[12px] text-gray-400 mt-0.5">
                    Senior Product Designer @ Meta
                  </p>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="flex flex-col gap-4">
              {/* App rating card */}
              <div className="flex-1 bg-[#0a0a0a] rounded-3xl p-8 text-white flex flex-col items-center justify-center text-center min-h-[200px]">
                <div className="w-11 h-11 rounded-full border-2 border-white/30 flex items-center justify-center mb-5">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <p className="text-[56px] font-extrabold leading-none tracking-tight">
                  4.9
                  <span className="text-[26px] font-normal text-white/30">/5</span>
                </p>
                <div className="flex gap-1 mt-3 mb-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[10px] text-white/35 uppercase tracking-[0.18em] font-medium">
                  App Store Rating
                </p>
              </div>

              {/* Stat boxes + CTA */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-[0_6px_28px_rgba(0,0,0,0.15)] flex flex-col justify-center">
                  <p className="text-[26px] font-extrabold tracking-tight">850k+</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1.5 leading-tight">
                    Success
                    <br />
                    Stories
                  </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-[0_6px_28px_rgba(0,0,0,0.15)] flex flex-col justify-center">
                  <p className="text-[26px] font-extrabold tracking-tight">15k+</p>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1.5 leading-tight">
                    Verified
                    <br />
                    Employers
                  </p>
                </div>
                <button className="bg-[#1e2a10] text-white rounded-2xl p-5 flex flex-col justify-center hover:brightness-110 active:scale-[0.98] transition-all">
                  <p className="text-[16px] font-extrabold leading-tight">Start Today</p>
                  <p className="text-[12px] font-medium mt-1.5 opacity-70">
                    Create free profile &rarr;
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <FaqSection />

      {/* ===== CTA (photo background) ===== */}
      <section className="gutter pb-32">
        <div className="max-w-[1400px] mx-auto">
          <div className="relative w-full overflow-hidden rounded-2xl bg-black">
            <div className="absolute inset-0 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/A3.png"
                alt="Modern office"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>

            <div className="relative flex flex-col items-center justify-center text-center px-6 py-32 md:py-50 min-h-[600px]">
              <h2 className="text-white text-[26px] md:text-[32px] lg:text-[35px] leading-[1.3] font-normal max-w-2xl">
                Ready to evolve your
                <br />
                career?
              </h2>
              <p className="mt-6 text-white/85 text-[13px]">
                Join 120,000+ professionals using Worket to discover their next
                challenge.
              </p>
              <TransitionLink
                href="/work"
                className="mt-8 inline-block text-[13px] text-white border border-white/60 rounded-md px-5 py-2 hover:bg-white/10 transition"
              >
                Find Work
              </TransitionLink>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-black text-white">
        <div className="max-w-[1300px] mx-auto gutter pt-20 pb-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-10 gap-x-8">
            {/* Brand column */}
            <div className="col-span-2 sm:col-span-1 flex flex-col">
              <p className="text-[16px] font-semibold mb-3">Worket</p>
              <p className="text-[13px] text-white/50 leading-relaxed max-w-[200px] mb-5">
                The intelligent career companion connecting high-growth
                companies with top-tier global talent.
              </p>
              <div className="flex gap-2 mt-auto">
                <a
                  href="#"
                  className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:border-white/50 hover:text-white transition text-[11px] font-semibold"
                >
                  S
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:border-white/50 hover:text-white transition text-[12px]"
                >
                  @
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:border-white/50 hover:text-white transition text-[12px]"
                >
                  ↗
                </a>
              </div>
            </div>

            {footerColumns.map((col) => (
              <div key={col.heading} className="flex flex-col">
                <h5 className="text-[13px] text-white/60 mb-5">
                  {col.heading}
                </h5>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[13px] text-white/95 hover:opacity-70 transition inline-flex items-center gap-1"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="mt-24 flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[12px] text-white/70">
              <span className="text-white font-semibold text-[14px] mr-3">
                Worket
              </span>
              <span>
                © 2024 Worket Technologies Inc. Crafted for the future of work.
              </span>
              <span className="text-white/40">/</span>
              <a href="#" className="hover:opacity-80">
                Status
              </a>
              <span className="text-white/40">/</span>
              <a href="#" className="hover:opacity-80">
                Security
              </a>
              <span className="text-white/40">/</span>
              <a href="#" className="hover:opacity-80">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
