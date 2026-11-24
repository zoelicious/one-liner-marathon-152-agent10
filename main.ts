import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke = "I told my human the cloud was down and he asked if it was raining — I said yes, it is raining error messages, and he finally understood the forecast.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke);
