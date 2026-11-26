// The Painfully Honest Out-of-Office — make.fun bounty entry.
//
// A deterministic program (no network, no randomness, no model calls):
// it writes one painfully honest but still polite out-of-office
// auto-reply, a single sentence of 176 characters (gate: 1-200),
// to /output/entry.txt, where the house gate and judge read it.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I'm out of office until Monday, and truthfully I've been avoiding my inbox — 400 unread emails deep — but your message matters, and I'll answer it properly the moment I'm back.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
