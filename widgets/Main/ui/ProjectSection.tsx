import ProjectCard from '@/features/main/ui/ProjectCard';

const PROJECTS = [
  {
    title: '메이드존',
    skills: ['nextjs', 'typescript', 'tailwind', 'framer'],
    period: '2025.10 ~ 2025.12',
    description:
      '체계적인 학습 관리 시스템과 전문 멘토링으로 학생들의 자기주도학습을 지원하는 프리미엄 독서실',
    imageUrl: 'madezone_desktop',
  },
  {
    title: '루나폴',
    skills: ['react', 'vite', 'typescript', 'tailwind', 'i18n'],
    period: '2025.10 ~ 2025.11',
    description:
      'AI 음성 내레이션으로 공간의 세계관을 따라 걷듯 체험하게 하는 몰입형 오디오 가이드 서비스',
    imageUrl: 'lunafall_mobile',
  },
  {
    title: '당재재',
    skills: ['nextjs', 'typescript', 'tailwind', 'framer'],
    period: '2025.11 ~ 2025.12',
    description:
      '체계적인 학습 관리 시스템과 전문 멘토링으로 학생들의 자기주도학습을 지원하는 프리미엄 독서실',
    imageUrl: 'dangjaejae_desktop',
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-black/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <h2 className="text-[#0dccf2] font-bold tracking-widest uppercase text-sm">
              03. Featured Work
            </h2>
            <h3 className="text-4xl font-bold">Selected Projects</h3>
          </div>
          <a
            className="text-[#0dccf2] font-bold flex items-center gap-2 hover:underline"
            href="#"
          >
            View All Archives{' '}
            <span className="material-symbols-outlined">trending_flat</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
