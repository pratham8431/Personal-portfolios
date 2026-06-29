"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export interface CardItem {
  imgUrl: string;
  alt: string;
  videoUrl?: string;
}

interface SocialCardsProps {
  cards: CardItem[];
  activeIndex?: number; // controlled from outside (scroll-driven)
}

const VISIBLE = 5;

function getFanTransform(fanPos: number, total: number) {
  const spread = 11;
  const liftPerCard = 10;
  const sideShift = 20;

  const sign = fanPos % 2 === 0 ? 1 : -1;
  const step = Math.ceil(fanPos / 2);

  return {
    rotate: fanPos === 0 ? 0 : sign * step * spread,
    translateX: fanPos === 0 ? 0 : sign * step * sideShift,
    translateY: step * liftPerCard,
    scale: 1 - fanPos * 0.045,
    zIndex: total - fanPos,
  };
}

function VideoCard({ src, poster }: { src: string; poster: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    ref.current?.play().catch(() => {});
  }, [src]);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
    />
  );
}

export default function SocialCards({ cards, activeIndex: controlledIndex }: SocialCardsProps) {
  const [startIndex, setStartIndex] = useState(0);

  // Sync with controlled index
  useEffect(() => {
    if (controlledIndex !== undefined) {
      setStartIndex(controlledIndex);
    }
  }, [controlledIndex]);

  const visibleCards = Array.from({ length: Math.min(VISIBLE, cards.length) }, (_, i) => ({
    ...cards[(startIndex + i) % cards.length],
    fanPos: i,
    key: (startIndex + i) % cards.length,
  }));

  return (
    <div className="flex flex-col items-center gap-8 select-none">
      {/* Fan */}
      <div className="relative" style={{ width: 260, height: 380 }}>
        {[...visibleCards].reverse().map((card) => {
          const { rotate, translateX, translateY, scale, zIndex } = getFanTransform(
            card.fanPos,
            VISIBLE
          );
          const isFront = card.fanPos === 0;

          return (
            <div
              key={card.key}
              className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl"
              style={{
                transform: `rotate(${rotate}deg) translateX(${translateX}px) translateY(${translateY}px) scale(${scale})`,
                zIndex,
                transformOrigin: "bottom center",
                transition: "transform 0.5s cubic-bezier(0.34, 1.36, 0.64, 1), opacity 0.35s ease",
                opacity: 1 - card.fanPos * 0.13,
              }}
            >
              {/* Video on front card if available, else image */}
              {isFront && card.videoUrl ? (
                <VideoCard src={card.videoUrl} poster={card.imgUrl} />
              ) : (
                <Image
                  src={card.imgUrl}
                  alt={card.alt}
                  fill
                  className="object-cover"
                  sizes="260px"
                  draggable={false}
                />
              )}

              {/* Depth overlay on non-front cards */}
              {!isFront && (
                <div
                  className="absolute inset-0"
                  style={{ background: `rgba(17,17,19,${card.fanPos * 0.2})` }}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Dot indicators */}
      <div className="flex items-center gap-1.5">
        {cards.map((_, i) => (
          <div
            key={i}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === startIndex ? 20 : 6,
              height: 6,
              background: i === startIndex ? "#7CFF6B" : "rgba(255,255,255,0.18)",
            }}
          />
        ))}
      </div>

      <p className="mono text-[11px] text-[#9A9CA3]">Scroll to explore</p>
    </div>
  );
}
