'use client'

import { motion } from 'framer-motion'
import { 
  Scale, 
  Stethoscope, 
  Home, 
  ShoppingCart, 
  Layers 
} from 'lucide-react'


const industries = [
  { name: 'Law Firms', icon: Scale },
  { name: 'Healthcare', icon: Stethoscope },
  { name: 'Home Services', icon: Home },
  { name: 'E-commerce', icon: ShoppingCart },
  { name: 'B2B & SaaS', icon: Layers }
]

export default function Industries() {
  return (
    <section className="pb-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-center mb-16 text-slate-900"
        >
          Industries We Serve
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
          {industries.map((industry) => {
            const Icon = industry.icon 
            
            return (
              <motion.div
                key={industry.name}
                whileHover={{ 
                  y: -8,
                  backgroundColor: "#ffffff",
                  boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
                }}
                className="group flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white/50 py-8 px-4 font-semibold shadow-sm transition-all duration-300"
              >
                {/* Icon Container */}
                <div className="mb-4 p-3 rounded-full bg-blue-50 text-slate-700 group-hover:bg-orange-400 group-hover:text-white transition-colors duration-300">
                  <Icon size={32} strokeWidth={1.5} />
                </div>

                {/* Label */}
                <span className="text-slate-700 group-hover:text-orange-400 transition-colors">
                  {industry.name}
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}