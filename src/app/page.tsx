// src/app/page.tsx
// Home page — Hero + Featured Projects

import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";

export const metadata: Metadata = {
  title: "Alberto Lillo, PhD — Researcher in Human-Robot Interaction",
  description:
    "Personal website of Alberto Lillo, PhD in Computer Science (AIR Lab, UniTo), researching Human-Robot Interaction, Empathic AI, and Social Robotics.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProjects />
    </>
  );
}
