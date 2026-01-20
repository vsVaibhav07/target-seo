'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  MapPin,
  Settings,
  FileText,
  PenTool,
  Link2,
  LineChart
} from 'lucide-react'

const services = [
  { title: 'Local SEO', icon: MapPin },
  { title: 'Technical SEO', icon: Settings },
  { title: 'On-Page SEO', icon: FileText },
  { title: 'Content Marketing', icon: PenTool },
  { title: 'Link Building', icon: Link2 },
  { title: 'SEO Consulting', icon: LineChart }
]

export default function Services() {
  return (
    <section className="relative py-32 overflow-hidden bg-light">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6"
      >
        <motion.h2
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-center mb-20"
        >
          Core SEO Services
        </motion.h2>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className={`relative ${
                  i % 2 === 0 ? 'lg:-mt-8' : 'lg:mt-8'
                }`}
              >
                <Link
                  href="/services"
                  className="group block rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-2xl transition-all"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition">
                    <Icon size={26} />
                  </div>

                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>

                  <p className="text-sm text-muted">
                    High-impact strategies designed to improve rankings,
                    visibility, and conversions.
                  </p>

                  <div className="mt-6 h-[2px] w-0 bg-accent group-hover:w-full transition-all duration-300" />
                </Link>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
