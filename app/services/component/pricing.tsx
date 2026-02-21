export function Pricing() {
  const plans = [
    { name: "Starter", price: "$499", features: ["5 Keywords", "On-page SEO", "Basic Reports"] },
    { name: "Growth", price: "$999", features: ["15 Keywords", "Content Writing", "Backlinks"], popular: true },
    { name: "Scale", price: "$1999", features: ["Unlimited Keywords", "PR Outreach", "Dedicated Manager"] }
  ]

  return (
    <section className="py-24 h-full   wavy-top bg-[#020617] relative overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {plans.map((plan, i) => (
          <div 
            key={i} 
            className={`
              relative p-10 rounded-[2.5rem] border transition-all duration-500 group
              backdrop-blur-xl
              ${plan.popular 
                ? 'border-orange-500/50 bg-white/[0.08] shadow-[0_20px_50px_rgba(234,88,12,0.15)] scale-105 z-20' 
                : 'border-white/10 bg-white/[0.03] shadow-2xl hover:bg-white/[0.06] hover:border-white/20'
              }
            `}
          >
            {/* Inner Gradient Shine */}
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none" />

            {plan.popular && (
              <>
                {/* Popular Badge */}
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-600 to-orange-400 text-white px-6 py-1.5 rounded-full text-xs font-black uppercase tracking-tighter shadow-lg shadow-orange-600/40">
                  Most Popular
                </span>
                {/* Outer Glow for Popular card */}
                <div className="absolute inset-0 bg-orange-600/5 blur-3xl -z-10 rounded-[2.5rem]" />
              </>
            )}

            <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter italic">
              {plan.name}
            </h3>
            
            <div className="my-8">
              <span className="text-5xl font-black text-white tracking-tighter">
                {plan.price}
              </span>
              <span className="text-sm text-slate-500 font-medium ml-2 uppercase tracking-widest">
                / month
              </span>
            </div>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

            <ul className="space-y-5 mb-10">
              {plan.features.map(f => (
                <li key={f} className="text-slate-300 text-sm flex items-center gap-3 font-medium">
                  <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${plan.popular ? 'bg-orange-600' : 'bg-white/10'}`}>
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {f}
                </li>
              ))}
            </ul>

            <button 
              className={`
                w-full py-5 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] transition-all duration-300
                ${plan.popular 
                  ? 'bg-orange-600 text-white shadow-[0_10px_20px_rgba(234,88,12,0.3)] hover:bg-orange-500 hover:-translate-y-1' 
                  : 'bg-white text-black hover:bg-orange-600 hover:text-white hover:shadow-[0_10px_20px_rgba(234,88,12,0.2)] hover:-translate-y-1'
                }
              `}
            >
              Get Started Now
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}