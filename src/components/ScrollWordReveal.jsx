import React, { useEffect, useRef, useState } from 'react';

/**
 * ScrollWordReveal
 * Splits text into individual words and highlights each word from muted grey
 * to active deep navy as the user scrolls the component through the viewport.
 */
export default function ScrollWordReveal({ text, className = '' }) {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let rafId = null;

    const calculateProgress = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;

      // Reveal starts when top of container enters 85% of viewport
      // and completes when top reaches 25% of viewport
      const start = vh * 0.85;
      const end = vh * 0.25;
      const raw = (start - rect.top) / (start - end);
      const clamped = Math.max(0, Math.min(1, raw));

      setProgress(clamped);
    };

    const handleScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(calculateProgress);
    };

    calculateProgress();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const words = text ? text.split(' ') : [];
  const total = words.length;

  return (
    <span ref={containerRef} className={`statement-word-track ${className}`}>
      {words.map((word, index) => {
        const threshold = (index + 0.4) / total;
        const isActive = progress >= threshold;
        return (
          <span
            key={index}
            className={`statement-word ${isActive ? 'active' : ''}`}
          >
            {word}{' '}
          </span>
        );
      })}
    </span>
  );
}
