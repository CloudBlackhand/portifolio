import fs from "fs";
import path from "path";
import { chromium } from "playwright";

const root = process.cwd();
const outDir = path.join(root, "public/project-thumbs/captures");

const targets = [
  { slug: "melhor-preco", url: "https://melhorpreconet.up.railway.app" },
  { slug: "cltechshop", url: "https://cltechshop.netlify.app" },
  { slug: "rapidcred", url: "https://rapidcred.netlify.app" },
  { slug: "cn-construtora", url: "https://cnconstrutora.netlify.app" },
  { slug: "calculo-juridico-ebook", url: "https://calculojuridicoebook.netlify.app" },
];

const VIEWPORT = { width: 1200, height: 630 };

fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch({ headless: true });

for (const { slug, url } of targets) {
  const page = await browser.newPage({ viewport: VIEWPORT });
  const outFile = path.join(outDir, `${slug}.png`);

  try {
    await page.goto(url, { waitUntil: "networkidle", timeout: 45000 });
    await page.waitForTimeout(1500);
    await page.screenshot({ path: outFile, type: "png" });
    console.log(`[capture] OK ${slug} -> ${path.relative(root, outFile)}`);
  } catch (error) {
    console.error(`[capture] FAIL ${slug}:`, error.message);
    process.exitCode = 1;
  } finally {
    await page.close();
  }
}

await browser.close();
