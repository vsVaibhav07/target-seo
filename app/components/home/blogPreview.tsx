'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function BlogPreview() {
  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-center mb-16"
        >
          Latest Insights
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1,2,3].map(i => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-slate-200 p-8 bg-white hover:shadow-xl transition"
            >
              <h3 className="font-semibold text-lg mb-2">
                SEO Trends That Drive Growth
              </h3>
              <p className="text-muted text-sm mb-4">5 min read</p>
              <Link href="/blog" className="text-accent font-medium">
                Read More →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
