"use client";

// src/components/about/Timeline.tsx
// Vertical timeline of education and work experience

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Plane } from "lucide-react";
import { experience, TimelineItem } from "@/data/experience";

const typeIcon = {
  education: <GraduationCap size={16} />,
  work: <Briefcase size={16} />,
  internship: <Plane size={16} />,
};

const typeColor = {
  education: "var(--accent)",
  work: "var(--violet)",
  internship: "#10b981",
};

interface TimelineEntryProps {
  item: TimelineItem;
  index: number;
  isLast: boolean;
}

function TimelineEntry({ item, index, isLast }: TimelineEntryProps) {
  const color = typeColor[item.type];

  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        display: "flex",
        gap: "1.25rem",
        position: "relative",
      }}
    >
      {/* Timeline line + dot */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: `color-mix(in srgb, ${color} 15%, var(--bg-card))`,
            border: `2px solid ${color}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color,
            flexShrink: 0,
            zIndex: 1,
          }}
        >
          {typeIcon[item.type]}
        </div>
        {!isLast && (
          <div
            style={{
              width: "2px",
              flex: 1,
              minHeight: "24px",
              background: "var(--border)",
              margin: "6px 0",
            }}
          />
        )}
      </div>

      {/* Content */}
      <div style={{ paddingBottom: isLast ? 0 : "2rem", flex: 1 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "4px",
            marginBottom: "0.25rem",
          }}
        >
          <h3
            style={{
              fontWeight: 700,
              fontSize: "1rem",
              color: "var(--fg)",
              letterSpacing: "-0.01em",
            }}
          >
            {item.title}
          </h3>
          <span
            style={{
              fontSize: "0.78rem",
              color,
              background: `color-mix(in srgb, ${color} 12%, transparent)`,
              padding: "2px 10px",
              borderRadius: "99px",
              fontWeight: 600,
              whiteSpace: "nowrap",
            }}
          >
            {item.period}
          </span>
        </div>

        <p
          style={{
            fontWeight: 500,
            fontSize: "0.9rem",
            color: "var(--fg-muted)",
            marginBottom: "0.5rem",
          }}
        >
          {item.institution} · {item.location}
        </p>

        <p
          style={{
            fontSize: "0.88rem",
            color: "var(--fg-muted)",
            lineHeight: 1.65,
            marginBottom: item.highlights && item.highlights.length > 0 ? "0.6rem" : 0,
          }}
        >
          {item.description}
        </p>

        {item.highlights && item.highlights.length > 0 && (
          <ul style={{ paddingLeft: "1.1rem", margin: 0 }}>
            {item.highlights.map((h) => (
              <li
                key={h}
                style={{
                  fontSize: "0.83rem",
                  color: "var(--fg-muted)",
                  lineHeight: 1.6,
                  marginBottom: "2px",
                }}
              >
                {h}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}

export function Timeline() {
  return (
    <div style={{ maxWidth: "720px" }}>
      {experience.map((item, i) => (
        <TimelineEntry
          key={item.id}
          item={item}
          index={i}
          isLast={i === experience.length - 1}
        />
      ))}
    </div>
  );
}
