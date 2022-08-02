const easing = [0.6, -0.5, 0.01, 0.99];

const fadeUpIn = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.45, ease: easing } },
  exit: {
    y: -20,
    opacity: 0,
    transition: { duration: 0.4 },
  },
};

const fadeUpInWithChildren = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.45, ease: easing, staggerChildren: 0.05 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.45 },
  },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export { fadeUpIn, fadeUpInWithChildren, stagger };
