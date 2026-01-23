'use client'

import { motion ,Variants} from 'framer-motion'

export default function PrimaryCTA() {
  const headingText = "Get Your FREE SEO Audit & Growth Plan"
  const words = headingText.split(" ")

  // Animation Variants for Container
  const containerVariants:Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  // Word-by-word animation variants
  const wordVariants:Variants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  }

  const textItemVariants:Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  }

  return (
    <section className="relative py-32 bg-gradient-to-br from-[#f97316] via-[#fb923c] to-[#fdba74]">
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white rounded-full blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          // key point: once: false ensures animation runs every time it enters view
          viewport={{ once: false, amount: 0.3 }}
          variants={containerVariants}
          className="bg-white rounded-[2.5rem] shadow-2xl p-10 md:p-14 grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Side: Animated Text */}
          <div className="space-y-6">
            <div className="overflow-hidden">
              <motion.span 
                variants={textItemVariants}
                className="inline-block px-4 py-1 rounded-full bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-widest mb-4"
              >
                Limited Availability
              </motion.span>
            </div>

            {/* Word-by-Word Heading Animation */}
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] flex flex-wrap gap-x-[0.3em] overflow-hidden">
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  variants={wordVariants}
                  className={`inline-block ${word === 'FREE'||word === 'Plan'||word === 'Growth'||word === 'SEO' ? 'text-orange-500' : ''}`}
                >
                  {word}
                </motion.span>
              ))}
            </h2>

            <div className="overflow-hidden">
              <motion.p 
                variants={textItemVariants}
                className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-md"
              >
                Discover hidden SEO opportunities and a clear roadmap customized for your business.
              </motion.p>
            </div>

            <motion.div variants={textItemVariants} className="flex gap-4 items-center pt-4">
               <div className="flex -space-x-3">
                 {[1,2,3].map(i => (
                   <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200" />
                 ))}
               </div>
               <p className="text-sm font-medium text-slate-500 underline decoration-orange-400">Join 500+ businesses</p>
            </motion.div>
          </div>

          {/* Right Side: Form (Standard Cursor) */}
          <motion.form 
            variants={textItemVariants}
            className="grid gap-4 bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-100 shadow-inner cursor-auto"
          >
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all shadow-sm cursor-text"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all shadow-sm cursor-text"
              />
              <input
                type="text"
                placeholder="Website URL"
                className="w-full px-5 py-4 rounded-2xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all shadow-sm cursor-text"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="mt-2 bg-orange-500 text-white py-4 rounded-2xl font-bold text-lg shadow-[0_10px_20px_rgba(249,115,22,0.3)] hover:shadow-orange-500/40 transition-all cursor-pointer"
            >
              Get My Free Audit
            </motion.button>
            <p className="text-[10px] text-center text-slate-400">No commitment required. 100% Free.</p>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}