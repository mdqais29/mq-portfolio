import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono, Newsreader } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const serif = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mohammed Qaisuddin — AI Generalist & Founder",
  description:
    "Personal portfolio of Mohammed Qaisuddin, AI Generalist and Founder of QDelta Technologies. Building practical solutions using AI, web technologies, and modern digital systems.",
  keywords: [
    "Mohammed Qaisuddin",
    "AI Generalist",
    "QDelta Technologies",
    "Web Developer",
    "Generative AI",
    "UI/UX Design",
    "Prompt Engineering",
  ],
  authors: [{ name: "Mohammed Qaisuddin" }],
  openGraph: {
    title: "Mohammed Qaisuddin — AI Generalist & Founder",
    description:
      "Interactive personal portfolio experience of Mohammed Qaisuddin. Explore projects, experience, technical skills, and certifications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable} ${serif.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#090D12] text-[#E8EDF3] selection:bg-[#78B9AF] selection:text-[#090D12]">
        {children}
      </body>
    </html>
  );
}
