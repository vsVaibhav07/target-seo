
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AuthorityStrip() {
  return (
    <section className="relative py-12 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="max-w-7xl mx-auto px-6"
      >
        <p className="text-center text-xs md:text-sm font-semibold text-muted mb-8 tracking-wide">
          Trusted by businesses across USA & India
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8">
          {['GooglePartner', 'GooglePartner', 'GooglePartner', 'GooglePartner'].map((logo, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4, scale: 1.04 }}
              transition={{ type: 'spring', stiffness: 280, damping: 20 }}
              className="group relative flex items-center justify-center rounded-xl bg-white px-6 py-4 shadow-sm hover:shadow-lg transition"
            >
              <Image
                src={`/${logo}.webp`}
                alt="Partner logo"
                width={110}
                height={36}
                className="grayscale group-hover:grayscale-0 transition duration-300"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
