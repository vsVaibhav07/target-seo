"use client";
import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  // Center point logic: initial position screen se bahar rakhein
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);

  // Stiffness ko thoda kam aur damping ko balance kiya hai taaki overshoot na ho
  const springConfig = { damping: 30, stiffness: 250, mass: 0.5 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      // Direct coordinates use karein, offset motion.div ke andar handle karenge
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // In tags par cursor react karega
      if (target.closest("a, button, h1, h2, .group, p")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main Cursor Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden lg:flex items-center justify-center border border-white bg-white mix-blend-difference"
        style={{
          x,
          y,
          // Cursor ko exact center karne ke liye translate use karein
          translateX: "-50%",
          translateY: "-50%",
          width: isHovering ? 90 : 25,
          height: isHovering ? 90 : 25,
        }}
      >
        {isHovering && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-accent text-[12px] font-black uppercase tracking-widest"
          >
           
          </motion.span>
        )}
      </motion.div>

      {/* Center Dot (Fixed Precision) */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-accent rounded-full pointer-events-none z-[10000] hidden lg:block"
        style={{ 
            x: cursorX, 
            y: cursorY,
            translateX: "-50%",
            translateY: "-50%",
        }}
      />
    </>
  );
}