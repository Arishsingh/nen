"use client";

import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import TransitionLink from "@/components/TransitionLink";

export default function StartPage() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    description: "",
  });
  const [fileName, setFileName] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const fileRef = useRef<HTMLInputElement>(null);

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setFileName(file.name);
  };

  const openMailto = () => {
    const subject = encodeURIComponent(`Hiring Inquiry — ${form.company || form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nHiring Need:\n${form.description}`
    );
    window.location.href = `mailto:contact@om.jobs?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const fd = new FormData();
    Object.entries(form).forEach(([k, v]) => fd.append(k, v));
    if (fileRef.current?.files?.[0]) {
      fd.append("file", fileRef.current.files[0]);
    }

    try {
      const res = await fetch("/api/contact", { method: "POST", body: fd });
      const json = await res.json();
      if (json.fallback) { openMailto(); return; }
      if (!res.ok) throw new Error();
      setStatus("sent");
    } catch {
      openMailto();
    }
  };

  const inputClass =
    "w-full border border-gray-200 rounded-lg px-4 py-3 text-[14px] text-gray-900 placeholder-gray-400 focus:outline-none focus:border-gray-400 transition bg-white";

  if (status === "sent") {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <h2 className="text-[28px] font-normal text-gray-900 mb-3">Message sent.</h2>
          <p className="text-[14px] text-gray-500 mb-8">
            We received your inquiry and will get back to you at <span className="text-gray-700">{form.email}</span> within 48 hours.
          </p>
          <TransitionLink href="/" className="text-[13px] text-gray-400 hover:text-gray-700 transition">
            ← Back to home
          </TransitionLink>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-[640px] mx-auto px-6 pt-28 pb-24">
        <p className="text-[12px] font-medium tracking-widest text-gray-400 uppercase mb-4">
          Get Started
        </p>
        <h1 className="text-[32px] md:text-[42px] font-normal text-gray-900 leading-[1.15] mb-4">
          Tell us about your hiring need.
        </h1>
        <p className="text-[14px] text-gray-500 leading-relaxed mb-12">
          Fill in your details and we&apos;ll send everything directly to{" "}
          <span className="text-gray-700 font-medium">contact@om.jobs</span> — including any documentation.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Name + Company */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-medium text-gray-500 uppercase tracking-wider">Your Name *</label>
              <input name="name" value={form.name} onChange={handle} required placeholder="Alex Johnson" className={inputClass} />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-medium text-gray-500 uppercase tracking-wider">Company Name</label>
              <input name="company" value={form.company} onChange={handle} placeholder="Acme Corp" className={inputClass} />
            </div>
          </div>

          {/* Email + Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-medium text-gray-500 uppercase tracking-wider">Email *</label>
              <input name="email" type="email" value={form.email} onChange={handle} required placeholder="you@company.com" className={inputClass} />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-medium text-gray-500 uppercase tracking-wider">Phone</label>
              <input name="phone" value={form.phone} onChange={handle} placeholder="+1 555 000 0000" className={inputClass} />
            </div>
          </div>

          {/* Hiring Need */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[12px] font-medium text-gray-500 uppercase tracking-wider">Hiring Need *</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handle}
              required
              rows={6}
              placeholder="Describe the role you're hiring for — title, seniority, skills required, remote or on-site, timeline, and anything else we should know."
              className={`${inputClass} resize-none`}
            />
          </div>

          {/* Job Description Upload */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[12px] font-medium text-gray-500 uppercase tracking-wider">
              Job Description <span className="normal-case text-gray-400">(optional)</span>
            </label>
            <label className="flex items-center gap-3 border border-dashed border-gray-300 rounded-lg px-4 py-4 cursor-pointer hover:border-gray-400 transition group">
              <input ref={fileRef} type="file" accept=".pdf,.doc,.docx,.txt" onChange={handleFile} className="hidden" />
              <div className="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition flex-shrink-0">
                <ArrowUpRight className="w-4 h-4 text-gray-500" />
              </div>
              <div>
                <p className="text-[13px] text-gray-700 font-medium">
                  {fileName ?? "Upload PDF, DOC, or TXT"}
                </p>
                <p className="text-[12px] text-gray-400">
                  {fileName ? "File will be attached to the email" : "Attach your JD, brief, or any specs"}
                </p>
              </div>
            </label>
          </div>

          <div className="border-t border-gray-100 my-2" />

          <div className="flex flex-col gap-3">
            {status === "error" && (
              <p className="text-[13px] text-red-500 text-center">Something went wrong. Please try again or email us directly.</p>
            )}
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-gray-900 text-white text-[14px] font-medium py-3.5 rounded-lg hover:bg-black transition flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send to contact@om.jobs"}
              {status !== "sending" && <ArrowUpRight className="w-4 h-4" />}
            </button>
          </div>
        </form>

        <div className="mt-12">
          <TransitionLink href="/" className="text-[13px] text-gray-400 hover:text-gray-700 transition">
            ← Back to home
          </TransitionLink>
        </div>
      </div>
    </main>
  );
}
