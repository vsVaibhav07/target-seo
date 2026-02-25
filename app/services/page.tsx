'use client'


import OurProcess from './component/process'
import ServiceFAQ from './component/faq'
import OurServices from './component/ourServices'
import BluePremiumHero from './component/servicehero'
import ServiceFeatures from './component/features'
import WhyUs from './component/whyus'
import CeoMessage from '../components/common/ceoMessage'

const faqs = [
  {
    q: "How long before I see results?",
    a: "SEO is a marathon, not a sprint. Typically, you'll start seeing movement in keyword rankings within 3-6 months.",
  },
  {
    q: "Do you provide monthly reports?",
    a: "Absolutely. Transparency is our core value. Every 30 days, you receive a comprehensive dashboard report.",
  },
  {
    q: "Will my rankings drop after the campaign?",
    a: "We focus on 'White-Hat' sustainable SEO. The foundation we build is designed to hold authority long-term.",
  },
  {
    q: "Do you handle technical website fixes?",
    a: "Yes, our team includes technical SEO specialists who implement site-speed optimizations directly.",
  },
];

const Page = () => {
  return (
    <div className=" relative">
      
      {/* 1. HERO - Pehla section hamesha relative rahega */}
      <section className="relative z-10">
        <BluePremiumHero />
      </section>
        <ServiceFeatures />

      {/* 4. OUR SERVICES - Slides Over WhyUs */}
      <section className="relative   z-40 min-h-screen bg-[#020617] shadow-[0_-30px_50px_rgba(0,0,0,0.5)]">
        <OurServices />
      </section>

      {/* 5. OUR PROCESS - Slides Over OurServices */}
      
        <OurProcess />
        <ServiceFAQ data={faqs} />
        <CeoMessage/>

    </div>
  )
}

export default Page;