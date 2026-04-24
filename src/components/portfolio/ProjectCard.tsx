"use client";

// src/components/portfolio/ProjectCard.tsx
// Full project card with hover animations, tags, and links

import { motion } from "framer-motion";
import { FileText, ExternalLink, CalendarDays } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { Project } from "@/data/projects";
import { TagBadge } from "./TagBadge";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.article
      className="card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -6 }}
      style={{
        padding: "2rem",
        cursor: "default",
        display: "flex",
        flexDirection: "column",
      }}
      aria-label={`Project: ${project.title}`}
    >
      {/* Header row */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "0.75rem",
          gap: "1rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {/* Color dot for featured */}
          {project.featured && (
            <span
              aria-label="Featured project"
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "linear-gradient(135deg, var(--accent), var(--violet))",
                flexShrink: 0,
              }}
            />
          )}
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              fontSize: "0.78rem",
              color: "var(--fg-muted)",
            }}
          >
            <CalendarDays size={12} />
            {project.year}
          </span>
        </div>

        {/* Action links */}
        <div style={{ display: "flex", gap: "8px", flexShrink: 0 }}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub repository`}
              style={{
                color: "var(--fg-muted)",
                transition: "color 0.15s ease",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--fg-muted)")
              }
            >
              <GithubIcon size={18} />
            </a>
          )}
          {project.paper && (
            <a
              href={project.paper}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} paper`}
              style={{
                color: "var(--fg-muted)",
                transition: "color 0.15s ease",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--fg-muted)")
              }
            >
              <FileText size={18} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              style={{
                color: "var(--fg-muted)",
                transition: "color 0.15s ease",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--fg-muted)")
              }
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Title */}
      <h3
        style={{
          fontSize: "1.2rem",
          fontWeight: 700,
          color: "var(--fg)",
          marginBottom: "0.75rem",
          letterSpacing: "-0.02em",
        }}
      >
        {project.title}
      </h3>

      {/* Description */}
      <p
        style={{
          color: "var(--fg-muted)",
          fontSize: "0.9rem",
          lineHeight: 1.7,
          flex: 1,
          marginBottom: "1.5rem",
        }}
      >
        {project.longDescription ?? project.description}
      </p>

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {project.tags.map((tag) => (
          <TagBadge key={tag} label={tag} />
        ))}
      </div>
    </motion.article>
  );
}
