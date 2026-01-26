'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TrendingUp, PhoneCall, Trophy, Users } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

type Stat = {
  value: number
  suffix: string
  label: string
  icon: any
}

const stats: Stat[] = [
  { value: 320, suffix: '%', label: 'Traffic Growth', icon: TrendingUp },
  { value: 4, suffix: 'X', label: 'Lead Increase', icon: PhoneCall },
  { value: 1, suffix: 'st', label: 'Page-1 Rank', icon: Trophy },
  { value: 100, suffix: '+', label: 'Top Clients', icon: Users }
]

export default function ResultsCinematic() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const orbitRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const innerRefs = useRef<(HTMLDivElement | null)[]>([])
  const countRefs = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    if (!sectionRef.current || !orbitRef.current || !headingRef.current) return

    const letters = headingRef.current.querySelectorAll('.char')

    const ctx = gsap.context(() => {
      // 1. Heading Animation (Repeatable)
      const headTl = gsap.fromTo(
        letters,
        {
          opacity: 0,
          y: (i: number) => (i % 2 === 0 ? 50 : -50),
          filter: 'blur(10px)',
        },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          stagger: 0.03,
          duration: 0.8,
          ease: 'back.out(1.7)',
          paused: true,
        }
      )

      // 2. Count-Up Logic (Repeatable)
      const animateNumbers = () => {
        stats.forEach((stat, i) => {
          const obj = { val: 0 }
          gsap.to(obj, {
            val: stat.value,
            duration: 2,
            ease: "power2.out",
            onUpdate: () => {
              if (countRefs.current[i]) {
                countRefs.current[i]!.innerText = Math.floor(obj.val).toString()
              }
            }
          })
        })
      }

      // 3. Pinning & Orbit Rotation
      gsap.to(orbitRef.current, {
        rotate: 360,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=2000',
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          onEnter: () => {
            headTl.restart()
            animateNumbers()
          },
          onEnterBack: () => {
            headTl.restart()
            animateNumbers()
          },
          onUpdate: (self) => {
            const currentRotation = self.progress * 360
            // Har bubble ko counter-rotate karna taaki text level rahe
            innerRefs.current.forEach((el) => {
              if (el) {
                gsap.set(el, { rotate: -currentRotation })
              }
            })
          }
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const headingText = 'Numbers that Move Businesses'
  const CIRCLE_SIZE = 420 // Diameter
  const RADIUS = CIRCLE_SIZE / 2

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full bg-[#020617] px-6 sm:px-12 flex items-center overflow-hidden"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 sm:gap-16 items-center w-full">
        
        {/* Left Side Content */}
        <div className="z-10">
          <span className="inline-block sm:mb-6 rounded-full border border-orange-500/30 bg-orange-500/10 px-5 sm:py-2 text-xs font-bold tracking-widest text-orange-400">
            REAL RESULTS
          </span>

          <h2 ref={headingRef} className="text-5xl font-(family-name:--font-dancing) sm:text-6xl lg:text-7xl font-black leading-tight text-white">
            {headingText.split(' ').map((word, wordIdx) => (
              <span key={wordIdx} className="inline-block whitespace-nowrap mr-[0.3em]">
                {word.split('').map((char, charIdx) => (
                  <span
                    key={charIdx}
                    className="char inline-block"
                    style={{ color: (wordIdx + charIdx) % 5 === 0 ? '#fb923c' : 'white' }}
                  >
                    {char}
                  </span>
                ))}
              </span>
            ))}
          </h2>

          <p className="mt-8 max-w-xl text-lg text-slate-400">
            Measurable growth engineered through precision, data, and execution.
          </p>
        </div>

        {/* Right Side: Orbiting Stats */}
        <div className="relative flex items-center justify-center mb-10 h-[500px] scale-75 md:scale-100 ">
          {/* Visual Outline Circle */}
          <div 
            className="absolute rounded-full border border-white/10 shadow-[0_0_80px_rgba(251,146,60,0.05)]" 
            style={{ width: CIRCLE_SIZE, height: CIRCLE_SIZE }}
          />
          
          {/* Rotating Container (Orbit) */}
          <div
            ref={orbitRef}
            className="relative flex items-center justify-center"
            style={{ width: CIRCLE_SIZE, height: CIRCLE_SIZE }}
          >
            {stats.map((stat, i) => {
              const angle = (360 / stats.length) * i

              return (
                <div
                  key={i}
                  className="absolute"
                  style={{
                    // 1. Rotate to index angle
                    // 2. Move out by RADIUS
                    // 3. Rotate back by index angle to keep bubble upright initially
                    transform: `rotate(${angle}deg) translate(${RADIUS}px) rotate(-${angle}deg)`
                  }}
                >
                  {/* Bubble Content */}
                  <div
                    ref={el => { innerRefs.current[i] = el }}
                    className="flex h-32 w-32 flex-col items-center justify-center rounded-full border border-white/20 bg-slate-900/90 backdrop-blur-2xl shadow-2xl"
                  >
                    <stat.icon className="mb-2 h-6 w-6 text-orange-400" />
                    <div className="text-2xl font-black text-white flex items-baseline">
                      <span ref={el => { countRefs.current[i] = el }}>0</span>
                      <span className="ml-0.5">{stat.suffix}</span>
                    </div>
                    <span className="mt-1 text-[10px] uppercase font-bold tracking-widest text-slate-400 text-center px-3 leading-tight">
                      {stat.label}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}