"use client";

// src/components/home/FeaturedProjects.tsx
// Preview of 3 featured research projects on the home page

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Tag } from "lucide-react";
import Link from "next/link";
import { featuredProjects } from "@/data/projects";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedWrapper } from "@/components/ui/AnimatedWrapper";
import { Button } from "@/components/ui/Button";

export function FeaturedProjects() {
  return (
    <section className="section" style={{ background: "color-mix(in srgb, var(--bg-card) 60%, var(--bg))" }}>
      <div className="container-site">
        <AnimatedWrapper>
          <SectionTitle
            title="Featured Research"
            subtitle="A selection of my main research projects in Human-Robot Interaction and Empathic AI."
          />
        </AnimatedWrapper>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.5rem",
            marginBottom: "3rem",
          }}
        >
          {featuredProjects.map((project, i) => (
            <AnimatedWrapper key={project.id} delay={i * 0.1}>
              <motion.article
                className="card"
                style={{ padding: "1.75rem", height: "100%", display: "flex", flexDirection: "column" }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                {/* Year badge */}
                <div style={{ marginBottom: "1rem" }}>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "var(--accent)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {project.year}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    color: "var(--fg)",
                    marginBottom: "0.75rem",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    color: "var(--fg-muted)",
                    fontSize: "0.9rem",
                    lineHeight: 1.65,
                    flex: 1,
                    marginBottom: "1.25rem",
                  }}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div
                  style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "1.25rem" }}
                >
                  {project.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="tag">
                      <Tag size={10} />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "var(--fg-muted)", fontSize: "0.82rem", display: "flex", alignItems: "center", gap: "4px" }}
                    >
                      <ExternalLink size={13} /> GitHub
                    </a>
                  )}
                  {project.paper && (
                    <a
                      href={project.paper}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "var(--fg-muted)", fontSize: "0.82rem", display: "flex", alignItems: "center", gap: "4px" }}
                    >
                      <ExternalLink size={13} /> Paper
                    </a>
                  )}
                </div>
              </motion.article>
            </AnimatedWrapper>
          ))}
        </div>

        <AnimatedWrapper>
          <div style={{ textAlign: "center" }}>
            <Button href="/portfolio" variant="outline" size="md" id="home-see-all-projects">
              See all projects <ArrowRight size={15} />
            </Button>
          </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
}
