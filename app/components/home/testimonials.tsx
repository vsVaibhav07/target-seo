'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { motion,Variants } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import Image from 'next/image'
import { Dancing_Script } from 'next/font/google'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap'
})

const testimonials = [
  {
    name: 'John D',
    role: 'Business Owner',
    image: '/user.webp',
    text: 'Target SEO Solutions helped us achieve consistent lead growth and top rankings. Their strategy and execution exceeded our expectations.',
    rating: 5
  },
  {
    name: 'Sarah M',
    role: 'Marketing Head',
    image: '/user.webp',
    text: 'Our organic traffic and conversions improved massively. Transparent reporting and clear communication made the process smooth.',
    rating: 5
  },
  {
    name: 'Amit K',
    role: 'Startup Founder',
    image: '/user.webp',
    text: 'From low visibility to strong keyword rankings, the results were impressive. Highly recommended SEO partner.',
    rating: 5
  },
  {
    name: 'Emily R',
    role: 'E-commerce Manager',
    image: '/user.webp',
    text: 'We saw a huge jump in revenue from organic traffic. Their technical SEO expertise is top-notch.',
    rating: 5
  }
]

export default function Testimonials() {
  const headingText = "What Our Clients Say"
  const words = headingText.split(" ")

  const wordVariants:Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { 
        delay: i * 0.1, 
        duration: 0.8, 
        ease: [0.33, 1, 0.68, 1] 
      }
    })
  }

  return (
    <section className="relative flex items-center justify-center py-24 bg-slate-50 overflow-hidden lg:min-h-screen">
      <div className="max-w-7xl mx-auto px-6 relative w-full">
        
        {/* Animated Heading - Dancing Script & Word by Word */}
        <div className="flex justify-center mb-12 md:mb-20 overflow-hidden">
          <h2 className={`${dancingScript.className} text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 flex flex-wrap gap-x-4 justify-center text-center leading-tight`}>
            {words.map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={wordVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                className={word === 'Clients' ? 'text-orange-500' : ''}
              >
                {word}
              </motion.span>
            ))}
          </h2>
        </div>

        {/* Custom Navigation - Default Cursors */}
        <div className="hidden lg:block">
          <button className="testimonial-prev absolute left-0 top-[60%] -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-white shadow-lg flex items-center justify-center border border-slate-100 hover:bg-orange-500 hover:text-white transition-all cursor-pointer">
            <ChevronLeft size={24} />
          </button>
          <button className="testimonial-next absolute right-0 top-[60%] -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-white shadow-lg flex items-center justify-center border border-slate-100 hover:bg-orange-500 hover:text-white transition-all cursor-pointer">
            <ChevronRight size={24} />
          </button>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          speed={1000}
          pagination={{ clickable: true }}
          navigation={{ prevEl: '.testimonial-prev', nextEl: '.testimonial-next' }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="pb-16 !px-2"
        >
          {testimonials.map((item, i) => (
            <SwiperSlide key={i} className="!h-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
                className="h-full bg-white rounded-[2.5rem] border border-slate-100 p-8 md:p-10 shadow-sm flex flex-col relative group cursor-auto"
              >
                <Quote className="absolute top-8 right-8 text-slate-100 group-hover:text-orange-100 transition-colors" size={48} />

                {/* Compact User Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="relative h-16 w-16 flex-shrink-0">
                    <Image 
                      src={item.image} 
                      alt={item.name} 
                      fill
                      className="rounded-full object-cover border-2 border-orange-50"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg leading-tight mb-1">{item.name}</h4>
                    <p className="text-sm font-semibold text-orange-500 uppercase tracking-wider">{item.role}</p>
                  </div>
                </div>

                <p className="text-slate-600 text-base leading-relaxed mb-8 flex-grow">
                  "{item.text}"
                </p>

                {/* Rating */}
                <div className="flex gap-1.5 pt-4 border-t border-slate-50">
                  {[...Array(item.rating)].map((_, index) => (
                    <Star key={index} size={16} className="text-orange-400 fill-orange-400" />
                  ))}
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet-active { background: #f97316 !important; width: 24px !important; border-radius: 10px !important; transition: all 0.3s ease; }
        .swiper-pagination-bullet { transition: all 0.3s ease; }
      `}</style>
    </section>
  )
}