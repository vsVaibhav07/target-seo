'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const services = [
  'Local SEO',
  'Technical SEO',
  'On-Page SEO',
  'Content Marketing',
  'Link Building',
  'SEO Consulting'
]

export default function Services() {
  return (
    <section className="py-28 bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-center mb-16"
        >
          Core SEO Services
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
            >
              <Link
                href="/services"
                className="block h-full rounded-2xl p-8 border border-slate-200 bg-white hover:border-accent hover:shadow-xl transition"
              >
                <h3 className="font-semibold text-xl mb-2">{service}</h3>
                <p className="text-muted text-sm">Learn more →</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
