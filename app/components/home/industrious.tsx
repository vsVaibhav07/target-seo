'use client'

import { motion } from 'framer-motion'

const industries = [
  'Law Firms',
  'Healthcare',
  'Home Services',
  'E-commerce',
  'B2B & SaaS'
]

export default function Industries() {
  return (
    <section className="py-28 bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-center mb-16"
        >
          Industries We Serve
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
          {industries.map(industry => (
            <motion.div
              key={industry}
              whileHover={{ y: -6 }}
              className="rounded-xl border border-slate-200 bg-white py-6 font-medium shadow-sm"
            >
              {industry}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
