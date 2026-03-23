const members = [
  {
    name: 'Anturas',
    logo: 'https://anturas.com/wp-content/uploads/2024/01/Anturas_logo_White_Strapline-1.png',
    website: 'https://anturas.com',
    lightBg: true,
    description: 'Professional services & consulting',
  },
  {
    name: 'Advance',
    logo: 'https://www.advance.io/wp-content/uploads/2021/06/Advance-Logo-2021.svg',
    website: 'https://www.advance.io',
    lightBg: false,
    description: 'Technology & digital transformation',
  },
  {
    name: 'Firstco',
    logo: 'https://www.firstco.co.uk/wp-content/uploads/2021/07/Firstco-Logo.png',
    website: 'https://www.firstco.co.uk',
    lightBg: true,
    description: 'Financial services & payments',
  },
  {
    name: 'CMR',
    logo: 'https://cmrsurgical.com/wp-content/uploads/2021/03/CMR-Surgical-Logo-White.svg',
    website: 'https://cmrsurgical.com',
    lightBg: false,
    description: 'Surgical robotics & medtech',
  },
  {
    name: 'PlanAhead',
    logo: 'https://planahead.co.uk/wp-content/uploads/2020/11/PlanAhead-Logo.png',
    website: 'https://planahead.co.uk',
    lightBg: true,
    description: 'Strategic planning & advisory',
  },
  {
    name: 'Akerlof',
    logo: 'https://akerlof.co.uk/wp-content/uploads/2023/01/Akerlof-Logo-White.svg',
    website: 'https://akerlof.co.uk',
    lightBg: false,
    description: 'Economics & market design',
  },
];

export default function Members() {
  return (
    <section id="members" className="py-24 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#1CC5B8] mb-4 block">
            Our Members
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Built by businesses that{' '}
            <span className="gradient-text">mean business</span>
          </h2>
          <p className="text-lg text-[#9CA3AF] max-w-2xl mx-auto">
            Each member is hand-picked for capability, integrity, and commitment
            to delivering exceptional outcomes in the public and private sector.
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {members.map((member) => (
            <a
              key={member.name}
              href={member.website}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center justify-center rounded-2xl border border-white/10 p-8 transition-all duration-300 hover:border-[#1C6ED5]/50 hover:shadow-lg hover:shadow-[#1C6ED5]/10 overflow-hidden"
              style={{ backgroundColor: member.lightBg ? '#ffffff' : '#1a2030' }}
            >
              {/* Gradient top accent on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#1C6ED5] to-[#1CC5B8] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Logo */}
              <div className="h-16 flex items-center justify-center mb-4">
                <img
                  src={member.logo}
                  alt={`${member.name} logo`}
                  className="max-h-full max-w-full object-contain"
                  style={{ filter: member.lightBg ? 'none' : 'brightness(1.1)' }}
                  onError={(e) => {
                    // Fallback: show text name if logo fails to load
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <span
                  className="hidden text-xl font-bold"
                  style={{ color: member.lightBg ? '#1C6ED5' : '#ffffff' }}
                >
                  {member.name}
                </span>
              </div>

              {/* Member name + description */}
              <div className="text-center">
                <p
                  className="text-sm font-semibold mb-1"
                  style={{ color: member.lightBg ? '#111827' : '#ffffff' }}
                >
                  {member.name}
                </p>
                <p
                  className="text-xs"
                  style={{ color: member.lightBg ? '#6B7280' : '#9CA3AF' }}
                >
                  {member.description}
                </p>
              </div>

              {/* Arrow on hover */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg
                  className="w-4 h-4"
                  style={{ color: member.lightBg ? '#1C6ED5' : '#1CC5B8' }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-[#9CA3AF] mb-6">
            Interested in joining this network of high-calibre businesses?
          </p>
          <a
            href="#join"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-[#1C6ED5] to-[#1CC5B8] hover:opacity-90 transition-opacity"
          >
            Apply to Become a Member
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
