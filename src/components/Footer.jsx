const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Members', href: '#members' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Who It\'s For', href: '#who' },
  { label: 'Join', href: '#join' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Use', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-[#070B10] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand column */}
          <div className="md:col-span-1">
            {/* Logo */}
            <div className="mb-4">
              <img
                src="/SME Alliance Logo V2.png"
                alt="SME Alliance"
                className="h-10 w-auto"
                style={{ maxWidth: '180px' }}
              />
            </div>

            <p className="text-[#6B7280] text-sm leading-relaxed max-w-xs">
              A network of high-calibre SMEs collaborating to compete, win, and
              deliver at scale.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3 mt-6">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/sme-alliance"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 text-[#6B7280] hover:text-white hover:border-white/30 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="#"
                aria-label="X (Twitter)"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-white/10 text-[#6B7280] hover:text-white hover:border-white/30 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation column */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#6B7280] text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase mb-5">
              Get in Touch
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@smealliance.co.uk"
                  className="text-[#6B7280] text-sm hover:text-white transition-colors flex items-center gap-2"
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  hello@smealliance.co.uk
                </a>
              </li>
              <li>
                <a
                  href="#join"
                  className="inline-flex items-center gap-1.5 text-sm font-medium gradient-text hover:opacity-80 transition-opacity"
                >
                  Apply to Join
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#4B5563] text-xs">
            © {new Date().getFullYear()} SME Alliance. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#4B5563] text-xs hover:text-[#6B7280] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
