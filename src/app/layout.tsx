// src/app/layout.tsx
// Root layout — fonts, theme provider, navbar, footer

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Alberto Lillo — PhD Candidate in HRI",
    template: "%s | Alberto Lillo",
  },
  description:
    "PhD Candidate at AIR Lab, Università degli Studi di Torino. Research in Human-Robot Interaction, Empathic AI, and Social Robotics.",
  keywords: [
    "Alberto Lillo",
    "Human-Robot Interaction",
    "PhD",
    "Social Robotics",
    "Empathic AI",
    "AIR Lab",
    "UniTo",
  ],
  authors: [{ name: "Alberto Lillo" }],
  creator: "Alberto Lillo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://albertolillo.dev",
    siteName: "Alberto Lillo",
    title: "Alberto Lillo — PhD Candidate in HRI",
    description:
      "PhD Candidate at AIR Lab, UniTo. Research in Human-Robot Interaction, Empathic AI, and Social Robotics.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alberto Lillo — PhD Candidate in HRI",
    description: "Research in Human-Robot Interaction & Empathic AI.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🤖</text></svg>',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={inter.variable}
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <ThemeProvider>
          <Navbar />
          <main style={{ flex: 1, paddingTop: "64px" }}>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
