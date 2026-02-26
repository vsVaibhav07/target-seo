"use client";
import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import BlogCard from "./blogCard";

const BLOG_DATA = [
  {
    title: "The Future of Organic Search in 2026",
    category: "SEO Strategy",
    date: "Feb 24, 2026",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "Mastering Core Web Vitals for Performance",
    category: "Development",
    date: "Feb 18, 2026",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "Psychology Behind High Converting Landing Pages",
    category: "UX Design",
    date: "Jan 12, 2026",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "AI and Its Impact on Content Marketing",
    category: "AI & Tech",
    date: "Jan 05, 2026",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "Link Building: Quality Over Quantity Always",
    category: "Link Building",
    date: "Dec 20, 2025",
    image: "https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "E-Commerce SEO: Scale Your Sales Fast",
    category: "E-Commerce",
    date: "Dec 15, 2025",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=60"
  },
  // Extra cards for loading
  {
    title: "The Evolution of Backlinks",
    category: "SEO Strategy",
    date: "Feb 24, 2026",
    image: "https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "Next-Gen Web Performance",
    category: "Development",
    date: "Feb 18, 2026",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "Designing for Conversion",
    category: "UX Design",
    date: "Jan 12, 2026",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "AI in Content Creation",
    category: "AI & Tech",
    date: "Jan 05, 2026",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "The Power of PR Backlinks",
    category: "Link Building",
    date: "Dec 20, 2025",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "Growth Hacking E-Commerce",
    category: "E-Commerce",
    date: "Dec 15, 2025",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=60"
  }
];

export default function BlogGrid() {
  const [visibleCount, setVisibleCount] = useState(6);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const hasMore = visibleCount < BLOG_DATA.length;

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {BLOG_DATA.slice(0, visibleCount).map((blog, index) => (
            <BlogCard key={index} {...blog} index={index % 6} />
          ))}
        </AnimatePresence>
      </div>

      {/* Load More Button Section */}
      {hasMore && (
        <div className="mt-20 text-center">
          <m.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={loadMore}
            className="px-12 py-5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-accent hover:text-white transition-all duration-500 cursor-pointer text-white"
          >
            Load More Articles
          </m.button>
        </div>
      )}

      {!hasMore && (
        <p className="mt-20 text-center text-slate-500 font-mono text-xs uppercase tracking-widest">
          No more articles to show
        </p>
      )}
    </div>
  );
}