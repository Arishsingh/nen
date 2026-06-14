import { ChevronRight } from "lucide-react";
import BackButton from "@/components/BackButton";

const services = [
  {
    title: "MVP Development",
    desc: "Go from idea to live product fast. We scope, design, and ship your MVP with clean architecture ready to scale.",
  },
  {
    title: "Full-Stack Web Applications",
    desc: "Complete MERN stack products React frontends, Node/Express APIs, and MongoDB databases built for performance.",
  },
  {
    title: "Real-Time Features",
    desc: "WebSocket-powered chat, live dashboards, notifications, and collaborative tools using Socket.io and event-driven architecture.",
  },
  {
    title: "REST & GraphQL APIs",
    desc: "Well-documented, versioned APIs with authentication, rate limiting, and OpenAPI specs your team can build on.",
  },
  {
    title: "Auth & Payments",
    desc: "Secure auth (JWT, OAuth, SSO) and payment integrations with Stripe, Razorpay, and other payment gateways.",
  },
  {
    title: "Cloud Deployment & DevOps",
    desc: "Dockerized apps deployed on AWS, GCP, or Vercel with CI/CD pipelines, monitoring, and auto-scaling.",
  },
];

const stack = ["MongoDB", "Express.js", "React", "Node.js", "Next.js", "TypeScript", "Tailwind CSS", "Socket.io", "Redis", "PostgreSQL", "Docker", "AWS"];

export default function MERNServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <section className="px-6 pt-32 pb-20 max-w-[1100px] mx-auto">
        <BackButton />
        <p className="text-[12px] font-medium tracking-widest text-muted-foreground uppercase mb-4">
          Services / MERN Stack
        </p>
        <h1 className="text-[48px] md:text-[72px] font-semibold leading-[1.05] tracking-tight mb-6">
          Full-Stack MERN<br />Websites & Apps
        </h1>
        <p className="text-[18px] text-muted-foreground max-w-[600px] leading-relaxed mb-10">
          Scalable, performant web apps built with MongoDB, Express, React, and Node.js.
          From MVPs to enterprise-grade platforms, we ship fast.
        </p>
        <a
          href="/start"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-black text-white text-[14px] font-medium hover:bg-gray-800 transition"
        >
          Start a Project <ChevronRight className="w-4 h-4" />
        </a>
      </section>

      <section className="px-6 pb-24 max-w-[1100px] mx-auto">
        <h2 className="text-[13px] font-medium tracking-widest text-muted-foreground uppercase mb-10">What we build</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="border border-border rounded-2xl p-7 hover:border-border hover:shadow-sm transition">
              <h3 className="text-[17px] font-semibold mb-3">{s.title}</h3>
              <p className="text-[14px] text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-32 max-w-[1100px] mx-auto">
        <h2 className="text-[13px] font-medium tracking-widest text-muted-foreground uppercase mb-8">Tech stack</h2>
        <div className="flex flex-wrap gap-3">
          {stack.map((tech) => (
            <span key={tech} className="px-4 py-2 rounded-full border border-border text-[13px] font-medium text-foreground">
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-black text-white px-6 py-24 text-center">
        <h2 className="text-[36px] md:text-[52px] font-bold leading-tight mb-6" style={{ fontFamily: "var(--font-syne)" }}>Ready to ship your product?</h2>
        <p className="text-muted-foreground text-[16px] mb-10 max-w-[480px] mx-auto">
          Tell us about your project and we'll get back to you within 24 hours.
        </p>
        <a
          href="mailto:neurix.dev99@gmail.com"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-background text-foreground text-[14px] font-medium hover:bg-gray-100 transition"
        >
          Start a conversation <ChevronRight className="w-4 h-4" />
        </a>
      </section>
    </main>
  );
}
