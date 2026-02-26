"use client";
import { m } from "framer-motion";

interface Props {
  text: string;
  className?: string;
}

export default function AnimatedHeading({ text, className }: Props) {
  const letters = text.split("");

  return (
    <h2 className={`flex flex-wrap overflow-hidden ${className}`}>
      {letters.map((char, i) => (
        <m.span
          key={i}
          initial={{ y: i % 2 === 0 ? "-100%" : "100%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: i * 0.02,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </m.span>
      ))}
    </h2>
  );
}