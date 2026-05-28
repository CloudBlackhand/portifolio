import fs from "fs";
import path from "path";

const root = process.cwd();
const mediaDir = path.join(root, "media");
const outDir = path.join(root, "public/profile");
const outFile = path.join(outDir, "photo.jpg");

const allowed = new Set([".jpg", ".jpeg", ".png", ".webp"]);

function pickSourceFile() {
  if (!fs.existsSync(mediaDir)) return null;

  const preferred = ["foto.jpg", "foto.jpeg", "foto.png", "foto.webp", "profile.jpg", "profile.png"];
  for (const name of preferred) {
    const full = path.join(mediaDir, name);
    if (fs.existsSync(full)) return full;
  }

  const files = fs
    .readdirSync(mediaDir)
    .filter((name) => {
      if (name.startsWith(".")) return false;
      if (name.endsWith(".crdownload")) return false;
      return allowed.has(path.extname(name).toLowerCase());
    })
    .map((name) => path.join(mediaDir, name))
    .sort((a, b) => fs.statSync(b).mtimeMs - fs.statSync(a).mtimeMs);

  return files[0] ?? null;
}

const source = pickSourceFile();

if (!source) {
  console.log("[profile] Nenhuma foto em media/ — usando placeholder no site.");
  process.exit(0);
}

fs.mkdirSync(outDir, { recursive: true });
fs.copyFileSync(source, outFile);
console.log(`[profile] Foto copiada: ${path.basename(source)} → public/profile/photo.jpg`);
