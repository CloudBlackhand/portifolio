import fs from "fs";
import path from "path";

export type ProfilePhoto = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

const ALT = "Foto profissional — Cloud Service";

export function getProfilePhoto(): ProfilePhoto {
  const publicDir = path.join(process.cwd(), "public/profile");
  const candidates = [
    { file: "photo.jpg", w: 420, h: 420 },
    { file: "photo.png", w: 420, h: 420 },
    { file: "photo.webp", w: 420, h: 420 },
  ];

  for (const { file, w, h } of candidates) {
    if (fs.existsSync(path.join(publicDir, file))) {
      return { src: `/profile/${file}`, width: w, height: h, alt: ALT };
    }
  }

  return {
    src: "/profile-placeholder.svg",
    width: 420,
    height: 420,
    alt: ALT,
  };
}
