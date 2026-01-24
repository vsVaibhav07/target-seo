"use client";

import React, { useState, useEffect } from "react";
import { m, AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      {/* Floating Navbar Container */}
      <nav
        className={`fixed top-0 left-0 w-full z-[150] transition-all duration-500 ${
          scrolled ? "py-4" : "py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-[200]">
           <Image width={100} height={100} alt="logo" src={"/rebrandLogo.png"}/>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 px-2 py-2 rounded-full shadow-2xl">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-6 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors rounded-full hover:bg-white/10"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button & Mobile Toggle */}
          <div className="flex items-center gap-4 relative z-[200]">
            <Link
              href="/contact"
              className="hidden sm:flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-sm font-bold hover:bg-orange-600 hover:text-white transition-all duration-300"
            >
              Start Project <ArrowRight size={16} />
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-white/20 transition-all"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Fullscreen Sidebar Overlay */}
        <AnimatePresence>
          {isOpen && (
            <m.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 bg-[#0a0a0a] z-[160] flex flex-col justify-center px-10"
            >
              {/* Decorative Background for Sidebar */}
              <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-orange-600/10 blur-[120px] rounded-full pointer-events-none" />

              <div className="flex flex-col gap-6">
                <span className="text-xs font-bold text-orange-600 uppercase tracking-widest">
                  Menu
                </span>
                {navLinks.map((link, i) => (
                  <m.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-5xl sm:text-7xl font-bold text-white hover:text-orange-600 transition-colors tracking-tighter inline-block"
                    >
                      {link.name}
                    </Link>
                  </m.div>
                ))}
              </div>

              {/* Sidebar Footer */}
              <m.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.6 }}
                className="mt-20 flex flex-col sm:flex-row gap-10 sm:gap-20 border-t border-white/10 pt-10"
              >
                <div>
                  <h4 className="text-white/40 text-sm mb-4">Socials</h4>
                  <div className="flex gap-4 text-white font-medium">
                    <a href="#" className="hover:text-orange-600">Instagram</a>
                    <a href="#" className="hover:text-orange-600">LinkedIn</a>
                  </div>
                </div>
                <div>
                  <h4 className="text-white/40 text-sm mb-4">Inquiries</h4>
                  <p className="text-white font-medium">hello@targetseo.com</p>
                </div>
              </m.div>
            </m.div>
          )}
        </AnimatePresence>
      </nav>
    </LazyMotion>
  );
};

export default Navbar;