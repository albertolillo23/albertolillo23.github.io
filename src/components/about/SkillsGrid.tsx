"use client";

// src/components/about/SkillsGrid.tsx
// Grid of skill categories with animated entry

import { motion } from "framer-motion";
import {
  Code2,
  Brain,
  Bot,
  Eye,
  Wrench,
  Globe,
} from "lucide-react";
import { skillGroups } from "@/data/skills";

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 size={20} />,
  Brain: <Brain size={20} />,
  Bot: <Bot size={20} />,
  Eye: <Eye size={20} />,
  Wrench: <Wrench size={20} />,
  Globe: <Globe size={20} />,
};

export function SkillsGrid() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
        gap: "1.25rem",
      }}
    >
      {skillGroups.map((group, i) => (
        <motion.div
          key={group.category}
          className="card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.45, delay: i * 0.07 }}
          style={{ padding: "1.5rem" }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "1rem",
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: "9px",
                background: "var(--accent-glow)",
                color: "var(--accent)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              {iconMap[group.icon]}
            </div>
            <h3
              style={{
                fontWeight: 700,
                fontSize: "0.95rem",
                color: "var(--fg)",
                letterSpacing: "-0.01em",
              }}
            >
              {group.category}
            </h3>
          </div>

          {/* Skills list */}
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {group.skills.map((skill) => (
              <li
                key={skill}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "5px 0",
                  fontSize: "0.875rem",
                  color: "var(--fg-muted)",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, var(--accent), var(--violet))",
                    flexShrink: 0,
                  }}
                />
                {skill}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
