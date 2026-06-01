import fs from "fs";
import path from "path";
import { chromium } from "playwright";

const root = process.cwd();
const outDir = path.join(root, "public/project-thumbs/captures");

const VIEWPORT = { width: 1200, height: 630 };

fs.mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch({ headless: true });

async function captureVision(page) {
  await page.goto("https://vision-iota-eight.vercel.app", {
    waitUntil: "domcontentloaded",
    timeout: 90000,
  });
  await page.waitForTimeout(12000);
  await page.screenshot({
    path: path.join(outDir, "vision.png"),
    type: "png",
  });
  console.log("[capture-3d] OK vision");
}

async function captureVion(page) {
  const url = process.env.VION_CAPTURE_URL ?? "https://vion-ashen.vercel.app";
  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForTimeout(10000);
  await page.evaluate(() => {
    window.scrollTo(0, Math.floor(document.body.scrollHeight * 0.12));
  });
  await page.waitForTimeout(3000);
  await page.screenshot({
    path: path.join(outDir, "vion.png"),
    type: "png",
  });
  console.log("[capture-3d] OK vion");
}

const page = await browser.newPage({ viewport: VIEWPORT });

try {
  await captureVision(page);
  await captureVion(page);
} catch (error) {
  console.error("[capture-3d] FAIL:", error.message);
  process.exitCode = 1;
} finally {
  await page.close();
  await browser.close();
}
