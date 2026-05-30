"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Início" },
  { href: "/projetos", label: "Projetos" },
  { href: "/contato", label: "Contato" },
] as const;

export function SiteHeaderNav() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.classList.add("mobile-nav-open");
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.classList.remove("mobile-nav-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="nav-toggle"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="nav-toggle-bar" aria-hidden="true" />
        <span className="nav-toggle-bar" aria-hidden="true" />
        <span className="nav-toggle-bar" aria-hidden="true" />
      </button>

      <nav
        id={panelId}
        className={`nav nav-with-cta${open ? " nav--open" : ""}`}
        aria-label="Navegação principal"
      >
        {NAV_LINKS.map((link) => (
          <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </Link>
        ))}
        <Link className="nav-cta" href="/contato" onClick={() => setOpen(false)}>
          Contratar
        </Link>
      </nav>

      {open ? (
        <button
          type="button"
          className="nav-backdrop"
          aria-label="Fechar menu"
          onClick={() => setOpen(false)}
        />
      ) : null}
    </>
  );
}
