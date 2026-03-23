import React from 'react'

const points = [
  {
    number: '01',
    title: 'Large organisations want capability, not complexity.',
    body: 'Major buyers — in government, infrastructure, financial services, and beyond — need specialist capability delivered reliably. They want clear accountability and proven track records. They do not want to manage a fragmented supply chain.',
  },
  {
    number: '02',
    title: 'SMEs have the expertise. They often lack collective scale.',
    body: 'Independent specialist firms routinely out-perform larger consultancies on quality, responsiveness, and domain depth. But they are frequently excluded from larger opportunities simply because they cannot present the required scale or breadth.',
  },
  {
    number: '03',
    title: 'SME Alliance bridges that gap.',
    body: 'By operating as a coordinated alliance, our members can present collective capability, enter frameworks, and pursue major engagements — while retaining the independence and agility that make them excellent in the first place.',
  },
]

export default function WhyWeExist() {
  return (
    <section id="why" className="bg-[#0B0F14] py-24 lg:py-32 relative overflow-hidden">
      {/* Subtle background accent */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 80% at 80% 50%, #1C6ED5 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="inline-block w-6 h-px" style={{ background: 'linear-gradient(to right, #1C6ED5, #1CC5B8)' }} />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1CC5B8]">Why We Exist</span>
          </div>

          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-[1.15] tracking-tight">
            The market gap that{' '}
            <span className="gradient-text">we were built to fill.</span>
          </h2>
        </div>

        {/* Three points */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {points.map((point) => (
            <div key={point.number} className="relative">
              {/* Large number */}
              <div
                className="text-7xl font-bold leading-none mb-6 select-none"
                style={{
                  background: 'linear-gradient(to bottom, rgba(28,110,213,0.15), transparent)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {point.number}
              </div>

              {/* Divider */}
              <div
                className="w-8 h-[2px] mb-5 rounded-full"
                style={{ background: 'linear-gradient(to right, #1C6ED5, #1CC5B8)' }}
              />

              <h3 className="text-white font-semibold text-lg leading-snug mb-4">
                {point.title}
              </h3>
              <p className="text-[#7A8599] text-sm leading-relaxed">
                {point.body}
              </p>
            </div>
          ))}
        </div>

        {/* Quote pull */}
        <div className="mt-20 lg:mt-24 relative">
          <div
            className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full"
            style={{ background: 'linear-gradient(to bottom, #1C6ED5, #1CC5B8)' }}
          />
          <blockquote className="pl-8">
            <p className="text-xl lg:text-2xl font-light text-[#BFC7D5] leading-relaxed italic max-w-3xl">
              "The SMEs doing the best work in industry are often invisible to the buyers who need them most. The Alliance changes that."
            </p>
            <footer className="mt-4 text-sm text-[#7A8599]">— SME Alliance, founding principle</footer>
          </blockquote>
        </div>

      </div>
    </section>
  )
}
