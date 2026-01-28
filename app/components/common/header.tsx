"use client";

import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Menu, Phone, X, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
];

export default function MagicalHeader() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(2, 6, 23, 0)", "rgba(2, 6, 23, 0.95)"],
  );
  const padding = useTransform(scrollY, [0, 50], ["24px", "12px"]);
  const maxWidth = useTransform(scrollY, [0, 50], ["100%", "90%"]);
  const borderRadius = useTransform(scrollY, [0, 50], ["0px", "100px"]);

  return (
    <div className="fixed top-0 left-0 w-full z-[100] flex justify-center pt-2 px-4 pointer-events-none">
      {/* 1. THE MAIN HEADER */}
      <motion.header
        style={{
          backgroundColor,
          paddingTop: padding,
          paddingBottom: padding,
          width: maxWidth,
          borderRadius,
        }}
        className="pointer-events-auto border border-white/10 backdrop-blur-md flex items-center transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between w-full">
          <Link
            href="/"
            className="relative w-[140px] h-[50px] lg:w-[260px] lg:h-[100px]"
          >
            <Image
              src="/new-logot.png"
              fill
              priority
              alt="Logo"
              className="object-contain object-left"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-5 py-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <Link
              href="/free-audit"
              className="bg-orange-600 text-white px-7 py-3 rounded-full font-black text-sm uppercase tracking-wider"
            >
              Free Audit
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden w-12 h-12 flex items-center justify-center text-white bg-white/10 rounded-full border border-white/10"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.header>

      {/* 2. THE MOBILE MENU (MOVED OUTSIDE HEADER TO FIX TRANSPARENCY) */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[1001] lg:hidden pointer-events-auto">
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-[#020617]/90 backdrop-blur-2xl"
            />

            {/* SOLID SLIDER */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              // Use inline style for background to ensure absolute 100% opacity
              style={{ backgroundColor: "#020617" }}
              className="absolute top-0 right-0 h-full w-[85%] border-l border-white/10 p-8 flex flex-col shadow-[-20px_0_80px_rgba(0,0,0,0.9)]"
            >
              <div className="flex items-center justify-between mb-16">
                <Link href="/" className="relative group -ml-2 lg:-ml-4">
                  <div className="relative w-[180px] h-[70px] lg:w-[280px] lg:h-[90px]">
                    <Image
                      src="/logo.png"
                      fill
                      priority
                      alt="Logo"
                      // 2. object-left add kiya taaki image container ke left se start ho
                      className="object-contain object-left brightness-100"
                    />
                  </div>
                </Link>
                <button
                  onClick={() => setOpen(false)}
                  className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full text-white border border-white/20"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block py-5 text-3xl font-black text-white border-b border-white/5"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto pb-8">
                <Link
                  href="/free-audit"
                  onClick={() => setOpen(false)}
                  className="block w-full bg-orange-600 text-white text-center py-5 rounded-2xl font-black text-xl shadow-2xl shadow-orange-600/40"
                >
                  GET FREE AUDIT
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
