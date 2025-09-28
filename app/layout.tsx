// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] }); // 기존 그대로

export const metadata: Metadata = {
  title: "WooGeun Nam",
  description: "웹 포트폴리오",
  icons: { icon: "/Logo.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} min-h-dvh bg-gray-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}
