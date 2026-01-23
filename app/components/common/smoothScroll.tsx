'use client'

import { ReactNode, useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      // 'smoothTouch' property ko hata diya gaya hai kyunki ye ab LenisOptions ka part nahi hai
      // Agar aapko touch synchronization chahiye toh aap 'syncTouch: true' use kar sakte hain
    })

    // Update ScrollTrigger on Lenis scroll
    lenis.on('scroll', ScrollTrigger.update)

    // GSAP Ticker setup
    const updateTicker = (time: number) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(updateTicker)
    gsap.ticker.lagSmoothing(0)

    // Cleanup function
    return () => {
      lenis.destroy()
      gsap.ticker.remove(updateTicker)
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return <>{children}</>
}