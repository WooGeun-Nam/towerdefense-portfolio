import TopNav from "../../components/TopNav";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WooGeunNam",
  description: "웹 포트폴리오",
  icons: {
    icon: "./../Logo.ico",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-gray-100`}>
        {/* 상단 고정 배너 */}
        <TopNav />
        {/* 헤더 높이만큼 오프셋 */}
        <div className="pt-16">{children}</div>
        {/* 푸터 */}
        <footer className="py-6 pr-6 text-right text-sm text-gray-500">
          Copyright © 2025. WooGeun-Nam All rights reserved.
        </footer>
      </body>
    </html>
  );
}
