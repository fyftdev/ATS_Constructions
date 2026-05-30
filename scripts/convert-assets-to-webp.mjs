import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const assetsDir = path.join(projectRoot, "src", "assets");
const srcDir = path.join(projectRoot, "src");

const imageExts = new Set([".jpg", ".jpeg", ".png"]);

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function convertFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!imageExts.has(ext)) return;

  const outputPath = path.join(
    assetsDir,
    `${path.basename(filePath, ext)}.webp`,
  );

  try {
    await fs.access(outputPath);
    console.log(`skip: ${path.relative(projectRoot, outputPath)}`);
    return;
  } catch {
    // file doesn't exist yet
  }

  await sharp(filePath).webp({ quality: 82 }).toFile(outputPath);
  console.log(`created: ${path.relative(projectRoot, outputPath)}`);
}

async function updateImports() {
  const files = await fs.readdir(srcDir, { recursive: true });
  for (const rel of files) {
    const full = path.join(srcDir, rel);
    const stat = await fs.stat(full);
    if (!stat.isFile()) continue;
    if (!/\.(ts|tsx)$/.test(rel)) continue;

    const text = await fs.readFile(full, "utf8");
    let updated = text;
for (const match of text.matchAll(/@\/assets\/([^)\s'";]+)\.(png|jpg|jpeg)/g)) {
  const [, base] = match;
  const candidate = path.join(assetsDir, `${base}.webp`);
  try {
    await fs.access(candidate);
    updated = updated.replace(match[0], `@/assets/${base}.webp`);
  } catch {
    // keep the original reference if no WebP file exists yet
  }
}

    if (updated !== text) {
      await fs.writeFile(full, updated, "utf8");
      console.log(`updated imports in: ${path.relative(projectRoot, full)}`);
    }
  }
}

async function main() {
  await ensureDir(assetsDir);
  const entries = await fs.readdir(assetsDir, { withFileTypes: true });
  for (const entry of entries) {
    if (!entry.isFile()) continue;
    await convertFile(path.join(assetsDir, entry.name));
  }
  await updateImports();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
