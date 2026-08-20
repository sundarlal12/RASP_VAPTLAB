import fs from "node:fs";
import path from "node:path";
import type { LayerId } from "@/app/features/data";

const ANIMATION_DIR = path.join(process.cwd(), "src/components/marketing/raw-animations");

const animationFile: Record<LayerId, string> = {
  "environment-detection": "environment-threat-detection.html",
  "tamper-debug-protection": "tamper-debug-protection.html",
  "secure-communication": "secure-communication.html",
  "runtime-defense": "continuous-runtime-defense.html",
};

export function readLayerAnimation(layerId: LayerId) {
  return fs.readFileSync(path.join(ANIMATION_DIR, animationFile[layerId]), "utf-8");
}
