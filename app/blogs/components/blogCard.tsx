"use client";
import { m } from "framer-motion";
import { ArrowUpRight, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BlogProps {
  title: string;
  category: string;
  date: string;
  image: string;
  index: number;
  slug?: string; // Slug prop add kiya (optional for now)
}

export default function BlogCard({
  title,
  category,
  date,
  image,
  index,
  slug = "the-future-of-organic-search-in-2026", // Default slug placeholder
}: BlogProps) {
  return (
    <Link href={`/blogs/${slug}`} className="block">
      <m.div
        initial={{ opacity: 0, y: 50, rotateX: -20, rotateY: 10 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: 0.8,
          delay: index * 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        whileHover={{ y: -10 }}
        className="group relative bg-white/[0.03] border border-white/10 rounded-[2.5rem] overflow-hidden backdrop-blur-sm cursor-pointer"
      >
        {/* Image Container */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            priority={index < 3}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
          />
          <div className="absolute top-4 left-4">
            <span className="px-4 py-1.5 bg-accent text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
              {category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-4">
          <div className="flex items-center gap-2 text-slate-500 text-xs uppercase tracking-widest">
            <Calendar size={12} className="text-accent" />
            {date}
          </div>

          <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300 leading-tight">
            {title}
          </h3>

          <div className="pt-4 flex items-center justify-between border-t border-white/5">
            <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-slate-400 group-hover:text-white transition-colors">
              Read Article
            </span>
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent transition-all duration-300 group-hover:rotate-45">
              <ArrowUpRight size={18} className="text-white" />
            </div>
          </div>
        </div>
      </m.div>
    </Link>
  );
}