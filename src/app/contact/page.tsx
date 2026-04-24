// src/app/contact/page.tsx
// Contact page — form + social links

import type { Metadata } from "next";
import { Mail, MapPin, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { ContactForm } from "@/components/contact/ContactForm";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AnimatedWrapper } from "@/components/ui/AnimatedWrapper";
import { profileInfo } from "@/data/skills";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Alberto Lillo — researcher in Human-Robot Interaction at AIR Lab, UniTo.",
};

const contactItems = [
  {
    id: "contact-email-link",
    icon: <Mail size={20} />,
    label: "Email",
    value: profileInfo.email,
    href: `mailto:${profileInfo.email}`,
  },
  {
    id: "contact-github-link",
    icon: <GithubIcon size={20} />,
    label: "GitHub",
    value: "github.com/albertolillo23",
    href: profileInfo.github,
  },
  {
    id: "contact-linkedin-link",
    icon: <LinkedinIcon size={20} />,
    label: "LinkedIn",
    value: "linkedin.com/in/alberto-lillo",
    href: profileInfo.linkedin,
  },
  {
    id: "contact-location",
    icon: <MapPin size={20} />,
    label: "Location",
    value: `${profileInfo.location} — ${profileInfo.lab}, ${profileInfo.university}`,
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <div className="section container-site">
      <AnimatedWrapper>
        <SectionTitle
          title="Get in Touch"
          subtitle="Whether you have a research question, want to collaborate, or just say hi — I'd love to hear from you."
        />
      </AnimatedWrapper>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          gap: "3rem",
          alignItems: "start",
        }}
        className="contact-grid"
      >
        {/* Left — info */}
        <AnimatedWrapper direction="left">
          <div>
            {contactItems.map((item, i) => (
              <div
                key={item.id}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                  padding: "1rem 0",
                  borderBottom: i < contactItems.length - 1 ? "1px solid var(--border)" : "none",
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "10px",
                    background: "var(--accent-glow)",
                    color: "var(--accent)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      color: "var(--fg-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      marginBottom: "2px",
                    }}
                  >
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      id={item.id}
                      href={item.href}
                      target={item.href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      style={{
                        fontSize: "0.9rem",
                        color: "var(--fg)",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        fontWeight: 500,
                      }}
                    >
                      {item.value}
                      {!item.href.startsWith("mailto") && <ExternalLink size={12} />}
                    </a>
                  ) : (
                    <p
                      id={item.id}
                      style={{
                        fontSize: "0.9rem",
                        color: "var(--fg)",
                        fontWeight: 500,
                      }}
                    >
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </AnimatedWrapper>

        {/* Right — form */}
        <AnimatedWrapper direction="right">
          <div
            className="card"
            style={{ padding: "2rem" }}
          >
            <ContactForm />
          </div>
        </AnimatedWrapper>
      </div>

      {/* Responsive styles */}
      <style>{`
        .contact-grid {
          grid-template-columns: 1fr 1.4fr;
        }
        @media (max-width: 720px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
