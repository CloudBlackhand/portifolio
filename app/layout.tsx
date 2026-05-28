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
  title: "Portifolio Profissional",
  description:
    "Portifolio de projetos digitais com foco em contexto, solucao e resultados.",
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
              Portifolio
            </Link>
            <nav className="nav nav-with-cta" aria-label="Navegacao principal">
              <Link href="/">Inicio</Link>
              <Link href="/projetos">Projetos</Link>
              <Link href="/contato">Contato</Link>
              <Link className="nav-cta" href="/projetos">
                Ver trabalhos
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
              <strong>Portfolio</strong>
              <p className="footer-tagline">
                Sistemas em producao com foco em resultado e clareza.
              </p>
            </div>
            <nav className="footer-nav" aria-label="Rodape">
              <Link href="/">Inicio</Link>
              <Link href="/projetos">Projetos</Link>
              <Link href="/contato">Contato</Link>
            </nav>
            <p className="footer-note">
              Vendas Hub, Sistema HTTPS WhatsApp, MS, Melhor Preco e CEPBOT — codigo publico apenas onde o
              repositorio e aberto.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
