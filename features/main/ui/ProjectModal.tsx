'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/shared/ui/carousel';
import { useEffect } from 'react';
import { PROJECTS } from '../model/projects';

type ProjectModalProps = {
  id: number;
  onClose: () => void;
};

const ProjectModal = ({ id, onClose }: ProjectModalProps) => {
  const project = PROJECTS.find((project) => project.id === id);
  if (!project) return null;

  const { title, skills, period, description, imageUrl } = project;
  const projectImages = [imageUrl];

  // 백그라운드 스크롤 방지
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, []);

  return (
    <>
      <div className="fixed inset-0 z-50 flex top-20 items-center justify-center bg-black/60 p-4 md:p-10 backdrop-blur-2xl">
        <div className="glass-modal relative flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-xl shadow-2xl">
          <header className="flex items-center justify-between border-b border-[#224249] px-8 py-6">
            <div className="flex items-center gap-3">
              <div className="neon-glow size-3 rounded-full bg-[#0dccf2]" />
              <h1 className="text-2xl font-bold tracking-tight text-white uppercase">
                Project: <span className="text-[#0dccf2]">{title}</span>
              </h1>
            </div>
            <button
              className="group flex size-10 items-center justify-center rounded-lg border border-transparent bg-[#224249] text-white transition-all hover:border-[#0dccf2]/50 hover:bg-[#0dccf2]/20"
              aria-label="Close modal"
              onClick={onClose}
            >
              <span className="material-symbols-outlined text-xl transition-transform group-hover:rotate-90">
                close
              </span>
            </button>
          </header>

          <div className="custom-scrollbar flex-1 overflow-y-auto">
            <div className="relative aspect-video w-full bg-[#0a1518] md:aspect-[21/9]">
              <Carousel className="h-full w-full" opts={{ loop: true }}>
                <CarouselContent className="ml-0 h-full">
                  {projectImages.map((image) => (
                    <CarouselItem key={image} className="pl-0">
                      <div className="relative h-full w-full">
                        {/* <Image
                          src={`/projects/${image}.png`}
                          alt={image}
                          width={1200}
                          height={675}
                          className="object-fill"
                        /> */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#101f22] to-transparent" />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                <CarouselPrevious
                  variant="ghost"
                  className="left-4 top-1/2 size-12 -translate-y-1/2 rounded-full border-none bg-black/40 text-white hover:bg-[#0dccf2]/20 hover:text-white"
                />
                <CarouselNext
                  variant="ghost"
                  className="right-4 top-1/2 size-12 -translate-y-1/2 rounded-full border-none bg-black/40 text-white hover:bg-[#0dccf2]/20 hover:text-white"
                />
              </Carousel>
            </div>

            <div className="grid grid-cols-1 gap-10 px-8 py-10 lg:grid-cols-12">
              <div className="space-y-10 lg:col-span-7">
                <section>
                  <h3 className="mb-4 flex items-center gap-2 text-sm font-bold tracking-[0.2em] text-[#0dccf2] uppercase">
                    <span className="material-symbols-outlined text-lg">
                      info
                    </span>
                    Overview
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-300">
                    {description}
                  </p>
                  <p className="mt-3 text-sm text-gray-400">{period}</p>
                </section>

                <section>
                  <h3 className="mb-6 flex items-center gap-2 text-sm font-bold tracking-[0.2em] text-[#0dccf2] uppercase">
                    <span className="material-symbols-outlined text-lg">
                      featured_play_list
                    </span>
                    Key Features
                  </h3>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2"></div>
                </section>
              </div>

              <div className="space-y-10 lg:col-span-5">
                <section>
                  <h3 className="mb-6 text-sm font-bold tracking-[0.2em] text-[#0dccf2] uppercase">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center gap-2 rounded border border-[#0dccf2]/20 bg-[#0dccf2]/10 px-3 py-2"
                      >
                        <span className="material-symbols-outlined text-sm text-[#0dccf2]">
                          memory
                        </span>
                        <span className="text-xs font-bold uppercase">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className="mb-4 text-sm font-bold tracking-[0.2em] text-[#0dccf2] uppercase">
                    My Role
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined mt-1 text-[#0dccf2]">
                        check_circle
                      </span>
                      <p className="text-sm text-gray-300">
                        Architected the frontend state management system using
                        Redux Toolkit and RTK Query.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined mt-1 text-[#0dccf2]">
                        check_circle
                      </span>
                      <p className="text-sm text-gray-300">
                        Implemented a custom SVG charting library to handle
                        high-density data visualizations.
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="material-symbols-outlined mt-1 text-[#0dccf2]">
                        check_circle
                      </span>
                      <p className="text-sm text-gray-300">
                        Led the design team in creating the glassmorphism UI
                        system and component library.
                      </p>
                    </li>
                  </ul>
                </section>
              </div>
            </div>
          </div>

          <footer className="flex flex-col items-center justify-end gap-4 border-t border-[#224249] bg-[#101f22]/50 p-6 sm:flex-row">
            <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#0dccf2]/50 px-8 py-3 text-sm font-bold tracking-wider text-[#0dccf2] uppercase transition-all hover:bg-[#0dccf2]/10 sm:w-auto">
              <span className="material-symbols-outlined text-xl">code</span>
              GitHub Repo
            </button>
            <button className="neon-glow flex w-full items-center justify-center gap-2 rounded-lg bg-[#0dccf2] px-8 py-3 text-sm font-bold tracking-wider text-[#101f22] uppercase transition-all hover:brightness-110 sm:w-auto">
              <span className="material-symbols-outlined text-xl">
                open_in_new
              </span>
              Live Demo
            </button>
          </footer>
        </div>
      </div>
    </>
  );
};

export default ProjectModal;
