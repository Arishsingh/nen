import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import BackButton from "@/components/BackButton";

type Story = {
  slug: string;
  brand: string;
  category: string;
  title: string;
  tagline: string;
  image: string;
  overview: string;
  challenge: string;
  solution: string;
  outcome: string;
  tags: string[];
  metrics: { label: string; value: string }[];
};

const stories: Story[] = [
  {
    slug: "techwave-engineering",
    brand: "OM / TECHWAVE",
    category: "Engineering Hiring",
    title: "TechWave Hired 12 Engineers in 30 Days Through OM",
    tagline: "From zero to a full engineering team in under a month.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1400&q=90",
    overview:
      "TechWave, a fast-growing SaaS startup, needed to build an entire engineering team from scratch ahead of their product launch. With a 30-day runway, they turned to OM to find and hire senior and mid-level engineers across backend, frontend, and mobile.",
    challenge:
      "Traditional job boards were surfacing hundreds of unqualified applicants and consuming the founding team's time on screening. They needed a faster, higher-signal pipeline with candidates who had already been vetted for the core skills required.",
    solution:
      "TechWave used OM's smart matching and talent search tools to define exactly what they needed — tech stack, seniority, timezone, and remote preference. OM surfaced a shortlist of pre-matched candidates within 48 hours. Automated screening filters removed unfit applicants before any human review.",
    outcome:
      "TechWave made 12 engineering hires in 30 days — all within budget and all still with the company 12 months later. The founding team spent less than 10 hours total on sourcing and screening.",
    tags: ["Engineering", "Startup", "Fast Hiring", "Remote", "SaaS"],
    metrics: [
      { label: "Engineers hired", value: "12" },
      { label: "Days to hire", value: "30" },
      { label: "Sourcing hours saved", value: "80+" },
      { label: "12-month retention", value: "100%" },
    ],
  },
  {
    slug: "sara-ux-role",
    brand: "OM / CANDIDATE",
    category: "Candidate Success",
    title: "Sara Landed Her Senior UX Role in 18 Days After 3 Years Searching",
    tagline: "The right match changes everything.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1400&q=90",
    overview:
      "Sara had been searching for a senior UX role for nearly three years — applying through every major job board, attending networking events, and working with two different recruiters. Nothing clicked. She joined OM as a last attempt.",
    challenge:
      "Sara had the skills but was getting lost in high-volume pipelines. Her experience was strong but non-traditional — freelance projects, agency work, and a career gap — which caused automated screening systems to deprioritise her applications.",
    solution:
      "OM's profile system let Sara showcase her full body of work — portfolio links, case studies, and a structured skills section that highlighted UX research and systems design. The matching algorithm surfaced her to companies explicitly hiring for those competencies, bypassing the generic keyword filters of traditional boards.",
    outcome:
      "Sara received 3 interview requests within 5 days of completing her profile. She had an offer within 18 days at a company she hadn't known existed before joining OM — at a salary 40% above her previous role.",
    tags: ["UX Design", "Career Switch", "Candidate", "Senior Role"],
    metrics: [
      { label: "Days to offer", value: "18" },
      { label: "Interview requests", value: "3" },
      { label: "Salary increase", value: "+40%" },
      { label: "Previous search duration", value: "3 years" },
    ],
  },
  {
    slug: "buildscale-remote-team",
    brand: "OM / BUILDSCALE",
    category: "Remote Hiring",
    title: "BuildScale Built a Fully Remote Team Across 6 Countries via OM",
    tagline: "Distributed hiring without the distributed chaos.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1400&q=90",
    overview:
      "BuildScale's product required a globally distributed team to support 24/7 operations and serve customers across multiple timezones. They needed to hire 20 people across 6 countries in 60 days — all remote, all without a dedicated recruiter.",
    challenge:
      "Global hiring across different time zones, contract structures, and compliance requirements is complex. BuildScale needed candidates who were genuinely set up for remote work — not just willing to try it — and who could hit the ground running.",
    solution:
      "OM's remote-first filter stack let BuildScale specify timezone overlap requirements, async-work preferences, and home-office setup. Verified candidate profiles included remote work history, so BuildScale could prioritise experienced distributed workers. Contract templates for different jurisdictions were provided as part of the platform.",
    outcome:
      "BuildScale assembled a team of 20 across 6 countries in 58 days with zero external recruiters. Team satisfaction scores at the 6-month mark were 4.7/5.",
    tags: ["Remote", "Global Hiring", "Distributed Team", "Operations"],
    metrics: [
      { label: "Team members hired", value: "20" },
      { label: "Countries", value: "6" },
      { label: "Days to complete", value: "58" },
      { label: "Team satisfaction", value: "4.7/5" },
    ],
  },
  {
    slug: "james-first-job",
    brand: "OM / CANDIDATE",
    category: "Entry Level",
    title: "James Got His First Tech Job 6 Weeks After Graduating",
    tagline: "OM's entry-level filters open doors that other platforms don't.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1400&q=90",
    overview:
      "James graduated with a computer science degree and strong personal projects but no work experience. Most job listings required 2–3 years of experience even for 'entry-level' roles. He felt stuck before he'd even started.",
    challenge:
      "The experience paradox — needing experience to get experience — was blocking James at every turn. He needed a platform that surfaced companies genuinely open to recent graduates and could communicate the quality of his self-built projects.",
    solution:
      "OM's graduate and entry-level category filtered for companies that actively opted into hiring new graduates. James was able to add GitHub repos, live project links, and a skills breakdown to his profile. OM's matching algorithm factored in skill signals — not just years of experience.",
    outcome:
      "James received his first interview within 2 weeks and accepted an offer from a Series A startup 6 weeks after graduating. His starting salary was 20% above the average for his cohort.",
    tags: ["Entry Level", "Graduate", "Frontend", "First Job"],
    metrics: [
      { label: "Weeks to first offer", value: "6" },
      { label: "Days to first interview", value: "14" },
      { label: "Salary vs cohort avg", value: "+20%" },
      { label: "Applications sent", value: "8" },
    ],
  },
  {
    slug: "launchpad-time-to-hire",
    brand: "OM / LAUNCHPAD",
    category: "Hiring Efficiency",
    title: "LaunchPad Cut Time-to-Hire from 90 Days to 21 Days",
    tagline: "Less time hiring. More time building.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=90",
    overview:
      "LaunchPad had been working with a traditional recruiting agency for two years, paying high placement fees and waiting an average of 90 days per hire. They were growing fast and couldn't afford the pace. They moved their entire hiring operation to OM.",
    challenge:
      "Their recruiter was slow, expensive, and often presenting candidates who didn't fit the culture. The process involved too many middlemen. LaunchPad needed direct access to talent without sacrificing quality.",
    solution:
      "OM gave LaunchPad's hiring managers direct access to a curated candidate pool. Smart filters let them set must-have criteria upfront. The platform's pre-screening layer handled initial qualification — eliminating rounds of CV review and phone screening.",
    outcome:
      "Average time-to-hire dropped from 90 days to 21 days. Cost-per-hire fell by 62%. LaunchPad made 18 hires in the following quarter — more than double their previous quarterly output.",
    tags: ["Hiring Efficiency", "Time-to-Hire", "Cost Reduction", "Scale"],
    metrics: [
      { label: "Time-to-hire reduction", value: "90d → 21d" },
      { label: "Cost-per-hire reduction", value: "−62%" },
      { label: "Hires in one quarter", value: "18" },
      { label: "Agency dependency", value: "0%" },
    ],
  },
  {
    slug: "priya-career-switch",
    brand: "OM / CANDIDATE",
    category: "Career Change",
    title: "Priya Switched from Finance to Product Management in 8 Weeks",
    tagline: "OM found the companies that actually want career-switchers.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1400&q=90",
    overview:
      "Priya spent 5 years in investment banking and wanted to transition into product management. Every application she submitted on traditional job boards was rejected at the CV screening stage — no product experience, no product job.",
    challenge:
      "Career-switchers are invisible to most hiring pipelines because automated systems filter for job-title keywords. Priya's finance experience — stakeholder management, data analysis, prioritisation — was highly transferable to product but never surfaced as such.",
    solution:
      "OM's profile builder let Priya map her banking skills to PM competencies. The platform surfaces candidates to companies that have opted into hiring career-changers and specifically flags strong transferable skill profiles. OM's smart match flagged her to 4 companies hiring junior-to-mid PMs with analytical backgrounds.",
    outcome:
      "Priya received 4 interview requests in 8 days. She completed OM's optional PM assessment to validate her skills. 8 weeks after joining the platform she accepted a PM role at a fintech startup at a salary matching her banking compensation.",
    tags: ["Career Switch", "Finance", "Product Management", "Transferable Skills"],
    metrics: [
      { label: "Weeks to offer", value: "8" },
      { label: "Interview requests", value: "4" },
      { label: "Salary parity", value: "Matched" },
      { label: "Previous rejections", value: "27" },
    ],
  },
  {
    slug: "finedge-product-team",
    brand: "OM / FINEDGE",
    category: "Team Scaling",
    title: "FinEdge Scaled Their Product Team from 5 to 30 in One Quarter",
    tagline: "Six-fold growth. Zero external recruiters.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=90",
    overview:
      "FinEdge had just closed a Series B and needed to scale their product team from 5 to 30 people in a single quarter. Roles spanned product managers, designers, frontend engineers, and data analysts — all in a competitive hiring market.",
    challenge:
      "Scaling a team 6× in 90 days while maintaining quality is operationally brutal. FinEdge didn't want to hire a recruiter or agency — they wanted to own the process and build direct relationships with candidates from day one.",
    solution:
      "FinEdge used OM's bulk job posting and team pipeline tools to run 12 parallel hiring tracks simultaneously. Each hiring manager had their own candidate queue. Smart match filtered applicants by role before any human screening. FinEdge set up a structured interview loop inside OM — offer letters generated from the platform.",
    outcome:
      "FinEdge made 25 hires in 90 days and hit their 30-person target 2 weeks ahead of schedule. All roles were filled at or under budget. 11 months in, 93% of those hires are still with the company.",
    tags: ["Scaling", "Series B", "Multi-role Hiring", "Fintech"],
    metrics: [
      { label: "Hires in 90 days", value: "25" },
      { label: "Team growth", value: "5 → 30" },
      { label: "Ahead of schedule", value: "2 weeks" },
      { label: "11-month retention", value: "93%" },
    ],
  },
  {
    slug: "marco-salary-jump",
    brand: "OM / CANDIDATE",
    category: "Salary Growth",
    title: "Marco Tripled His Salary Moving from Agency to In-House",
    tagline: "The right move at the right time.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1400&q=90",
    overview:
      "Marco spent 7 years at a boutique design agency, rising to senior designer. He was underpaid relative to in-house peers but had never been able to make the switch — agency portfolios were often overlooked by in-house hiring teams looking for product experience.",
    challenge:
      "Agency designers are frequently passed over for in-house product roles because they lack product team context — even when the craft is identical or stronger. Marco had shipped work for 30+ clients but struggled to get in front of the right in-house teams.",
    solution:
      "OM's profile builder let Marco tag every portfolio piece with the product problem it was solving — not just the visual output. His case studies were structured to show user research, iteration, and outcome metrics. OM's match algorithm surfaced his profile to in-house design leads who had specified 'strong craft with client variety'.",
    outcome:
      "Marco received 3 in-house offers in 6 weeks. He accepted the highest — a Staff Designer role at a Series C startup at 3× his agency salary, with equity. He later called it the best professional decision he'd ever made.",
    tags: ["Design", "Agency to In-House", "Salary Growth", "Portfolio"],
    metrics: [
      { label: "Salary increase", value: "3×" },
      { label: "Offers received", value: "3" },
      { label: "Weeks to first offer", value: "6" },
      { label: "Years at agency", value: "7" },
    ],
  },
];

export async function generateStaticParams() {
  return stories.map((s) => ({ slug: s.slug }));
}

export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const story = stories.find((s) => s.slug === slug);
  if (!story) notFound();

  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      {/* Hero */}
      <section className="px-6 pt-32 pb-0 max-w-[1100px] mx-auto">
        <BackButton />
        <p className="text-[12px] font-medium tracking-widest text-muted-foreground uppercase mb-4">
          {story.brand} &nbsp;·&nbsp; {story.category}
        </p>
        <h1 className="text-[40px] md:text-[60px] font-semibold leading-[1.05] tracking-tight mb-5 max-w-[820px]">
          {story.title}
        </h1>
        <p className="text-[18px] text-muted-foreground max-w-[560px] leading-relaxed mb-12">
          {story.tagline}
        </p>
      </section>

      {/* Cover image */}
      <section className="px-6 pb-16 max-w-[1100px] mx-auto">
        <div className="w-full aspect-[16/7] rounded-2xl overflow-hidden bg-muted">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={story.image} alt={story.title} className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Metrics */}
      <section className="px-6 pb-16 max-w-[1100px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {story.metrics.map((m) => (
            <div key={m.label} className="border border-border rounded-2xl p-6">
              <p className="text-[28px] md:text-[36px] font-semibold leading-none mb-2">{m.value}</p>
              <p className="text-[13px] text-muted-foreground">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Body */}
      <section className="px-6 pb-24 max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 flex flex-col gap-10">
            <div>
              <h2 className="text-[13px] font-medium tracking-widest text-muted-foreground uppercase mb-4">Overview</h2>
              <p className="text-[16px] leading-relaxed">{story.overview}</p>
            </div>
            <div>
              <h2 className="text-[13px] font-medium tracking-widest text-muted-foreground uppercase mb-4">The Challenge</h2>
              <p className="text-[16px] leading-relaxed">{story.challenge}</p>
            </div>
            <div>
              <h2 className="text-[13px] font-medium tracking-widest text-muted-foreground uppercase mb-4">How OM Helped</h2>
              <p className="text-[16px] leading-relaxed">{story.solution}</p>
            </div>
            <div>
              <h2 className="text-[13px] font-medium tracking-widest text-muted-foreground uppercase mb-4">Outcome</h2>
              <p className="text-[16px] leading-relaxed">{story.outcome}</p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-[13px] font-medium tracking-widest text-muted-foreground uppercase mb-4">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {story.tags.map((t) => (
                  <span key={t} className="px-3 py-1.5 rounded-full border border-border text-[12px] font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="border border-border rounded-2xl p-6">
              <p className="text-[15px] font-medium mb-2">Ready to write your story?</p>
              <p className="text-[13px] text-muted-foreground mb-5">Find the right role or post a job in minutes.</p>
              <a
                href="/start"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-foreground text-background text-[13px] font-medium hover:opacity-80 transition"
              >
                Get started <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white px-6 py-24 text-center">
        <h2 className="text-[32px] md:text-[48px] font-bold leading-tight mb-6" style={{ fontFamily: "var(--font-syne)" }}>
          Find your next opportunity on OM.
        </h2>
        <p className="text-white/70 text-[16px] mb-10 max-w-[440px] mx-auto">
          Browse verified roles, get matched by AI, and track every application in one place.
        </p>
        <a
          href="/work"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-black text-[14px] font-medium hover:bg-gray-100 transition"
        >
          Browse Jobs <ChevronRight className="w-4 h-4" />
        </a>
      </section>
    </main>
  );
}
