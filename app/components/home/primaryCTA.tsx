
'use client'

import { motion } from 'framer-motion'

export default function PrimaryCTA() {
  return (
    <section className="py-32 bg-accent text-white text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-extrabold mb-8"
      >
        Get Your FREE SEO Audit & Growth Plan
      </motion.h2>

      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-xl mx-auto grid gap-4 px-6"
      >
        <input className="px-4 py-3 rounded text-black" placeholder="Name" />
        <input className="px-4 py-3 rounded text-black" placeholder="Email" />
        <input className="px-4 py-3 rounded text-black" placeholder="Website" />
        <button className="bg-dark py-3 rounded font-semibold">
          Get My Free Audit
        </button>
      </motion.form>
    </section>
  )
}
