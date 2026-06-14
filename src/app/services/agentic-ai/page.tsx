import { ChevronRight } from "lucide-react";
import BackButton from "@/components/BackButton";

const services = [
  {
    title: "Multi-Agent Orchestration",
    desc: "Design and deploy networks of AI agents that plan, delegate, and collaborate to solve complex multi-step tasks autonomously.",
  },
  {
    title: "Tool-Using Agents",
    desc: "Agents that call APIs, browse the web, write and execute code, query databases, and interact with your internal systems.",
  },
  {
    title: "RAG Pipelines",
    desc: "Retrieval-augmented generation systems that ground your AI in real company knowledge documents, wikis, databases, and more.",
  },
  {
    title: "Workflow Automation",
    desc: "Replace manual, repetitive processes with AI-driven workflows integrated into Slack, Notion, email, ERPs, and CRMs.",
  },
  {
    title: "AI Copilots",
    desc: "Custom in-product AI assistants that understand your domain, your data, and your users built on top of leading LLMs.",
  },
  {
    title: "Production Deployment & Observability",
    desc: "Cloud-native agent infrastructure with logging, tracing, cost monitoring, and human-in-the-loop review when needed.",
  },
];

const stack = ["LangChain", "LangGraph", "AutoGen", "CrewAI", "OpenAI", "Anthropic Claude", "Llama", "Pinecone", "Weaviate", "FastAPI", "AWS", "GCP"];

export default function AgenticAIServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <section className="px-6 pt-32 pb-20 max-w-[1100px] mx-auto">
        <BackButton />
        <p className="text-[12px] font-medium tracking-widest text-muted-foreground uppercase mb-4">
          Services / Agentic AI
        </p>
        <h1 className="text-[48px] md:text-[72px] font-semibold leading-[1.05] tracking-tight mb-6">
          Agentic AI &<br />Intelligent Automation
        </h1>
        <p className="text-[18px] text-muted-foreground max-w-[600px] leading-relaxed mb-10">
          Autonomous AI agents and workflow automation that handle complex multi-step
          tasks so your team can focus on what matters most.
        </p>
        <a
          href="/start"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-black text-white text-[14px] font-medium hover:bg-gray-800 transition"
        >
          Get a Quote <ChevronRight className="w-4 h-4" />
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
        <h2 className="text-[36px] md:text-[52px] font-bold leading-tight mb-6" style={{ fontFamily: "var(--font-syne)" }}>Ready to automate the impossible?</h2>
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
