import fs from "fs";
import path from "path";

const dir = path.join(process.cwd(), "public/project-thumbs");
const files = fs.readdirSync(dir).filter((name) => name.startsWith("topsecret-") && name.endsWith(".svg"));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, "utf8");
  const fixed = content
    .replace(/\uFFFD/g, " - ")
    .replace(/ · /g, " - ")
    .replace(/·/g, " - ");

  if (fixed !== content) {
    fs.writeFileSync(filePath, fixed, "utf8");
    console.log(`[fix] ${file}`);
  } else {
    console.log(`[ok]  ${file}`);
  }
}
