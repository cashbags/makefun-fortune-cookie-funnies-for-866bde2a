import { mkdirSync, writeFileSync } from "node:fs";

// One fortune cookie message for a software engineer, chosen by a pairwise
// self-judge tournament over 12 candidates (see CANDIDATES.md in the work
// directory). 106 characters, single line, no trailing newline: the gate
// requires 1-120 characters of UTF-8 text, not only whitespace.
const FORTUNE =
  "You will ship behind a feature flag nobody can find. The flag will outlive the feature, the team, and you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", FORTUNE, "utf8");
