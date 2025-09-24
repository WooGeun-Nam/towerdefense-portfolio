import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ProjectNav from "../../components/ProjectNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WooGeunNam",
  description: "웹 포트폴리오",
  icons: { icon: "./../../Logo.ico" },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-gray-100`}>
        <ProjectNav />
        <main className="pt-16">{children}</main>
        <footer className="py-6 pr-6 text-right text-sm text-gray-500">
          Copyright © 2025. WooGeun-Nam All rights reserved.
        </footer>
      </body>
    </html>
  );
}
