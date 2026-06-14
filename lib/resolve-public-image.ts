import { existsSync } from "node:fs";
import path from "node:path";

export function resolvePublicImage(src: string, fallback = "/home/placeholder.svg") {
  const relativePath = src.startsWith("/") ? src.slice(1) : src;
  const absolutePath = path.join(process.cwd(), "public", relativePath);

  return existsSync(absolutePath) ? src : fallback;
}
