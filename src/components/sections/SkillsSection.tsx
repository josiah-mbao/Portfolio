'use client';

import { useState, useEffect } from 'react';

export default function SkillsSection() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    const skillsElement = document.getElementById('skills');
    if (skillsElement) observer.observe(skillsElement);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className={`py-24 bg-gradient-to-b from-stone-900 via-slate-900 to-gray-900 text-white transition-all duration-1000 ${visibleSections.has('skills') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-emerald-300">Skills & Technologies</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Proficient across the full stack: from machine learning pipelines to system architecture,
            cloud infrastructure to user-facing applications.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* MLOps */}
          <div className="group bg-slate-700/60 backdrop-blur-sm border border-emerald-500/50 rounded-xl p-6 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-400/20 hover:scale-105 transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">🤖</span>
            </div>
            <h3 className="text-lg font-bold text-emerald-200 mb-2 group-hover:text-emerald-100 transition-colors duration-300">MLOps</h3>
            <div className="w-full bg-slate-600 rounded-full h-2 mb-2">
              <div className={`bg-gradient-to-r from-emerald-400 to-green-400 h-2 rounded-full transition-all duration-1000 ${visibleSections.has('skills') ? 'w-[85%]' : 'w-0'}`}></div>
            </div>
            <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">ML pipelines, model deployment, monitoring</p>
          </div>

          {/* Python */}
          <div className="group bg-slate-700/60 backdrop-blur-sm border border-emerald-500/50 rounded-xl p-6 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-400/20 hover:scale-105 transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">🐍</span>
            </div>
            <h3 className="text-lg font-bold text-emerald-200 mb-2 group-hover:text-emerald-100 transition-colors duration-300">Python</h3>
            <div className="w-full bg-slate-600 rounded-full h-2 mb-2">
              <div className={`bg-gradient-to-r from-blue-400 to-indigo-400 h-2 rounded-full transition-all duration-1000 ${visibleSections.has('skills') ? 'w-[90%]' : 'w-0'}`}></div>
            </div>
            <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">Automation, AI/ML, backend development</p>
          </div>

          {/* Kubernetes */}
          <div className="group bg-slate-700/60 backdrop-blur-sm border border-emerald-500/50 rounded-xl p-6 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-400/20 hover:scale-105 transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">☸️</span>
            </div>
            <h3 className="text-lg font-bold text-emerald-200 mb-2 group-hover:text-emerald-100 transition-colors duration-300">Kubernetes</h3>
            <div className="w-full bg-slate-600 rounded-full h-2 mb-2">
              <div className={`bg-gradient-to-r from-cyan-400 to-teal-400 h-2 rounded-full transition-all duration-1000 ${visibleSections.has('skills') ? 'w-[80%]' : 'w-0'}`}></div>
            </div>
            <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">Container orchestration, scaling</p>
          </div>

          {/* Docker */}
          <div className="group bg-slate-700/60 backdrop-blur-sm border border-emerald-500/50 rounded-xl p-6 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-400/20 hover:scale-105 transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">🐳</span>
            </div>
            <h3 className="text-lg font-bold text-emerald-200 mb-2 group-hover:text-emerald-100 transition-colors duration-300">Docker</h3>
            <div className="w-full bg-slate-600 rounded-full h-2 mb-2">
              <div className={`bg-gradient-to-r from-green-400 to-emerald-400 h-2 rounded-full transition-all duration-1000 ${visibleSections.has('skills') ? 'w-[85%]' : 'w-0'}`}></div>
            </div>
            <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">Containerization, CI/CD pipelines</p>
          </div>

          {/* AI/ML */}
          <div className="group bg-slate-700/60 backdrop-blur-sm border border-emerald-500/50 rounded-xl p-6 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-400/20 hover:scale-105 transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">🧠</span>
            </div>
            <h3 className="text-lg font-bold text-emerald-200 mb-2 group-hover:text-emerald-100 transition-colors duration-300">AI/ML</h3>
            <div className="w-full bg-slate-600 rounded-full h-2 mb-2">
              <div className={`bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full transition-all duration-1000 ${visibleSections.has('skills') ? 'w-[88%]' : 'w-0'}`}></div>
            </div>
            <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">Computer vision, deep learning models</p>
          </div>

          {/* Cloud Computing */}
          <div className="group bg-slate-700/60 backdrop-blur-sm border border-emerald-500/50 rounded-xl p-6 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-400/20 hover:scale-105 transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-sky-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">☁️</span>
            </div>
            <h3 className="text-lg font-bold text-emerald-200 mb-2 group-hover:text-emerald-100 transition-colors duration-300">Cloud</h3>
            <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">GCP, Azure infrastructure, scalability</p>
          </div>

          {/* DevOps */}
          <div className="group bg-slate-700/60 backdrop-blur-sm border border-emerald-500/50 rounded-xl p-6 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-400/20 hover:scale-105 transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">⚙️</span>
            </div>
            <h3 className="text-lg font-bold text-emerald-200 mb-2 group-hover:text-emerald-100 transition-colors duration-300">DevOps</h3>
            <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">CI/CD, infrastructure automation</p>
          </div>

          {/* Automation */}
          <div className="group bg-slate-700/60 backdrop-blur-sm border border-emerald-500/50 rounded-xl p-6 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-400/20 hover:scale-105 transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-lg font-bold text-emerald-200 mb-2 group-hover:text-emerald-100 transition-colors duration-300">Automation</h3>
            <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">Task automation, bot development</p>
          </div>

          {/* API Development */}
          <div className="group bg-slate-700/60 backdrop-blur-sm border border-emerald-500/50 rounded-xl p-6 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-400/20 hover:scale-105 transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">🔗</span>
            </div>
            <h3 className="text-lg font-bold text-emerald-200 mb-2 group-hover:text-emerald-100 transition-colors duration-300">API Dev</h3>
            <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">RESTful APIs, backend services</p>
          </div>

          {/* Game Development */}
          <div className="group bg-slate-700/60 backdrop-blur-sm border border-emerald-500/50 rounded-xl p-6 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-400/20 hover:scale-105 transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">🎮</span>
            </div>
            <h3 className="text-lg font-bold text-emerald-200 mb-2 group-hover:text-emerald-100 transition-colors duration-300">Game Dev</h3>
            <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">2D game development with AI features</p>
          </div>
        </div>
      </div>
    </section>
  );
}
