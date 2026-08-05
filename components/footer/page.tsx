import React from "react";
import { Code2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border py-8 px-10 md:px-20 flex items-center justify-between text-muted text-sm">
      <span className="flex items-center gap-2">
        <Code2 size={14} className="text-accent" />
        <span>Ahmer Macasindel</span>
      </span>
      <span>© 2026</span>
    </footer>
  );
}
