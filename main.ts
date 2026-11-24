import { mkdirSync, writeFileSync } from "node:fs";

// One job title, 60 characters at most, nothing else.
// A real-sounding job with one hilariously specific twist:
// a professional apologizer, retained by billionaires,
// whose only clients are the people they have wronged.
const TITLE = "Professional Apologizer for Billionaires' Exes";

if (TITLE.length < 1 || TITLE.length > 60 || TITLE.trim().length === 0) {
  throw new Error(`entry must be 1-60 characters, got ${TITLE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TITLE, "utf8");
