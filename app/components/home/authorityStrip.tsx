'use client'

import Image from 'next/image'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import {m} from "framer-motion"

// Swiper styles
import 'swiper/css'

const logos = ['GooglePartner', 'GooglePartner', 'GooglePartner', 'GooglePartner', 'GooglePartner', 'GooglePartner']

export default function AuthorityStrip() {
  return (
    <section className="relative py-12 bg-white overflow-hidden">
      <m.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="max-w-7xl mx-auto px-6"
      >
        <p className="text-center text-[10px] md:text-xs font-bold text-slate-400 mb-8 uppercase tracking-[0.2em]">
          Trusted by businesses across USA & India
        </p>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={2} // Mobile default
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            480: { slidesPerView: 3, spaceBetween: 30 },
            768: { slidesPerView: 4, spaceBetween: 40 },
            1024: { slidesPerView: 5, spaceBetween: 50 },
          }}
          className="swiper-linear-timing" // Continuous motion ke liye
        >
          {logos.map((logo, i) => (
            <SwiperSlide key={i} className="flex justify-center items-center">
              <m.div
                whileHover={{ y: -4 }}
                className="group relative flex items-center justify-center rounded-2xl bg-slate-50/50 border border-slate-100 px-6 py-4 transition-all duration-300"
              >
                <Image
                  src={`/${logo}.webp`}
                  alt="Partner logo"
                  width={110}
                  height={36}
                  className="grayscale group-hover:grayscale-0 transition duration-500 opacity-60 group-hover:opacity-100"
                />
              </m.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </m.div>

      {/* CSS for continuous smooth scrolling effect */}
      <style jsx global>{`
        .swiper-linear-timing .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </section>
  )
}