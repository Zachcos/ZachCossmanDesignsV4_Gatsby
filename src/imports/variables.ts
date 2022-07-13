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

export const breakpoints = {
  tablet: '865px',
  phone: '630px',
};

export const aniVariants = {
  parent: {
    initial: { top: '100px' },
    animate: {
      top: 0,
      transition: {
        duration: 0.35,
        delayChildren: 0.3,
        staggerChildren: 0.15,
        ease: 'easeOut',
      },
    },
    exit: {
      top: '-75px',
      opacity: 0,
      transition: {
        duration: 0.35,
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
        duration: 0.35,
        ease: 'easeOut',
      },
    },
    exit: {},
  },
};
