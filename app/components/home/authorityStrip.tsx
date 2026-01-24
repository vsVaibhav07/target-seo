'use client'

import Image from 'next/image'
import { m } from "framer-motion"
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const logos = ['GooglePartner', 'GooglePartner', 'GooglePartner', 'GooglePartner', 'GooglePartner', 'GooglePartner']

export default function AuthorityStrip() {
  return (
    <section className="relative py-4 bg-white overflow-hidden min-h-[180px] flex flex-col justify-center">
      {/* 3D Perspective Wrapper */}
      <m.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6 w-full"
        style={{ perspective: '1000px' }} // Enables 3D space
      >
        <p className="text-center text-[10px] md:text-xs font-bold text-slate-400 mb-10 uppercase tracking-[0.3em]">
          Trusted by businesses across USA & India
        </p>

        <div className="relative" style={{ transform: 'rotateX(10deg)' }}>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={40}
            slidesPerView={2}
            loop={true}
            speed={5000}
            allowTouchMove={false} // Prevents stuttering on interaction
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
            className="swiper-linear-timing overflow-visible"
          >
            {logos.map((logo, i) => (
              <SwiperSlide key={i} className="flex items-center justify-center">
                <m.div 
                  whileHover={{ scale: 1.1, translateZ: '20px' }} // Pop-out effect on hover
                  className="flex justify-center transition-all duration-300"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <Image
                    src={`/${logo}.webp`}
                    alt="Partner logo"
                    width={140}
                    height={50}
                    className="drop-shadow-sm" // Adds depth without using grayscale
                    style={{ objectFit: 'contain' }}
                  />
                </m.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </m.div>

      {/* Global CSS for seamless linear movement */}
      <style jsx global>{`
        .swiper-linear-timing .swiper-wrapper {
          transition-timing-function: linear !important;
        }
        /* Masking edges for a fade-out effect on the sides */
        .swiper-linear-timing {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
      `}</style>
    </section>
  )
}