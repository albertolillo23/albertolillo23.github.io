// src/components/ui/SectionTitle.tsx
// Reusable section title with optional subtitle and gradient accent line

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionTitle({ title, subtitle, centered = false }: SectionTitleProps) {
  return (
    <div
      style={{
        marginBottom: "3rem",
        textAlign: centered ? "center" : "left",
      }}
    >
      <h2
        style={{
          fontSize: "clamp(1.8rem, 4vw, 2.4rem)",
          fontWeight: 800,
          color: "var(--fg)",
          letterSpacing: "-0.03em",
          marginBottom: "0.5rem",
        }}
      >
        {title}
      </h2>
      {/* Accent line */}
      <div
        style={{
          width: centered ? "60px" : "48px",
          height: "4px",
          borderRadius: "99px",
          background: "linear-gradient(90deg, var(--accent), var(--violet))",
          margin: centered ? "0.75rem auto 0" : "0.75rem 0 0",
        }}
      />
      {subtitle && (
        <p
          style={{
            marginTop: "1rem",
            color: "var(--fg-muted)",
            fontSize: "1.05rem",
            maxWidth: "560px",
            margin: centered ? "1rem auto 0" : "1rem 0 0",
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
