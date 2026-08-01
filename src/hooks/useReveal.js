import { useEffect, useRef, useState } from 'react';

// Observa o elemento e marca "inView" quando ele entra na tela,
// disparando as animações de reveal via classe CSS (.in-view).
export default function useReveal(options) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setInView(true);
        });
      },
      options || { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return [ref, inView];
}
