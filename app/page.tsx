import Header from '@/widgets/layout/ui/Header';
import AboutSection from '@/widgets/home/ui/AboutSection';
import HeroSection from '@/widgets/home/ui/HeroSection';
import ProjectSection from '@/widgets/home/ui/ProjectSection';
import ConnectSection from '@/widgets/home/ui/ConnectSection';

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

        <ConnectSection />
      </main>
    </div>
  );
}
