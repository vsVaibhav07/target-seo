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
      <div className="max-w-7xl mx-auto px-6">
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
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop
          speed={900}
          pagination={{ clickable: true }}
          navigation
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-14"
        >
          {[1, 2, 3, 4, 5].map(i => (
            <SwiperSlide key={i} className="h-full">
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
                className="h-full bg-white rounded-2xl shadow-xl p-8 md:p-10 text-center flex flex-col justify-between"
              >
                {/* Avatar */}
                <div className="flex justify-center mb-6">
                  <div className="h-20 w-20 rounded-full bg-slate-200 border-4 border-white shadow-md" />
                </div>

                {/* Testimonial */}
                <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-6">
                  Target SEO Solutions helped us achieve consistent lead growth
                  and top rankings. Their strategy and execution exceeded our
                  expectations.
                </p>

                {/* Client Info */}
                <div>
                  <p className="font-semibold text-lg">John D</p>
                  <p className="text-sm text-slate-500 mb-2">
                    Business Owner
                  </p>
                  <div className="text-accent text-lg tracking-wide">
                    ★★★★★
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
