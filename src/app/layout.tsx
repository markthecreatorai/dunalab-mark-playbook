import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Como Contratar uma IA — Duna Lab",
  description:
    "Playbook prático para transformar IA em membro operacional com identidade, memória e segurança.",
  openGraph: {
    title: "Como Contratar uma IA — Duna Lab",
    description:
      "Saia do chat que esquece e opere com IA como membro real do time.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
