import React from 'react'

const benefits = [
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    title: 'Access to larger bids and frameworks',
    body: 'Qualify for public and private sector frameworks that require collective scale, and bid on engagements beyond your individual capacity.',
    accent: '#1C6ED5',
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: 'Trusted partner network',
    body: 'Work alongside vetted, high-quality firms. Refer and receive referrals within a network where quality and delivery are the entry standard.',
    accent: '#1C6ED5',
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
    title: 'Shared visibility and positioning',
    body: 'Benefit from collective marketing, a shared brand presence, and representation in markets where individual SMEs are often overlooked.',
    accent: '#1CC5B8',
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
      </svg>
    ),
    title: 'Collective influence in the market',
    body: 'Contribute to — and benefit from — a unified voice in policy, procurement reform, and sector conversations that shape the business landscape.',
    accent: '#1CC5B8',
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
    title: 'Events, insight, and collaboration forums',
    body: 'Regular member roundtables, sector briefings, and structured collaboration sessions — designed to generate real business value, not networking theatre.',
    accent: '#1C6ED5',
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Rigorous membership standards',
    body: 'Membership is by application and assessment. Standards are maintained. This protects the value of the Alliance for every member within it.',
    accent: '#1CC5B8',
  },
]

export default function Benefits() {
  return (
    <section id="benefits" className="bg-[#111827] py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="inline-block w-6 h-px" style={{ background: 'linear-gradient(to right, #1C6ED5, #1CC5B8)' }} />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1CC5B8]">Member Value</span>
          </div>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-[1.15] tracking-tight mb-4">
            What membership delivers.
          </h2>
          <p className="text-[#7A8599] text-lg leading-relaxed">
            Commercial value, not networking gestures. Here is what Alliance membership means in practice.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="group relative p-6 rounded-lg bg-[#0B0F14] border border-white/[0.06] hover:border-white/[0.1] transition-all duration-300 overflow-hidden"
            >
              {/* Top gradient accent */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(to right, ${b.accent}, #1CC5B8)` }}
              />

              {/* Icon */}
              <div
                className="w-10 h-10 rounded flex items-center justify-center mb-4"
                style={{ background: `${b.accent}15`, color: b.accent }}
              >
                {b.icon}
              </div>

              <h3 className="text-white font-semibold text-base mb-2 leading-snug">
                {b.title}
              </h3>
              <p className="text-[#7A8599] text-sm leading-relaxed">
                {b.body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
