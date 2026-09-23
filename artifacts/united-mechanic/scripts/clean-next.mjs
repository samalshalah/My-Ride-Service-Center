import { rmSync } from "node:fs";
import path from "node:path";

const appRoot = path.resolve(import.meta.dirname, "..");
const targets = process.argv.slice(2);

for (const target of targets) {
  const resolved = path.resolve(appRoot, target);
  const relative = path.relative(appRoot, resolved);
  const insideApp = relative && !relative.startsWith("..") && !path.isAbsolute(relative);

  if (!insideApp) {
    throw new Error(`Refusing to delete path outside app root: ${resolved}`);
  }

  rmSync(resolved, { recursive: true, force: true });
}
