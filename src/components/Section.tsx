
import React, { useEffect, useRef, useState } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section = ({ id, title, children }: SectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`py-20 md:py-28 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={isVisible ? { animationDelay: '0.2s' } : {}}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        {title} <span className="text-accent">.</span>
      </h2>
      {children}
    </section>
  );
};

export default Section;
