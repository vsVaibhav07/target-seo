'use client'

import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { Menu, Phone, X, Search, Sparkles } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const navLinks = [
  { name: 'Services', href: '/services' },
  { name: 'Industries', href: '/industries' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
]

export default function MagicalHeader() {
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()

  // Dynamic values based on scroll
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ['rgba(255, 255, 255, 0)', 'rgba(2, 6, 23, 0.8)'] // From transparent to Dark Slate
  )
  const padding = useTransform(scrollY, [0, 50], ['24px', '12px'])
  const backdropBlur = useTransform(scrollY, [0, 50], ['blur(0px)', 'blur(12px)'])
  const maxWidth = useTransform(scrollY, [0, 50], ['100%', '90%'])
  const borderRadius = useTransform(scrollY, [0, 50], ['0px', '100px'])
  const boxShadow = useTransform(
    scrollY,
    [0, 50],
    ['none', '0 10px 30px -10px rgba(0,0,0,0.5)']
  )

  return (
    <div className="fixed top-0 left-0 w-full z-[100] flex justify-center pt-2 px-4 pointer-events-none">
      <motion.header
        style={{
          backgroundColor,
          paddingTop: padding,
          paddingBottom: padding,
          backdropFilter: backdropBlur,
          width: maxWidth,
          borderRadius,
          boxShadow,
        }}
        className="pointer-events-auto border border-white/5 flex items-center transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between w-full">
          
          {/* Logo with Glow Effect */}
          <Link href="/" className="relative group overflow-visible">
            <div className="absolute -inset-2 bg-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative w-[130px] h-[35px] lg:w-[160px] lg:h-[70px]">
              <Image 
                src="/logo2.png" 
                fill 
                priority 
                alt='Logo'
                className="object-contain brightness-100"
              />
            </div>
          </Link>

          {/* Desktop Nav - Floating Pill Style */}
          <nav className="hidden lg:flex items-center gap-2 bg-white/5 p-1 rounded-full border border-white/10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="relative px-5 py-2 text-sm font-medium text-slate-200 hover:text-white transition-colors group"
              >
                <span className="relative z-10">{link.name}</span>
                <motion.div 
                  className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover:opacity-100"
                  layoutId="hoverBg"
                  transition={{ type: 'spring', bounce: 0.3, duration: 0.6 }}
                />
              </Link>
            ))}
          </nav>

          {/* CTA Group */}
          <div className="hidden lg:flex items-center gap-6">
            <a href="tel:+1" className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors text-sm font-semibold">
              <Phone size={14} className="animate-pulse" />
              <span>Call Expert</span>
            </a>
            
            <Link
              href="/free-audit"
              className="relative overflow-hidden bg-blue-600 text-white px-6 py-2.5 rounded-full font-bold group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-2">
                Free Audit <Sparkles size={14} />
              </span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setOpen(true)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-white bg-white/10 rounded-full"
          >
            <Menu size={20} />
          </motion.button>
        </div>

        {/* Magical Mobile Menu Overlay */}
        <AnimatePresence>
          {open && (
            <>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpen(false)}
                className="fixed inset-0 bg-black/60 backdrop-blur-md z-[110] lg:hidden"
              />
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 h-full w-[85%] bg-slate-950 z-[120] p-8 lg:hidden flex flex-col shadow-2xl"
              >
                <div className="flex items-center justify-between mb-12">
                  <span className="text-xl font-black text-blue-500 italic uppercase">Navigation</span>
                  <button onClick={() => setOpen(false)} className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-full text-white">
                    <X size={24} />
                  </button>
                </div>

                <div className="flex flex-col gap-8">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i }}
                    >
                      <Link 
                        href={link.href} 
                        onClick={() => setOpen(false)}
                        className="text-3xl font-bold text-white hover:text-blue-500 transition-colors"
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mt-12 space-y-4"
                  >
                    <Link
                      href="/free-audit"
                      onClick={() => setOpen(false)}
                      className="block w-full bg-blue-600 text-white text-center py-4 rounded-2xl font-black text-lg shadow-lg shadow-blue-500/20"
                    >
                      GET FREE AUDIT
                    </Link>
                    <p className="text-slate-500 text-center text-sm">Target SEO Solution — Global HQ</p>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.header>
    </div>
  )
}