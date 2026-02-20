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
import {
  Building2,
  CalendarDays,
  Globe,
  Sparkles,
  Users,
  X,
} from 'lucide-react';

type ProjectModalProps = {
  id: number;
  onClose: () => void;
};

const ProjectModal = ({ id, onClose }: ProjectModalProps) => {
  const project = PROJECTS.find((currentProject) => currentProject.id === id);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

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
  const projectMeta = [
    { label: 'Company', value: company, icon: Building2 },
    { label: 'Team', value: members ?? '-', icon: Users },
    { label: 'Contribution', value: contibution, icon: Sparkles },
  ];

  return (
    <div
      className="fixed inset-0 z-50 top-20 flex items-center justify-center bg-black/70 p-4 backdrop-blur-md md:p-8"
      onClick={onClose}
    >
      <div
        className="glass-modal relative flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-[#24464d] bg-[#081316]/95 shadow-[0_20px_70px_rgba(0,0,0,0.55)]"
        onClick={(event) => event.stopPropagation()}
      >
        <header className="flex flex-wrap items-start justify-between gap-4 border-b border-[#224249] px-6 py-5 md:px-8">
          <div className="space-y-2">
            <p className="text-xs font-semibold tracking-[0.18em] text-[#7be9ff]/80 uppercase">
              Selected Project
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
              {title}
            </h1>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#2f6670] bg-[#0c1d22] px-3 py-1 text-xs font-medium text-[#a8d4dd]">
              <CalendarDays className="size-3.5 text-[#0dccf2]" />
              {period}
            </div>
          </div>
          <button
            className="group flex size-10 items-center justify-center rounded-lg border border-transparent bg-[#224249] text-white transition-all hover:border-[#0dccf2]/50 hover:bg-[#0dccf2]/20"
            aria-label="Close modal"
            onClick={onClose}
          >
            <X className="size-5" />
          </button>
        </header>

        <div className="custom-scrollbar flex-1 overflow-y-auto">
          <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-[#224249] bg-[#060f12] md:aspect-[21/9]">
            <Carousel
              className="h-full w-full"
              opts={{ loop: projectImages.length > 1 }}
            >
              <CarouselContent className="ml-0 h-full">
                {projectImages.map((image) => (
                  <CarouselItem key={image} className="pl-0">
                    <div className="relative h-full w-full">
                      <Image
                        src={`/projects/${image}.png`}
                        alt={`${title} preview`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 70vw"
                        className="object-cover object-top"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#081316] via-[#081316]/25 to-transparent" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious
                variant="ghost"
                className="left-4 top-1/2 size-11 -translate-y-1/2 rounded-full border-none bg-black/45 text-white hover:bg-[#0dccf2]/20 hover:text-white"
              />
              <CarouselNext
                variant="ghost"
                className="right-4 top-1/2 size-11 -translate-y-1/2 rounded-full border-none bg-black/45 text-white hover:bg-[#0dccf2]/20 hover:text-white"
              />
            </Carousel>
          </div>

          <div className="grid grid-cols-1 gap-8 px-6 py-8 md:px-8 lg:grid-cols-[minmax(0,1.65fr)_minmax(280px,1fr)]">
            <div className="space-y-8">
              <section className="space-y-3">
                <h2 className="text-xs font-semibold tracking-[0.18em] text-[#5be7ff] uppercase">
                  Overview
                </h2>
                <p className="text-lg leading-8 text-slate-100">
                  {description}
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xs font-semibold tracking-[0.18em] text-[#5be7ff] uppercase">
                  Role
                </h2>
                <p className="text-base leading-8 text-slate-200">{role}</p>
              </section>

              <section className="space-y-4 border-l-2 border-[#0dccf2]/60 pl-5">
                <h2 className="text-xs font-semibold tracking-[0.18em] text-[#5be7ff] uppercase">
                  Key Highlights
                </h2>
                {details.length > 0 ? (
                  <ol className="space-y-3">
                    {details.map((detail, index) => (
                      <li
                        className="flex items-start gap-3 text-[15px] leading-7 text-slate-100 md:text-base"
                        key={`${title}-detail-${index}`}
                      >
                        <span className="mt-1 inline-flex size-6 shrink-0 items-center justify-center rounded-full border border-[#0dccf2]/40 bg-[#0b1e23] text-[11px] font-semibold text-[#7fefff]">
                          {(index + 1).toString().padStart(2, '0')}
                        </span>
                        <span className="break-keep">{detail}</span>
                      </li>
                    ))}
                  </ol>
                ) : (
                  <p className="text-sm leading-6 text-slate-400">
                    More implementation details will be added soon.
                  </p>
                )}
              </section>
            </div>

            <aside className="space-y-5">
              <section className="rounded-xl border border-[#23464d] bg-[#0b1a1e]/70 p-4">
                <h2 className="mb-4 text-xs font-semibold tracking-[0.18em] text-[#5be7ff] uppercase">
                  Tech Stack
                </h2>
                <div className="flex flex-wrap gap-2.5">
                  {skills.map((skill) => (
                    <Badge
                      key={`${title}-${skill}`}
                      className="rounded-md border border-[#0dccf2]/30 bg-[#0f2228] px-2.5 py-1.5 text-[10px] text-[#0dccf2]"
                    >
                      <Image
                        alt={skill}
                        src={`/${skill}.png`}
                        width={18}
                        height={18}
                        className="rounded-sm"
                      />
                    </Badge>
                  ))}
                </div>
              </section>

              <section className="space-y-3 rounded-xl border border-[#23464d] bg-[#0b1a1e]/70 p-4">
                {projectMeta.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      className="rounded-lg border border-[#1f3d44] bg-[#09161a] p-3"
                      key={item.label}
                    >
                      <div className="mb-2 flex items-center gap-2 text-[11px] font-semibold tracking-[0.16em] text-[#7de6fa] uppercase">
                        <Icon className="size-3.5 text-[#0dccf2]" />
                        {item.label}
                      </div>
                      <p className="text-sm leading-6 text-slate-200">
                        {item.value}
                      </p>
                    </div>
                  );
                })}
              </section>
            </aside>
          </div>
        </div>

        <footer className="flex flex-col items-stretch gap-3 border-t border-[#224249] bg-[#0b171b]/90 p-5 sm:flex-row sm:items-center sm:justify-end">
          {github && (
            <Link
              href={github}
              target="_blank"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[#2e5d67] bg-[#0f2228] px-5 py-2.5 text-sm font-semibold text-[#9ceeff] transition-all hover:border-[#0dccf2]/70 hover:bg-[#123038] sm:w-auto"
            >
              <Image src="/github.png" alt="GitHub" width={16} height={16} />
              View Repository
            </Link>
          )}
          <Link
            href={url}
            target="_blank"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#0dccf2] px-5 py-2.5 text-sm font-semibold text-[#072229] transition-all hover:brightness-110 sm:w-auto"
          >
            <Globe className="size-4" />
            Visit Website
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default ProjectModal;
