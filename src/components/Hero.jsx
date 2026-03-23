import React from 'react'

const HexGrid = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-[0.04]"
    xmlns="http://www.w3.org/2000/svg"
    style={{ pointerEvents: 'none' }}
  >
    <defs>
      <pattern id="hex" x="0" y="0" width="80" height="70" patternUnits="userSpaceOnUse">
        <polygon
          points="40,2 74,20 74,56 40,74 6,56 6,20"
          fill="none"
          stroke="#1C6ED5"
          strokeWidth="0.8"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#hex)" />
  </svg>
)

const NodeNetwork = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-[0.07]"
    xmlns="http://www.w3.org/2000/svg"
    style={{ pointerEvents: 'none' }}
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1C6ED5"/>
        <stop offset="100%" stopColor="#1CC5B8"/>
      </linearGradient>
    </defs>
    {/* Connection lines */}
    <line x1="10%" y1="20%" x2="30%" y2="40%" stroke="url(#lineGrad)" strokeWidth="0.5"/>
    <line x1="30%" y1="40%" x2="55%" y2="25%" stroke="url(#lineGrad)" strokeWidth="0.5"/>
    <line x1="55%" y1="25%" x2="75%" y2="50%" stroke="url(#lineGrad)" strokeWidth="0.5"/>
    <line x1="75%" y1="50%" x2="90%" y2="30%" stroke="url(#lineGrad)" strokeWidth="0.5"/>
    <line x1="30%" y1="40%" x2="45%" y2="65%" stroke="url(#lineGrad)" strokeWidth="0.5"/>
    <line x1="45%" y1="65%" x2="70%" y2="75%" stroke="url(#lineGrad)" strokeWidth="0.5"/>
    <line x1="55%" y1="25%" x2="45%" y2="65%" stroke="url(#lineGrad)" strokeWidth="0.5"/>
    <line x1="20%" y1="75%" x2="45%" y2="65%" stroke="url(#lineGrad)" strokeWidth="0.5"/>
    <line x1="70%" y1="75%" x2="85%" y2="80%" stroke="url(#lineGrad)" strokeWidth="0.5"/>
    <line x1="10%" y1="55%" x2="20%" y2="75%" stroke="url(#lineGrad)" strokeWidth="0.5"/>
    <line x1="10%" y1="20%" x2="10%" y2="55%" stroke="url(#lineGrad)" strokeWidth="0.5"/>
    {/* Nodes */}
    {[
      [10,20],[30,40],[55,25],[75,50],[90,30],
      [45,65],[70,75],[20,75],[10,55],[85,80]
    ].map(([cx, cy], i) => (
      <circle key={i} cx={`${cx}%`} cy={`${cy}%`} r="3" fill="#1C6ED5" opacity="0.6"/>
    ))}
  </svg>
)

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0B0F14]"
    >
      {/* Background layers */}
      <div className="absolute inset-0">
        <HexGrid />
        <NodeNetwork />
        {/* Radial gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 70% 60% at 60% 40%, rgba(28,110,213,0.08) 0%, transparent 70%)',
          }}
        />
        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-48"
          style={{ background: 'linear-gradient(to bottom, transparent, #0B0F14)' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-8">
            <span
              className="inline-block w-6 h-px"
              style={{ background: 'linear-gradient(to right, #1C6ED5, #1CC5B8)' }}
            />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1CC5B8]">
              SME Alliance
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8">
            A collective of SMEs{' '}
            <span
              className="gradient-text"
            >
              shaping the future
            </span>{' '}
            of industry.
          </h1>

          {/* Subheadline */}
          <p className="text-lg lg:text-xl text-[#BFC7D5] leading-relaxed max-w-2xl mb-12 font-light">
            The SME Alliance brings together independent businesses to collaborate,
            influence, and deliver outcomes that no single firm can achieve alone.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#join"
              className="relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded text-base font-semibold text-white overflow-hidden group transition-all duration-200 hover:shadow-lg hover:shadow-blue-900/30"
              style={{ background: 'linear-gradient(to right, #1C6ED5, #1CC5B8)' }}
            >
              <span className="relative z-10">Join the Alliance</span>
              <svg className="relative z-10 w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded text-base font-semibold text-[#BFC7D5] hover:text-white border border-white/[0.12] hover:border-white/25 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-200"
            >
              Partner With Us
            </a>
          </div>

          {/* Stats row */}
          <div className="mt-20 pt-8 border-t border-white/[0.06] grid grid-cols-3 gap-8 max-w-lg">
            {[
              { value: '30+', label: 'Member firms' },
              { value: '£200M+', label: 'Collective capability' },
              { value: '12+', label: 'Sectors served' },
            ].map(({ value, label }) => (
              <div key={label}>
                <div
                  className="text-2xl font-bold mb-1 gradient-text"
                >
                  {value}
                </div>
                <div className="text-xs text-[#7A8599] font-medium tracking-wide uppercase">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
