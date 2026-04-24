// src/app/portfolio/page.tsx
// Portfolio page — full grid of all projects

import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedWrapper } from "@/components/ui/AnimatedWrapper";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Research projects by Alberto Lillo in Human-Robot Interaction, Empathic AI, and Social Robotics.",
};

export default function PortfolioPage() {
  return (
    <div className="section container-site">
      <AnimatedWrapper>
        <SectionTitle
          title="Research Projects"
          subtitle="All my research projects and experiments in HRI, cognitive architectures, and social robotics."
        />
      </AnimatedWrapper>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}
