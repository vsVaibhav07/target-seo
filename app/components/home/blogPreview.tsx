'use client'

import { Variants,m } from 'framer-motion'
import Link from 'next/link'

const blogs = [
  {
    title: 'How SEO is Driving 320% Traffic Growth',
    readTime: '6 min read',
    href: '/blog/seo-traffic-growth',
    position: 'center'
  },
  {
    title: 'Local SEO Strategies That Convert',
    readTime: '5 min read',
    href: '/blog/local-seo-strategies',
    position: 'left'
  },
  {
    title: 'Technical SEO Checklist for 2026',
    readTime: '7 min read',
    href: '/blog/technical-seo-checklist',
    position: 'right'
  }
]

export default function BlogPreview() {
  const headingText = "Latest SEO Blogs & Growth Insights"
  const words = headingText.split(" ")

  // Container variants to stagger words and content
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  }

  // Word animation variants
  const wordVariants:Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] }
    }
  }

  return (
    <section className="relative py-32  overflow-hidden bg-gradient-to-br from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Content: Animated Text */}
          <m.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={containerVariants}
          >
            <m.p variants={wordVariants} className="text-accent font-semibold mb-4 italic">
              Insights & Knowledge
            </m.p>
            
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight flex flex-wrap gap-x-3">
              {words.map((word, i) => (
                <m.span key={i} variants={wordVariants} className={`inline-block ${word=="SEO"||word=="Growth"?"text-accent":""}`}>
                  {word}
                </m.span>
              ))}
            </h2>

            <m.p variants={wordVariants} className="mt-6 text-muted max-w-lg">
              Actionable SEO strategies, case studies and growth experiments
              curated by our experts.
            </m.p>

            <m.div variants={wordVariants}>
              <Link
                href="/blog"
                className="inline-block mt-10 rounded-xl bg-accent px-8 py-4 text-white font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition"
              >
                Explore All Blogs
              </Link>
            </m.div>
          </m.div>

          {/* Right Content: Stacked Cards with Float Animation */}
          <div className="relative h-[460px]">
            {blogs.map((blog, i) => (
              <m.div
                key={blog.title}
                initial={{ opacity: 0, scale: 0.8, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: false }}
                // Subtle floating effect based on position
                animate={{ 
                  y: [0, i % 2 === 0 ? -10 : 10, 0],
                }}
                transition={{ 
                  delay: i * 0.2, 
                  duration: 0.8,
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                className={`absolute rounded-3xl shadow-2xl bg-gradient-to-br from-slate-200 to-slate-100 overflow-hidden group cursor-pointer
                  ${
                    blog.position === 'center'
                      ? 'top-0 left-1/2 -translate-x-1/2 h-64 w-80 z-20'
                      : blog.position === 'left'
                      ? 'bottom-0 left-0 h-56 w-72'
                      : 'bottom-12 right-0 h-64 w-80'
                  }`}
              >
                <Link href={blog.href} className="block h-full">
                  {/* Hover Zoom Effect on background */}
                  <div className="h-full w-full flex flex-col justify-end p-6 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-orange-600/90 group-hover:via-orange-500/40 transition-all duration-500">
                    <h3 className="text-white font-semibold text-lg leading-snug mb-2 transform group-hover:-translate-y-1 transition-transform">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-slate-200 opacity-80 group-hover:opacity-100">{blog.readTime}</p>
                  </div>
                </Link>
              </m.div>
            ))}

            {/* Background Glow */}
            <m.div
              animate={{ y: [0, -12, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-accent/20 blur-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}