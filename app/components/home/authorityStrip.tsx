'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

// Professional high-quality logos (using SVGs from vector-logo-assets or similar CDN)
const logos = [
  { name: 'Microsoft', url: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
  { name: 'Amazon', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'Meta', url: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
  { name: 'Netflix', url: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
  { name: 'Salesforce', url: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg' },
  { name: 'Adobe', url: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Adobe_Systems_logo_and_wordmark.svg' },
  { name: 'Spotify', url: 'https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg' },
]

export default function AuthorityStrip() {
  return (
    <section className="relative py-12 bg-[#020617] grayscale-30 overflow-hidden flex flex-col justify-center border-b border-white/5">
      
      {/* Magical Background Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-24 bg-blue-500/20 blur-[100px] rounded-full animate-pulse" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-24 bg-purple-500/20 blur-[100px] rounded-full animate-pulse delay-700" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 w-full relative z-10"
      >
        {/* Floating Label */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-slate-500" />
          <p className="text-center text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-[0.4em]">
            Empowering World-Class <span className="text-blue-400">Innovators</span>
          </p>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-slate-500" />
        </div>

        {/* 3D Container */}
        <div className="relative" style={{ perspective: '2000px' }}>
          <div style={{ transform: 'rotateX(15deg)' }}>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={60}
              slidesPerView={2}
              loop={true}
              speed={4000}
              allowTouchMove={false}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 5 },
              }}
              className="swiper-linear-timing py-8 overflow-visible"
            >
              {logos.map((logo, i) => (
                <SwiperSlide key={i} className="flex items-center justify-center">
                  <motion.div
                    whileHover={{ 
                      scale: 1.15, 
                      filter: 'brightness(1.5) drop-shadow(0 0 15px rgba(255,255,255,0.3))',
                      translateY: -10
                    }}
                    className="relative flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
                  >
                    <div className="relative w-[120px] h-[45px]">
                      <Image
                        src={logo.url}
                        alt={logo.name}
                        fill
                        className="object-contain"
                        unoptimized // Recommended for external SVGs to maintain quality
                      />
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </motion.div>

      {/* Modern Reflection / Glass Floor Effect */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent shadow-[0_0_20px_white]" />

      {/* Global Scoped CSS */}
      <style jsx global>{`
        .swiper-linear-timing .swiper-wrapper {
          transition-timing-function: linear !important;
        }
        .swiper-linear-timing {
          mask-image: linear-gradient(
            to right, 
            transparent, 
            black 20%, 
            black 80%, 
            transparent
          );
          -webkit-mask-image: linear-gradient(
            to right, 
            transparent, 
            black 20%, 
            black 80%, 
            transparent
          );
        }
      `}</style>
    </section>
  )
}