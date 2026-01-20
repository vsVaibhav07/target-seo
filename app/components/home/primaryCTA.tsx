

'use client'

import { motion } from 'framer-motion'

export default function PrimaryCTA() {
  return (
    <section className="relative py-32 bg-gradient-to-br from-[#f97316] via-[#fb923c] to-[#fdba74]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl p-10 md:p-14 grid lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">
              Get Your FREE SEO Audit & Growth Plan
            </h2>
            <p className="text-muted text-lg">
              Discover hidden SEO opportunities, ranking gaps, and a clear growth
              roadmap customized for your business.
            </p>
          </div>

          <form className="grid gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <input
              type="text"
              placeholder="Website URL"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button
              type="submit"
              className="mt-2 bg-accent text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition"
            >
              Get My Free Audit
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
