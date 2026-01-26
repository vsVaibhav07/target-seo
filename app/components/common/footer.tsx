import Link from "next/link";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] text-white py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Brand Section */}
        <div className="flex flex-col items-start space-y-4">
          {/* 1. Logo Container Fix: Humne width ko adjust kiya aur -ml-4 add kiya agar image mein internal padding ho */}
          <Link href="/" className="relative group -ml-2 lg:-ml-4">
            <div className="relative w-[180px] h-[70px] lg:w-[280px] lg:h-[90px]">
              <Image 
                src="/logo3-transparent.png" 
                fill 
                priority 
                alt='Logo'
                // 2. object-left add kiya taaki image container ke left se start ho
                className="object-contain object-left brightness-100"
              />
            </div>
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed max-w-[240px]">
            ROI-driven SEO strategies for scalable growth and dominant market presence.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col space-y-4">
          <h4 className="font-bold text-white text-sm uppercase tracking-widest">Quick Links</h4>
          <nav className="flex flex-col space-y-2 text-slate-400 text-sm">
            <Link href="/about" className="hover:text-orange-400 transition-colors w-fit">About Us</Link>
            <Link href="/services" className="hover:text-orange-400 transition-colors w-fit">Our Services</Link>
            <Link href="/contact" className="hover:text-orange-400 transition-colors w-fit">Contact</Link>
          </nav>
        </div>

        {/* Services */}
        <div className="flex flex-col space-y-4">
          <h4 className="font-bold text-white text-sm uppercase tracking-widest">Core Services</h4>
          <ul className="space-y-2 text-slate-400 text-sm">
            <li className="hover:text-slate-200 transition-colors cursor-default">Local & Technical SEO</li>
            <li className="hover:text-slate-200 transition-colors cursor-default">Content Marketing</li>
            <li className="hover:text-slate-200 transition-colors cursor-default">High-Authority Link Building</li>
            <li className="hover:text-slate-200 transition-colors cursor-default">Enterprise SEO Consulting</li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="flex flex-col space-y-4">
          <h4 className="font-bold text-white text-sm uppercase tracking-widest">Get In Touch</h4>
          <div className="text-slate-400 text-sm space-y-1">
            <p className="hover:text-white transition-colors cursor-pointer">info@targetseo.com</p>
            <p>+1 (123) 456-7890</p>
          </div>
          <div className="flex space-x-3 pt-2">
            {[
              { Icon: Facebook, href: "#", label: "Facebook" },
              { Icon: Twitter, href: "#", label: "Twitter" },
              { Icon: Linkedin, href: "#", label: "LinkedIn" },
            ].map(({ Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/5 text-slate-400 hover:text-white hover:bg-orange-500 transition-all duration-300"
              >
                <Icon size={18} />
                <span className="sr-only">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/5">
        <p className="text-center text-xs text-slate-500 font-medium">
          © {currentYear} Target SEO Solutions. All rights reserved. Built for high performance.
        </p>
      </div>
    </footer>
  );
}