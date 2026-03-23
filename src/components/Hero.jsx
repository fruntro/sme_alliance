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

const InfrastructureSilhouette = () => (
  <svg
    className="absolute bottom-0 right-0 pointer-events-none opacity-[0.04]"
    style={{ width: '58%', height: '62%' }}
    viewBox="0 0 900 550"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMaxYMax meet"
  >
    {/* Suspension bridge deck */}
    <line x1="0" y1="420" x2="900" y2="420" stroke="#1CC5B8" strokeWidth="1.5"/>
    {/* Bridge towers */}
    <line x1="270" y1="420" x2="270" y2="155" stroke="#1CC5B8" strokeWidth="2"/>
    <line x1="570" y1="420" x2="570" y2="115" stroke="#1CC5B8" strokeWidth="2"/>
    {/* Tower cross-beams */}
    <line x1="254" y1="240" x2="286" y2="240" stroke="#1CC5B8" strokeWidth="1.5"/>
    <line x1="254" y1="320" x2="286" y2="320" stroke="#1CC5B8" strokeWidth="1.5"/>
    <line x1="554" y1="210" x2="586" y2="210" stroke="#1CC5B8" strokeWidth="1.5"/>
    <line x1="554" y1="300" x2="586" y2="300" stroke="#1CC5B8" strokeWidth="1.5"/>
    {/* Main suspension cables */}
    <path d="M30 420 Q270 170 570 130 Q760 115 900 370" stroke="#1CC5B8" strokeWidth="1.2"/>
    {/* Hanger cables */}
    <line x1="100" y1="420" x2="115" y2="355" stroke="#1CC5B8" strokeWidth="0.6"/>
    <line x1="170" y1="420" x2="180" y2="290" stroke="#1CC5B8" strokeWidth="0.6"/>
    <line x1="220" y1="420" x2="226" y2="228" stroke="#1CC5B8" strokeWidth="0.6"/>
    <line x1="330" y1="420" x2="325" y2="210" stroke="#1CC5B8" strokeWidth="0.6"/>
    <line x1="390" y1="420" x2="387" y2="178" stroke="#1CC5B8" strokeWidth="0.6"/>
    <line x1="450" y1="420" x2="449" y2="154" stroke="#1CC5B8" strokeWidth="0.6"/>
    <line x1="510" y1="420" x2="511" y2="138" stroke="#1CC5B8" strokeWidth="0.6"/>
    <line x1="630" y1="420" x2="632" y2="163" stroke="#1CC5B8" strokeWidth="0.6"/>
    <line x1="690" y1="420" x2="694" y2="205" stroke="#1CC5B8" strokeWidth="0.6"/>
    <line x1="750" y1="420" x2="757" y2="255" stroke="#1CC5B8" strokeWidth="0.6"/>
    <line x1="820" y1="420" x2="830" y2="316" stroke="#1CC5B8" strokeWidth="0.6"/>
    {/* City skyline — right */}
    <rect x="670" y="295" width="38" height="125" stroke="#1C6ED5" strokeWidth="1" fill="none"/>
    <rect x="718" y="250" width="48" height="170" stroke="#1C6ED5" strokeWidth="1" fill="none"/>
    <rect x="776" y="325" width="32" height="95" stroke="#1C6ED5" strokeWidth="1" fill="none"/>
    <rect x="818" y="280" width="42" height="140" stroke="#1C6ED5" strokeWidth="1" fill="none"/>
    <rect x="870" y="355" width="30" height="65" stroke="#1C6ED5" strokeWidth="1" fill="none"/>
    {/* Antenna on tallest building */}
    <line x1="742" y1="250" x2="742" y2="215" stroke="#1C6ED5" strokeWidth="1"/>
    {/* Electricity pylon — left */}
    <line x1="72" y1="420" x2="72" y2="220" stroke="#1C6ED5" strokeWidth="1.5"/>
    <line x1="72" y1="310" x2="45" y2="370" stroke="#1C6ED5" strokeWidth="1"/>
    <line x1="72" y1="310" x2="99" y2="370" stroke="#1C6ED5" strokeWidth="1"/>
    <line x1="55" y1="340" x2="89" y2="340" stroke="#1C6ED5" strokeWidth="0.8"/>
    <line x1="72" y1="220" x2="50" y2="265" stroke="#1C6ED5" strokeWidth="1"/>
    <line x1="72" y1="220" x2="94" y2="265" stroke="#1C6ED5" strokeWidth="1"/>
    <line x1="50" y1="265" x2="94" y2="265" stroke="#1C6ED5" strokeWidth="0.8"/>
    {/* Ground line */}
    <line x1="0" y1="440" x2="900" y2="440" stroke="#1C6ED5" strokeWidth="0.5"/>
  </svg>
)

const sectors = [
  'Infrastructure',
  'Construction',
  'Energy & Utilities',
  'Defence',
  'Digital',
  'Advisory',
]

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
        <InfrastructureSilhouette />
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
            <span className="gradient-text">
              shaping the future
            </span>{' '}
            of industry.
          </h1>

          {/* Subheadline */}
          <p className="text-lg lg:text-xl text-[#BFC7D5] leading-relaxed max-w-2xl mb-12 font-light">
            The SME Alliance brings together specialist firms operating across
            infrastructure, construction, energy, defence, and beyond —
            collaborating to win frameworks, influence policy, and deliver at a
            scale no single firm can match.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:info@smealliance.co.uk"
              className="relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded text-base font-semibold text-white overflow-hidden group transition-all duration-200 hover:shadow-lg hover:shadow-blue-900/30"
              style={{ background: 'linear-gradient(to right, #1C6ED5, #1CC5B8)' }}
            >
              <span className="relative z-10">Partner With Us</span>
              <svg className="relative z-10 w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </a>
          </div>

          {/* Sector tags */}
          <div className="mt-16 pt-8 border-t border-white/[0.06]">
            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-[#7A8599] mb-5">
              Key markets
            </p>
            <div className="flex flex-wrap gap-3">
              {sectors.map((s) => (
                <span
                  key={s}
                  className="text-sm font-medium px-4 py-2 rounded-full border border-white/[0.12] text-[#BFC7D5] bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/[0.2] transition-colors duration-200 tracking-wide"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
