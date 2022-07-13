interface ParentAniProps {
  variants: {
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
  };
}

interface ChildAniProps {
  variants: {
    initial: {
      opacity: number;
      top: string;
    };
    animate: {
      opacity: number;
      top: number;
      transition: {
        duration: number;
        ease: string;
      };
      exit: {};
    };
  };
}

interface FeaturedItemProps {
  item: {
    id: string;
    portImg: string;
    slug: string;
    title: string;
  };
  variants: ParentAniProps | ChildAniProps;
}
