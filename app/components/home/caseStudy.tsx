
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function CaseStudies() {
  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-center mb-16"
        >
          Case Studies
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1,2,3].map(i => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-slate-200 p-8 hover:shadow-xl transition bg-white"
            >
              <h3 className="font-semibold text-lg mb-2">Industry Growth Success</h3>
              <p className="text-muted text-sm mb-4">
                Measurable SEO growth with proven strategies
              </p>
              <Link href="/case-studies" className="text-accent font-medium">
                View Case Study →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
