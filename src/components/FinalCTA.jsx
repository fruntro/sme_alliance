export default function FinalCTA() {
  return (
    <section id="join" className="py-32 bg-[#0B0F14] relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(28,110,213,0.12) 0%, transparent 70%)',
        }}
      />

      {/* Decorative grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(rgba(28,197,184,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(28,197,184,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <span className="text-xs font-semibold tracking-widest uppercase text-[#1CC5B8] mb-6 block">
          Ready to grow?
        </span>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          If you're building something{' '}
          <span className="gradient-text">serious</span>,<br />
          you don't do it alone.
        </h2>

        {/* Supporting copy */}
        <p className="text-lg md:text-xl text-[#9CA3AF] max-w-2xl mx-auto mb-12 leading-relaxed">
          The SME Alliance exists for businesses that are ready to compete at a
          higher level — and win. Take the next step today.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:hello@smealliance.co.uk"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full text-white font-semibold text-base bg-gradient-to-r from-[#1C6ED5] to-[#1CC5B8] hover:opacity-90 transition-opacity shadow-lg shadow-[#1C6ED5]/25"
          >
            Apply to Join
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>

          <a
            href="mailto:hello@smealliance.co.uk"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full text-white font-semibold text-base border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all"
          >
            Speak to Us
          </a>
        </div>

        {/* Trust note */}
        <p className="mt-10 text-sm text-[#6B7280]">
          No obligation. We review every application personally.
        </p>
      </div>
    </section>
  );
}
