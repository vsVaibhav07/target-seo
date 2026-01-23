"use client"

import dynamic from 'next/dynamic'

// Aapka original SmoothScroll component yahan dynamic load hoga
const SmoothScroll = dynamic(() => import('./smoothScroll'), { 
  ssr: false 
})

export default function ScrollProvider({ children }: { children: React.ReactNode }) {
  return <SmoothScroll>{children}</SmoothScroll>
}