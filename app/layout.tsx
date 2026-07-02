import type { Metadata } from "next";
import Script from "next/script";
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
      <body>
        {children}

        <link rel="stylesheet" href="/chatbot/widget.css" />
        <Script src="/chatbot/content.js" strategy="beforeInteractive" />
        <Script src="/chatbot/widget.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}