import { useEffect } from 'react';

export const useDisableScrollOnEnterIframe = (id: string) => {
  useEffect(() => {
    const iframe = document.getElementById(id);

    if (!iframe) {
      return;
    }

    const s = {
      insideIframe: false,
      scrollX: 0,
      scrollY: 0,
    };

    iframe.addEventListener('mouseenter', function () {
      s.insideIframe = true;
      s.scrollX = window.scrollX;
      s.scrollY = window.scrollY;
    });

    iframe.addEventListener('mouseleave', function () {
      s.insideIframe = false;
    });

    document.addEventListener('scroll', function () {
      if (s.insideIframe) {
        window.scrollTo(s.scrollX, s.scrollY);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
