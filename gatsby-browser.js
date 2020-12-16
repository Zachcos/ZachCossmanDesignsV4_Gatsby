const transitionDelay = 400;

exports.shouldUpdateScroll = () => false;

exports.onRouteUpdate = () =>
  window.setTimeout(() => window.scrollTo(0, 0), transitionDelay);
