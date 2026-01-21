'use client'

import { motion } from 'framer-motion'

const center = { x: 260, y: 260 }
const cardGap = 42
const centerGap = 78

const industries = [
  { name: 'Law Firms', x: 260, y: 36 },
  { name: 'Healthcare', x: 472, y: 156 },
  { name: 'Home Services', x: 472, y: 364 },
  { name: 'E-commerce', x: 260, y: 484 },
  { name: 'B2B & SaaS', x:-10, y: 260 }
]

function edgePoint(
  from: { x: number; y: number },
  to: { x: number; y: number },
  offset: number
) {
  const dx = to.x - from.x
  const dy = to.y - from.y
  const dist = Math.sqrt(dx * dx + dy * dy)
  return {
    x: from.x + (dx / dist) * offset,
    y: from.y + (dy / dist) * offset
  }
}

export default function Industries() {
  return (
    <section className="relative py-32 bg-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-center mb-24"
        >
          Industries We Serve
        </motion.h2>

        <div className="relative mx-auto hidden lg:block h-[520px] w-[520px]">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="absolute top-1/2 left-1/2 z-20 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-accent to-orange-500 text-white text-3xl font-extrabold shadow-2xl"
          >
            SEO
          </motion.div>

          <svg
            viewBox="0 0 520 520"
            className="absolute inset-0 h-full w-full pointer-events-none"
          >
            <defs>
              <linearGradient id="arrowGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#fb923c" />
                <stop offset="100%" stopColor="#f97316" />
              </linearGradient>
              <marker
                id="arrowHead"
                markerWidth="12"
                markerHeight="12"
                refX="10"
                refY="6"
                orient="auto"
              >
                <path d="M0,0 L12,6 L0,12" fill="#f97316" />
              </marker>
            </defs>

            {industries.map((item, i) => {
              const start = edgePoint(
                { x: item.x, y: item.y },
                center,
                cardGap
              )
              const end = edgePoint(
                center,
                { x: item.x, y: item.y },
                centerGap
              )

              return (
                <motion.path
                  key={item.name}
                  d={`M ${start.x} ${start.y} L ${end.x} ${end.y}`}
                  fill="none"
                  stroke="url(#arrowGrad)"
                  strokeWidth="2"
                  markerEnd="url(#arrowHead)"
                  pathLength={1}
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.15, ease: 'easeOut' }}
                />
              )
            })}
          </svg>

          {industries.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.15 }}
              className="absolute"
              style={{
                left: item.x,
                top: item.y,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <div className="rounded-full bg-white px-7 py-3 font-semibold shadow-lg hover:shadow-2xl hover:-translate-y-1 transition">
                {item.name}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 lg:hidden">
          {industries.map(industry => (
            <motion.div
              key={industry.name}
              whileHover={{ y: -6 }}
              className="rounded-xl border border-slate-200 bg-white py-6 text-center font-medium shadow-sm"
            >
              {industry.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
