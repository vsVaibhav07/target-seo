import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-start space-y-3">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" width={60} height={60} alt="Target SEO Solution Logo" className="object-contain"/>
            <span className="text-xl font-extrabold">Target SEO</span>
          </Link>
          <p className="text-slate-400 text-sm">
            ROI-driven SEO strategies for scalable growth
          </p>
        </div>

        <div className="flex flex-col space-y-2">
          <h4 className="font-semibold text-white">Quick Links</h4>
          <ul className="space-y-1 text-slate-400 text-sm">
            <li>
              <Link href="/about" className="hover:text-white transition">About</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition">Services</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col space-y-2">
          <h4 className="font-semibold text-white">Services</h4>
          <ul className="space-y-1 text-slate-400 text-sm">
            <li>Local SEO</li>
            <li>Technical SEO</li>
            <li>Content Marketing</li>
            <li>Link Building</li>
          </ul>
        </div>

        <div className="flex flex-col space-y-2">
          <h4 className="font-semibold text-white">Contact</h4>
          <p className="text-slate-400 text-sm">info@targetseo.com</p>
          <p className="text-slate-400 text-sm">+1 (123) 456-7890</p>
          <div className="flex space-x-3 mt-2">
            <Link href="#" className="text-slate-400 hover:text-white transition">FB</Link>
            <Link href="#" className="text-slate-400 hover:text-white transition">TW</Link>
            <Link href="#" className="text-slate-400 hover:text-white transition">LI</Link>
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-slate-500 mt-8">
        © 2026 Target SEO Solutions. All rights reserved.
      </p>
    </footer>
  )
}
