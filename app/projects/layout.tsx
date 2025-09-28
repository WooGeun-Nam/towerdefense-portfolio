// app/projects/layout.tsx
import type { Metadata } from "next";
import ProjectNav from "../../components/ProjectNav"; // ProjectNav 쓰려면 교체
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] }); // 기존 그대로

export const metadata: Metadata = {
  title: "WooGeun Nam",
  description: "웹 포트폴리오",
  icons: { icon: "/Logo.ico" },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <ProjectNav />
      <main className="mx-auto w-full max-w-6xl pt-16">{children}</main>
      <footer className="py-6 pr-6 text-right text-sm text-gray-500">
        Copyright © 2025. WooGeun-Nam All rights reserved.
      </footer>
    </section>
  );
}
