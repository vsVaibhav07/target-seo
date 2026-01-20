import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 px-6">
        <div>
           <Link href="/" className="text-xl font-extrabold">
         <Image src={"/logo.png"} width={300} height={300} alt='Target SEO Solution Logo'/>
        </Link>
          <p className="text-slate-400">
            ROI-driven SEO strategies for scalable growth
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-slate-400">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-slate-400">
            <li>Local SEO</li>
            <li>Technical SEO</li>
            <li>Content Marketing</li>
            <li>Link Building</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <p className="text-slate-400">info@targetseo.com</p>
        </div>
      </div>

      <p className="text-center text-sm text-slate-500 mt-12">
        © 2026 Target SEO Solutions
      </p>
    </footer>
  )
}
