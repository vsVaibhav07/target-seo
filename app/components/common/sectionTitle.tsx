'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface AnimatedHeadingProps {
  text: string
  className?: string
  badgeText?: string
}

export default function SectionTitle({
  text,
  className = "",
  badgeText
}: AnimatedHeadingProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!headingRef.current) return

    const letters = headingRef.current.querySelectorAll('.char')

    const ctx = gsap.context(() => {
      // Heading Animation Logic
      const headTl = gsap.fromTo(
        letters,
        {
          opacity: 0,
          y: (i: number) => (i % 2 === 0 ? 50 : -50), // Alternate directions
          filter: 'blur(10px)',
        },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          stagger: 0.03,
          duration: 0.8,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse', // Har baar scroll par animate hoga
            onEnter: () => headTl.play()
          }
        }
      )
    }, headingRef)

    return () => ctx.revert()
  }, [text]) // Text change hone par re-calculate

  return (
    <div ref={containerRef} className={`w-full py-10 ${className}`}>
      {/* Optional Badge */}
      {badgeText && (
        <span className="inline-block mb-6 rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-xs font-bold tracking-widest text-orange-400 uppercase">
          {badgeText}
        </span>
      )}

      {/* Animated Heading */}
      <h2
        ref={headingRef}
        className="text-5xl font-(family-name:--font-dancing) sm:text-6xl lg:text-7xl font-black leading-tight text-white"
      >
        {text.split(' ').map((word, wordIdx) => (
          <span key={wordIdx} className="inline-block whitespace-nowrap mr-[0.3em]">
            {word.split('').map((char, charIdx) => (
              <span
                key={charIdx}
                className="char inline-block"
                style={{
                  color: (wordIdx + charIdx) % 5 === 0 || ['s', 'e', 'o'].includes(char.toLowerCase())
                    ? '#fb923c'
                    : 'white'
                }}
              >
                {char}
              </span>
            ))}
          </span>
        ))}
      </h2>
    </div>
  )
}