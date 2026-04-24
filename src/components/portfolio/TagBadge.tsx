// src/components/portfolio/TagBadge.tsx
// Colored tag/badge for project technologies

interface TagBadgeProps {
  label: string;
  size?: "sm" | "md";
}

export function TagBadge({ label, size = "md" }: TagBadgeProps) {
  return (
    <span
      className="tag"
      style={{
        fontSize: size === "sm" ? "0.7rem" : "0.75rem",
        padding: size === "sm" ? "2px 8px" : "3px 10px",
      }}
    >
      {label}
    </span>
  );
}
