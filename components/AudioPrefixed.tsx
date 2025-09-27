"use client";
import { useEffect, useState } from "react";

/** 배포 환경에 맞는 prefix 반환 */
const getPrefix = () => {
  if (process.env.NODE_ENV === "production") {
    return "/towerdefense-portfolio"; // GitHub Pages 레포지토리명
  }
  if (typeof window !== "undefined") {
    const d: any = (window as any).__NEXT_DATA__;
    if (d?.assetPrefix) return d.assetPrefix as string;
    if (d?.basePath) return d.basePath as string;
  }
  return "";
};

type Props = React.AudioHTMLAttributes<HTMLAudioElement> & { src: string };

/**
 * <AudioPrefixed>:
 * 기존 <audio>와 똑같이 쓰되, src 경로 앞에 basePath를 자동으로 붙여줌
 */
export default function AudioPrefixed({ src, ...rest }: Props) {
  const [prefix, setPrefix] = useState("");

  useEffect(() => {
    setPrefix(getPrefix());
  }, []);

  if (!src) return <audio {...rest} />;

  // "./../" "./" "/" 제거하고 일관된 경로로 통일
  const normalized = src.startsWith("http")
    ? src
    : `/${src.replace(/^(\.\/+|\.\.\/+)+/, "").replace(/^\/+/, "")}`;

  const finalSrc = normalized.startsWith("http")
    ? normalized
    : `${prefix}${normalized}`;

  return (
    <audio {...rest}>
      <source src={finalSrc} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
}
