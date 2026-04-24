"use client";

// src/components/layout/Footer.tsx
// Site footer with social links

import { Mail, ExternalLink } from "lucide-react";
import Link from "next/link";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

const socialLinks = [
  {
    id: "footer-github",
    href: "https://github.com/albertolillo23",
    label: "GitHub",
    icon: <GithubIcon size={18} />,
  },
  {
    id: "footer-linkedin",
    href: "https://linkedin.com/in/alberto-lillo",
    label: "LinkedIn",
    icon: <LinkedinIcon size={18} />,
  },
  {
    id: "footer-email",
    href: "mailto:alberto.lillo@unito.it",
    label: "Email",
    icon: <Mail size={18} />,
  },
  {
    id: "footer-scholar",
    href: "https://scholar.google.com/citations?hl=it&user=ZDuD91wAAAAJ",
    label: "Google Scholar",
    icon: <ExternalLink size={18} />,
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "2.5rem 0",
        marginTop: "auto",
      }}
    >
      <div
        className="container-site"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <p style={{ color: "var(--fg-muted)", fontSize: "0.875rem" }}>
          © {year} Alberto Lillo — AIR Lab, UniTo
        </p>

        <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
          {socialLinks.map(({ id, href, label, icon }) => (
            <a
              key={id}
              id={id}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              style={{
                width: 36,
                height: 36,
                borderRadius: "8px",
                border: "1px solid var(--border)",
                background: "var(--bg-card)",
                color: "var(--fg-muted)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.15s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--accent-light)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--fg-muted)";
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--border)";
              }}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
