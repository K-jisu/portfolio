import { ChevronsDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center px-6 pt-20 scroll-mt-20"
    >
      <div className="max-w-4xl w-full text-center space-y-8">
        <h1 className="text-4xl md:text-7xl lg:text-7xl font-black leading-tight tracking-tighter whitespace-normal break-keep">
          안녕하세요. <br />
          프론트엔드 개발자
          <br />
          <span className="text-[#0dccf2] italic">강지수</span> 입니다.
        </h1>

        <div className="font-mono text-[#0dccf2]/80 text-lg md:text-xl flex items-center justify-center gap-2">
          <span className="opacity-50">&gt;</span>
          <span className="[text-shadow:0_0_10px_rgba(13,204,242,0.5)]">
            Frontend Architect / UI Specialist
          </span>
          <span className="w-2 h-6 bg-[#0dccf2] animate-pulse"></span>
        </div>

        <div className="pt-10">
          <a
            className="inline-flex flex-col items-center gap-4 text-white/40 hover:text-[#0dccf2] transition-colors group"
            href="#about"
          >
            <span className="text-xs uppercase tracking-[0.3em] font-bold">
              Explore Journey
            </span>
            <span className="material-symbols-outlined text-4xl animate-bounce">
              <ChevronsDown />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
