'use client';
import { PROJECTS } from '@/features/main/model/projects';
import ProjectCard from '@/features/main/ui/ProjectCard';
import ProjectModal from '@/features/main/ui/ProjectModal';
import { useModalStore } from '@/shared/store/modalStore';
import { motion, useReducedMotion } from 'motion/react';

const easeOutExpo = [0.22, 1, 0.36, 1] as const;

const ProjectSection = () => {
  const { isModalOpen, selectProject, openModal, closeModal } = useModalStore();
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = shouldReduceMotion
    ? {
        initial: { opacity: 1, y: 0 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0 },
      }
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.7, ease: easeOutExpo },
      };

  return (
    <section
      id="projects"
      className="relative py-24 px-6 bg-black/5 scroll-mt-20 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="absolute left-1/2 top-16 h-72 w-72 -translate-x-[86%] rounded-full bg-[#0dccf2]/12 blur-[120px]"
          animate={
            shouldReduceMotion
              ? { opacity: 1 }
              : { x: [0, 14, 0], y: [0, -12, 0], scale: [1, 1.04, 1] }
          }
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { duration: 11, repeat: Infinity, ease: 'easeInOut' }
          }
        />
      </div>

      <motion.div
        className="max-w-7xl mx-auto space-y-12"
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6 }}
      >
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
          {...fadeUp}
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="space-y-4" {...fadeUp} viewport={{ once: true }}>
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
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : {
                      delay: 0.06 + index * 0.08,
                      duration: 0.55,
                      ease: easeOutExpo,
                    }
              }
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
