import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold">
          TargetSEO
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/services">Services</Link>
          <Link href="/industries">Industries</Link>
          <Link href="/case-studies">Case Studies</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
        </nav>
        <div className="flex items-center gap-4">
          <a href="tel:+1" className="font-medium">
            Call Now
          </a>
          <Link
            href="/free-audit"
            className="bg-black text-white px-4 py-2 rounded"
          >
            Free SEO Audit
          </Link>
        </div>
      </div>
    </header>
  );
}
