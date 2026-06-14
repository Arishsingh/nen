import { ChevronRight } from "lucide-react";
import BackButton from "@/components/BackButton";

const services = [
  {
    title: "Custom ML Pipelines",
    desc: "End-to-end machine learning systems data ingestion, feature engineering, model training, evaluation, and deployment at scale.",
  },
  {
    title: "Predictive Analytics",
    desc: "Forecast demand, churn, fraud, and more with custom regression and classification models tailored to your data.",
  },
  {
    title: "Computer Vision",
    desc: "Object detection, image classification, OCR, and video analysis using state-of-the-art vision models.",
  },
  {
    title: "Natural Language Processing",
    desc: "Sentiment analysis, entity extraction, document summarization, and custom LLM fine-tuning for your domain.",
  },
  {
    title: "LLM Integration",
    desc: "Integrate GPT-4, Claude, Gemini, and open-source models into your product with RAG pipelines and prompt engineering.",
  },
  {
    title: "MLOps & Model Serving",
    desc: "CI/CD for ML automated retraining, versioning, A/B testing, and production deployment with full observability.",
  },
];

const stack = ["Python", "PyTorch", "TensorFlow", "Scikit-learn", "HuggingFace", "LangChain", "OpenAI", "Anthropic", "FastAPI", "AWS SageMaker", "GCP Vertex AI", "Docker"];

export default function AIMLServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <section className="px-6 pt-32 pb-20 max-w-[1100px] mx-auto">
        <BackButton />
        <p className="text-[12px] font-medium tracking-widest text-muted-foreground uppercase mb-4">
          Services / AI & ML
        </p>
        <h1 className="text-[48px] md:text-[72px] font-semibold leading-[1.05] tracking-tight mb-6">
          AI / ML Solutions<br />Tailored to Your Business
        </h1>
        <p className="text-[18px] text-muted-foreground max-w-[600px] leading-relaxed mb-10">
          Custom machine learning pipelines, predictive models, computer vision, and NLP
          systems that turn your data into competitive advantage.
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
        <h2 className="text-[36px] md:text-[52px] font-bold leading-tight mb-6" style={{ fontFamily: "var(--font-syne)" }}>Ready to put your data to work?</h2>
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
