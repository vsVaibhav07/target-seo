'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Search, Brain, PhoneCall } from 'lucide-react'
import Image from 'next/image'

const items = [
  { title: 'ROI-Focused SEO', icon: TrendingUp },
  { title: 'Transparent Reporting', icon: Search },
  { title: 'Industry-Specific Strategies', icon: Brain },
  { title: 'Dedicated SEO Manager', icon: PhoneCall }
]

export default function WhyUs() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative w-full h-[300px] md:h-[420px] flex justify-center items-center  rounded-3xl overflow-hidden shadow-xl bg-slate-100"
        >
          <Image
            src="/whyUs.png"
            alt="Why Choose Target SEO Solutions"
            width={480}
            height={480}
            priority
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-10">
            Why Target SEO Solutions
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {items.map(({ title, icon: Icon }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: 'easeOut' }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-accent/10 to-transparent" />
                <div className="relative z-10 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-white shadow-md">
                    <Icon size={22} />
                  </div>
                  <p className="font-semibold text-lg">{title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
