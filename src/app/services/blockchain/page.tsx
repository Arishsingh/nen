import { ChevronRight } from "lucide-react";
import BackButton from "@/components/BackButton";

const services = [
  {
    title: "Smart Contract Development",
    desc: "Custom Solidity and Rust smart contracts built for security, gas efficiency, and auditability. From ERC-20/721/1155 tokens to complex DeFi logic.",
  },
  {
    title: "DeFi Protocol Engineering",
    desc: "Decentralized exchanges, lending protocols, yield aggregators, and liquidity pools architected for scale and composability.",
  },
  {
    title: "NFT Platforms & Marketplaces",
    desc: "End-to-end NFT infrastructure: minting engines, royalty systems, storefronts, and cross-chain bridging.",
  },
  {
    title: "Web3 Integrations",
    desc: "Wallet connections (MetaMask, WalletConnect), on-chain data indexing with The Graph, and seamless dApp front-end integration.",
  },
  {
    title: "Smart Contract Audits",
    desc: "Battle-tested security reviews for Solidity and Rust contracts. We surface vulnerabilities before they reach mainnet.",
  },
  {
    title: "Layer-2 & Cross-Chain Solutions",
    desc: "Deploy on Arbitrum, Optimism, Base, and Polygon. Bridge assets across chains with custom cross-chain messaging.",
  },
];

const stack = ["Ethereum", "Solana", "Arbitrum", "Optimism", "Base", "Polygon", "Solidity", "Rust", "Hardhat", "Foundry", "The Graph", "IPFS"];

export default function BlockchainServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      {/* Hero */}
      <section className="px-6 pt-32 pb-20 max-w-[1100px] mx-auto">
        <BackButton />
        <p className="text-[12px] font-medium tracking-widest text-muted-foreground uppercase mb-4">
          Services / Blockchain
        </p>
        <h1 className="text-[48px] md:text-[72px] font-semibold leading-[1.05] tracking-tight mb-6">
          Blockchain Development<br />for the Real World
        </h1>
        <p className="text-[18px] text-muted-foreground max-w-[600px] leading-relaxed mb-10">
          Smart contracts, DeFi protocols, NFT platforms, and Web3 integrations
          built for scale, security, and seamless user experience.
        </p>
        <a
          href="/start"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-black text-white text-[14px] font-medium hover:bg-gray-800 transition"
        >
          Get a Quote <ChevronRight className="w-4 h-4" />
        </a>
      </section>

      {/* Services Grid */}
      <section className="px-6 pb-24 max-w-[1100px] mx-auto">
        <h2 className="text-[13px] font-medium tracking-widest text-muted-foreground uppercase mb-10">
          What we build
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="border border-border rounded-2xl p-7 hover:border-border hover:shadow-sm transition"
            >
              <h3 className="text-[17px] font-semibold mb-3">{s.title}</h3>
              <p className="text-[14px] text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="px-6 pb-32 max-w-[1100px] mx-auto">
        <h2 className="text-[13px] font-medium tracking-widest text-muted-foreground uppercase mb-8">
          Tech stack
        </h2>
        <div className="flex flex-wrap gap-3">
          {stack.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-full border border-border text-[13px] font-medium text-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white px-6 py-24 text-center">
        <h2 className="text-[36px] md:text-[52px] font-bold leading-tight mb-6" style={{ fontFamily: "var(--font-syne)" }}>
          Ready to build on-chain?
        </h2>
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
