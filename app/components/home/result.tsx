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
  const isInView = useInView(ref, { once: true })

  const radius = 64
  const size = 180
  const circumference = 2 * Math.PI * radius

  useEffect(() => {
    if (!isInView) return

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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -12 }}
      transition={{ duration: 0.6 }}
      className="group relative flex flex-col items-center rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 px-10 pt-14 pb-10 shadow-2xl hover:shadow-orange-500/20 transition-all"
    >
      <div className="relative flex items-center justify-center">
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="absolute"
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="8"
            fill="none"
          />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#f97316"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            animate={{
              strokeDashoffset:
                circumference - (count / value) * circumference
            }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />
        </svg>

        <div className="relative z-10 flex h-[180px] w-[180px] flex-col items-center justify-center rounded-full bg-gradient-to-br from-slate-950 to-slate-900 group-hover:scale-105 transition-transform">
          <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500/15 text-orange-400">
            <Icon size={40} />
          </div>

          <p className="text-4xl font-extrabold text-white leading-none">
            {count}
            {suffix}
          </p>
        </div>
      </div>

      <p className="mt-6 text-base font-semibold text-white text-center tracking-wide">
        {label}
      </p>
    </motion.div>
  )
}

export default function Results() {
  return (
    <section className="relative py-32 bg-gradient-to-br from-[#020617] via-[#020617] to-[#0f172a]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          {stats.map((stat, i) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              Icon={stat.icon}
              delay={i * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
