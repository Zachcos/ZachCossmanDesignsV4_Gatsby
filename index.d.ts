declare module '*.svg';
declare module '*.jpg';

interface FeaturedItemProps {
  id: string;
  portImg: string;
  slug: string;
  title: string;
}

interface OtherItemProps {
  id: string;
  thumbImg: string;
  behanceUrl: string;
}

interface ParentAniProps {
  initial: {
    top: string;
  };
  animate: {
    top: number;
    transition: {
      duration: number;
      delayChildren: number;
      staggerChildren: number;
      ease: string;
    };
  };
  exit: {
    top: string;
    opacity: number;
    transition: {
      duration: number;
      ease: string;
    };
  };
}

interface ChildAniProps {
  variants?: {
    initial?: {
      opacity: number;
      top: string;
    };
    animate?: {
      opacity: number;
      top: number;
      transition: {
        duration: number;
        ease: string;
      };
    };
    exit?: {};
  };
}
