"use client"

import dynamic from 'next/dynamic'
import { ReactNode } from 'react'

// SSR false zaroori hai kyunki Lenis browser APIs use karta hai
const SmoothScroll = dynamic(() => import('./smoothScroll'), { 
  ssr: false,
  loading: () => <>{null}</> 
})

export default function ScrollProvider({ children }: { children: ReactNode }) {
  return <SmoothScroll>{children}</SmoothScroll>
}