import TransitionLink from "@/components/TransitionLink";
import { ArrowUpRight } from "lucide-react";

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="px-6 pt-32 pb-20 max-w-[900px] mx-auto">
        <p className="text-[12px] font-medium tracking-widest text-gray-400 uppercase mb-4">
          Careers
        </p>
        <h1 className="text-[36px] md:text-[52px] font-normal text-gray-900 leading-[1.15] mb-6">
          Build the future of work with us.
        </h1>
        <p className="text-[16px] text-gray-500 leading-relaxed max-w-xl">
          We&apos;re a small team passionate about fixing how people find jobs and companies find talent. If that excites you, we want to hear from you.
        </p>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-100 max-w-[900px] mx-auto" />

      {/* How to apply */}
      <section className="px-6 py-20 max-w-[900px] mx-auto">
        <h2 className="text-[22px] font-medium text-gray-900 mb-10">
          How to apply
        </h2>

        <div className="flex flex-col gap-10">
          {/* Step 1 */}
          <div className="flex gap-6">
            <span className="text-[13px] font-medium text-gray-300 w-6 flex-shrink-0 pt-1">01</span>
            <div>
              <p className="text-[15px] font-medium text-gray-900 mb-2">Send your resume</p>
              <p className="text-[14px] text-gray-500 leading-relaxed">
                Attach your CV or resume as a PDF. Let us know what role you&apos;re interested in — engineering, design, operations, growth, or open to anything.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-6">
            <span className="text-[13px] font-medium text-gray-300 w-6 flex-shrink-0 pt-1">02</span>
            <div>
              <p className="text-[15px] font-medium text-gray-900 mb-2">Include your GitHub & portfolio</p>
              <p className="text-[14px] text-gray-500 leading-relaxed">
                Share links to your GitHub profile, portfolio, LinkedIn, or any work you&apos;re proud of. We care more about what you&apos;ve built than where you studied.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-6">
            <span className="text-[13px] font-medium text-gray-300 w-6 flex-shrink-0 pt-1">03</span>
            <div>
              <p className="text-[15px] font-medium text-gray-900 mb-2">Tell us about yourself</p>
              <p className="text-[14px] text-gray-500 leading-relaxed">
                A short note about what you&apos;re working on, what excites you about OM, and what you&apos;d want to build here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-100 max-w-[900px] mx-auto" />

      {/* CTA */}
      <section className="px-6 py-20 max-w-[900px] mx-auto">
        <h2 className="text-[22px] font-medium text-gray-900 mb-3">Mail us</h2>
        <p className="text-[14px] text-gray-500 mb-8 leading-relaxed">
          Send your resume, GitHub, and socials to us directly. We read every application personally.
        </p>
        <a
          href="mailto:contact@om.jobs?subject=Careers%20at%20OM"
          className="inline-flex items-center gap-2 bg-gray-900 text-white text-[13px] font-medium px-6 py-3 rounded-md hover:bg-black transition"
        >
          contact@om.jobs
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </section>

      {/* Back */}
      <div className="px-6 pb-20 max-w-[900px] mx-auto">
        <TransitionLink href="/" className="text-[13px] text-gray-400 hover:text-gray-700 transition">
          ← Back to home
        </TransitionLink>
      </div>
    </main>
  );
}
