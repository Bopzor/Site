import { useEffect } from 'react';

export const useAnimateOnScroll = (id: string, animationClass: string) => {
  useEffect(() => {
    if (!document) {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const element = document.getElementById(id);

        if (!element) {
          return;
        }

        if (entry.isIntersecting) {
          element.classList.add(animationClass);
          return;
        }
      });
    });

    const element = document.getElementById(id);

    if (!element) {
      return;
    }

    observer.observe(element);
  }, [animationClass, id]);
};
