"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: string;
  techType: string;
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  image?: string;
}

const projectsData: Project[] = [
  // Featured Projects (currently shown)
  {
    id: "ona-vision",
    title: "Ona Vision",
    description: "Real-Time Object Detection System",
    longDescription: "Advanced computer vision system using YOLOv8 and DeepSORT for tracking multiple objects in real-time. Features video streaming, performance monitoring with Prometheus, and an intuitive Flask dashboard for monitoring and control.",
    technologies: ["Python", "YOLOv8", "DeepSORT", "Flask", "Kubernetes"],
    category: "AI/ML",
    techType: "Python",
    githubUrl: "https://github.com/josiah-mbao/Ona-Vision",
    featured: true,
    image: "/Ona-ss.png"
  },
  {
    id: "go-reverse-proxy",
    title: "Go Reverse Proxy",
    description: "High-Performance Server",
    longDescription: "Scalable reverse proxy server built in Go, leveraging goroutines and channels for concurrent request handling. Implements request logging, optional caching, and seamless Kubernetes deployment for container orchestration.",
    technologies: ["Go", "Goroutines", "Channels", "Kubernetes", "Docker"],
    category: "DevOps",
    techType: "Go",
    githubUrl: "https://github.com/josiah-mbao/Reverse-proxy-server",
    featured: true,
    image: "/go server.png"
  },
  // Additional Projects
  {
    id: "fraudflow",
    title: "FraudFlow",
    description: "MLOps Credit Card Fraud Detection",
    longDescription: "A fully integrated MLOps system for Credit Card fraud detection with automated pipelines, model monitoring, and real-time prediction capabilities.",
    technologies: ["Python", "MLflow", "MLOps", "Machine Learning"],
    category: "AI/ML",
    techType: "Python",
    githubUrl: "https://github.com/josiah-mbao/FraudFlow",
    featured: false
  },
  {
    id: "chama-wallet",
    title: "Chama Wallet",
    description: "FinTech API for Group Savings",
    longDescription: "FastAPI backend for managing Chama groups, members, and contributions with JWT authentication, PostgreSQL database, and Docker deployment.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "Docker", "JWT"],
    category: "FinTech",
    techType: "Python",
    githubUrl: "https://github.com/josiah-mbao/chama-wallet",
    featured: false
  },
  {
    id: "juice-zero-bugs",
    title: "Juice Zero Bugs Given",
    description: "2D Programming Humor Game",
    longDescription: "A Rust-powered 2D fighter where you battle programming nightmares like null pointers, data races, and undefined behavior. Built with Bevy engine.",
    technologies: ["Rust", "Bevy Engine", "Game Development", "2D"],
    category: "Gaming",
    techType: "Rust",
    githubUrl: "https://github.com/josiah-mbao/Juice-Zero-Bugs-Given",
    featured: false
  },
  {
    id: "payment-gateway",
    title: "Payment Gateway",
    description: "African Cross-Border Payments",
    longDescription: "Cross-border payment platform built on the Interledger Protocol, enabling seamless financial transactions across African markets.",
    technologies: ["Go", "Interledger Protocol", "FinTech", "Payments"],
    category: "FinTech",
    techType: "Go",
    githubUrl: "https://github.com/josiah-mbao/payment-gateway",
    featured: false
  },
  {
    id: "docu-vision",
    title: "Docu-Vision",
    description: "AI Document Analysis Tool",
    longDescription: "An AI tool that turns documents into insights using Google Cloud Vision API and a FastAPI backend for intelligent document processing.",
    technologies: ["Python", "FastAPI", "Google Cloud", "AI", "Document Processing"],
    category: "AI/ML",
    techType: "Python",
    githubUrl: "https://github.com/josiah-mbao/Docu-Vision",
    featured: false
  },
  {
    id: "coinpeek",
    title: "CoinPeek",
    description: "Terminal Crypto Price Tracker",
    longDescription: "A TUI (Terminal User Interface) application for tracking live cryptocurrency prices from Binance, built entirely in Rust.",
    technologies: ["Rust", "TUI", "Cryptocurrency", "Terminal"],
    category: "Tools",
    techType: "Rust",
    githubUrl: "https://github.com/josiah-mbao/coinpeek",
    featured: false
  },
  {
    id: "chama-wallet-ui",
    title: "Chama Wallet UI",
    description: "FinTech Frontend Application",
    longDescription: "Modern React/Next.js frontend for the Chama Wallet API, providing an intuitive interface for group savings management.",
    technologies: ["TypeScript", "Next.js", "React", "FinTech"],
    category: "FinTech",
    techType: "TypeScript",
    githubUrl: "https://github.com/josiah-mbao/chama-wallet-ui",
    featured: false
  },
  {
    id: "cloud-tutorials",
    title: "Cloud Tutorials",
    description: "Open Source Learning Platform",
    longDescription: "Educational content and tutorials covering Docker, DevOps practices, and cloud technologies to help developers learn modern infrastructure.",
    technologies: ["Docker", "DevOps", "Cloud", "Educational", "MDX"],
    category: "DevOps",
    techType: "Other",
    githubUrl: "https://github.com/josiah-mbao/cloud-tutorials",
    featured: false
  },
  {
    id: "pesa-flow",
    title: "PesaFlow",
    description: "Cross-Border Payments UI",
    longDescription: "Frontend interface for PesaFlow, a cross-border payments solution designed for SMEs to handle international transactions efficiently.",
    technologies: ["TypeScript", "Payments", "FinTech", "Interledger"],
    category: "FinTech",
    techType: "TypeScript",
    githubUrl: "https://github.com/josiah-mbao/pesa-flow",
    featured: false
  },
  {
    id: "azure-photo-uploader",
    title: "Azure Photo Uploader",
    description: "Cloud Storage Solution",
    longDescription: "Python-based solution for efficiently uploading and managing photo backups in Azure Blob Storage with automated organization.",
    technologies: ["Python", "Azure", "Cloud Storage", "Automation"],
    category: "DevOps",
    techType: "Python",
    githubUrl: "https://github.com/josiah-mbao/azure-photo-uploader",
    featured: false
  }
];

export default function Home() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Josiah Mbao';
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
  const [activeFilter, setActiveFilter] = useState<'all' | 'featured' | 'Python' | 'AI/ML' | 'FinTech' | 'DevOps' | 'Go' | 'Rust' | 'TypeScript' | 'Gaming'>('all');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projectsData);

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

    // Observe all sections
    const sections = ['about', 'skills', 'projects', 'experience', 'contact'];
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Filter projects based on active filter
  useEffect(() => {
    let filtered = projectsData;

    if (activeFilter === 'featured') {
      filtered = projectsData.filter(project => project.featured);
    } else if (activeFilter !== 'all') {
      filtered = projectsData.filter(project =>
        project.category === activeFilter || project.techType === activeFilter
      );
    }

    setFilteredProjects(filtered);
  }, [activeFilter]);

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
  }, [fullText]);

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
            const force = Math.max(0.01, 0.05 / (distance * 0.01 + 1)); // Stronger attraction
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

              if (distance < 80) { // Neighbor radius
                // Cohesion: steer towards center of neighbors
                cohesionX += other.x;
                cohesionY += other.y;

                // Separation: avoid crowding neighbors
                if (distance < 25) {
                  separationX -= dx / distance;
                  separationY -= dy / distance;
                }

                // Alignment: steer towards average heading of neighbors
                alignmentX += other.vx;
                alignmentY += other.vy;

                neighborCount++;
              }
            }
          });

          if (neighborCount > 0) {
            // Apply cohesion
            cohesionX = (cohesionX / neighborCount - particle.x) * 0.005;
            cohesionY = (cohesionY / neighborCount - particle.y) * 0.005;

            // Apply separation
            separationX *= 0.05;
            separationY *= 0.05;

            // Apply alignment
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
            hue: (particle.hue + 1) % 360 // Color cycling
          };
        })
      );
    };

    const interval = setInterval(animateParticles, 16); // ~60fps
    return () => clearInterval(interval);
  }, [mousePos, isMouseInHero]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-stone-900 text-white relative overflow-hidden">
      {/* Dynamic Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary gradient animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-blue-500/10 to-purple-600/20 animate-gradient-shift"></div>

        {/* Secondary animated orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-500 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float-reverse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-pulse-glow"></div>

        {/* Geometric shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-emerald-400/30 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rotate-12 animate-float-slow"></div>
      </div>

      {/* Interactive Boid System Particles */}
      <div
        className="absolute inset-0 pointer-events-none"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const mouseX = e.clientX - rect.left;
          const mouseY = e.clientY - rect.top;
          setMousePos({ x: mouseX, y: mouseY });

          // Check if mouse is in hero section (top half of screen)
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

      {/* Navigation */}
      <nav className="relative z-10 p-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            JM
          </div>
          <div className="flex space-x-8">
            <button onClick={() => scrollToSection('about')} className="hover:text-emerald-300 transition-colors duration-300 cursor-pointer">About</button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-emerald-300 transition-colors duration-300 cursor-pointer">Skills</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-emerald-300 transition-colors duration-300 cursor-pointer">Projects</button>
            <button onClick={() => scrollToSection('experience')} className="hover:text-emerald-300 transition-colors duration-300 cursor-pointer">Experience</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-emerald-300 transition-colors duration-300 cursor-pointer">Contact</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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

            {/* "Open to Work" badge with enhanced styling */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
              <span className="inline-block bg-gradient-to-r from-green-400 to-emerald-500 text-white text-sm px-4 py-2 rounded-full font-semibold shadow-lg shadow-green-400/30 border border-green-300/50 backdrop-blur-sm animate-pulse">
                🚀 Open to Work
              </span>
            </div>
          </div>

          {/* Name with Dramatic Text Effects */}
          <div className="mb-8 relative">
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-3xl -z-10"></div>

            <h1 className="text-7xl md:text-9xl font-black mb-6 relative">
              {/* Multi-layer text effect */}
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

          {/* Title and Description with Enhanced Styling */}
          <div className="mb-12 space-y-6">
            <div className="relative">
              <p className="text-2xl md:text-3xl font-light mb-6 text-emerald-300 drop-shadow-lg">
                MLOps & Systems Engineer
              </p>
              {/* Decorative line */}
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full shadow-lg shadow-emerald-400/50"></div>
            </div>

            <div className="max-w-3xl mx-auto relative">
              {/* Text background effect */}
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
              {/* Animated background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Glow effect */}
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
              {/* Animated background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Glow effect */}
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
      </section>

      {/* About Section */}
      <section id="about" className={`py-24 bg-gradient-to-b from-stone-900 via-slate-900 to-gray-900 text-white relative transition-all duration-1000 ${visibleSections.has('about') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-emerald-300">
              About Me
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-slate-700 p-8 rounded-2xl border border-emerald-500">
                <h3 className="text-2xl font-semibold mb-4 text-emerald-300">What I Do</h3>
                <ul className="space-y-3 text-gray-100">
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 mt-1">🤖</span>
                    <span>MLOps: Designing AI model lifecycles on Kubernetes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 mt-1">⚙️</span>
                    <span>Systems: High-performance services with Rust & Go</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 mt-1">☁️</span>
                    <span>Cloud: Distributed applications on GCP & Azure</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 mt-1">🔍</span>
                    <span>Python Automation & AI Solutions</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-700 p-8 rounded-2xl border border-green-400">
                <h3 className="text-2xl font-semibold mb-4 text-green-300">My Story</h3>
                <p className="text-gray-100 leading-relaxed">
                  Originally from Zambia, I'm a 4th-year Software Engineering student at USIU in Kenya, passionate about AI, Cloud, and DevOps. I lead the GDSC Cloud/DevOps track, mentoring 180+ students, and freelance globally on Python automation, AI solutions, APIs, and 2D games—earning 5-star client reviews. I thrive on building scalable, high-impact systems and contributing to Africa's growing tech ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
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

      {/* Projects Section */}
      <section id="projects" className={`py-20 bg-gradient-to-bl from-slate-800 via-slate-900 to-stone-900 text-white transition-all duration-1000 ${visibleSections.has('projects') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8 text-emerald-300">My Projects</h2>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Showcasing my journey through diverse technologies and domains.
            From AI systems to fintech solutions, each project represents a unique challenge and learning experience.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              { key: 'all', label: 'All Projects', count: projectsData.length },
              { key: 'featured', label: 'Featured', count: projectsData.filter(p => p.featured).length },
              { key: 'Python', label: 'Python', count: projectsData.filter(p => p.techType === 'Python').length },
              { key: 'AI/ML', label: 'AI/ML', count: projectsData.filter(p => p.category === 'AI/ML').length },
              { key: 'FinTech', label: 'FinTech', count: projectsData.filter(p => p.category === 'FinTech').length },
              { key: 'DevOps', label: 'DevOps', count: projectsData.filter(p => p.category === 'DevOps').length },
              { key: 'Go', label: 'Go', count: projectsData.filter(p => p.techType === 'Go').length },
              { key: 'Rust', label: 'Rust', count: projectsData.filter(p => p.techType === 'Rust').length },
              { key: 'TypeScript', label: 'TypeScript', count: projectsData.filter(p => p.techType === 'TypeScript').length },
              { key: 'Gaming', label: 'Gaming', count: projectsData.filter(p => p.category === 'Gaming').length }
            ].map(({ key, label, count }) => (
              <button
                key={key}
                onClick={() => setActiveFilter(key as typeof activeFilter)}
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
              <div
                key={project.id}
                className={`bg-slate-700/80 border rounded-xl p-6 backdrop-blur-sm hover:shadow-lg transition-all duration-500 transform hover:scale-105 ${
                  project.featured
                    ? 'border-emerald-400/70 shadow-lg shadow-emerald-400/20'
                    : 'border-slate-600/50 hover:border-emerald-400/50 hover:shadow-emerald-400/10'
                }`}
                style={{
                  animation: visibleSections.has('projects')
                    ? `fadeInUp 0.6s ease-out forwards ${index * 100}ms`
                    : 'none'
                }}
              >
                {/* Project Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">
                      {project.category === 'AI/ML' ? '🤖' :
                       project.category === 'FinTech' ? '💰' :
                       project.category === 'DevOps' ? '⚙️' :
                       project.category === 'Gaming' ? '🎮' :
                       project.category === 'Tools' ? '🔧' : '🚀'}
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
                    <span
                      key={tech}
                      className="px-2 py-1 bg-slate-600/60 text-emerald-300 rounded text-xs border border-emerald-400/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-slate-600/60 text-gray-400 rounded text-xs">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Project Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-600/30">
                  <span className={`text-xs font-medium ${
                    project.category === 'AI/ML' ? 'text-purple-400' :
                    project.category === 'FinTech' ? 'text-green-400' :
                    project.category === 'DevOps' ? 'text-blue-400' :
                    project.category === 'Gaming' ? 'text-red-400' :
                    'text-gray-400'
                  }`}>
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



      {/* CV/Resume Section */}
      <section id="experience" className={`py-20 bg-gradient-to-br from-slate-900 via-stone-900 to-gray-900 text-white transition-all duration-1000 ${visibleSections.has('experience') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-6 text-amber-300">Professional Profile</h2>

          {/* Key Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-700/50 p-6 rounded-xl border border-amber-500/30 text-center">
              <h3 className="text-2xl font-bold text-amber-200 mb-2">2 Years</h3>
              <p className="text-gray-300 text-sm">Professional Experience</p>
            </div>
            <div className="bg-slate-700/50 p-6 rounded-xl border border-amber-500/30 text-center">
              <h3 className="text-2xl font-bold text-amber-200 mb-2">10+ Projects</h3>
              <p className="text-gray-300 text-sm">Delivered Successfully</p>
            </div>
            <div className="bg-slate-700/50 p-6 rounded-xl border border-amber-500/30 text-center">
              <h3 className="text-2xl font-bold text-amber-200 mb-2">5-Star Rating</h3>
              <p className="text-gray-300 text-sm">Client Satisfaction</p>
            </div>
          </div>

          {/* Client Testimonials */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-700/60 p-6 rounded-xl border border-amber-500/40">
              <p className="text-gray-100 italic mb-4 leading-relaxed text-center">&ldquo;Josiah has more than enough expertise and thinks along with your specific request, definitely recommend! 👍&rdquo;</p>
              <p className="text-amber-200 text-sm text-center">— Iwanrb1, Netherlands</p>
              <div className="flex justify-center text-amber-400 mt-2">
                ★★★★★
              </div>
            </div>
            <div className="bg-slate-700/60 p-6 rounded-xl border border-amber-500/40">
              <p className="text-gray-100 italic mb-4 leading-relaxed text-center">&ldquo;Very impressed by the fast responses and fast delivery time. Was a pleasure working with him and would highly recommend.&rdquo;</p>
              <p className="text-amber-200 text-sm">— Vikashz1212, United Kingdom</p>
              <div className="flex justify-center text-amber-400 mt-2 mb-0">
                ★★★★★
              </div>
            </div>
          </div>

          {/* View CV Button */}
          <div className="text-center">
            <a
              href="/SWE_resume.pdf"
              target="_blank"
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-500 hover:from-amber-300 hover:via-orange-400 hover:to-yellow-400 text-white px-8 py-4 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-amber-300/50 border-2 border-amber-300/30 hover:border-amber-200/50 transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl animate-pulse hover:animate-none"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <svg className="w-8 h-8 relative z-10 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 17a2 2 0 012 2 2 2 0 01-2 2H4a2 2 0 01-2-2v-7.59A2 2 0 012.41 10H6V5a2 2 0 012-2h7a2 2 0 012 2v5h3.59A2 2 0 0122 10.41V17z"/>
              </svg>
              <span className="relative z-10 font-extrabold tracking-wide uppercase">View Full CV</span>
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-2xl opacity-30 group-hover:opacity-50 blur-sm -z-10"></div>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className={`py-16 bg-gradient-to-br from-stone-900 via-slate-900 to-stone-900 text-white transition-all duration-1000 ${visibleSections.has('contact') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-amber-300">Get In Touch</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              I'm always interested in new opportunities and collaborations.
              Whether you're looking to hire or just want to connect, feel free to reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Contact Info */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-amber-500/30 rounded-xl p-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📧</span>
                </div>
                <h3 className="text-lg font-semibold text-amber-300 mb-2">Email</h3>
                <p className="text-gray-300 mb-3">For business inquiries and project discussions</p>
                <a
                  href="mailto:josiahmbaomc@gmail.com"
                  className="text-orange-400 hover:text-orange-300 transition-colors underline"
                >
                  josiahmbaomc@gmail.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-amber-500/30 rounded-xl p-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📍</span>
                </div>
                <h3 className="text-lg font-semibold text-orange-300 mb-2">Location</h3>
                <p className="text-gray-300 mb-3">Based in Nairobi, Kenya</p>
                <p className="text-gray-400 text-sm">UTC+3 | Available for remote work worldwide</p>
              </div>
            </div>

            {/* Freelance */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-amber-500/30 rounded-xl p-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💼</span>
                </div>
                <h3 className="text-lg font-semibold text-amber-400 mb-2">Freelance</h3>
                <p className="text-gray-300 mb-3">Available for Python, AI, and automation projects</p>
                <a
                  href="https://www.fiverr.com/s/WEp0eGQ"
                  className="text-amber-400 hover:text-amber-300 transition-colors underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Fiverr Profile
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-orange-300 mb-6">Connect With Me</h3>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a
                href="https://www.linkedin.com/in/josiah-mbao"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/josiah-mbao"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <a
                href="mailto:josiahmbaomc@gmail.com"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-slate-900"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4h-16c-1.1 0-1.99.9-1.99 2l-.01 12c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2zm0 4l-8 5-8-5v-2l8 5 8-5v2z"/>
                </svg>
                Email
              </a>
            </div>

            <div className="border-t border-orange-400/20 pt-8">
              <p className="text-gray-400 text-sm">
                Open to AI Engineer, Machine Learning Engineer, DevOps Engineer, Cloud Engineer, and Python Developer roles.
                <br />
                Building the future, one intelligent system at a time. 🚀
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
