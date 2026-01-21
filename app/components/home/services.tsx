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
    <section className="relative py-28 bg-light overflow-hidden">
      {/* Single blob background */}
      <motion.div
        className=" cloud opacity-5 absolute top-40 left-4 rotate-350 w-1/3  z-0"
        animate={{
          x: [0, 2, 0],
          y: [0, 1, 0],
          rotate: [0, 2, -3, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative max-w-7xl mx-auto px-6 text-center z-10"
      >
        <motion.h2
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold mb-16"
        >
          Core SEO Services
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-6 relative z-10">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                className="flex justify-center"
              >
                <Link
                  href="/services"
                  className="group flex flex-col items-center justify-center w-60 h-60 rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-2xl transition-all"
                >
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-lg font-semibold group-hover:text-accent transition">
                    {service.title}
                  </h3>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
