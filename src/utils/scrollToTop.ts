
export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export const scrollToTopInstant = () => {
  window.scrollTo({ top: 0, behavior: 'instant' });
};
