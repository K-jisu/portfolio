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
  LinkIcon,
  Sparkles,
  Users,
  X,
} from 'lucide-react';
import { transformedSkillToIcon } from '../model/transformSkillToIcon';

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
    desktopImages,
    mobileImages,
    company,
    contribution,
    role,
    members,
    url,
    github,
    notion,
    details,
  } = project;

  const projectMeta = [
    { label: 'Company', value: company, icon: Building2 },
    { label: 'Team', value: members ?? '-', icon: Users },
    { label: 'Contribution', value: contribution, icon: Sparkles },
  ];

  const images = desktopImages ?? mobileImages ?? [];
  const isMobileProject = !!mobileImages;

  const hasUrlDetails = (detail: string) => {
    const url = detail.split(',')[0];
    const description = detail.split(',')[1];
    return (
      <div>
        <Link href={url} target="_blank" className="underline">
          <p className="break-keep border-l border-[#29535b] pl-3 text-slate-100/95 whitespace-normal break-keep">
            <LinkIcon className="inline-block mr-1" size={16} />
            {description}
          </p>
        </Link>
      </div>
    );
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/70 p-4 pt-28 backdrop-blur-sm md:p-8 md:pt-28"
      onClick={onClose}
    >
      <div
        className="glass-modal relative flex max-h-[calc(100vh-7rem)] w-full max-w-[1040px] flex-col overflow-hidden rounded-2xl border border-[#284b52] bg-[#09161b]/95 shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
        onClick={(event) => event.stopPropagation()}
      >
        <header className="sticky top-0 z-10 flex flex-wrap items-start justify-between gap-4 border-b border-[#23444b] bg-[#0b1a20]/95 px-6 py-5 md:px-8">
          <div className="space-y-2">
            <p className="text-xs font-semibold tracking-[0.18em] text-[#81e8ff]/80 uppercase">
              Selected Project
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-white md:text-[2rem]">
              {title}
            </h1>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#3d7682] px-3 py-1 text-xs font-medium text-[#c9eff7]">
              <CalendarDays className="size-3.5 text-[#3edbff]" />
              {period}
            </div>
          </div>
          <button
            className="group flex size-10 items-center justify-center rounded-lg border border-[#2f5d66] bg-[#112a31] text-white transition-colors hover:bg-[#173943]"
            aria-label="Close modal"
            onClick={onClose}
          >
            <X className="size-5" />
          </button>
        </header>

        <div className="custom-scrollbar flex-1 overflow-y-auto">
          <div className="relative h-[220px] w-full overflow-hidden border-b border-[#23444b] bg-[#071116] md:h-[380px]">
            <Carousel
              className="h-full w-full"
              opts={{ loop: images.length > 1 }}
            >
              <CarouselContent className="ml-0 h-full">
                {images.map((image, pairIndex) => (
                  <CarouselItem
                    key={`${title}-pair-${pairIndex}`}
                    className="h-full basis-full pl-0"
                  >
                    <div className="flex h-full">
                      <div
                        key={image}
                        className="relative h-full w-full overflow-hidden border-r border-[#163038] last:border-r-0"
                      >
                        <Image
                          src={`/projects/${image}.png`}
                          alt={`${title} preview`}
                          width={1000}
                          height={869}
                          className={`${isMobileProject ? 'object-contain' : 'object-cover'} h-full w-full`}
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#071318]/55 via-transparent to-transparent" />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious
                variant="ghost"
                className="left-4 top-1/2 size-9 -translate-y-1/2 rounded-full border border-[#2f5d66] bg-[#0d2329]/75 text-white hover:bg-[#173c46] hover:text-white disabled:opacity-30"
              />
              <CarouselNext
                variant="ghost"
                className="right-4 top-1/2 size-9 -translate-y-1/2 rounded-full border border-[#2f5d66] bg-[#0d2329]/75 text-white hover:bg-[#173c46] hover:text-white disabled:opacity-30"
              />
            </Carousel>
          </div>

          <div className="grid grid-cols-1 gap-8 px-6 py-7 md:px-8 md:py-8 lg:grid-cols-[minmax(0,1.7fr)_minmax(270px,1fr)]">
            <div className="space-y-8">
              <section className="space-y-3">
                <h2 className="text-xs font-semibold tracking-[0.18em] text-[#74e9ff] uppercase">
                  Overview
                </h2>
                <p className="max-w-3xl text-[17px] leading-8 text-slate-100 whitespace-normal break-keep">
                  {description}
                </p>
              </section>

              <section className="space-y-3 border-t border-[#1f3f46] pt-7">
                <h2 className="text-xs font-semibold tracking-[0.18em] text-[#74e9ff] uppercase">
                  Role
                </h2>
                <p className="text-base leading-8 text-slate-100 whitespace-normal break-keep">
                  {role}
                </p>
              </section>

              <section className="space-y-4 border-t border-[#1f3f46] pt-7">
                <h2 className="text-xs font-semibold tracking-[0.18em] text-[#74e9ff] uppercase">
                  Key Highlights
                </h2>
                {details.length > 0 ? (
                  <ol className="space-y-4">
                    {details.map((detail, index) => {
                      const isUrlDetail = detail.includes('http');
                      return (
                        <li
                          className="flex items-start gap-3 text-[15px] leading-7 text-slate-100 md:text-base"
                          key={`${title}-detail-${index}`}
                        >
                          <span className="mt-1 inline-flex shrink-0 text-xs font-semibold tracking-wide text-[#89eeff]">
                            {(index + 1).toString().padStart(2, '0')}
                          </span>
                          {isUrlDetail ? (
                            hasUrlDetails(detail)
                          ) : (
                            <span className="break-keep border-l border-[#29535b] pl-3 text-slate-100/95 whitespace-normal break-keep">
                              {detail}
                            </span>
                          )}
                        </li>
                      );
                    })}
                  </ol>
                ) : (
                  <p className="text-sm leading-6 text-slate-400">
                    More implementation details will be added soon.
                  </p>
                )}
              </section>
            </div>

            <aside className="space-y-7 border-t border-[#1f3f46] pt-7 lg:border-t-0 lg:border-l lg:border-[#1f3f46] lg:pt-0 lg:pl-7">
              <section className="space-y-3">
                <h2 className="text-xs font-semibold tracking-[0.18em] text-[#74e9ff] uppercase">
                  Tech Stack
                </h2>
                <div className="flex flex-wrap gap-2.5">
                  {skills.map((skill) => (
                    <Badge
                      key={`${title}-${skill}`}
                      className="rounded-full border border-[#2f5d66] bg-transparent px-2.5 py-1 text-[11px] font-medium text-[#cfeff5]"
                    >
                      <Image
                        alt={skill}
                        src={`/${transformedSkillToIcon(skill)}.png`}
                        width={16}
                        height={16}
                        className="rounded-sm"
                      />
                      <span className="leading-none">{skill}</span>
                    </Badge>
                  ))}
                </div>
              </section>

              <section className="space-y-2 border-t border-[#1f3f46] pt-6">
                {projectMeta.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      className={`flex items-start gap-2.5 py-2 ${
                        index !== projectMeta.length - 1
                          ? 'border-b border-[#1f3f46]'
                          : ''
                      }`}
                      key={item.label}
                    >
                      <Icon className="mt-0.5 size-4 text-[#67e8ff]" />
                      <div>
                        <p className="text-[11px] font-semibold tracking-[0.16em] text-[#87e9ff] uppercase">
                          {item.label}
                        </p>
                        <p className="text-sm leading-6 text-slate-100">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </section>
            </aside>
          </div>
        </div>

        <footer className="flex flex-col items-stretch gap-3 border-t border-[#23444b] bg-[#0b1a20] p-4 md:p-5 sm:flex-row sm:items-center sm:justify-end">
          {github && (
            <Link
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[#2f5d66] bg-transparent px-5 py-2.5 text-sm font-semibold text-[#d5f2f8] transition-colors hover:bg-[#15353e] sm:w-auto"
            >
              <Image
                src="/github.png"
                alt="GitHub"
                width={16}
                height={16}
                className="brightness-0 invert opacity-95"
              />
              View Repository
            </Link>
          )}
          {notion && (
            <Link
              href={notion}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[#36545d] bg-[#13272f] px-5 py-2.5 text-sm font-semibold text-[#d9f3f9] transition-colors hover:bg-[#1b3741] sm:w-auto"
            >
              <Image
                src="/notion.png"
                alt="Notion"
                width={16}
                height={16}
                className="brightness-0 invert opacity-95"
              />
              View Notion
            </Link>
          )}
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#26d6f5] px-5 py-2.5 text-sm font-semibold text-[#09242b] transition-colors hover:bg-[#49e0fa] sm:w-auto"
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
