
'use client'

import { AnimatePresence } from 'framer-motion'
import { Menu, Phone, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-extrabold">
         <Image src={"/logo.png"} width={300} height={300} alt='Target SEO Solution Logo'/>
        </Link>

        <nav className="hidden lg:flex gap-8 font-medium">
          <Link href="/services">Services</Link>
          <Link href="/industries">Industries</Link>
          <Link href="/case-studies">Case Studies</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
        </nav>

        <div className="hidden lg:flex items-center gap-5">
          <a href="tel:+1" className="flex items-center gap-2 font-semibold">
            <Phone size={16} />
            Call Now
          </a>
          <Link
            href="/free-audit"
            className="bg-accent text-white px-5 py-2.5 rounded-md font-semibold"
          >
            Free SEO Audit
          </Link>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="lg:hidden"
          aria-label="Open menu"
        >
          <Menu />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <m.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-50 lg:hidden"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <span className="text-lg font-bold">Menu</span>
              <button onClick={() => setOpen(false)} aria-label="Close menu">
                <X />
              </button>
            </div>

            <div className="flex flex-col gap-6 px-6 py-10 font-medium">
              <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
              <Link href="/industries" onClick={() => setOpen(false)}>Industries</Link>
              <Link href="/case-studies" onClick={() => setOpen(false)}>Case Studies</Link>
              <Link href="/blog" onClick={() => setOpen(false)}>Blog</Link>
              <Link href="/about" onClick={() => setOpen(false)}>About</Link>

              <Link
                href="/free-audit"
                onClick={() => setOpen(false)}
                className="mt-6 bg-accent text-white text-center py-3 rounded-md font-semibold"
              >
                Free SEO Audit
              </Link>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  )
}
