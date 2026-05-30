import type { Metadata } from "next";
import { Barlow_Condensed, Geist, Geist_Mono, IBM_Plex_Mono } from "next/font/google";
import Link from "next/link";
import { MarathonFx, MarathonTicker } from "./components/marathon/MarathonFx";
import "./globals.css";
import "./globals-ep.css";
import "./globals-marathon.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const marathonDisplay = Barlow_Condensed({
  variable: "--font-marathon-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const marathonMono = IBM_Plex_Mono({
  variable: "--font-marathon-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Cloud Service",
  description:
    "Projetos digitais em produção com foco em resultado, clareza e conforto para o cliente.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${marathonDisplay.variable} ${marathonMono.variable}`}
    >
      <body className="marathon-ui">
        <MarathonFx />
        <div className="marathon-grid" aria-hidden="true" />
        <div className="marathon-scanlines" aria-hidden="true" />
        <header className="site-header">
          <div className="container header-content">
            <div className="marathon-header-stack">
              <div className="marathon-status-bar" aria-hidden="true">
                <span>SYS // PORTFOLIO ONLINE</span>
                <span className="marathon-status-pulse">LINK // ACTIVE</span>
              </div>
              <div className="marathon-header-row">
                <Link className="logo marathon-logo" href="/">
                  <span className="marathon-logo-mark" aria-hidden="true">
                    ▸
                  </span>
                  Cloud Service
                </Link>
                <nav className="nav marathon-nav" aria-label="Navegação principal">
                  <Link href="/">Início</Link>
                  <Link href="/projetos">Projetos</Link>
                  <Link href="/contato">Contato</Link>
                </nav>
              </div>
            </div>
          </div>
        </header>
        <MarathonTicker />
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
          <div className="container footer-ep">
            <div className="footer-brand">
              <strong>Cloud Service</strong>
              <p className="footer-tagline">
                Sistemas em produção com foco em resultado e clareza.
              </p>
            </div>
            <nav className="footer-nav" aria-label="Rodapé">
              <Link href="/">Início</Link>
              <Link href="/projetos">Projetos</Link>
              <Link href="/contato">Contato</Link>
            </nav>
            <p className="footer-note">
              Sistemas em produção e trabalhos de marketing e criativo — links para ver no ar ou falar com o
              bot quando disponível.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
