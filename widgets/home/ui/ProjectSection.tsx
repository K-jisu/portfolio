'use client';
import {
  fadeUp,
  floatLoop,
  sectionReveal,
} from '@/lib/motion';
import { PROJECTS } from '@/features/main/model/projects';
import ProjectCard from '@/features/main/ui/ProjectCard';
import ProjectModal from '@/features/main/ui/ProjectModal';
import { useModalStore } from '@/shared/store/modalStore';
import { motion, useReducedMotion } from 'motion/react';

const ProjectSection = () => {
  const { isModalOpen, selectProject, openModal, closeModal } = useModalStore();
  const shouldReduceMotion = useReducedMotion() ?? false;
  const fadeUpInView = fadeUp(shouldReduceMotion);
  const sectionRevealInView = sectionReveal(shouldReduceMotion);
  const backgroundFloat = floatLoop(shouldReduceMotion, 14, -12, 11, 1.04);

  return (
    <section
      id="projects"
      className="relative py-24 px-6 bg-black/5 scroll-mt-20 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="absolute left-1/2 top-16 h-72 w-72 -translate-x-[86%] rounded-full bg-[#0dccf2]/12 blur-[120px]"
          animate={backgroundFloat.animate}
          transition={backgroundFloat.transition}
        />
      </div>

      <motion.div
        className="max-w-7xl mx-auto space-y-12"
        {...sectionRevealInView}
      >
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
          {...fadeUpInView}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="space-y-4"
            {...fadeUpInView}
            viewport={{ once: true }}
          >
            <h2 className="text-[#0dccf2] font-bold tracking-widest uppercase text-sm">
              03. Featured Work
            </h2>
            <h3 className="text-4xl font-bold">Selected Projects</h3>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              onClick={() => openModal(project.id)}
              {...fadeUp(
                shouldReduceMotion,
                0.06 + index * 0.08,
                20,
                0.55
              )}
              viewport={{ once: true, amount: 0.25 }}
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </motion.div>
      {isModalOpen && selectProject !== null && (
        <ProjectModal id={selectProject} onClose={closeModal} />
      )}
    </section>
  );
};

export default ProjectSection;
