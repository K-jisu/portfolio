export const transformedSkillToIcon = (skill: string) => {
  switch (skill) {
    case 'Next.js':
      return 'nextjs';
    case 'React':
      return 'react';
    case 'Vite':
      return 'vite';
    case 'TypeScript':
      return 'typescript';
    case 'TailwindCSS':
      return 'tailwind';
    case 'Framer Motion':
      return 'framer';
    case 'React-i18next':
      return 'i18n';
    case 'Zustand':
      return 'zustand';
    case 'Tanstack Query':
      return 'tanstackquery';
    case 'React-hook-form':
      return 'hookform';
    case 'Zod':
      return 'zod';
    case 'Konva.js':
      return 'konva';
    case 'Supabase':
      return 'supabase';
    default:
      return skill.toLowerCase();
  }
};
