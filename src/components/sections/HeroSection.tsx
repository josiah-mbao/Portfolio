'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const [displayedText, setDisplayedText] = useState('');
  const [particles, setParticles] = useState<Array<{
    id: number,
    x: number,
    y: number,
    vx: number,
    vy: number,
    size: number,
    opacity: number,
    hue: number,
    targetX: number,
    targetY: number
  }>>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMouseInHero, setIsMouseInHero] = useState(false);

  const fullText = 'Josiah Mbao';

  // Typing animation
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, []);

  // Initialize particles with boid properties
  useEffect(() => {
    const particleCount = 60;
    const newParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      size: Math.random() * 4 + 1,
      opacity: Math.random() * 0.6 + 0.2,
      hue: Math.random() * 360,
      targetX: Math.random() * window.innerWidth,
      targetY: Math.random() * window.innerHeight
    }));
    setParticles(newParticles);
  }, []);

  // Boid system animation with mouse interaction
  useEffect(() => {
    const animateParticles = () => {
      setParticles(prevParticles =>
        prevParticles.map(particle => {
          let newVx = particle.vx;
          let newVy = particle.vy;

          // Mouse attraction (only in hero section) - ALL particles attracted
          if (isMouseInHero) {
            const dx = mousePos.x - particle.x;
            const dy = mousePos.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            // All particles in hero section are attracted to mouse
            const force = Math.max(0.01, 0.05 / (distance * 0.01 + 1));
            newVx += (dx / distance) * force;
            newVy += (dy / distance) * force;
          }

          // Flocking behaviors
          let cohesionX = 0, cohesionY = 0;
          let separationX = 0, separationY = 0;
          let alignmentX = 0, alignmentY = 0;
          let neighborCount = 0;

          prevParticles.forEach(other => {
            if (other.id !== particle.id) {
              const dx = other.x - particle.x;
              const dy = other.y - particle.y;
              const distance = Math.sqrt(dx * dx + dy * dy);

              if (distance < 80) {
                cohesionX += other.x;
                cohesionY += other.y;

                if (distance < 25) {
                  separationX -= dx / distance;
                  separationY -= dy / distance;
                }

                alignmentX += other.vx;
                alignmentY += other.vy;

                neighborCount++;
              }
            }
          });

          if (neighborCount > 0) {
            cohesionX = (cohesionX / neighborCount - particle.x) * 0.005;
            cohesionY = (cohesionY / neighborCount - particle.y) * 0.005;

            separationX *= 0.05;
            separationY *= 0.05;

            alignmentX = (alignmentX / neighborCount - particle.vx) * 0.02;
            alignmentY = (alignmentY / neighborCount - particle.vy) * 0.02;

            newVx += cohesionX + separationX + alignmentX;
            newVy += cohesionY + separationY + alignmentY;
          }

          // Limit velocity
          const speed = Math.sqrt(newVx * newVx + newVy * newVy);
          const maxSpeed = 3;
          if (speed > maxSpeed) {
            newVx = (newVx / speed) * maxSpeed;
            newVy = (newVy / speed) * maxSpeed;
          }

          // Update position
          let newX = particle.x + newVx;
          let newY = particle.y + newVy;

          // Boundary wrapping
          if (newX < 0) newX = window.innerWidth;
          if (newX > window.innerWidth) newX = 0;
          if (newY < 0) newY = window.innerHeight;
          if (newY > window.innerHeight) newY = 0;

          return {
            ...particle,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy,
            hue: (particle.hue + 1) % 360
          };
        })
      );
    };

    const interval = setInterval(animateParticles, 16);
    return () => clearInterval(interval);
  }, [mousePos, isMouseInHero]);

  return (
    <section className="flex items-center justify-center min-h-screen px-6 relative z-10">
      <div className="text-center max-w-6xl relative">
        {/* Profile Photo with Dramatic Effects */}
        <div className="mb-12 relative">
          <div className="relative inline-block">
            {/* Outer glow ring */}
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 rounded-full opacity-20 blur-xl animate-pulse-glow"></div>

            {/* Profile image container */}
            <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-emerald-400/70 shadow-2xl shadow-emerald-400/30 transform hover:scale-105 transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-purple-400/20 rounded-full"></div>
              <Image
                src="/profile pic.jpeg"
                alt="Josiah Mbao - Profile Photo"
                width={160}
                height={160}
                className="w-full h-full object-cover relative z-10"
                priority
              />
              {/* Inner highlight */}
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-white/20 rounded-full"></div>
            </div>
          </div>

          {/* "Open to Work" badge */}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
            <span className="inline-block bg-gradient-to-r from-green-400 to-emerald-500 text-white text-sm px-4 py-2 rounded-full font-semibold shadow-lg shadow-green-400/30 border border-green-300/50 backdrop-blur-sm animate-pulse">
              🚀 Open to Work
            </span>
          </div>
        </div>

        {/* Name with Dramatic Text Effects */}
        <div className="mb-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-3xl -z-10"></div>

          <h1 className="text-7xl md:text-9xl font-black mb-6 relative">
            <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-purple-100 animate-gradient-shift opacity-90 blur-sm">
              Josiah Mbao
            </span>
            <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 animate-gradient-shift">
              Josiah Mbao
            </span>
            <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-purple-100 animate-gradient-shift font-extrabold">
              {displayedText}
            </span>
          </h1>
        </div>

        {/* Title and Description */}
        <div className="mb-12 space-y-6">
          <div className="relative">
            <p className="text-2xl md:text-3xl font-light mb-6 text-emerald-300 drop-shadow-lg">
              MLOps & Systems Engineer
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full shadow-lg shadow-emerald-400/50"></div>
          </div>

          <div className="max-w-3xl mx-auto relative">
            <div className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm rounded-2xl -z-10"></div>
            <p className="text-xl md:text-2xl opacity-95 leading-relaxed text-gray-100 font-light px-6 py-4">
              Building <span className="text-emerald-300 font-semibold">intelligent</span>, scalable systems at the intersection of
              <span className="text-blue-300 font-semibold"> AI</span>,
              <span className="text-purple-300 font-semibold"> Cloud</span>, and
              <span className="text-cyan-300 font-semibold"> Infrastructure</span>.
              <br className="hidden md:block" />
              Passionate about crafting end-to-end solutions that are resilient, efficient, and impactful.
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <a
            href="https://www.linkedin.com/in/josiah-mbao"
            className="group relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-500 hover:via-blue-600 hover:to-blue-700 px-10 py-5 rounded-xl font-bold text-lg transition-all duration-500 transform hover:scale-110 hover:rotate-1 shadow-2xl hover:shadow-blue-500/50 border-2 border-blue-500/30 hover:border-blue-400/50"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              const centerX = rect.width / 2;
              const centerY = rect.height / 2;
              const deltaX = (x - centerX) / centerX;
              const deltaY = (y - centerY) / centerY;

              e.currentTarget.style.transform = `scale(1.1) rotate(1deg) translate(${deltaX * 8}px, ${deltaY * 8}px)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1) rotate(0deg) translate(0px, 0px)';
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl opacity-0 group-hover:opacity-30 blur-lg -z-10 transition-opacity duration-300"></div>

            <span className="flex items-center gap-3 relative z-10">
              Connect on LinkedIn
              <svg className="w-5 h-5 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
          </a>

          <a
            href="https://github.com/josiah-mbao"
            className="group relative bg-gradient-to-r from-gray-800 via-gray-900 to-black hover:from-gray-700 hover:via-gray-800 hover:to-gray-900 px-10 py-5 rounded-xl font-bold text-lg transition-all duration-500 transform hover:scale-110 hover:-rotate-1 shadow-2xl hover:shadow-gray-500/50 border-2 border-gray-600/50 hover:border-gray-500/70"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              const centerX = rect.width / 2;
              const centerY = rect.height / 2;
              const deltaX = (x - centerX) / centerX;
              const deltaY = (y - centerY) / centerY;

              e.currentTarget.style.transform = `scale(1.1) rotate(-1deg) translate(${deltaX * 8}px, ${deltaY * 8}px)`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1) rotate(0deg) translate(0px, 0px)';
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl opacity-0 group-hover:opacity-20 blur-lg -z-10 transition-opacity duration-300"></div>

            <span className="flex items-center gap-3 relative z-10">
              View GitHub Profile
              <svg className="w-5 h-5 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-5.467-1.113-5.467-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
            </span>
          </a>
        </div>

        {/* GitHub Stats */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold">53</div>
              <div className="text-sm opacity-75">Repositories</div>
            </div>
            <div>
              <div className="text-2xl font-bold">531</div>
              <div className="text-sm opacity-75">Contributions</div>
            </div>
            <div>
              <div className="text-2xl font-bold">13</div>
              <div className="text-sm opacity-75">Stars Earned</div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Boid System Particles */}
      <div
        className="absolute inset-0 pointer-events-none"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const mouseX = e.clientX - rect.left;
          const mouseY = e.clientY - rect.top;
          setMousePos({ x: mouseX, y: mouseY });

          const heroHeight = window.innerHeight * 0.8;
          setIsMouseInHero(mouseY < heroHeight);
        }}
        onMouseLeave={() => {
          setIsMouseInHero(false);
        }}
      >
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full transition-none"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              background: `hsl(${particle.hue}, 70%, 60%)`,
              boxShadow: `0 0 ${particle.size * 2}px hsla(${particle.hue}, 70%, 60%, 0.5)`,
              filter: `blur(${particle.size > 3 ? '0px' : '0.5px'})`
            }}
          />
        ))}

        {/* Enhanced floating elements */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-emerald-400 rounded-full animate-ping shadow-lg shadow-emerald-400/50"></div>
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse shadow-md shadow-purple-400/50"></div>
        <div className="absolute top-1/2 left-1/3 w-4 h-4 border-2 border-cyan-400/60 rotate-45 animate-spin-slow shadow-lg shadow-cyan-400/30"></div>
        <div className="absolute top-1/6 right-1/3 w-2 h-2 bg-pink-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-1/4 left-1/6 w-3 h-3 border border-yellow-400/50 rotate-12 animate-pulse shadow-md shadow-yellow-400/30"></div>
      </div>
    </section>
  );
}
