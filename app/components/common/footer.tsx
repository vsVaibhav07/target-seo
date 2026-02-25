import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#020617] text-white py-16 relative overflow-hidden shadow-[0_-20px_50px_-20px_rgba(234,88,12,0.15)]">
      {/* 1. TOP ACCENT LINE: Subtle glow on the very top edge */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />
      
      {/* 2. BACKGROUND DECORATION: Subtle ambient light */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        
        {/* Brand Section */}
        <div className="flex flex-col items-start space-y-6">
          <Link href="/" className="relative group -ml-2 lg:-ml-4 transition-transform duration-300 hover:scale-105">
            <div className="relative w-[180px] h-[60px] lg:w-[240px] lg:h-[80px]">
              <Image 
                src="/new-logot.png" 
                fill 
                priority 
                alt='Target SEO Logo'
                className="object-contain object-left"
              />
            </div>
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed max-w-[260px] font-light">
            We engineer ROI-driven SEO strategies that transform organic search into your most predictable revenue stream.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col space-y-6">
          <h4 className="font-bold text-white text-xs uppercase tracking-[0.2em] border-l-2 border-orange-500 pl-3">
            Quick Links
          </h4>
          <nav className="flex flex-col space-y-3 text-slate-400 text-sm">
            {['About Us', 'Our Services', 'Case Studies', 'Contact'].map((item) => (
              <Link 
                key={item}
                href={`/${item.toLowerCase().replace(' ', '-')}`} 
                className="hover:text-orange-500 transition-all duration-300 flex items-center group w-fit"
              >
                <span className="w-0 group-hover:w-2 h-[1px] bg-orange-500 mr-0 group-hover:mr-2 transition-all opacity-0 group-hover:opacity-100"></span>
                {item}
              </Link>
            ))}
          </nav>
        </div>

        {/* Services */}
        <div className="flex flex-col space-y-6">
          <h4 className="font-bold text-white text-xs uppercase tracking-[0.2em] border-l-2 border-orange-500 pl-3">
            Core Expertise
          </h4>
          <ul className="space-y-3 text-slate-400 text-sm font-light">
            <li className="hover:text-orange-400/80 transition-colors cursor-default">Technical SEO Audit</li>
            <li className="hover:text-orange-400/80 transition-colors cursor-default">Content Strategy</li>
            <li className="hover:text-orange-400/80 transition-colors cursor-default">Authority Backlinks</li>
            <li className="hover:text-orange-400/80 transition-colors cursor-default">GEO & LLM Optimization</li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="flex flex-col space-y-6">
          <h4 className="font-bold text-white text-xs uppercase tracking-[0.2em] border-l-2 border-orange-500 pl-3">
            Connect
          </h4>
          <div className="text-slate-400 text-sm space-y-2">
            <p className="hover:text-white transition-colors cursor-pointer flex items-center gap-2">
              <span className="text-orange-500">@</span>  info@targetseosolutions.com
            </p>
            <p className="font-medium">+91-9716435985</p>
          </div>
          <div className="flex space-x-3 pt-2">
            {[
              { Icon: Facebook, href: "#", label: "Facebook" },
              { Icon: Twitter, href: "#", label: "Twitter" },
              { Icon: Linkedin, href: "#", label: "LinkedIn" },
              { Icon: Instagram, href: "#", label: "Instagram" },
            ].map(({ Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/5 text-slate-400 hover:text-white hover:bg-orange-600 hover:-translate-y-1 transition-all duration-300 border border-white/5"
              >
                <Icon size={18} />
                <span className="sr-only">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-center md:text-left text-[11px] text-slate-500 font-medium tracking-wide">
          © {currentYear} TARGET SEO SOLUTIONS. ALL RIGHTS RESERVED. 
        </p>
        <div className="flex gap-6 text-[11px] text-slate-500 uppercase tracking-tighter">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}