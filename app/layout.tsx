import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Église Sainte-Angèle",
  description: "Sainte-Angèle Parish website in English, French, and Italian.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
