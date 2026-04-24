"use client";

import { useMemo } from "react";
import { publications } from "@/data/publications";
import { PublicationItem } from "./PublicationItem";

export function PublicationsList() {
  const sortedPublications = useMemo(() => {
    return [...publications].sort((a, b) => {
      return parseInt(b.year) - parseInt(a.year);
    });
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      {sortedPublications.map((pub, index) => (
        <PublicationItem key={pub.ID || index} publication={pub} index={index} />
      ))}
    </div>
  );
}
