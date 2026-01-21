'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import Image from 'next/image'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

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
  },
  {
    name: 'David L',
    role: 'SaaS Consultant',
    image: '/user.webp',
    text: 'Excellent experience working with the team. Strong focus on ROI and long-term growth.',
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-3xl md:text-4xl font-extrabold text-center mb-16 text-slate-900"
        >
          What Clients Say
        </motion.h2>

        {/* Custom Navigation Buttons */}
        <div className="hidden md:flex absolute inset-y-0 -left-4 items-center z-20">
          <button className="testimonial-prev group h-12 w-12 rounded-full bg-white shadow-xl flex items-center justify-center hover:bg-blue-600 transition-all duration-300 border border-slate-100">
            <ChevronLeft size={24} className="text-slate-700 group-hover:text-white" />
          </button>
        </div>

        <div className="hidden md:flex absolute inset-y-0 -right-4 items-center z-20">
          <button className="testimonial-next group h-12 w-12 rounded-full bg-white shadow-xl flex items-center justify-center hover:bg-blue-600 transition-all duration-300 border border-slate-100">
            <ChevronRight size={24} className="text-slate-700 group-hover:text-white" />
          </button>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          speed={1000}
          pagination={{ clickable: true, dynamicBullets: true }}
          navigation={{
            prevEl: '.testimonial-prev',
            nextEl: '.testimonial-next'
          }}
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
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="h-full bg-white rounded-2xl shadow-lg border border-slate-100 p-8 md:p-10 text-center flex flex-col items-center"
              >
                {/* User Image */}
                <div className="relative h-32 w-32 mb-2">
                  <div className="absolute inset-0 rounded-full bg-blue-100 animate-pulse -z-10" />
                  <Image 
                    src={item.image} 
                    alt={item.name} 
                    fill
                    sizes="100px"
                    className="rounded-full object-cover border-4 border-white"
                  />
                </div>

               
                <p className="text-slate-600 italic leading-relaxed mb-8 flex-grow">
                  "{item.text}"
                </p>

                {/* User Info */}
                <div className="mt-auto">
                  <h4 className="font-bold text-lg text-slate-900">{item.name}</h4>
                  <p className="text-sm font-medium text-blue-600 mb-3">{item.role}</p>
                  
                  {/* Lucide Star Rating */}
                  <div className="flex justify-center gap-1">
                    {[...Array(item.rating)].map((_, index) => (
                      <Star 
                        key={index} 
                        size={20} 
                        className="text-[#f97316] fill-[#f97316]" 
                      />
                    ))}
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