"use client";

// src/components/home/HeroSection.tsx
// Hero section with animated intro, bio, and CTA buttons

import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin, FlaskConical } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { profileInfo } from "@/data/skills";

// Stagger animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

export function HeroSection() {
  return (
    <section
      className="section"
      style={{ position: "relative", overflow: "hidden", paddingTop: "6rem" }}
    >
      {/* Background glow blobs */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "0",
          left: "-10%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container-site">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ maxWidth: "760px" }}
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "6px 14px",
                borderRadius: "99px",
                background: "var(--accent-glow)",
                color: "var(--accent)",
                fontSize: "0.82rem",
                fontWeight: 600,
                marginBottom: "1.5rem",
                border: "1px solid color-mix(in srgb, var(--accent) 30%, transparent)",
              }}
            >
              <FlaskConical size={13} />
              Open to collaborations
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={itemVariants}
            style={{
              fontSize: "clamp(2.4rem, 6vw, 4.2rem)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
              marginBottom: "1rem",
              color: "var(--fg)",
            }}
          >
            Hi, I&rsquo;m{" "}
            <span className="gradient-text">Alberto Lillo</span>
          </motion.h1>

          {/* Role & affiliation */}
          <motion.div
            variants={itemVariants}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "var(--fg-muted)",
              fontSize: "1.05rem",
              fontWeight: 500,
              marginBottom: "1.5rem",
              flexWrap: "wrap",
            }}
          >
            <MapPin size={16} style={{ flexShrink: 0 }} />
            <span>
              {profileInfo.role} · {profileInfo.lab},{" "}
              Università degli Studi di Torino
            </span>
          </motion.div>

          {/* Bio */}
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: "1.15rem",
              color: "var(--fg-muted)",
              lineHeight: 1.75,
              marginBottom: "2rem",
              maxWidth: "640px",
            }}
          >
            {profileInfo.bio}
          </motion.p>

          {/* Research interests */}
          <motion.div
            variants={itemVariants}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
              marginBottom: "2.5rem",
            }}
          >
            {profileInfo.researchInterests.map((interest) => (
              <span key={interest} className="tag">
                {interest}
              </span>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            variants={itemVariants}
            style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}
          >
            <Button href="/portfolio" variant="primary" size="lg" id="hero-portfolio-cta">
              View my research
              <ArrowRight size={16} />
            </Button>
            <Button href="/contact" variant="outline" size="lg" id="hero-contact-cta">
              Get in touch
            </Button>
            <Button
              href="/curriculum.pdf"
              variant="ghost"
              size="lg"
              external
              id="hero-cv-download"
            >
              <Download size={15} />
              CV
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
