'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion'
import { TrendingUp, BarChart3, Search, Zap, Globe2 } from 'lucide-react'

// COUNTER COMPONENT
const Counter = ({ value, duration = 2 }: { value: number; duration?: number }) => {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, amount: 0.5 })

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, { duration: duration, ease: "easeOut" })
      return controls.stop
    } else {
      count.set(0) // Reset when out of view
    }
  }, [inView, value, count, duration])

  return <motion.span ref={ref}>{rounded}</motion.span>
}

const stats = [
  { label: "Traffic Growth", value: 240, suffix: "%", sub: "Average increase" },
  { label: "Keywords Ranked", value: 12, suffix: "k+", sub: "In top 3 positions" },
  { label: "ROI Generated", value: 15, suffix: "x", sub: "For our B2B clients" },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
}

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 }
}

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 }
}

export default function WhyUs() {
  return (
    <section className="relative bg-gradient-to-br from-[#020617] via-slate-950 to-[#020617] py-24 px-6 overflow-hidden border-t border-white/5">

      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-600/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-16"
        >
          <h3 className="text-orange-500 font-mono tracking-[0.2em] uppercase text-xs mb-4">
            The Performance Edge
          </h3>
          <h2 className="text-5xl md:text-7xl font-dancing text-white mb-6 leading-tight">
            Why Brands Trust Our Data
          </h2>
          <p className="text-slate-400 text-lg">
            We don't just "do SEO." We build a compounding asset that outranks competitors and drives revenue.
          </p>
        </motion.div>

        {/* Stats Section with Counter */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 p-10 rounded-[3rem] bg-slate-900/40 border border-white/10 backdrop-blur-xl"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="flex flex-col items-center md:items-start"
            >
              <div className="text-5xl md:text-6xl font-bold text-white mb-2 flex items-baseline gap-1">
                <Counter value={stat.value} />
                <span className="text-orange-500 text-3xl">
                  {stat.suffix}
                </span>
              </div>
              <p className="text-slate-200 font-bold uppercase text-xs tracking-widest">
                {stat.label}
              </p>
              <p className="text-slate-500 text-xs mt-1">{stat.sub}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* LEFT BIG CARD */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-7 bg-gradient-to-br from-blue-600/10 to-transparent border border-white/10 rounded-[3rem] p-10 flex flex-col justify-between group overflow-hidden relative"
          >
            <div>
              <div className="flex justify-between items-start mb-10">
                <div>
                  <h4 className="text-3xl font-bold text-white mb-2 italic tracking-tight">
                    Market Authority
                  </h4>
                  <p className="text-slate-400 max-w-xs text-sm leading-relaxed">
                    Our proprietary ranking system ensures long-term dominance in search engines.
                  </p>
                </div>

                <motion.div
                  whileHover={{ scale: 1.1, rotate: 8 }}
                  className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30"
                >
                  <Globe2 className="text-blue-400 w-8 h-8" />
                </motion.div>
              </div>

              {/* Bars Animation */}
              <div className="flex items-end gap-2 h-32">
                {[40, 60, 45, 80, 55, 95, 85].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: false }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="flex-1 bg-blue-500/30 rounded-t-lg"
                  />
                ))}
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              {['Real-time Tracking', 'Competitor Analysis', 'Heatmap Audits'].map((tag, i) => (
                <motion.span
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                  transition={{ delay: i * 0.2 }}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300 font-medium"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE CARDS */}
          <div className="lg:col-span-5 flex flex-col gap-6">

            {[{
              icon: <Zap className="w-7 h-7" />,
              title: "Blazing Execution",
              desc: "Technical SEO fixes deployed in 24 hours.",
            },
            {
              icon: <Search className="w-7 h-7" />,
              title: "LLM Readiness",
              desc: "Be the first answer on AI search platforms.",
            },
            {
              icon: <TrendingUp className="w-7 h-7" />,
              title: "Trend Prediction",
              desc: "We find keywords before they go viral.",
            }].map((card, i) => (
              <motion.div
                key={i}
                variants={fadeRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                whileHover={{ y: -6 }}
                className="flex-1 bg-slate-900/60 border border-white/10 rounded-[2.5rem] p-8 backdrop-blur-xl"
              >
                <div className="flex gap-6 items-center">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white">
                    {card.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">
                      {card.title}
                    </h4>
                    <p className="text-slate-400 text-sm">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}