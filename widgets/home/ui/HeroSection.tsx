'use client';

import {
  floatLoop,
  stagger,
} from '@/lib/motion';
import { ChevronsDown } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

const HeroSection = () => {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const { container: containerVariants, item: itemVariants } =
    stagger(shouldReduceMotion);
  const leftGlow = floatLoop(shouldReduceMotion, 18, -14, 10, 1.05);
  const rightGlow = floatLoop(shouldReduceMotion, -16, 12, 11, 1.04);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 scroll-mt-20 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="absolute left-1/2 top-24 h-72 w-72 -translate-x-[92%] rounded-full bg-[#0dccf2]/16 blur-[120px]"
          animate={leftGlow.animate}
          transition={leftGlow.transition}
        />
        <motion.div
          className="absolute right-1/2 bottom-8 h-80 w-80 translate-x-[90%] rounded-full bg-[#0dccf2]/10 blur-[130px]"
          animate={rightGlow.animate}
          transition={rightGlow.transition}
        />
      </div>

      <motion.div
        className="max-w-4xl w-full text-center space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-7xl lg:text-7xl font-black leading-tight tracking-tighter whitespace-normal break-keep"
          variants={itemVariants}
        >
          안녕하세요. <br />
          프론트엔드 개발자
          <br />
          <span className="text-[#0dccf2] italic">강지수</span> 입니다.
        </motion.h1>

        <motion.div
          className="font-mono text-[#0dccf2]/90 text-lg md:text-xl flex items-center justify-center gap-2"
          variants={itemVariants}
        >
          <span className="opacity-50">&gt;</span>
          <span className="[text-shadow:0_0_10px_rgba(13,204,242,0.5)]">
            Frontend Architect / UI Specialist
          </span>
          <span className="w-2 h-6 bg-[#0dccf2] animate-pulse"></span>
        </motion.div>

        <motion.div className="pt-10" variants={itemVariants}>
          <motion.a
            className="inline-flex flex-col items-center gap-4 text-white/50 hover:text-[#0dccf2] transition-colors group"
            href="#about"
            whileHover={shouldReduceMotion ? undefined : { y: -2 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] font-bold">
              Explore Journey
            </span>
            <ChevronsDown className="size-9 animate-bounce" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
