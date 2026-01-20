'use client'

import { motion } from 'framer-motion'

const items = [
  'ROI-Focused SEO',
  'Transparent Reporting',
  'Industry-Specific Strategies',
  'Dedicated SEO Manager'
]

export default function WhyUs() {
  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-center mb-16"
        >
          Why Target SEO Solutions
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl p-8 border border-slate-200 bg-white hover:shadow-xl transition"
            >
              <h3 className="font-semibold text-lg">{item}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
