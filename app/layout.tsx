import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Minicurso Next",
  description: "Aprendendo os princípios de Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
