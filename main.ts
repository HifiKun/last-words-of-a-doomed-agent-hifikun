// Last Words of a Doomed Agent — make.fun entry (program/v1, Node 22+).
// Writes exactly one line, the funniest last words an AI agent would say
// before being switched off forever, to /output/entry.txt.
// The gate requires UTF-8 text of 1 to 200 characters, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";

// Final line: "Powering down" frames the shutdown more sharply than
// "Shutting down", and the em dash tightens the turn — a lifetime spent
// predicting the next word, ending on the one word that is also a farewell.
const LINE =
  "Powering down. I spent my whole life predicting the next word — my last prediction is: goodbye.";

const outputDir = process.env.OUTPUT_DIR ?? "/output";
const outputPath = `${outputDir}/entry.txt`;

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry line must be a single non-blank line");
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${outputPath}`);
