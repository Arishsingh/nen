import Image from "next/image";
import TransitionLink from "@/components/TransitionLink";
import { ChevronRight } from "lucide-react";

const stories = [
  {
    slug: "techwave-engineering",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=85",
    brand: "OM / TECHWAVE",
    title: "TechWave hired 12 engineers in 30 days through OM",
    desc: "A fast-scaling startup used OM to source and screen a full engineering team — from senior backend to mobile leads — in under a month.",
  },
  {
    slug: "sara-ux-role",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=85",
    brand: "OM / CANDIDATE",
    title: "Sara landed her senior UX role in 18 days after 3 years searching",
    desc: "OM's smart matching surfaced a role Sara had never seen on other platforms. She applied, interviewed once, and accepted an offer in under 3 weeks.",
  },
  {
    slug: "buildscale-remote-team",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=85",
    brand: "OM / BUILDSCALE",
    title: "BuildScale built a fully remote team across 6 countries via OM",
    desc: "Using OM's remote-first filters and verified profiles, BuildScale assembled a distributed team of 20 in 60 days — no external recruiters needed.",
  },
  {
    slug: "james-first-job",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=85",
    brand: "OM / CANDIDATE",
    title: "James got his first tech job 6 weeks after graduating",
    desc: "Fresh out of university with no prior work experience, James used OM's entry-level filters to land a frontend role at a Series A startup.",
  },
  {
    slug: "launchpad-time-to-hire",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=85",
    brand: "OM / LAUNCHPAD",
    title: "LaunchPad cut time-to-hire from 90 days to 21 days",
    desc: "LaunchPad switched from a traditional recruiting agency to OM and reduced their average time-to-hire by 77%, saving both time and cost per placement.",
  },
  {
    slug: "priya-career-switch",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=85",
    brand: "OM / CANDIDATE",
    title: "Priya switched from finance to product management in 8 weeks",
    desc: "OM surfaced companies actively hiring career-switchers. Priya updated her profile to highlight transferable skills and received 4 interview requests in a week.",
  },
  {
    slug: "finedge-product-team",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=85",
    brand: "OM / FINEDGE",
    title: "FinEdge scaled their product team from 5 to 30 in one quarter",
    desc: "Using OM's bulk posting and talent search tools, FinEdge ran a structured hiring sprint that grew their product org sixfold without a single external recruiter.",
  },
  {
    slug: "marco-salary-jump",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=85",
    brand: "OM / CANDIDATE",
    title: "Marco tripled his salary moving from agency to in-house",
    desc: "After 7 years at a design agency, Marco used OM to find in-house product design roles. He received 3 offers and accepted one paying 3× his previous salary.",
  },
];

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="px-6 pt-28 pb-16 max-w-[1200px] mx-auto">
        <TransitionLink href="/" className="text-[13px] text-gray-400 hover:text-gray-700 transition mb-8 inline-block">
          ← Back
        </TransitionLink>
        <p className="text-[12px] font-medium tracking-widest text-gray-400 uppercase mb-4">Success Stories</p>
        <h1 className="text-[32px] md:text-[48px] font-normal text-gray-900 leading-[1.15] max-w-3xl">
          OM is connecting talent with opportunity across every industry and function.
        </h1>
      </section>

      <section className="px-6 pb-24 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-14">
          {stories.map((p) => (
            <div key={p.slug} className="flex flex-col gap-4">
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-gray-100">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />
                <span className="absolute bottom-3 left-3 text-[11px] font-semibold tracking-widest text-white/80 uppercase">
                  {p.brand}
                </span>
              </div>
              <div>
                <h3 className="text-[16px] font-medium text-gray-900 leading-snug mb-2">{p.title}</h3>
                <p className="text-[13px] text-gray-500 leading-relaxed mb-4">{p.desc}</p>
                <TransitionLink
                  href={`/work/${p.slug}`}
                  className="inline-flex items-center gap-1 text-[13px] font-medium text-gray-900 border border-gray-200 rounded-lg px-4 py-2 hover:bg-gray-50 transition"
                >
                  Read story <ChevronRight className="w-3.5 h-3.5" />
                </TransitionLink>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
