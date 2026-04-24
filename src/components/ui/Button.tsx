// src/components/ui/Button.tsx
// Reusable button component with variants

import { ReactNode } from "react";
import Link from "next/link";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  external?: boolean;
  className?: string;
  id?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const styles: Record<string, React.CSSProperties> = {
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    fontWeight: 600,
    borderRadius: "10px",
    border: "1.5px solid transparent",
    cursor: "pointer",
    transition: "all 0.2s ease",
    textDecoration: "none",
    fontFamily: "inherit",
    letterSpacing: "-0.01em",
  },
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  external = false,
  className,
  id,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const sizeStyles: React.CSSProperties =
    size === "sm"
      ? { padding: "0.45rem 1rem", fontSize: "0.85rem" }
      : size === "lg"
        ? { padding: "0.85rem 2rem", fontSize: "1rem" }
        : { padding: "0.65rem 1.4rem", fontSize: "0.92rem" };

  const variantStyles: React.CSSProperties =
    variant === "primary"
      ? {
          background: "linear-gradient(135deg, var(--accent), var(--violet))",
          color: "#fff",
          borderColor: "transparent",
          boxShadow: "0 4px 18px var(--accent-glow)",
        }
      : variant === "outline"
        ? {
            background: "transparent",
            color: "var(--accent)",
            borderColor: "var(--accent)",
          }
        : {
            background: "transparent",
            color: "var(--fg-muted)",
            borderColor: "transparent",
          };

  const combined: React.CSSProperties = {
    ...styles.base,
    ...sizeStyles,
    ...variantStyles,
    opacity: disabled ? 0.5 : 1,
    pointerEvents: disabled ? "none" : "auto",
  };

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          style={combined}
          id={id}
          className={className}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} style={combined} id={id} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      style={combined}
      id={id}
      type={type}
      disabled={disabled}
      className={className}
    >
      {children}
    </button>
  );
}
