export const menuVariant = {
  initial: {
    height: 0,
    width: 0,
    right: 0,
  },
  animate: {
    height: "150%",
    width: "150%",
    transition: {
      duration: 0.4,
    },
  },
  exit: {
    height: 0,
    width: 0,
    right: 0,
    transition: {
      duration: 0.3,
      delay: 0.3,
    },
  },
};

export const navListContainer = {
  initial: {
    transition: {
      staggerChildren: 0.3,
    },
  },
  animate: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
  exit: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: -0.1,
    },
  },
};

export const navlistAnimate = {
  initial: {
    y: 50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};
