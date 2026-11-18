'use client';

import { useEffect, useRef, type ReactNode } from 'react';

export default function DigitalMotion({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const seen = new WeakSet<Element>();
    const animations = new Set<Animation>();
    let observer: IntersectionObserver | undefined;
    let frame = 0;

    function updateProgress() {
      frame = 0;
      if (!root) return;
      const bounds = root.getBoundingClientRect();
      const distance = Math.max(1, bounds.height - window.innerHeight);
      root.style.setProperty('--digital-progress', String(Math.min(1, Math.max(0, -bounds.top / distance))));
    }

    function onScroll() {
      if (!frame) frame = window.requestAnimationFrame(updateProgress);
    }

    function configureMotion() {
      observer?.disconnect();
      if (preference.matches) {
        for (const animation of animations) animation.cancel();
        animations.clear();
        return;
      }
      observer = new IntersectionObserver(entries => {
        for (const entry of entries) {
          if (!entry.isIntersecting || seen.has(entry.target)) continue;
          seen.add(entry.target);
          const delay = Number((entry.target as HTMLElement).dataset.revealDelay || 0);
          const animation = entry.target.animate([
            { opacity: 0, transform: 'translateY(24px)' },
            { opacity: 1, transform: 'translateY(0)' },
          ], { duration: 650, delay, easing: 'cubic-bezier(.2,.7,.2,1)', fill: 'backwards' });
          animations.add(animation);
          animation.onfinish = () => animations.delete(animation);
          observer?.unobserve(entry.target);
        }
      }, { threshold: 0.08 });
      root?.querySelectorAll('[data-reveal]').forEach(element => observer?.observe(element));
    }

    configureMotion();
    updateProgress();
    preference.addEventListener('change', configureMotion);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      observer?.disconnect();
      for (const animation of animations) animation.cancel();
      window.cancelAnimationFrame(frame);
      preference.removeEventListener('change', configureMotion);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return <div className="digital-page" ref={rootRef}>{children}</div>;
}
