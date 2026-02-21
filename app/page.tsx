import Header from '@/widgets/layout/ui/Header';
import AboutSection from '@/widgets/home/ui/AboutSection';
import HeroSection from '@/widgets/home/ui/HeroSection';
import ProjectSection from '@/widgets/home/ui/ProjectSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#101f22] text-white">
      {/* ========== Background Grid Pattern ========== */}
      <div className="fixed inset-0 pointer-events-none z-0 [background-image:radial-gradient(circle,_#0dccf2_1px,_transparent_1px)] bg-[length:40px_40px] opacity-5" />

      <Header />

      {/* ========== Main ========== */}
      <main className="relative z-10">
        <HeroSection />

        <AboutSection />

        <ProjectSection />

        {/* ===== Contact ===== */}
        <section id="contact" className="py-32 px-6 scroll-mt-20">
          <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-[#0dccf2] font-bold tracking-widest uppercase text-sm">
                04. What's Next?
              </h2>
              <h3 className="text-6xl md:text-8xl font-black">LET'S CONNECT</h3>
            </div>
            <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
              I'm currently looking for new opportunities and collaborations.
              Whether you have a question or just want to say hi, my inbox is
              always open!
            </p>
            <div className="flex flex-col md:flex-row items-center gap-6 pt-6">
              <a
                href="mailto:hello@alexdev.io"
                className="bg-[#0dccf2] text-[#101f22] font-black px-10 py-5 rounded-lg text-xl hover:scale-105 transition-transform flex items-center gap-3"
              >
                <span className="material-symbols-outlined font-bold">
                  mail
                </span>
                SAY HELLO
              </a>
              <div className="flex items-center gap-4">
                <a
                  className="size-14 rounded-full border border-white/10 bg-[rgba(34,66,73,0.2)] backdrop-blur-[12px] flex items-center justify-center text-white hover:text-[#0dccf2] transition-colors"
                  href="#"
                >
                  <svg className="size-6 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.841 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                  </svg>
                </a>
                <a
                  className="size-14 rounded-full border border-white/10 bg-[rgba(34,66,73,0.2)] backdrop-blur-[12px] flex items-center justify-center text-white hover:text-[#0dccf2] transition-colors"
                  href="#"
                >
                  <svg className="size-6 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761 2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ========== Footer ========== */}
      <footer className="py-12 px-6 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-500 text-sm font-mono">
            2024 ALEX.DEV // ALL SYSTEM OPERATIONAL
          </div>
          <div className="flex items-center gap-8">
            <a
              className="text-xs text-slate-500 hover:text-[#0dccf2] uppercase tracking-widest font-bold transition-colors"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="text-xs text-slate-500 hover:text-[#0dccf2] uppercase tracking-widest font-bold transition-colors"
              href="#"
            >
              Terms of Service
            </a>
            <div className="flex items-center gap-2 px-3 py-1 rounded bg-green-500/10 text-green-500 text-[10px] font-bold">
              <span className="size-1.5 rounded-full bg-green-500"></span>
              GITHUB STATUS: SYNCED
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
