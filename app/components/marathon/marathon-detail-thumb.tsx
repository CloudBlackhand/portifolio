"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import { MarathonTabletChrome } from "@/app/components/marathon/marathon-tablet-chrome";

type MarathonDetailThumbProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  style?: React.CSSProperties;
  sizes?: string;
};

export function MarathonDetailThumb({
  src,
  alt,
  width,
  height,
  className,
  style,
  sizes,
}: MarathonDetailThumbProps) {
  return (
    <div className="marathon-detail-thumb section-spacing">
      <MarathonTabletChrome headerLeft="sense-mem" headerRight="abstract render">
        <p className="marathon-tablet-kicker">representação ilustrativa · sem captura real</p>
        <div className="marathon-tablet-preview marathon-tablet-preview--detail">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={`marathon-tablet-preview-img ${className ?? ""}`.trim()}
            style={style}
            sizes={sizes}
            priority
          />
          <div className="marathon-tablet-preview-glitch" aria-hidden="true" />
        </div>
      </MarathonTabletChrome>
    </div>
  );
}
