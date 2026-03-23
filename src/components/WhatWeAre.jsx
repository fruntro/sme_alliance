import React from 'react'

const pillars = [
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
    title: 'Collaboration over competition',
    body: 'Member firms share intelligence, capacity, and opportunity. We compete where we must, but we grow through partnership.',
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
    title: 'Collective capability at scale',
    body: 'Together, we can take on engagements that would be out of reach for any individual firm — without the overhead of a large organisation.',
  },
  {
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    title: 'Access to larger opportunities',
    body: 'Frameworks, major bids, and strategic partnerships that require collective scale become accessible through the Alliance.',
  },
]

export default function WhatWeAre() {
  return (
    <section id="about" className="bg-[#111827] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left column — text */}
          <div>
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="inline-block w-6 h-px" style={{ background: 'linear-gradient(to right, #1C6ED5, #1CC5B8)' }} />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1CC5B8]">What We Are</span>
            </div>

            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-[1.15] tracking-tight mb-6">
              Not a directory.<br />A working coalition.
            </h2>

            <p className="text-[#BFC7D5] text-lg leading-relaxed mb-6">
              SME Alliance is not a directory. It is a working coalition of specialist firms aligned around delivery, innovation, and shared opportunity.
            </p>

            <p className="text-[#7A8599] leading-relaxed">
              Our members are proven operators. They have won contracts, delivered complex projects, and built real expertise. What they gain through the Alliance is reach — the ability to act collectively, present unified capability, and access opportunities that match their ambition.
            </p>

          </div>

          {/* Right column — pillars */}
          <div className="flex flex-col gap-6">
            {pillars.map((pillar, i) => (
              <div
                key={i}
                className="group relative p-6 rounded-lg bg-[#0B0F14] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-300"
              >
                {/* Gradient accent line */}
                <div
                  className="absolute left-0 top-6 bottom-6 w-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(to bottom, #1C6ED5, #1CC5B8)' }}
                />

                <div className="flex gap-4 items-start">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded flex items-center justify-center"
                    style={{ background: 'rgba(28,110,213,0.1)', color: '#1C6ED5' }}
                  >
                    {pillar.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2 text-base">{pillar.title}</h3>
                    <p className="text-[#7A8599] text-sm leading-relaxed">{pillar.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
