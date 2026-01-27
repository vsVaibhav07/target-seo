"use client"

import dynamic from 'next/dynamic'
import Hero from './components/home/hero'
import AuthorityStrip from './components/home/authorityStrip'
import HeroExamples from './components/home/heroexamples'


// Dynamic Imports
const WhyUs = dynamic(() => import('./components/home/whyUs'), {
  loading: () => <div className="h-screen bg-[#020617]" />,
  ssr: true 
})

const BlogPreview = dynamic(() => import('./components/home/blogPreview'), {
  loading: () => <div className="h-screen bg-white" />,
  ssr: true 
})
const Services = dynamic(() => import('./components/home/services'), {
  loading: () => <div className="h-screen bg-white" />,
  ssr: true
})

const Results = dynamic(() => import('./components/home/result'), {
  loading: () => <div className="h-screen bg-[#020617]" />,
  ssr: true
})

const CaseStudies = dynamic(() => import('./components/home/caseStudy'), {
  loading: () => <div className="h-screen bg-[#020617]" />,
  ssr: true
})

const Testimonials = dynamic(() => import('./components/home/testimonials'), {
  ssr: false 
})

const PrimaryCTA = dynamic(() => import('./components/home/primaryCTA'), {
  ssr: true
})

export default function Home() {
  return (
    <main className="relative bg-[#020617]">
      {/* 1. HERO: Top Layer */}
      <section className="relative z-10">
        <HeroExamples/>
        {/* <Hero /> */}
        <AuthorityStrip />
      </section>

      {/* 2. WHY US: Dark Section (Base Layer) */}
      <section className="relative z-0">
        <WhyUs />
      </section>

      {/* 3. SERVICES: Light Section (Slides OVER WhyUs) 
          Using shadow and rounded corners to show depth */}
      <section className="relative z-20 -mt-20 shadow-[0_-50px_100px_rgba(0,0,0,0.5)] rounded-t-[3rem] lg:rounded-t-[5rem] overflow-hidden">
        <Services />
      </section>

     
      {/* 5. CASE STUDIES: Overlapping effect usually built-in inside the component */}
      <section className="relative z-30 mt-20">
        <CaseStudies />
      </section>

      {/* 6. TESTIMONIALS & CTA: Floating on top of the final parallax */}
      <section className="relative z-40 bg-white">
        <Testimonials />
        <PrimaryCTA />
        <BlogPreview/>
      </section>
    </main>
  )
}