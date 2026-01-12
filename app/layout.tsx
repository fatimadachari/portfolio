import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // Título: Nome | Especialidades principais (Baseado no seu CV)
  title: "Fátima Dachari | Full-Stack & Data Science",
  
  // Descrição: Resumo de impacto com suas palavras-chave principais
  description: "Portfólio de Fátima Dachari. Desenvolvedora de Software especializada na união entre Engenharia (React, .NET MAUI) e Ciência de Dados (Python, Analytics).",
  
  // Keywords: Ajuda buscadores a te acharem
  keywords: [
    "Fátima Dachari", 
    "Full-Stack Developer", 
    "Data Science", 
    "React", 
    "Next", 
    "Nest", 
    ".NET MAUI", 
    ".NET", 
    "C#", 
    "Python", 
    "Portfólio"
  ],
  
  // Configuração de ícones (aponta para o SVG que criamos)
  icons: {
    icon: "/icon.svg",
  },
  
  // Open Graph (Como aparece no LinkedIn/WhatsApp)
  openGraph: {
    title: "Fátima Dachari | Engenharia de Software & Dados",
    description: "Confira meus projetos em Full-Stack e Análise de Dados. Transformando código em soluções inteligentes.",
    url: "https://portfolio-fatima-dachari.vercel.app", // Coloque a URL real depois do deploy
    siteName: "Portfólio Fátima Dachari",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}