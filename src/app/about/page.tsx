// src/app/about/page.tsx
// About page — timeline + skills

import type { Metadata } from "next";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedWrapper } from "@/components/ui/AnimatedWrapper";
import { Timeline } from "@/components/about/Timeline";
import { SkillsGrid } from "@/components/about/SkillsGrid";
import { profileInfo } from "@/data/skills";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Alberto Lillo — PhD Candidate in Human-Robot Interaction at AIR Lab, UniTo. Education, experience, and technical skills.",
};

export default function AboutPage() {
  return (
    <div className="container-site">
      {/* Bio intro */}
      <section className="section" style={{ paddingBottom: "2rem" }}>
        <AnimatedWrapper>
          <SectionTitle
            title="About Me"
            subtitle={profileInfo.bio}
          />
        </AnimatedWrapper>

        {/* Research interests pills */}
        <AnimatedWrapper delay={0.15}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {profileInfo.researchInterests.map((interest) => (
              <span key={interest} className="tag" style={{ fontSize: "0.85rem", padding: "4px 14px" }}>
                {interest}
              </span>
            ))}
          </div>
        </AnimatedWrapper>
      </section>

      {/* Experience timeline */}
      <section style={{ paddingBottom: "4rem" }}>
        <AnimatedWrapper>
          <SectionTitle title="Experience & Education" />
        </AnimatedWrapper>
        <Timeline />
      </section>

      {/* Skills */}
      <section className="section" style={{ paddingTop: "1rem" }}>
        <AnimatedWrapper>
          <SectionTitle
            title="Technical Skills"
            subtitle="Programming languages, frameworks, tools, and platforms I work with."
          />
        </AnimatedWrapper>
        <SkillsGrid />
      </section>
    </div>
  );
}
