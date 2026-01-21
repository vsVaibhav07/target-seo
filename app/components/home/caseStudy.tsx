'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { TrendingUp, ArrowUpRight } from 'lucide-react'

const cases = [
  {
    industry: 'Local Service Business',
    problem: 'No organic leads & poor local visibility',
    solution: 'Local SEO + GMB optimization',
    results: ['+220% organic traffic', 'Top 3 rankings in 60 days']
  },
  {
    industry: 'E-commerce',
    problem: 'High traffic, low conversions',
    solution: 'Technical SEO + content optimization',
    results: ['+140% revenue from organic', '+35% conversion rate']
  },
  {
    industry: 'SaaS / B2B',
    problem: 'Low authority & poor keyword visibility',
    solution: 'Content SEO + backlinks',
    results: ['120+ keywords ranked', '3x demo signups']
  }
]

export default function CaseStudies() {
  return (
    <section className="py-32 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-center mb-20"
        >
          Case Studies
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {cases.map((item, i) => (
            <motion.div
              key={item.industry}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-2xl transition-all"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-orange-400/10 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                <p className="text-sm font-semibold text-accent mb-3">
                  {item.industry}
                </p>

                <p className="text-sm text-slate-600 mb-2">
                  <span className="font-medium text-slate-900">Problem:</span>{' '}
                  {item.problem}
                </p>

                <p className="text-sm text-slate-600 mb-4">
                  <span className="font-medium text-slate-900">Solution:</span>{' '}
                  {item.solution}
                </p>

                <div className="space-y-2">
                  {item.results.map(result => (
                    <div
                      key={result}
                      className="flex items-center gap-2 text-sm font-semibold text-emerald-600"
                    >
                      <TrendingUp size={16} />
                      <span>{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <Link
            href="/case-studies"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-white shadow-lg hover:shadow-accent/30 transition-all"
          >
            View All Case Studies
            <ArrowUpRight
              size={20}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </Link>
        </div>
      </div>
    </section>
  )
}
