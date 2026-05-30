"use client";

import Link from "next/link";
import { MarathonStatusTicker } from "@/app/components/marathon/marathon-status-ticker";

const BAR_MESSAGES = [
  "runner shell online · partition restricted",
  "tau ceti iv · warehouse node · tablet sync",
  "sense-mem vault · local clearance only",
];

export function ClassificadosPageBar() {
  return (
    <div className="marathon-world-page-bar">
      <div className="container marathon-world-page-bar-inner">
        <Link className="marathon-world-back" href="/projetos">
          ← Catálogo público
        </Link>
        <MarathonStatusTicker messages={BAR_MESSAGES} intervalMs={3400} />
      </div>
    </div>
  );
}
