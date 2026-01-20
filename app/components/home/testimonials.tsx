'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { motion } from 'framer-motion'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default function Testimonials() {
  return (
    <section className="py-20 md:py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-3xl md:text-4xl font-extrabold text-center mb-16"
        >
          What Clients Say
        </motion.h2>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          speed={900}
          pagination={{ clickable: true }}
          navigation
          className="pb-12"
        >
          {[1, 2, 3].map(i => (
            <SwiperSlide key={i}>
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl p-8 md:p-12 text-center"
              >
                <div className="flex justify-center mb-5">
                  <div className="h-18 w-18 md:h-20 md:w-20 rounded-full bg-slate-200 border-4 border-white shadow-md" />
                </div>

                <p className="text-lg md:text-xl text-slate-600 mb-5 leading-relaxed">
                  Target SEO Solutions helped us achieve consistent lead growth
                  and top rankings. Their strategy and execution exceeded our
                  expectations.
                </p>

                <p className="font-semibold text-lg">John D</p>
                <p className="text-sm text-slate-500 mb-2">Business Owner</p>

                <div className="text-accent text-lg tracking-wide">★★★★★</div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
