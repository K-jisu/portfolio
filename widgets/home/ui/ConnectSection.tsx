'use client';

import {
  fadeUp,
  floatLoop,
  sectionReveal,
} from '@/lib/motion';
import { ArrowUpRight, Mail } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import Image from 'next/image';

type ContactLink = {
  label: string;
  value: string;
  href: string;
  icon: string;
  external?: boolean;
  disabled?: boolean;
};

const CONTACT_LINKS: ContactLink[] = [
  {
    label: 'Email',
    value: 'wltn7star@gmail.com',
    href: 'mailto:wltn7star@gmail.com',
    icon: 'mail',
  },
  {
    label: 'GitHub',
    value: 'github.com/K-jisu',
    href: 'https://github.com/K-jisu',
    icon: 'github',
    external: true,
  },
  {
    label: 'LinkedIn',
    value: '강지수',
    href: 'https://www.linkedin.com/in/%EC%A7%80%EC%88%98-%EA%B0%95-bba73235a/',
    icon: 'linkedin',
    external: true,
  },
];

const ConnectSection = () => {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const fadeUpInView = fadeUp(shouldReduceMotion);
  const sectionRevealInView = sectionReveal(shouldReduceMotion);
  const leftGlow = floatLoop(shouldReduceMotion, 12, -10, 11, 1.04);
  const rightGlow = floatLoop(shouldReduceMotion, -14, 12, 12, 1.05);

  return (
    <section
      id="contact"
      className="relative py-28 md:py-32 px-6 scroll-mt-20 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="absolute left-1/2 top-16 h-64 w-64 -translate-x-[75%] rounded-full bg-[#0dccf2]/20 blur-[110px]"
          animate={leftGlow.animate}
          transition={leftGlow.transition}
        />
        <motion.div
          className="absolute right-1/2 bottom-8 h-72 w-72 translate-x-[70%] rounded-full bg-[#0dccf2]/10 blur-[120px]"
          animate={rightGlow.animate}
          transition={rightGlow.transition}
        />
      </div>

      <motion.div className="max-w-7xl mx-auto" {...sectionRevealInView}>
        <div className="rounded-3xl  backdrop-blur-[14px] p-6 md:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <motion.div
              className="space-y-7"
              {...fadeUpInView}
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div
                className="space-y-4"
                {...fadeUpInView}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="inline-flex items-center gap-2 py-1.5">
                  {/* <Sparkles className="size-4 text-[#0dccf2]" /> */}
                  <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#0dccf2]">
                    04. Get In Touch
                  </span>
                </div>
                <h3 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
                  함께 일할 기회를
                  <br />
                  <span className="text-[#0dccf2] [text-shadow:0_0_16px_rgba(13,204,242,0.35)]">
                    찾고 있습니다
                  </span>
                </h3>
              </motion.div>

              <motion.p
                className="max-w-2xl text-base md:text-lg text-slate-300 leading-relaxed"
                {...fadeUp(shouldReduceMotion, 0.06)}
                viewport={{ once: true, amount: 0.4 }}
              >
                메일로 연락 주시면 빠르게 확인 후 답장드리겠습니다.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2"
                {...fadeUp(shouldReduceMotion, 0.1)}
                viewport={{ once: true, amount: 0.4 }}
              >
                <motion.a
                  href="mailto:wltn7star@gmail.com"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0dccf2] px-6 py-3.5 text-[#101f22] font-black tracking-wide hover:translate-y-[-2px] hover:shadow-[0_12px_30px_rgba(13,204,242,0.35)] transition-all"
                  whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                >
                  <Mail className="size-4" />
                  <span>메일 보내기</span>
                  <ArrowUpRight className="size-4" />
                </motion.a>
                <motion.a
                  href="https://github.com/K-jisu"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-slate-100 font-semibold hover:border-[#0dccf2]/40 hover:text-[#0dccf2] transition-colors"
                  whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                >
                  <Image
                    src="/github.png"
                    width={16}
                    height={16}
                    alt="GitHub"
                  />
                  <span>GitHub 보기</span>
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div
              className="space-y-3"
              {...fadeUp(shouldReduceMotion, 0.12)}
              viewport={{ once: true, amount: 0.25 }}
            >
              {CONTACT_LINKS.map((item, index) => {
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noreferrer' : undefined}
                    {...fadeUp(shouldReduceMotion, 0.14 + index * 0.07)}
                    whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                    className={`group flex items-center gap-4 rounded-2xl border px-4 py-4 md:px-5 md:py-4 transition-all ${
                      item.disabled
                        ? 'pointer-events-none border-white/10 bg-white/[0.03] opacity-60'
                        : 'border-white/10 bg-white/[0.04] hover:border-[#0dccf2]/30 hover:bg-[#0dccf2]/10'
                    }`}
                  >
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[#0f2428] text-[#0dccf2]">
                      <Image
                        src={`/${item.icon}.png`}
                        width={20}
                        height={20}
                        alt={item.label}
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                        {item.label}
                      </p>
                      <p className="truncate text-sm md:text-base font-semibold text-slate-100">
                        {item.value}
                      </p>
                    </div>
                    {!item.disabled && (
                      <ArrowUpRight className="size-5 text-slate-500 transition-colors group-hover:text-[#0dccf2]" />
                    )}
                  </motion.a>
                );
              })}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ConnectSection;
