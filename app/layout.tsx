import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import PrismHydrator from "../components/PrismHydrator";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WooGeun Nam",
  description: "웹 포트폴리오",
  icons: { icon: "./Logo.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="scroll-smooth" suppressHydrationWarning>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"
        strategy="beforeInteractive"
        onLoad={() => {
          const load = (src: string) =>
            new Promise<void>((resolve) => {
              const el = document.createElement("script");
              el.src = src;
              el.defer = true;
              el.onload = () => resolve();
              document.head.appendChild(el);
            });

          load(
            "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-csharp.min.js"
          )
            .then(() =>
              load(
                "https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/line-numbers/prism-line-numbers.min.js"
              )
            )
            .then(() => window.Prism?.highlightAll());
        }}
      />

      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/line-numbers/prism-line-numbers.min.css"
        />
      </head>

      <body className={`${inter.className} min-h-dvh bg-gray-100 antialiased`}>
        <PrismHydrator />
        {children}
      </body>
    </html>
  );
}
