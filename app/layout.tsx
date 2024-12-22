import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';  // React import 추가

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Roguelike Tower Defense',  // 제목 수정
  description: '게임 기획서',        // 설명 수정
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={`${inter.className} min-h-screen bg-gray-100`}>
        {children}
      </body>
    </html>
  );
}
