import React from 'react'

const criteria = [
  {
    label: 'Established and operational',
    detail: 'You have been trading, winning work, and delivering it. You are not a startup seeking validation — you are a proven operator looking for greater reach.',
  },
  {
    label: 'Specialist, not generalist',
    detail: 'You have a defined domain: project management, technology, advisory, engineering, finance, legal, or similar. Depth matters more than breadth.',
  },
  {
    label: 'Collaborative by instinct',
    detail: 'You understand that the right partnership accelerates growth. You lead without ego and contribute without keeping score.',
  },
  {
    label: 'Commercially serious',
    detail: 'You are here to grow your business, not to collect badges. You want access to real opportunities, real relationships, and real outcomes.',
  },
]

export default function WhoItsFor() {
  return (
    <section id="who" className="bg-[#0B0F14] py-24 lg:py-32 relative overflow-hidden">

      {/* Accent */}
      <div
        className="absolute bottom-0 left-0 w-1/2 h-1/2 opacity-[0.04] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 80% at 20% 80%, #1CC5B8 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="inline-block w-6 h-px" style={{ background: 'linear-gradient(to right, #1C6ED5, #1CC5B8)' }} />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1CC5B8]">Who It's For</span>
            </div>

            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-[1.15] tracking-tight mb-6">
              Built for firms that are{' '}
              <span className="gradient-text">ready to do more.</span>
            </h2>

            <p className="text-[#BFC7D5] text-lg leading-relaxed mb-6">
              The Alliance is built for established SMEs with proven delivery capability — leaders who value collaboration over ego, and businesses looking to grow through partnership rather than isolation.
            </p>

            <p className="text-[#7A8599] leading-relaxed mb-10">
              If you are excellent at what you do but find yourself limited by scale, scope, or visibility, the Alliance exists for you. Membership is selective because the standard has to mean something.
            </p>

          </div>

          {/* Right — criteria list */}
          <div className="flex flex-col gap-5">
            {criteria.map((c, i) => (
              <div
                key={i}
                className="flex gap-4 p-5 rounded-lg bg-[#111827] border border-white/[0.06] hover:border-white/[0.1] transition-colors duration-200"
              >
                {/* Check */}
                <div className="flex-shrink-0 mt-0.5">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #1C6ED5, #1CC5B8)' }}
                  >
                    <svg width="10" height="10" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm mb-1">{c.label}</h3>
                  <p className="text-[#7A8599] text-sm leading-relaxed">{c.detail}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
