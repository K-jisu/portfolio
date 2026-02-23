export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export const sectionReveal = (reducedMotion: boolean) => {
  if (reducedMotion) {
    return {
      initial: false,
      whileInView: { opacity: 1 },
      transition: { duration: 0 },
    };
  }

  return {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 0.6 },
  };
};

export const fadeUp = (
  reducedMotion: boolean,
  delay = 0,
  y = 24,
  duration = 0.7
) => {
  if (reducedMotion) {
    return {
      initial: false,
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0 },
    };
  }

  return {
    initial: { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration, delay, ease: EASE_OUT },
  };
};

export const floatLoop = (
  reducedMotion: boolean,
  x: number,
  y: number,
  duration = 11,
  scale = 1.04
) => {
  if (reducedMotion) {
    return {
      animate: { opacity: 1 },
      transition: { duration: 0 },
    };
  }

  return {
    animate: {
      x: [0, x, 0],
      y: [0, y, 0],
      scale: [1, scale, 1],
    },
    transition: {
      duration,
      repeat: Infinity,
      ease: 'easeInOut' as const,
    },
  };
};

export const stagger = (
  reducedMotion: boolean,
  delayChildren = 0.15,
  staggerChildren = 0.14
) => {
  if (reducedMotion) {
    return {
      container: {
        hidden: { opacity: 1 },
        visible: { opacity: 1 },
      },
      item: {
        hidden: { opacity: 1, y: 0 },
        visible: { opacity: 1, y: 0 },
      },
    };
  }

  return {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { delayChildren, staggerChildren },
      },
    },
    item: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: EASE_OUT },
      },
    },
  };
};
