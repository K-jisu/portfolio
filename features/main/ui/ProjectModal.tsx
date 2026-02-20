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
import Image from 'next/image';
import { Badge } from '@/shared/ui/badge';
import Link from 'next/link';
import { Globe, X } from 'lucide-react';

type ProjectModalProps = {
  id: number;
  onClose: () => void;
};

const ProjectModal = ({ id, onClose }: ProjectModalProps) => {
  const project = PROJECTS.find((project) => project.id === id);
  if (!project) return null;

  const {
    title,
    skills,
    period,
    description,
    imageUrl,
    company,
    contibution,
    role,
    members,
    url,
    github,
    details,
  } = project;
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
      <div
        className="fixed inset-0 z-50 flex top-20 items-center justify-center bg-black/60 p-4 md:p-10 backdrop-blur-2xl"
        onClick={onClose}
      >
        <div
          className="glass-modal relative flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-xl shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <header className="flex items-center justify-between border-b border-[#224249] px-8 py-6">
            <div className="flex items-center gap-3">
              <div className="neon-glow size-3 rounded-full bg-[#0dccf2]" />
              <h1 className="text-2xl font-bold tracking-tight text-white uppercase">
                Project: <span className="text-[#0dccf2]">{title}</span>
              </h1>
            </div>
            <button
              className="group flex size-10 items-center justify-center rounded-lg border border-transparent bg-[#224249] text-white transition-all hover:border-[#0dccf2]/50 hover:bg-[#0dccf2]/20 cursor-pointer"
              aria-label="Close modal"
              onClick={onClose}
            >
              <span className="material-symbols-outlined text-xl ">
                <X />
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
                      서비스
                    </span>
                  </h3>
                  <p className="text-lg leading-relaxed text-white whitespace-normal break-keep">
                    {description}
                  </p>
                  <p className="mt-3 text-sm text-gray-400">{period}</p>
                </section>

                <section>
                  <h3 className="mb-4 flex items-center gap-2 text-sm font-bold tracking-[0.2em] text-[#0dccf2] uppercase">
                    <span className="material-symbols-outlined text-lg">
                      담당 역할
                    </span>
                  </h3>
                  <p className="text-lg leading-relaxed text-white whitespace-normal break-keep">
                    {role}
                  </p>
                </section>

                <section>
                  <h3 className="mb-4 flex items-center gap-2 text-sm font-bold tracking-[0.2em] text-[#0dccf2] uppercase">
                    <span className="material-symbols-outlined text-lg">
                      상세 내용
                    </span>
                  </h3>
                  <div className="flex flex-col gap-2">
                    {details.map((detail, index) => (
                      <div className="flex flex-row gap-1">
                        -
                        <p
                          className="text-lg leading-relaxed text-white whitespace-normal break-keep"
                          key={index}
                        >
                          {detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <div className="space-y-10 lg:col-span-5">
                <section>
                  <h3 className="mb-4 text-lg font-bold tracking-[0.2em] text-[#0dccf2] uppercase">
                    기술 스택
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill, index) => (
                      <Badge
                        key={index}
                        className="text-[10px] px-2 py-1 rounded bg-white/5 text-[#0dccf2] border border-[#0dccf2]/20"
                      >
                        <Image
                          alt={skill}
                          src={`/${skill}.png`}
                          width={20}
                          height={20}
                          className="rounded-sm"
                        />
                        {/* {skill} */}
                      </Badge>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className="mb-4 text-lg font-bold tracking-[0.2em] text-[#0dccf2] uppercase">
                    연계/소속회사
                  </h3>
                  <p className="text-md text-gray-400">{company}</p>
                </section>

                <section>
                  <h3 className="mb-4 text-lg font-bold tracking-[0.2em] text-[#0dccf2] uppercase">
                    구성원
                  </h3>
                  <p className="text-md text-gray-400">{members}</p>
                </section>

                <section>
                  <h3 className="mb-4 text-lg font-bold tracking-[0.2em] text-[#0dccf2] uppercase">
                    기여도
                  </h3>
                  <p className="text-md text-gray-400">{contibution}</p>
                </section>
              </div>
            </div>
          </div>

          <footer className="flex flex-col items-center justify-end gap-4 border-t border-[#224249] bg-[#101f22]/50 p-6 sm:flex-row">
            {github && (
              <Link
                href={url}
                target="_blank"
                className="neon-glow flex w-full items-center justify-center rounded-lg bg-[#0dccf2] px-8 py-3 text-sm font-bold  text-[#101f22] transition-all hover:brightness-110 sm:w-auto"
              >
                <div className="flex flex-row">
                  <Image
                    alt="github"
                    src={`/github.png`}
                    width={24}
                    height={24}
                    className="mr-2 inline-block"
                  />
                  GO TO GITHUB
                </div>
              </Link>
            )}
            <Link
              href={url}
              target="_blank"
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#0dccf2]/50 px-8 py-3 text-sm font-bold tracking-wider text-[#0dccf2] uppercase transition-all hover:bg-[#0dccf2]/10 sm:w-auto"
            >
              <Globe className="mr-2 inline-block" />
              GO TO WEBSITE
            </Link>
          </footer>
        </div>
      </div>
    </>
  );
};

export default ProjectModal;
