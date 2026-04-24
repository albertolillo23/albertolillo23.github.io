// src/app/publications/page.tsx
// Publications page — list of all articles and papers

import type { Metadata } from "next";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedWrapper } from "@/components/ui/AnimatedWrapper";
import { PublicationsList } from "@/components/publications/PublicationsList";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Publications and research articles by Alberto Lillo in Human-Robot Interaction, Empathic AI, and Social Robotics.",
};

export default function PublicationsPage() {
  return (
    <div className="section container-site">
      <AnimatedWrapper>
        <SectionTitle
          title="Publications"
          subtitle="A complete list of my published articles, conference papers, and workshop contributions."
        />
      </AnimatedWrapper>

      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <PublicationsList />
      </div>
    </div>
  );
}
