'use client';
import { PROJECTS } from '@/features/main/model/projects';
import ProjectCard from '@/features/main/ui/ProjectCard';
import ProjectModal from '@/features/main/ui/ProjectModal';
import { useModalStore } from '@/shared/store/modalStore';

const ProjectSection = () => {
  const { isModalOpen, selectProject, openModal, closeModal } = useModalStore();

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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <div key={project.id} onClick={() => openModal(project.id)}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
      {isModalOpen && selectProject !== null && (
        <ProjectModal id={selectProject} onClose={closeModal} />
      )}
    </section>
  );
};

export default ProjectSection;
