'use client'

import { motion, animate, useInView } from 'framer-motion'
import { TrendingUp, PhoneCall, Trophy, Users } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 320, suffix: '%', label: 'Avg Traffic Growth', icon: TrendingUp },
  { value: 4, suffix: 'X', label: 'Lead Increase', icon: PhoneCall },
  { value: 1, suffix: '', label: 'Page-1 Rankings', icon: Trophy },
  { value: 100, suffix: '+', label: 'Long-Term Clients', icon: Users }
]

function StatCard({
  value,
  suffix,
  label,
  Icon,
  delay
}: {
  value: number
  suffix: string
  label: string
  Icon: any
  delay: number
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { once: false }) // Trigger every time for better UX

  // Reduced sizes for better fit on laptop screens
  const radius = 50 
  const size = 140 
  const circumference = 2 * Math.PI * radius

  useEffect(() => {
    if (!isInView) {
        setCount(0); // Reset when out of view if you want it to re-animate
        return
    }

    const controls = animate(0, value, {
      duration: 2,
      delay,
      ease: 'easeOut',
      onUpdate(latest) {
        setCount(Math.round(latest))
      }
    })

    return () => controls.stop()
  }, [isInView, value, delay])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false }}
      whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(249,115,22,0.15)" }}
      transition={{ duration: 0.5 }}
      className="group relative flex flex-col items-center rounded-[2.5rem] bg-slate-900/50 border border-white/5 backdrop-blur-sm w-full max-w-[260px] p-8 shadow-2xl transition-all mx-auto"
    >
      <div className="relative flex items-center justify-center">
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="absolute rotate-[-90deg]"
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="6"
            fill="none"
          />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#f97316"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            animate={{
              strokeDashoffset: isInView ? circumference - (count / value) * circumference : circumference
            }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
        </svg>

        <div className="relative z-10 flex h-[120px] w-[120px] flex-col items-center justify-center rounded-full bg-slate-950 shadow-inner group-hover:scale-105 transition-transform duration-500">
          <div className="mb-2 text-orange-400 opacity-80">
            <Icon size={28} />
          </div>

          <p className="text-3xl font-black text-white leading-none">
            {count}{suffix}
          </p>
        </div>
      </div>

      <p className="mt-6 text-sm font-bold text-slate-300 text-center uppercase tracking-widest group-hover:text-white transition-colors">
        {label}
      </p>
    </motion.div>
  )
}

export default function Results() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 bg-[#020617] overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {stats.map((stat, i) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              Icon={stat.icon}
              delay={i * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  )
}