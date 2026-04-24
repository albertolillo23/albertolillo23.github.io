"use client";

import { motion } from "framer-motion";
import { ExternalLink, BookOpen, FileText } from "lucide-react";
import { Publication } from "@/data/publications";

interface PublicationItemProps {
  publication: Publication;
  index: number;
}

export function PublicationItem({ publication, index }: PublicationItemProps) {
  const isArticle = publication.ENTRYTYPE === "article";
  const venue = publication.journal || publication.booktitle || "Unknown Venue";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.1, 0.5) }}
      className="card"
      style={{
        padding: "1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.75rem",
        borderLeft: "4px solid var(--accent)",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem" }}>
        <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--fg)", margin: 0, lineHeight: 1.3 }}>
          {publication.title}
        </h3>
        {publication.url && (
          <a
            href={publication.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View publication"
            style={{ color: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", padding: "0.25rem", borderRadius: "6px", background: "var(--accent-glow)" }}
          >
            <ExternalLink size={16} />
          </a>
        )}
      </div>

      <div style={{ color: "var(--fg-muted)", fontSize: "0.95rem", lineHeight: 1.5 }}>
        {publication.author}
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px", marginTop: "0.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.85rem", fontWeight: 500, color: "var(--fg)" }}>
          {isArticle ? <FileText size={14} color="var(--violet)" /> : <BookOpen size={14} color="var(--violet)" />}
          <span>{venue}</span>
        </div>
        
        <span style={{ fontSize: "0.85rem", color: "var(--fg-muted)" }}>•</span>
        
        <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--accent)", padding: "2px 8px", background: "var(--accent-glow)", borderRadius: "4px" }}>
          {publication.year}
        </span>
      </div>
    </motion.div>
  );
}
