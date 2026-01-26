"use client"

import dynamic from 'next/dynamic'

// --- Standard Imports (Critical Path / Above the Fold) ---
// Inhe lazy load nahi karna chahiye taaki user ko page turant dikhe.
import Hero from './components/home/hero'
import AuthorityStrip from './components/home/authorityStrip'
import DeepParallaxIndustries from './components/home/industriensWithParallax'
import CarouselIndustries from './components/home/pinnedIndustries'

// --- Lazy Imports (Below the Fold) ---
// Inhe dynamic import karne se bundle size chota ho jata hai.

const WhyUs = dynamic(() => import('./components/home/whyUs'), {
  loading: () => <div className="min-h-[400px] bg-slate-900/10 animate-pulse" />,
  ssr: true 
})

const Services = dynamic(() => import('./components/home/services'), {
  loading: () => <div className="min-h-[600px] bg-slate-900/10 animate-pulse" />,
  ssr: true
})

const Results = dynamic(() => import('./components/home/result'), {
  loading: () => <div className="min-h-[500px] bg-slate-900/10 animate-pulse" />,
  ssr: true
})

const CaseStudies = dynamic(() => import('./components/home/caseStudy'), {
  loading: () => <div className="min-h-[600px] bg-slate-900/10 animate-pulse" />,
  ssr: true
})

const Industries = dynamic(() => import('./components/home/industrious'), {
  loading: () => <div className="min-h-[400px] bg-slate-900/10 animate-pulse" />,
  ssr: true
})

const Testimonials = dynamic(() => import('./components/home/testimonials'), {
  loading: () => <div className="min-h-[500px] bg-slate-900/10 animate-pulse" />,
  ssr: false // Swiper/Sliders ke liye aksar SSR false behtar rehta hai
})

const PrimaryCTA = dynamic(() => import('./components/home/primaryCTA'), {
  loading: () => <div className="min-h-[300px] bg-slate-900/10 animate-pulse" />,
  ssr: true
})

const BlogPreview = dynamic(() => import('./components/home/blogPreview'), {
  loading: () => <div className="min-h-[500px] bg-slate-900/10 animate-pulse" />,
  ssr: true
})

export default function Home() {
  return (
    <main>
      {/* 1. Immediate Load */}
      <Hero />
      <AuthorityStrip />

      {/* 2. Lazy Loaded Sections */}
      <WhyUs />
      <Services />
      <Results />
      <CaseStudies />
      {/* <Industries/> */}
      {/* <DeepParallaxIndustries/> */}
      {/* <CarouselIndustries/> */}
      <Testimonials />
      <PrimaryCTA />
      <BlogPreview />
    </main>
  )
}