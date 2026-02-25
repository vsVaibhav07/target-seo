"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function DotBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const dots = dotRefs.current;
    
    // Initial Animation: Dots subtly pulsing
    gsap.to(dots, {
      opacity: 0.4,
      duration: 2,
      stagger: { amount: 2, grid: [20, 15], from: "random" },
      repeat: -1,
      yoyo: true
    });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      dots.forEach((dot) => {
        const rect = dot.getBoundingClientRect();
        const dotX = rect.left + rect.width / 2;
        const dotY = rect.top + rect.height / 2;
        const distX = clientX - dotX;
        const distY = clientY - dotY;
        const distance = Math.sqrt(distX * distX + distY * distY);

        if (distance < 180) {
          const power = (180 - distance) / 180;
          gsap.to(dot, {
            x: -distX * power * 0.6,
            y: -distY * power * 0.6,
            scale: 2.5,
            backgroundColor: "#ea580c",
            opacity: 1,
            duration: 0.3,
          });
        } else {
          gsap.to(dot, {
            x: 0, y: 0, scale: 1,
            backgroundColor: "rgba(255,255,255,0.2)",
            opacity: 0.2,
            duration: 0.6,
          });
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 bg-[#020617] overflow-hidden pointer-events-none">
      <div className="flex flex-wrap gap-12 p-10 justify-center items-center h-full">
        {[...Array(200)].map((_, i) => (
          <div
            key={i}
            ref={(el) => { if (el) dotRefs.current[i] = el; }}
            className="w-[2px] h-[2px] rounded-full bg-white/20 shadow-[0_0_10px_rgba(255,255,255,0.1)]"
          />
        ))}
      </div>
    </div>
  );
}