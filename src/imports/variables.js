export const colors = {
  darkGrey: '#484D5C',
  lightGrey: '#C0CCD4',
  accent: '#FFCC00',
};

export const font = {
  h1: '4.209rem',
  h2: '3.157rem',
  h3: '2.369rem',
  h4: '1.777rem',
  h5: '1.333rem',
  base: '1rem',
};

export const aniVariants = {
  parent: {
    initial: { top: '100px' },
    animate: {
      top: 0,
      transition: {
        duration: 0.8,
        delayChildren: 0.3,
        staggerChildren: 0.25,
        ease: 'easeOut',
      },
    },
    exit: {
      top: '-75px',
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: 'easeIn',
      },
    },
  },

  child: {
    initial: {
      opacity: 0,
      top: '40px',
    },
    animate: {
      opacity: 1,
      top: 0,
      transition: {
        duration: 1.1,
        ease: 'easeOut',
      },
    },
    exit: {},
  },
};
