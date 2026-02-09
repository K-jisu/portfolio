const HEADER_TABS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-[rgba(16,31,34,0.8)] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <h2 className="text-xl font-bold tracking-tight">
            JISU<span className="text-[#0dccf2]">.DEV</span>
          </h2>
        </div>
        <nav className="hidden md:flex items-center gap-10">
          {HEADER_TABS.map((tab) => (
            <a
              className="text-sm font-medium hover:text-[#0dccf2] transition-colors"
              href={tab.href}
              key={tab.label}
            >
              {tab.label}
            </a>
          ))}
        </nav>
        {/* Todo : PDF 이력서 다운로드 */}
        <a
          href="#"
          className="bg-[#0dccf2]/10 border border-[#0dccf2] text-[#0dccf2] hover:bg-[#0dccf2] hover:text-[#101f22] transition-all px-5 py-2 rounded-lg text-sm font-bold flex items-center gap-2"
        >
          <span>PDF</span>
          <span className="material-symbols-outlined text-sm">download</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
