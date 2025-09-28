"use client";
import { useEffect, useState } from "react";

const getPrefix = () => {
  if (process.env.NODE_ENV === "production") return "/towerdefense-portfolio";
  if (typeof window !== "undefined") {
    const d: any = (window as any).__NEXT_DATA__;
    if (d?.assetPrefix) return d.assetPrefix as string;
    if (d?.basePath) return d.basePath as string;
  }
  return "";
};

const fix = (prefix: string, src?: string) =>
  !src
    ? undefined
    : src.startsWith("http")
    ? src
    : `${prefix}/${src.replace(/^(\.\/+|\.\.\/+)+/, "").replace(/^\/+/, "")}`;

type Props = Omit<React.AudioHTMLAttributes<HTMLAudioElement>, "src"> & {
  src?: string;
};

export default function AudioPrefixed({ src, ...rest }: Props) {
  const [prefix, setPrefix] = useState("");
  useEffect(() => setPrefix(getPrefix()), []);

  const fixed = fix(prefix, src);
  return <audio {...rest} src={fixed} preload="metadata" />;
}
