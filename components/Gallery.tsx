"use client";
import { useEffect, useState } from "react";

type Img = { src: string; alt?: string };
type Props = {
  images: Img[];
  coverOnly?: boolean; // true면 대표 1장만 노출
  title?: string; // 오버레이 텍스트
};

export default function Gallery({ images, coverOnly = false, title }: Props) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openAt = (i: number) => {
    setIndex(i);
    setOpen(true);
  };
  const close = () => setOpen(false);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // 대표 1장만
  if (coverOnly) {
    const img = images[0];
    return (
      <>
        <button
          type="button"
          onClick={() => openAt(0)}
          className="group relative block overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
        >
          <img
            src={img.src}
            alt={img.alt ?? ""}
            className="w-full h-auto object-cover"
          />
          {/* 오버레이 */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute inset-x-0 bottom-3 mx-auto w-fit rounded-full bg-white/90 px-4 py-1 text-sm font-medium text-gray-900 group-hover:bg-white">
            {title ? `${title} • Click to view` : "Click to view"}
          </div>
        </button>

        {open && (
          <Lightbox
            images={images}
            index={index}
            onClose={close}
            onPrev={prev}
            onNext={next}
          />
        )}
      </>
    );
  }

  // 썸네일 그리드(필요 시)
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {images.map((img, i) => (
          <button
            key={i}
            type="button"
            onClick={() => openAt(i)}
            className="group block rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm transition-colors hover:border-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
          >
            <img
              src={img.src}
              alt={img.alt ?? ""}
              className="w-full h-56 object-cover"
            />
          </button>
        ))}
      </div>

      {open && (
        <Lightbox
          images={images}
          index={index}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </>
  );
}

function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images: Img[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      aria-modal="true"
      role="dialog"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full px-6"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[index].src}
          alt={images[index].alt ?? ""}
          className="mx-auto max-h-[82vh] w-auto rounded-xl shadow-lg"
        />
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-6 rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-gray-900 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          Close
        </button>
        <button
          type="button"
          onClick={onPrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          aria-label="Previous image"
        >
          ←
        </button>
        <button
          type="button"
          onClick={onNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          aria-label="Next image"
        >
          →
        </button>
        <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/80">
          {index + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}
