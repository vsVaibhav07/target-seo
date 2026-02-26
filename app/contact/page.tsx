"use client";
import { m } from "framer-motion";
import { Mail, Phone, MapPin, Clock, ArrowUpRight } from "lucide-react";
import AnimatedHeading from "@/app/components/common/animatedHeading";
import PrimaryCTA from "@/app/components/home/primaryCTA";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#020617] pt-40">
      {/* 1. Header Section */}
      <section className="container mx-auto px-6 text-center mb-10">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 inline-block px-6 py-2 border border-accent/20 rounded-full bg-accent/5 backdrop-blur-md"
        >
          <span className="text-accent font-mono tracking-[0.4em] text-[10px] font-bold uppercase">
            Let's Connect
          </span>
        </m.div>

        <div className="flex flex-col items-center justify-center">
          <AnimatedHeading 
            text="GET IN" 
            className="text-6xl md:text-8xl font-black uppercase font-dancing text-white" 
          />
          <AnimatedHeading 
            text="TOUCH." 
            className="text-6xl md:text-8xl font-black uppercase italic font-serif text-accent bg-clip-text bg-gradient-to-r from-accent to-accent/40" 
          />
        </div>
      </section>

      {/* 2. Primary Form Section */}
      <PrimaryCTA />

      {/* 3. Contact Info & Map Section */}
      <section className="py-32 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Contact Information */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold font-serif text-white uppercase tracking-tighter">Contact Details</h3>
              <p className="text-slate-400 max-w-md">Our team is ready to help you scale. Reach out via any of these channels or visit our office in Greater Noida.</p>
            </div>

            <div className="grid gap-6">
              <ContactCard 
                icon={<Mail className="text-accent" />}
                title="Email Us"
                value="info@targetseosolutions.com"
                link="mailto:info@targetseosolutions.com"
              />
              <ContactCard 
                icon={<Phone className="text-accent" />}
                title="Call Us"
                value="+91-9716435985"
                link="tel:+919716435985"
              />
              <ContactCard 
                icon={<MapPin className="text-accent" />}
                title="Office Location"
                value="Plot 144-145, Flat 403, Shambhavi Apartment, G R Garden 1, Sector 16B, Greater Noida West, 201009, India"
                link="https://www.google.com/maps/search/?api=1&query=Shambhavi+Apartment+Sector+16B+Greater+Noida+West"
              />
              <ContactCard 
                icon={<Clock className="text-accent" />}
                title="Working Hours"
                value="Mon - Sat: 10:00 AM - 7:00 PM"
              />
            </div>
          </div>

          {/* Right: Greater Noida Map */}
          <m.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative h-[550px] w-full rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group"
          >
            {/* Dark Themed Map Style */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5645362483584!2d77.4431!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee22066c88bb%3A0xc3f8e58a2d1f970e!2sSector%2016B%2C%20Greater%20Noida%20West!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(1) invert(0.92) contrast(1.2) brightness(0.9)' }} 
              allowFullScreen={true} 
              loading="lazy"
            ></iframe>
            
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Shambhavi+Apartment+Sector+16B+Greater+Noida+West" 
              target="_blank"
              className="absolute bottom-8 right-8 bg-accent text-white px-6 py-3 rounded-2xl font-bold text-xs uppercase tracking-widest shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              Get Directions
            </a>
          </m.div>

        </div>
      </section>
    </main>
  );
}

// Reusable Contact Card Component
function ContactCard({ icon, title, value, link }: { icon: React.ReactNode, title: string, value: string, link?: string }) {
  const Content = (
    <div className="group flex items-center justify-between p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-accent/40 hover:bg-white/[0.04] transition-all duration-500">
      <div className="flex items-center gap-6">
        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent transition-colors duration-500 shrink-0">
          {icon}
        </div>
        <div className="max-w-[320px]">
          <p className="text-[10px] uppercase font-bold tracking-widest text-slate-500 mb-1">{title}</p>
          <p className="text-white font-medium text-sm leading-relaxed">{value}</p>
        </div>
      </div>
      {link && <ArrowUpRight size={18} className="text-slate-700 group-hover:text-accent transition-colors shrink-0" />}
    </div>
  );

  return link ? <a href={link} target="_blank" rel="noopener noreferrer">{Content}</a> : Content;
}