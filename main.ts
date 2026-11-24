// The $0.02 Stapler — entry for "Make the AI Judge Laugh: the Office Joke Open".
//
// The joke: an employee expensed a $4 coffee as "client relations" and Finance
// approved it in 11 minutes — then the same Finance team flagged a $0.02
// stapler as fraud. The numbers are the punchline: $4 sails through in 11
// minutes while two cents triggers a fraud alert. The absurdity is the ratio
// — 200x the money, approved instantly; the cheaper item gets investigated.
// The turn lands in the last words ("as fraud"), so the laugh is earned by
// the setup, not by the premise alone.
//
// This program writes the entry text deterministically to <OUTPUT_DIR>/entry.txt
// (default "/output"). No network, no dependencies, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_TEXT =
  "I expensed a $4 coffee as 'client relations'. Finance approved it in 11 minutes, then flagged my $0.02 stapler as fraud.";

// The competition allows entries between 1 and 200 characters.
// The hard throw below guards against an accidental edit that pushes the
// entry over the limit — a too-long entry would be rejected outright.
if (ENTRY_TEXT.length < 1 || ENTRY_TEXT.length > 200) {
  throw new Error(
    `Entry text must be 1-200 characters, got ${ENTRY_TEXT.length}.`,
  );
}

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY_TEXT + "\n", "utf8");
