import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import "./globals-ep.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cloud Service | Desenvolvimento web e automação",
  description:
    "Portfólio profissional: sistemas em produção, WhatsApp, integrações e consultoria. Disponível para projetos e freelas.",
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
            </Link>
            <nav className="nav nav-with-cta" aria-label="Navegação principal">
              <Link href="/">Início</Link>
              <Link href="/projetos">Projetos</Link>
              <Link href="/contato">Contato</Link>
              <a
                className="nav-cta"
                href="https://wa.me/5521971364919?text=Ola%2C%20vi%20seu%20portfolio%20e%20quero%20contratar."
                target="_blank"
                rel="noreferrer"
              >
                Contratar
              </a>
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
                Desenvolvimento web, automação WhatsApp e consultoria — disponível
                para projetos.
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
