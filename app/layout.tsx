import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anbarasu — Full Stack Developer",
  description:
    "Full Stack Developer specializing in React, Next.js, Node.js, and AI/GenAI — building scalable web applications, REST APIs, and developer tools.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Portfolio",
    "Anbarasu",
  ],
  authors: [{ name: "Anbarasu" }],
  openGraph: {
    title: "Anbarasu — Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, Node.js, and AI/GenAI.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-ds-background text-ds-text-primary">
        {children}
      </body>
    </html>
  );
}
