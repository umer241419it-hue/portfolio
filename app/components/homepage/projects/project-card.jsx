"use client";

// @flow strict

import React from 'react';

function ProjectCard({
  project,
  index = 0,
  total = 5,
  stickyTop = 92,
  isCollapsed = false,
  headerHeight = 56,
}) {
  const demoUrl = project.demo || project.links?.demo || '';
  const codeUrl = project.code || project.codeRepository || project.links?.code || '';
  const hasValidDemo = Boolean(demoUrl && demoUrl !== 'TODO' && !demoUrl.includes('TODO'));
  const hasValidCode = Boolean(codeUrl && codeUrl !== 'TODO' && !codeUrl.includes('TODO'));

  const handleHeaderClick = () => {
    if (!isCollapsed) return;
    const anchor = document.getElementById(`project-anchor-${index}`);
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div
      id={`project-card-${index}`}
      style={{
        '--i': index,
      }}
      className={`sticky-project-card relative w-full rounded-xl border bg-[#0d1224] transition-colors duration-200 ${
        project.isFeatured
          ? 'border-[#16f2b3] shadow-[0_0_25px_rgba(22,242,179,0.2),0_10px_30px_rgba(0,0,0,0.5)]'
          : 'border-[#1b2c68a0] shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:border-indigo-500/50'
      }`}
    >
      {/* Top subtle decorative gradient line across full card - zero in-flow height */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-pink-500 to-transparent pointer-events-none z-10"
        aria-hidden="true"
      />

      {/* FULL-WIDTH HEADER BAR (Exact 56px height, box-sizing: border-box) */}
      <div
        onClick={handleHeaderClick}
        title={isCollapsed ? `Click to view ${project.name}` : undefined}
        className={`project-stack-header w-full px-4 sm:px-6 flex items-center justify-between border-b border-indigo-900/60 select-none ${
          isCollapsed
            ? 'cursor-pointer hover:bg-white/[0.04] transition-colors'
            : 'cursor-default'
        }`}
      >
        {/* Left: 3 window control dots */}
        <div className="flex items-center space-x-2 shrink-0 w-28">
          <div className="h-3 w-3 rounded-full bg-red-400 shrink-0"></div>
          <div className="h-3 w-3 rounded-full bg-orange-400 shrink-0"></div>
          <div className="h-3 w-3 rounded-full bg-green-200 shrink-0"></div>
        </div>

        {/* Center: Project name on ONE line, truncates with ellipsis if needed, never wraps */}
        <div className="flex-1 min-w-0 text-center px-2">
          <p className="text-[#16f2b3] font-semibold text-base sm:text-lg lg:text-xl min-w-0 truncate block whitespace-nowrap overflow-hidden text-ellipsis m-0 p-0 leading-normal">
            {project.name}
          </p>
        </div>

        {/* Right: Top Project badge (for SentinelVision) or balanced spacer */}
        <div className="flex items-center justify-end shrink-0 w-28">
          {project.isFeatured ? (
            <span className="inline-flex items-center px-2.5 py-1 leading-none text-xs sm:text-[13px] font-semibold rounded-full bg-[#16f2b3]/20 text-[#16f2b3] border border-[#16f2b3]/40 uppercase tracking-wider whitespace-nowrap shrink-0">
              Top Project
            </span>
          ) : (
            <div className="w-16 h-1 shrink-0" aria-hidden="true" />
          )}
        </div>
      </div>

      {/* CARD BODY: Below header, contains Code panel */}
      <div className="p-3.5 sm:p-4 lg:py-3.5 lg:px-5">
        <div className="w-full bg-[#090d1f]/70 rounded-lg border border-indigo-950/60 p-3.5 sm:p-4 lg:py-3.5 lg:px-5">
          <code className="font-mono text-sm sm:text-[15px] lg:text-base whitespace-pre-wrap break-words leading-relaxed block text-gray-300">
            <div className="space-y-1.5 sm:space-y-2">
              <div>
                <span className="mr-2 text-pink-500">const</span>
                <span className="mr-2 text-white">project</span>
                <span className="mr-2 text-pink-500">=</span>
                <span className="text-gray-400">{'{'}</span>
              </div>

              <div>
                <span className="ml-4 sm:ml-6 lg:ml-8 mr-2 text-white">name:</span>
                <span className="text-gray-400">{`'`}</span>
                <span className="text-amber-300">{project.name}</span>
                <span className="text-gray-400">{`',`}</span>
              </div>

              {project.status && (
                <div className="ml-4 sm:ml-6 lg:ml-8 mr-2">
                  <span className="text-white">status:</span>
                  <span className="text-gray-400">{` '`}</span>
                  <span className="text-amber-300">{project.status}</span>
                  <span className="text-gray-400">{`',`}</span>
                </div>
              )}

              <div className="ml-4 sm:ml-6 lg:ml-8 mr-2">
                <span className="text-white">tools:</span>
                <span className="text-gray-400">{` ['`}</span>
                {project.tools.map((tag, i) => (
                  <React.Fragment key={i}>
                    <span className="text-amber-300">{tag}</span>
                    {project.tools?.length - 1 !== i && (
                      <span className="text-gray-400">{`', '`}</span>
                    )}
                  </React.Fragment>
                ))}
                <span className="text-gray-400">{"],"}</span>
              </div>

              <div>
                <span className="ml-4 sm:ml-6 lg:ml-8 mr-2 text-white">myRole:</span>
                <span className="text-gray-400">{`'`}</span>
                <span className="text-orange-400">{project.myRole || project.role}</span>
                <span className="text-gray-400">{`',`}</span>
              </div>

              <div className="ml-4 sm:ml-6 lg:ml-8 mr-2">
                <span className="text-white">description:</span>
                <span className="text-gray-400">{` '`}</span>
                <span className="text-cyan-400">{project.description}</span>
                <span className="text-gray-400">{`',`}</span>
              </div>

              {project.deployment && (
                <div className="ml-4 sm:ml-6 lg:ml-8 mr-2">
                  <span className="text-white">deployment:</span>
                  <span className="text-gray-400">{` '`}</span>
                  <span className="text-cyan-400">{project.deployment}</span>
                  <span className="text-gray-400">{`',`}</span>
                </div>
              )}

              {hasValidDemo && (
                <div className="ml-4 sm:ml-6 lg:ml-8 mr-2">
                  <div>
                    <span className="text-white">liveLink:</span>
                    <span className="text-gray-400">{` '`}</span>
                    <a
                      href={demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-400 font-semibold hover:underline break-all"
                    >
                      {demoUrl}
                    </a>
                    <span className="text-gray-400">{`',`}</span>
                  </div>
                  {project.liveLinkNote && (
                    <div className="text-gray-400/80 italic text-xs sm:text-sm mt-1">
                      <span className="text-gray-500 font-mono">// Note: </span>
                      <span>{project.liveLinkNote}</span>
                    </div>
                  )}
                </div>
              )}

              {hasValidCode && (
                <div className="ml-4 sm:ml-6 lg:ml-8 mr-2">
                  <span className="text-white">codeRepository:</span>
                  <span className="text-gray-400">{` '`}</span>
                  <a
                    href={codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-400 font-semibold hover:underline break-all"
                  >
                    {codeUrl}
                  </a>
                  <span className="text-gray-400">{`',`}</span>
                </div>
              )}

              <div>
                <span className="text-gray-400">{`};`}</span>
              </div>
            </div>
          </code>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
