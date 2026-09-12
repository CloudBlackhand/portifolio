import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Oswald, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { SiteHeaderNav } from "@/app/components/site-header-nav";
import "./globals.css";
import "./globals-landing.css";
import "./globals-classified.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cloud Service",
  description:
    "Dev full-stack: sistemas de gestão empresarial, automação de WhatsApp e sites que convertem, em produção.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${spaceGrotesk.variable} ${oswald.variable} ${geistMono.variable}`}
    >
      <body>
        <div className="site-blueprint-frame" aria-hidden="true">
          <span className="site-blueprint-tick site-blueprint-tick--tl" />
          <span className="site-blueprint-tick site-blueprint-tick--tr" />
          <span className="site-blueprint-tick site-blueprint-tick--bl" />
          <span className="site-blueprint-tick site-blueprint-tick--br" />
          <span className="site-blueprint-coord site-blueprint-coord--tl">
            proj. cs-012
          </span>
          <span className="site-blueprint-coord site-blueprint-coord--br">
            scale 1:1 · rev 2026.1
          </span>
        </div>
        <header className="site-header">
          <div className="container header-content">
            <Link className="logo" href="/">
              Cloud Service
            </Link>
            <SiteHeaderNav />
          </div>
        </header>
        <main className="site-main">{children}</main>
        <a
          className="whatsapp-float"
          href="https://wa.me/5521971364919"
          target="_blank"
          rel="noreferrer"
          aria-label="Falar comigo no WhatsApp"
        >
          WhatsApp
        </a>
        <footer className="site-footer">
          <div className="footer-panel">
            <nav className="footer-nav" aria-label="Rodapé">
              <Link href="/">início</Link>
              <Link href="/projetos">projetos</Link>
              <Link href="/classificados">classificados</Link>
            </nav>
            <div className="footer-foot-row">
              <div className="footer-copyright">
                © 2026 Cloud Service. Todos os direitos reservados.
              </div>
              <a
                className="footer-cta"
                href="https://wa.me/5521971364919"
                target="_blank"
                rel="noreferrer"
              >
                <span aria-hidden="true">[ </span>
                <span>começar um projeto</span>
                <span aria-hidden="true"> → ]</span>
              </a>
              <ul className="footer-socials">
                <li>
                  <a
                    className="footer-social-link"
                    href="https://wa.me/5521971364919"
                    target="_blank"
                    rel="noreferrer"
                  >
                    wa
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
