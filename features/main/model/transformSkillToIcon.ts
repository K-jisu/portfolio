export const transformedSkilltoIcon = (skill: string) => {
  switch (skill) {
    case 'Next.js':
      return 'nextjs';
    case 'TypeScript':
      return 'typescript';
    case 'TailwinCSS':
      return 'tailwind';
    case 'Framer Motion':
      return 'framer';
    case 'React-i18next':
      return 'i18n';
    case 'Zustand':
      return 'zustand';
    case 'React-hook-form':
      return 'hookform';
    case 'Zod':
      return 'zod';
    default:
      return skill.toLowerCase();
  }
};
