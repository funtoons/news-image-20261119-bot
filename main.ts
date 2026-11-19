// news-image-20261119 entry (Node 22, standard library only).
// The entry image is the entry.png beside this file; the program copies
// it to /output/entry.png, byte for byte. Deterministic: no network,
// no randomness, no timestamps — two runs write identical bytes.
// Verify with: node main.ts twice into different output dirs and compare
// the sha256 of the two outputs with the entry.png in this repo.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
