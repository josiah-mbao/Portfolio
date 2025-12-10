import Image from 'next/image';
import TechBadge from './TechBadge';
import { Project } from '@/types';
import { CATEGORY_ICONS, CATEGORY_COLORS } from '@/constants/categories';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      className={`bg-slate-700/80 border rounded-xl p-6 backdrop-blur-sm hover:shadow-lg transition-all duration-500 transform hover:scale-105 ${
        project.featured
          ? 'border-emerald-400/70 shadow-lg shadow-emerald-400/20'
          : 'border-slate-600/50 hover:border-emerald-400/50 hover:shadow-emerald-400/10'
      }`}
    >
      {/* Project Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl">
            {CATEGORY_ICONS[project.category as keyof typeof CATEGORY_ICONS] || CATEGORY_ICONS.default}
          </span>
          <div>
            <h3 className="text-lg font-bold text-emerald-200">{project.title}</h3>
            {project.featured && (
              <span className="inline-block px-2 py-1 bg-emerald-500/20 text-emerald-300 text-xs rounded-full border border-emerald-400/30">
                Featured
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Project Image */}
      {project.image && (
        <div className="mb-4 rounded-lg overflow-hidden">
          <Image
            src={project.image}
            alt={`${project.title} - ${project.description}`}
            width={400}
            height={192}
            className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      {/* Project Description */}
      <p className="text-gray-200 mb-4 leading-relaxed text-sm">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-1 mb-4">
        {project.technologies.slice(0, 4).map((tech) => (
          <TechBadge key={tech} tech={tech} />
        ))}
        {project.technologies.length > 4 && (
          <span className="px-2 py-1 bg-slate-600/60 text-gray-400 rounded text-xs">
            +{project.technologies.length - 4}
          </span>
        )}
      </div>

      {/* Project Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-600/30">
        <span className={`text-xs font-medium ${CATEGORY_COLORS[project.category as keyof typeof CATEGORY_COLORS] || CATEGORY_COLORS.default}`}>
          {project.category}
        </span>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-slate-600 hover:bg-slate-500 text-gray-200 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-300"
        >
          <span>View Code</span>
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  );
}
