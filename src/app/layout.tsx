import type { Metadata, Viewport } from "next";
import { Inter, Syne, Geist } from "next/font/google";
import { Providers } from "@/components/providers";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Worket — Smarter Job Searching",
  description:
    "Find high-impact opportunities faster with Worket's AI-driven matching engine. Tailored recommendations, one-tap applications. Join 120,000+ professionals.",
  icons: [],
  openGraph: {
    title: "Worket — Smarter Job Searching",
    description:
      "Worket connects top talent with high-growth companies. AI-driven matching, verified profiles, and direct chat with hiring leads.",
    siteName: "Worket",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Worket — Smarter Job Searching",
    description:
      "Find high-impact opportunities faster with Worket's AI-driven matching engine.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${syne.variable} ${geist.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
