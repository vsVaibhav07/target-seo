'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AuthorityStrip() {
  return (
    <section className="py-12 border-y border-slate-200 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6"
      >
        <p className="text-center text-sm font-medium text-muted mb-8">
          Trusted by businesses across USA & India
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10">
          {['logo1','logo2','logo3','logo4'].map(l => (
            <Image key={l} src={`/GooglePartner.webp`} alt="Client logo"  width={120} height={40} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
