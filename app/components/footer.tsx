import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-start space-y-3">
          <Link href="/" className="flex items-center space-x-2">
            {/* <Image
              src="/logo.png"
              width={300}
              height={300}
              alt="Target SEO Solution Logo"
              className="object-contain"
            /> */}
            <span className=" font-serif bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-50 to-blue-400  text-xl font-extrabold">Target SEO Solutions</span>
          </Link>
          <p className="text-slate-400 text-sm">
            ROI-driven SEO strategies for scalable growth
          </p>
        </div>

        <div className="flex flex-col space-y-2">
          <h4 className="font-semibold text-white">Quick Links</h4>
          <ul className="space-y-1 text-slate-400 text-sm">
            <li>
              <Link href="/about" className="hover:text-white transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col space-y-2">
          <h4 className="font-semibold text-white">Services</h4>
          <ul className="space-y-1 text-slate-400 text-sm">
            <li>Local SEO</li>
            <li>Technical SEO</li>
            <li>On-Page SEO</li>
            <li>Content Marketing</li>
            <li>Link Building</li>
            <li>SEO Consulting</li>
          </ul>
        </div>

        <div className="flex flex-col space-y-2">
          <h4 className="font-semibold text-white">Contact</h4>
          <p className="text-slate-400 text-sm">info@targetseo.com</p>
          <p className="text-slate-400 text-sm">+1 (123) 456-7890</p>
          <div className="flex space-x-4 mt-4">
            <Link
              href="#"
              className="group p-2 rounded-full bg-slate-800 text-slate-400 hover:text-slate-800 hover:bg-white/90 transition-all duration-300"
            >
              <Facebook size={20} />
              <span className="sr-only">Facebook</span>
            </Link>

            <Link
              href="#"
              className="group p-2 rounded-full bg-slate-800 text-slate-400 hover:text-slate-800 hover:bg-white/90 transition-all duration-300"
            >
              <Twitter size={20} />
              <span className="sr-only">Twitter</span>
            </Link>

            <Link
              href="#"
              className="group p-2 rounded-full bg-slate-800 text-slate-400 hover:text-slate-800 hover:bg-white/90 transition-all duration-300"
            >
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-slate-500 mt-8">
        © 2026 Target SEO Solutions. All rights reserved.
      </p>
    </footer>
  );
}
