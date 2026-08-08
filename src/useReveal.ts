import { useEffect } from 'react';

export function useReveal(deps: unknown[] = []) {
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal:not(.in)');
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, deps);
}
