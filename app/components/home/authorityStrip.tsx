'use client'
import Image from 'next/image'
import { m } from "framer-motion"
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const logos = ['GooglePartner', 'GooglePartner', 'GooglePartner', 'GooglePartner', 'GooglePartner']

export default function AuthorityStrip() {
  return (
    <section className="relative py-12 bg-white overflow-hidden min-h-[160px]">
      <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto px-6"
      >
        <p className="text-center text-[10px] md:text-xs font-bold text-slate-400 mb-8 uppercase tracking-widest">
          Trusted by businesses across USA & India
        </p>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          loop={true}
          speed={4000}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          className="swiper-linear-timing"
        >
          {logos.map((logo, i) => (
            <SwiperSlide key={i}>
              <div className="flex justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                <Image
                  src={`/${logo}.webp`}
                  alt="Partner logo"
                  width={120}
                  height={40}
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </m.div>

      <style jsx global>{`
        .swiper-linear-timing .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </section>
  )
}