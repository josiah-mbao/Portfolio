'use client';

import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ContactSection from '@/components/sections/ContactSection';
import { Project } from '@/types';

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

      {/* Sections */}
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection projects={projectsData} />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}
