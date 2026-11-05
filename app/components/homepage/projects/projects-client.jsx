"use client";

import React, { useState, useEffect, useCallback } from 'react';
import ProjectCard from './project-card';

const HEADER_HEIGHT = 56; // 56px (--stack-header-h)

export default function ProjectsClient({ projects = [] }) {
  const [navHeight, setNavHeight] = useState(76);
  const [collapsedMap, setCollapsedMap] = useState({});

  // 1. Measure real navbar height dynamically
  useEffect(() => {
    const measureNav = () => {
      const nav = document.querySelector('nav');
      if (nav) {
        const rect = nav.getBoundingClientRect();
        const height = Math.round(rect.height);
        if (height > 0) {
          setNavHeight(height);
        }
      }
    };

    measureNav();
    window.addEventListener('resize', measureNav);
    return () => window.removeEventListener('resize', measureNav);
  }, []);

  const baseTop = navHeight + 16;

  // 2. Detect which cards are currently collapsed (covered by subsequent cards)
  const updateCollapsedState = useCallback(() => {
    const isLg = typeof window !== 'undefined' && window.innerWidth >= 1024;
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isLg || prefersReducedMotion) {
      setCollapsedMap({});
      return;
    }

    const nextCollapsed = {};
    for (let i = 0; i < projects.length - 1; i++) {
      const nextCardEl = document.getElementById(`project-card-${i + 1}`);
      if (nextCardEl) {
        const nextRect = nextCardEl.getBoundingClientRect();
        const nextStickyTop = baseTop + (i + 1) * HEADER_HEIGHT;
        // Next card is sticking if its top has reached or passed its sticky offset
        nextCollapsed[i] = nextRect.top <= nextStickyTop + 4;
      }
    }
    setCollapsedMap(nextCollapsed);
  }, [projects.length, baseTop]);

  useEffect(() => {
    updateCollapsedState();

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateCollapsedState();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [updateCollapsedState]);

  return (
    <div
      className="w-full mx-auto flex flex-col gap-8 lg:gap-10"
      style={{
        '--nav-h': `${navHeight}px`,
        '--stack-header-h': `${HEADER_HEIGHT}px`,
      }}
    >
      {projects.map((project, index) => {
        const stickyTop = baseTop + index * HEADER_HEIGHT;
        const isCollapsed = Boolean(collapsedMap[index]);

        return (
          <React.Fragment key={project.id}>
            <div
              id={`project-anchor-${index}`}
              style={{ scrollMarginTop: `${stickyTop}px` }}
              className="w-full h-0 pointer-events-none opacity-0 select-none"
              aria-hidden="true"
            />
            <ProjectCard
              project={project}
              index={index}
              total={projects.length}
              stickyTop={stickyTop}
              isCollapsed={isCollapsed}
              headerHeight={HEADER_HEIGHT}
            />
          </React.Fragment>
        );
      })}

      {/* In-flow bottom spacer on desktop so all 5 tabs remain fully stacked and accessible */}
      <div
        className="hidden lg:block w-full h-[95vh] pointer-events-none"
        aria-hidden="true"
      />
    </div>
  );
}
