declare module '*.svg';
declare module '*.jpg';

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

interface FeaturedItemProps {
  item: {
    id: string;
    portImg: string;
    slug: string;
    title: string;
  };
  variants?: ParentAniProps | ChildAniProps;
}

interface LayoutProps {
  location: {
    pathname: string;
  };
  children: JSX.Element;
}

interface DataProps {
  data: {
    featured: {
      edges: {
        node: {
          id: string;
          title: string;
          slug: string;
          portImg: string;
        };
        map: Function;
      };
    };
    other: {
      edges: {
        node: {
          id: string;
          thumbImg: string;
          behanceUrl: string;
        };
        map: Function;
      };
    };
  };
}

interface FeaturedWorkItem {
  node: {
    id: string;
    title: string;
    slug: string;
    portImg: string;
  };
}

interface OtherWorkItem {
  node: {
    id: string;
    thumbImg: string;
    behanceUrl: string;
  };
}

interface PortfolioItem {
  data: {
    featuredPortfolioJson: {
      slug: string;
      title: string;
      description: string[];
      liveUrl: string;
      nextProj: {
        title: string;
        slug: string;
      };
      assets: string[];
    };
  };
}
