'use client'

import { motion } from 'framer-motion'

const stats = [
  ['320%', 'Avg Traffic Growth'],
  ['4X', 'Lead Increase'],
  ['Page 1', 'Google Rankings'],
  ['100+', 'Long-Term Clients']
]

export default function Results() {
  return (
    <section className="py-28 bg-dark text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {stats.map(([value, label], i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-4xl font-extrabold text-accent">{value}</p>
              <p className="mt-2 text-slate-400">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
