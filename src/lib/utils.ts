// src/lib/utils.ts
// Utility functions

/**
 * Joins class names, filtering out falsy values.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Formats a year or period string for display.
 */
export function formatPeriod(period: string): string {
  return period;
}
