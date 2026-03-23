// Alphabetical order: Advance, Akerlof, Anturas, CMR, Firstco, PlanAhead
const members = [
  {
    name: 'Advance Consultancy',
    logo: '/assets/Advance Logo.png',
    website: 'https://www.advance-consultancy.com/',
    lightBg: true,
  },
  {
    name: 'Akerlof',
    logo: '/assets/Akerlof Logo.png',
    website: 'https://akerlof.co.uk/',
    lightBg: false,
  },
  {
    name: 'Anturas',
    logo: '/assets/anturas logo.png',
    website: 'https://www.anturasconsulting.com/',
    lightBg: true,
  },
  {
    name: 'CMR',
    logo: '/assets/cmr-logo-hp.svg',
    website: 'https://cmr.global/',
    lightBg: true,
  },
  {
    name: 'Firstco',
    logo: '/assets/FirstCo logo.png',
    website: 'https://www.firstco.uk.com/',
    lightBg: true,
  },
  {
    name: 'PlanAhead',
    logo: '/assets/PlanAhead logo.png',
    website: 'https://www.planaheadpm.com/',
    lightBg: true,
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
            Each member is hand-picked for capability, integrity, and track record —
            delivering complex outcomes across infrastructure, construction, energy, and beyond.
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
              className="group relative flex items-center justify-center rounded-2xl border border-white/10 p-8 transition-all duration-300 hover:border-[#1C6ED5]/50 hover:shadow-lg hover:shadow-[#1C6ED5]/10 overflow-hidden min-h-[140px]"
              style={{ backgroundColor: member.lightBg ? '#ffffff' : '#1a2030' }}
            >
              {/* Gradient top accent on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#1C6ED5] to-[#1CC5B8] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Logo */}
              <img
                src={member.logo}
                alt={member.name}
                className="max-h-16 max-w-[180px] object-contain"
              />

              {/* External link indicator on hover */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg
                  className="w-3.5 h-3.5"
                  style={{ color: member.lightBg ? '#1C6ED5' : '#1CC5B8' }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
