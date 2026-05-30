import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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

export const metadata: Metadata = {
  title: "Cloud Service — Dev full-stack | Sistemas em produção",
  description:
    "Portfólio de desenvolvimento full-stack: sistemas no ar, automação WhatsApp e landing pages. Disponível para freela, contratos e vagas remotas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <header className="site-header">
          <div className="container header-content">
            <Link className="logo" href="/">
              Cloud Service
              <span className="header-status">
                <span className="header-status-dot" aria-hidden />
                online
              </span>
            </Link>
            <nav className="nav nav-with-cta" aria-label="Navegação principal">
              <Link href="/">Início</Link>
              <Link href="/projetos">Projetos</Link>
              <Link href="/contato">Contato</Link>
              <Link className="nav-cta" href="/contato">
                Contratar
              </Link>
            </nav>
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
          <div className="container footer-ep">
            <div className="footer-brand">
              <strong>Cloud Service</strong>
              <p className="footer-tagline">
                Dev full-stack — sistemas em produção, automação e entrega com
                clareza para quem contrata.
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
