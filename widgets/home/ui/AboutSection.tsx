'use client';

import { fadeUp, floatLoop, sectionReveal } from '@/lib/motion';
import { motion, useReducedMotion } from 'motion/react';
import Image from 'next/image';

const ABOUT_ME_TEXT = [
  '단순히 기능이 동작하는 것에 만족하지 않고, 왜 필요한가를 고민하며 사용자에게 더 나은 경험을 줄 수 있는 서비스를 만듭니다.',
  '누구나 쉽게 이해하고 사용할 수 있는 접근성이 좋은 서비스를 중요하게 생각합니다.',
  '작은 디테일도 놓치지 않으려 하고, 맡은 바 책임을 갖고 하는 태도와 팀과 함께 소통을 하면서 완성도 높은 서비스를 만들고자 합니다.',
];

const ABOUT_SKILLS = [
  { icon: 'react', label: 'React' },
  { icon: 'nextjs', label: 'Next.js' },
  { icon: 'vite', label: 'Vite' },
  { icon: 'javascript', label: 'JavaScript' },
  { icon: 'typescript', label: 'TypeScript' },
  { icon: 'tailwind', label: 'Tailwind CSS' },
  { icon: 'framer', label: 'Framer Motion' },
  { icon: 'zustand', label: 'Zustand' },
  { icon: 'tanstackquery', label: 'TanStack Query' },
  { icon: 'hookform', label: 'React Hook Form' },
  { icon: 'zod', label: 'Zod' },
  { icon: 'i18n', label: 'React i18next' },
  { icon: 'github', label: 'GitHub' },
  { icon: 'supabase', label: 'Supabase' },
];

const ABOUT_CAREERS = [
  {
    title: 'Frontend Developer (계약)',
    company: '엠유소프트',
    period: '2025.10 - 2025.12',
    details: [
      '메이드존 홈페이지(교육플랫폼), 당재재(부동산), 루나폴(관광가이드) 프론트엔드 개발',
      'Figma기반 디자인 퍼블리싱 진행',
      'API 명세에 맞는 요청을 구현하고, 에러 상황에 따른 사용자 피드백 처리 로직을 구성',
      '사용자 상태에 따라 다른 UX를 제공하는 비즈니스 로직 설계',
      '카카오 OAuth 2.0 기반 소셜 로그인 기능 구현',
      'Next.js, React.js, Typescript, TailwindCSS, Zustand',
    ],
  },
  {
    title: 'Frontend Developer (인턴)',
    company: '엠유소프트',
    period: '2025.09 - 2025.10',
    details: [
      'Figma 로 디자인된 페이지를 작업하기 전 타이포그래피를 Tailwind CSS에 사전 설정하여 비효율성을 제거',
      'UI 개발 시 사전에 설정한 타이포그래피 적용으로 개발 시간을 20% 정도 단축',
    ],
  },
];

const AboutSection = () => {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const fadeUpInView = fadeUp(shouldReduceMotion);
  const sectionRevealInView = sectionReveal(shouldReduceMotion);
  const backgroundFloat = floatLoop(shouldReduceMotion, 14, -10, 12, 1.04);

  return (
    <section
      id="about"
      className="relative py-24 px-6 scroll-mt-20 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="absolute left-1/2 top-20 h-72 w-72 -translate-x-[85%] rounded-full bg-[#0dccf2]/12 blur-[120px]"
          animate={backgroundFloat.animate}
          transition={backgroundFloat.transition}
        />
      </div>

      <motion.div
        className="max-w-6xl mx-auto space-y-24"
        {...sectionRevealInView}
      >
        {/* About ME */}
        <motion.div className="space-y-12">
          <motion.div
            className="flex flex-col md:flex-row gap-8 items-center md:items-start"
            {...fadeUpInView}
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              className="relative shrink-0"
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              transition={{ duration: 0.25 }}
            >
              <div className="size-40 md:size-48 rounded-2xl overflow-hidden border-2 border-[#0dccf2]/30 shadow-[0_0_20px_rgba(13,204,242,0.1)]">
                {/* 나의 프로필 사진 */}
                <Image
                  src={'/profile.jpg'}
                  alt="Alex Profile"
                  width={192}
                  height={192}
                  className="w-full h-full object-cover transition-all duration-500"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-[#101f22] border border-[#0dccf2]/50 text-[#0dccf2] text-[10px] font-bold px-2 py-1 rounded-md">
                JUNIOR
              </div>
            </motion.div>

            <motion.div
              className="space-y-4 text-center md:text-left"
              {...fadeUpInView}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h2 className="text-[#0dccf2] font-bold tracking-[0.3em] uppercase text-xs">
                01. Identity
              </h2>
              <h3 className="text-4xl md:text-5xl font-black tracking-tight">
                안녕하세요.
                <br />
                <span className="text-[#0dccf2] [text-shadow:0_0_10px_rgba(13,204,242,0.5)]">
                  강지수 입니다
                </span>
                .
              </h3>
              <h3 className="text-xl font-semibold text-slate-300 leading-relaxed max-w-2xl whitespace-normal break-keep">
                사용자의 입장에서 생각하고, 사용자에게 더 좋은 경험을 제공하기
                위한 프론트엔드 개발자입니다
              </h3>
              <p className="text-lg text-slate-500 leading-relaxed whitespace-normal break-keep hidden md:block">
                {ABOUT_ME_TEXT.map((text, index) => (
                  <motion.span
                    key={index}
                    className="block mt-2"
                    {...fadeUp(shouldReduceMotion, 0.1 + index * 0.1, 14, 0.45)}
                    viewport={{ once: true, amount: 0.6 }}
                  >
                    {text}
                  </motion.span>
                ))}
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="space-y-6 pt-4"
            {...fadeUpInView}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h4 className="font-bold text-sm uppercase tracking-widest flex items-center gap-2">
              <span className="size-1 bg-[#0dccf2]"></span> Core Tech Stack
            </h4>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
              {ABOUT_SKILLS.map((skill, index) => (
                <motion.div
                  key={skill.label}
                  className="p-4 rounded-xl flex flex-col items-center justify-center gap-2 group transition-all bg-[rgba(34,66,73,0.2)] backdrop-blur-[12px] border border-[rgba(13,204,242,0.1)] hover:border-[rgba(13,204,242,0.4)] hover:shadow-[0_0_20px_rgba(13,204,242,0.1)]"
                  {...fadeUp(
                    shouldReduceMotion,
                    0.05 + index * 0.035,
                    16,
                    0.45,
                  )}
                  viewport={{ once: true, amount: 0.4 }}
                  whileHover={shouldReduceMotion ? undefined : { y: -3 }}
                >
                  <Image
                    src={`/${skill.icon}.png`}
                    alt={skill.label}
                    width={24}
                    className="group-hover:scale-110 transition-transform rounded-sm"
                    height={24}
                  />
                  <span className="material-symbols-outlined text-[#0dccf2] group-hover:scale-110 transition-transform">
                    {skill.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Career Timeline */}
        <motion.div
          id="career"
          className="pt-12"
          {...fadeUpInView}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="space-y-1">
              <h2 className="text-[#0dccf2] font-bold tracking-[0.3em] uppercase text-xs">
                02. Journey
              </h2>
              <h3 className="text-3xl font-black tracking-tight">
                Career Timeline
              </h3>
            </div>
            <div className="flex-1 h-px bg-white/10 mt-4"></div>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#0dccf2] to-transparent opacity-20"></div>
            <div className="space-y-10">
              {ABOUT_CAREERS.map((item, index) => (
                <motion.div
                  className="relative pl-12 md:pl-20 group"
                  key={index}
                  {...fadeUp(shouldReduceMotion, 0.08 + index * 0.12, 20, 0.55)}
                  viewport={{ once: true, amount: 0.25 }}
                >
                  <div className="absolute left-4 md:left-8 top-1 -translate-x-1/2 size-3 rounded-full bg-[#0dccf2] shadow-[0_0_10px_#0dccf2] z-10 border-2 border-[#101f22]"></div>
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                    <div>
                      <h4 className="text-xl font-bold group-hover:text-[#0dccf2] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-sm text-slate-400 font-bold">
                        {item.company}
                      </p>
                    </div>
                    <span className="text-[#0dccf2]/60 font-mono text-xs tracking-widest mt-1 md:mt-0">
                      {item.period}
                    </span>
                  </div>
                  <div className="p-5 rounded-xl bg-[rgba(34,66,73,0.2)] backdrop-blur-[12px] border border-[rgba(13,204,242,0.1)]">
                    <ul className="text-sm text-slate-400 space-y-1 list-disc list-inside marker:text-[#0dccf2]/50">
                      {item.details.map((detail, detailIndex) => (
                        <li key={detailIndex}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
