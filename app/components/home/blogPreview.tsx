'use client'

import { motion } from 'framer-motion'
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
  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-br from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            
          >
            <p className="text-accent font-semibold mb-4">Insights & Knowledge</p>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Latest SEO Blogs & Growth Insights
            </h2>
            <p className="mt-6 text-muted ">
              Actionable SEO strategies, case studies and growth experiments
              curated by our experts.
            </p>

            <Link
              href="/blog"
              className="inline-block mt-10 rounded-xl bg-accent px-8 py-4 text-white font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition"
            >
              Explore All Blogs
            </Link>
          </motion.div>

          <div className="relative h-[460px]">
            {blogs.map((blog, i) => (
              <motion.div
                key={blog.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
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
                  <div className="h-full w-full flex flex-col justify-end p-6 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                    <h3 className="text-white font-semibold text-lg leading-snug mb-2">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-slate-200">{blog.readTime}</p>
                  </div>
                </Link>
              </motion.div>
            ))}

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-accent/20 blur-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
