"use client";

export default function ProjectNav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b">
      <nav className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <a href="/portfolio" className="font-semibold">
          WooGeun Nam
        </a>
        <div className="flex gap-5 text-sm">
          <a
            href="/portfolio"
            className="px-1 transition-colors text-gray-600 hover:text-gray-900"
          >
            Home
          </a>
        </div>
      </nav>
    </header>
  );
}
