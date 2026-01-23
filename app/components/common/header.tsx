'use client'

import { AnimatePresence, m, LazyMotion, domAnimation } from 'framer-motion'
import { Menu, Phone, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    // FIX 1: Added explicit height (h-20) and forced it to stay consistent
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 h-[72px] lg:h-[80px] flex items-center">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between w-full">
        
        {/* FIX 2: Locked Logo dimensions to prevent layout jump */}
        <Link href="/" className="relative w-[150px] h-[40px] lg:w-[200px] lg:h-[50px]">
          <Image 
            src="/logo.png" 
            fill // Use fill for better responsive control without shift
            priority 
            sizes="(max-w-7xl) 200px"
            alt='Target SEO Solution Logo'
            className="object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-8 font-medium text-slate-700">
          <Link href="/services" className="hover:text-accent transition-colors">Services</Link>
          <Link href="/industries" className="hover:text-accent transition-colors">Industries</Link>
          <Link href="/case-studies" className="hover:text-accent transition-colors">Case Studies</Link>
          <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
          <Link href="/about" className="hover:text-accent transition-colors">About</Link>
        </nav>

        <div className="hidden lg:flex items-center gap-5">
          {/* FIX 3: Reserved width for phone icon to prevent text shift */}
          <a href="tel:+1" className="flex items-center gap-2 font-semibold min-w-[100px]">
            <span className="w-4 h-4"><Phone size={16} /></span>
            Call Now
          </a>
          <Link
            href="/free-audit"
            className="bg-accent text-white px-5 py-2.5 rounded-md font-semibold hover:opacity-90 transition-opacity"
          >
            Free SEO Audit
          </Link>
        </div>

        {/* Mobile Toggle - Fixed box size */}
        <button
          onClick={() => setOpen(true)}
          className="lg:hidden w-10 h-10 flex items-center justify-center"
          aria-label="Open menu"
        >
          <Menu />
        </button>
      </div>

      <LazyMotion features={domAnimation}>
        <AnimatePresence>
          {open && (
            <m.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-0 bg-white z-[60] lg:hidden"
            >
              <div className="flex items-center justify-between px-6 py-4 border-b h-[72px]">
                <span className="text-lg font-bold">Menu</span>
                <button 
                  onClick={() => setOpen(false)} 
                  className="w-10 h-10 flex items-center justify-center"
                  aria-label="Close menu"
                >
                  <X />
                </button>
              </div>

              <div className="flex flex-col gap-6 px-6 py-10 font-medium text-lg">
                <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
                <Link href="/industries" onClick={() => setOpen(false)}>Industries</Link>
                <Link href="/case-studies" onClick={() => setOpen(false)}>Case Studies</Link>
                <Link href="/blog" onClick={() => setOpen(false)}>Blog</Link>
                <Link href="/about" onClick={() => setOpen(false)}>About</Link>

                <Link
                  href="/free-audit"
                  onClick={() => setOpen(false)}
                  className="mt-6 bg-accent text-white text-center py-4 rounded-md font-semibold"
                >
                  Free SEO Audit
                </Link>
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </LazyMotion>
    </header>
  )
}