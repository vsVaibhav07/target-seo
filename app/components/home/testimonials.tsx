'use client'

import { m, Variants } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import Image from 'next/image'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const testimonials = [
  {
    name: "William C Head",
    image: "https://rebrandsolution.com/assets/images/testimonial/head.webp",
    text: "Rebrand Solution gave me such a great service, and now we generate a lot of new jobs through our website. The team was incredibly professional and understood our vision perfectly.",
    rating: 5
  },
  {
    name: "Leo M. Hughes",
    image: "https://rebrandsolution.com/assets/images/testimonial/hughes.webp",
    text: "Professional, transparent, and effective services. Rebrand Solutions has been a reliable growth partner for our business. Their strategic approach to SEO is unmatched.",
    rating: 5
  },
  {
    name: "Andrea Rondini",
    image: "https://rebrandsolution.com/assets/images/testimonial/rondini.webp",
    text: "Rebrand Solution has helped me generate thousands of dollars in new business and helped me grow my brand globally. Their attention to detail is unmatched in the industry.",
    rating: 5
  },
  {
    name: "David Louis",
    image: "https://rebrandsolution.com/assets/images/testimonial/devid.webp",
    text: "You've done a fantastic job here; I was really surprised how well it seems to understand our product and technology. It felt like they were part of our internal team.",
    rating: 5
  },
];
export default function Testimonials() {
  const headingText = "What Our Clients Say"
  const words = headingText.split(" ")

  const wordVariants: Variants = {
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
        
        {/* Section Heading */}
        <div className="flex justify-center mb-16 md:mb-24 overflow-hidden">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 flex flex-wrap gap-x-4 justify-center font-dancing text-center leading-tight tracking-tighter uppercase">
            {words.map((word, i) => (
              <m.span
                key={i}
                custom={i}
                variants={wordVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }}
                className={word === 'Clients' ? 'text-blue-600' : ''}
              >
                {word}
              </m.span>
            ))}
          </h2>
        </div>

        {/* Navigation Buttons */}
        <div className="hidden lg:block">
          <button className="testimonial-prev absolute left-0 top-[60%] -translate-y-1/2 z-20 h-14 w-14 rounded-full bg-white shadow-xl flex items-center justify-center border border-slate-100 hover:bg-blue-600 hover:text-white transition-all cursor-pointer">
            <ChevronLeft size={28} />
          </button>
          <button className="testimonial-next absolute right-0 top-[60%] -translate-y-1/2 z-20 h-14 w-14 rounded-full bg-white shadow-xl flex items-center justify-center border border-slate-100 hover:bg-blue-600 hover:text-white transition-all cursor-pointer">
            <ChevronRight size={28} />
          </button>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          speed={1000}
          pagination={{ clickable: true }}
          navigation={{ prevEl: '.testimonial-prev', nextEl: '.testimonial-next' }}
          spaceBetween={40}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="!pb-20 !px-4"
        >
          {testimonials.map((item, i) => (
            <SwiperSlide key={i} className="!h-auto flex flex-col items-center">
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                className="w-full flex flex-col items-center group"
              >
                {/* BLUE DESIGNED CARD */}
                <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-[#0f172a] to-blue-900 rounded-[3rem] p-8 md:p-10 shadow-2xl shadow-blue-200 flex flex-col justify-center items-center text-center overflow-hidden mb-8">
                  {/* Decorative Elements */}
                  <div className="absolute top-[-10%] right-[-10%] w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                  <Quote className="absolute top-6 left-8 text-white/10" size={60} />
                  
                  <p className="relative z-10 text-white text-lg md:text-xl font-medium leading-relaxed italic">
                    "{item.text}"
                  </p>

                  <div className="mt-6 flex gap-1 justify-center relative z-10">
                    {[...Array(item.rating)].map((_, idx) => (
                      <Star key={idx} size={18} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* USER INFO SECTION (Below Card) */}
                <div className="flex flex-col items-center gap-3">
                  <div className="relative h-20 w-20 border-4 border-white shadow-lg rounded-full overflow-hidden">
                    <Image 
                      src={item.image} 
                      alt={item.name} 
                      fill
                      unoptimized
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      priority={i < 3}
                    />
                  </div>
                  <h4 className="font-black text-slate-900 text-xl tracking-tight uppercase">
                    {item.name}
                  </h4>
                </div>
              </m.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet-active { 
          background: #2563eb !important; 
          width: 32px !important; 
          border-radius: 10px !important; 
        }
        .swiper-pagination-bullet { 
          background: #cbd5e1;
          opacity: 1;
          transition: all 0.3s ease; 
        }
      `}</style>
    </section>
  )
}