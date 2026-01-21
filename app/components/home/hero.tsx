'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32 bg-gradient-to-br from-white via-violet-800  to-black">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight mb-6">
            We Help Businesses Rank Higher,
            <br className="hidden sm:block" />
            Get More Leads & Grow Revenue
          </h1>

          <p className="text-lg text-muted mb-10 max-w-xl">
            ROI-driven SEO strategies for local and national businesses.
            No fluff. Just measurable results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              href="/free-audit"
              className="inline-flex items-center justify-center gap-2 bg-accent text-white px-7 py-3 rounded-md font-semibold"
            >
              Get Free SEO Audit
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center px-7 py-3 rounded-md border border-slate-300 font-medium"
            >
              View Case Studies
            </Link>
          </div>

          <p className="text-sm text-muted">
            ⭐⭐⭐⭐⭐ Google Reviews · 100+ Clients · Transparent Reporting
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <Image
            src="/heroImage.svg"
            alt="SEO growth illustration"
            width={640}
            height={540}
            priority
            className="mx-auto"
          />
        </motion.div>
      </div>
    </section>
  )
}
