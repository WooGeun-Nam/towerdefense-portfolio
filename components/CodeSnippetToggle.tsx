"use client";

import React, { useEffect, useMemo, useState } from "react";

declare global {
  interface Window {
    Prism?: { highlightAll: () => void };
  }
}

type Range = { start: number; end: number };

type CodeSnippetToggleProps = {
  title: string;
  code: string;
  ranges: ReadonlyArray<Range>;
  language?: string;
  highlight?: string;
};

const CodeSnippetToggle: React.FC<CodeSnippetToggleProps> = ({
  title,
  code,
  ranges,
  language = "csharp",
  highlight,
}) => {
  const [open, setOpen] = useState(false);

  const blocks = useMemo(() => {
    const lines = code.split(/\r?\n/);
    return ranges.map(({ start, end }) => ({
      start,
      content: lines.slice(start - 1, end).join("\n"),
    }));
  }, [code, ranges]);

  useEffect(() => {
    if (open) window.Prism?.highlightAll();
  }, [open, blocks]);

  return (
    <div className="bg-gray-900 text-gray-100 rounded-lg shadow">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
      >
        <span>{title}</span>
        <span
          aria-hidden
          className={`transition-transform duration-200 ${
            open ? "rotate-90" : ""
          }`}
        >
          ▶
        </span>
      </button>

      {open &&
        blocks.map(({ start, content }, idx) => (
          <pre
            key={`${title}-${start}-${idx}`}
            className={`overflow-x-auto bg-gray-950 px-4 py-3 text-xs line-numbers ${
              idx === 0 ? "" : "border-t border-gray-800"
            } ${idx === blocks.length - 1 ? "rounded-b-lg" : ""}`}
            data-start={start}
            {...(highlight ? { "data-line": highlight } : {})}
          >
            <code className={`language-${language}`}>{content}</code>
          </pre>
        ))}
    </div>
  );
};

export default CodeSnippetToggle;
