'use client';

import { ChevronsDown } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.15,
      staggerChildren: 0.14,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const HeroSection = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 scroll-mt-20 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          className="absolute left-1/2 top-24 h-72 w-72 -translate-x-[92%] rounded-full bg-[#0dccf2]/16 blur-[120px]"
          animate={
            shouldReduceMotion
              ? { opacity: 1 }
              : { x: [0, 18, 0], y: [0, -14, 0], scale: [1, 1.05, 1] }
          }
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { duration: 10, repeat: Infinity, ease: 'easeInOut' }
          }
        />
        <motion.div
          className="absolute right-1/2 bottom-8 h-80 w-80 translate-x-[90%] rounded-full bg-[#0dccf2]/10 blur-[130px]"
          animate={
            shouldReduceMotion
              ? { opacity: 1 }
              : { x: [0, -16, 0], y: [0, 12, 0], scale: [1, 1.04, 1] }
          }
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { duration: 11, repeat: Infinity, ease: 'easeInOut' }
          }
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
