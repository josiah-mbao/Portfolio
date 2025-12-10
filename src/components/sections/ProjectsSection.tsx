'use client';

import { useState } from 'react';
import { Project, FilterType } from '@/types';
import ProjectCard from '../ui/ProjectCard';

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  // Filter projects based on active filter
  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'featured') {
      return project.featured;
    } else if (activeFilter !== 'all') {
      return project.category === activeFilter || project.techType === activeFilter;
    }
    return true;
  });

  const filterOptions = [
    { key: 'all' as FilterType, label: 'All Projects', count: projects.length },
    { key: 'featured' as FilterType, label: 'Featured', count: projects.filter(p => p.featured).length },
    { key: 'Python' as FilterType, label: 'Python', count: projects.filter(p => p.techType === 'Python').length },
    { key: 'AI/ML' as FilterType, label: 'AI/ML', count: projects.filter(p => p.category === 'AI/ML').length },
    { key: 'FinTech' as FilterType, label: 'FinTech', count: projects.filter(p => p.category === 'FinTech').length },
    { key: 'DevOps' as FilterType, label: 'DevOps', count: projects.filter(p => p.category === 'DevOps').length },
    { key: 'Go' as FilterType, label: 'Go', count: projects.filter(p => p.techType === 'Go').length },
    { key: 'Rust' as FilterType, label: 'Rust', count: projects.filter(p => p.techType === 'Rust').length },
    { key: 'TypeScript' as FilterType, label: 'TypeScript', count: projects.filter(p => p.techType === 'TypeScript').length },
    { key: 'Gaming' as FilterType, label: 'Gaming', count: projects.filter(p => p.category === 'Gaming').length }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-bl from-slate-800 via-slate-900 to-stone-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8 text-emerald-300">My Projects</h2>
        <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          Showcasing my journey through diverse technologies and domains.
          From AI systems to fintech solutions, each project represents a unique challenge and learning experience.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filterOptions.map(({ key, label, count }) => (
            <button
              key={key}
              onClick={() => setActiveFilter(key)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                activeFilter === key
                  ? 'bg-emerald-500 text-slate-900 shadow-lg shadow-emerald-500/30'
                  : 'bg-slate-700/60 text-gray-300 hover:bg-slate-600/80 hover:text-white border border-slate-600/50'
              }`}
            >
              {label} ({count})
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Show More/Less for when there are many projects */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No projects found for this filter.</p>
            <button
              onClick={() => setActiveFilter('all')}
              className="mt-4 px-6 py-2 bg-emerald-500 hover:bg-emerald-600 text-slate-900 rounded-lg font-medium transition-colors duration-300"
            >
              Show All Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
