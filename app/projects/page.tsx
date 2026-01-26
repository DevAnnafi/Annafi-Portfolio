'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    name: 'Echelon',
    category: 'SYSTEMS',
    description: 'A single workspace that lets a user capture tasks/habits, see progress, and get AI guidance to decide what to do next',
    tech: ['Next.js (React 18)', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Framer Motion', 'PostgreSQL (Supabase)', 'Vercel'],
    image: 'https://annafiislam.com/images/Echelon_Dashboard.png',
    github: 'https://github.com/DevAnnafi/Echelon',
    categoryColor: 'from-cyan-500 to-blue-500'
  },
  {
    name: 'AI Job Market Analyzer',
    category: 'INTELLIGENCE',
    description: 'Data-driven analysis of job markets to surface in-demand skills and compensation trends.',
    tech: ['Python', 'pandas', 'numpy', 'scikit-learn', 'spaCy', 'Prophet', 'Streamlit', 'matplotlib', 'seaborn'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    github: 'https://github.com/DevAnnafi/AI-Job-Market-Analyzer',
    categoryColor: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Security Audit Scanner',
    category: 'SECURITY',
    description: 'Automated vulnerability detection and reporting system built for security workflows.',
    tech: ['Python', 'Flask', 'PostgreSQL', 'Numpy/Scikit', 'Plotly', 'Cryptography'],
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=600&fit=crop',
    github: 'https://github.com/DevAnnafi/Security-Audit-Logger-Vulnerability-Scanner',
    categoryColor: 'from-red-500 to-orange-500'
  },
  {
    name: 'Log Aggregation Pipeline',
    category: 'INFRASTRUCTURE',
    description: 'Centralized logging pipeline with detection logic and Elasticsearch forwarding.',
    tech: ['Python'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
    github: 'https://github.com/DevAnnafi/Log-Aggregation-Detection-Pipeline',
    categoryColor: 'from-green-500 to-emerald-500'
  },
  {
    name: 'Risk Assessment Dashboard',
    category: 'GRC',
    description: 'Simulated risk evaluation system for scoring, mitigation, and visualization.',
    tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    image: 'https://annafiislam.com/images/Risk_Dashboard.png',
    link: 'https://risk-assessment-dashboard-annafi.streamlit.app/',
    github: 'https://github.com/DevAnnafi/Risk-Assessment-Dashboard',
    categoryColor: 'from-yellow-500 to-amber-500'
  },
  {
    name: 'Graph Runner',
    category: 'GAMES',
    description: "Graph Runner is a fast-paced, precision-based arcade game inspired by The World's Hardest Game. It combines continuous player movement with Dijkstra's algorithm–driven enemy pathfinding.",
    tech: ['Python', 'Pygame', "Djikstra's Algorithm", 'React.js', 'Next.js', 'TailwindCSS'],
    image: 'https://annafiislam.com/images/Graph_Run.png',
    link: 'https://graph-runner-web.vercel.app/',
    github: 'https://graph-runner-web.vercel.app/',
    categoryColor: 'from-indigo-500 to-violet-500'
  }
];

const categories = ['ALL', 'SYSTEMS', 'INTELLIGENCE', 'SECURITY', 'INFRASTRUCTURE', 'GRC', 'GAMES'];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const filteredProjects = selectedCategory === 'ALL' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#0a1628] relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=1920&q=80')`,
        }}
      />

      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(rgba(79, 209, 217, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(79, 209, 217, 0.3) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      <div className="relative z-10 min-h-screen p-8 md:p-16 lg:p-24">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-12"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="tracking-wider text-sm uppercase">Return to Base</span>
        </Link>

        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-light tracking-[0.2em] text-white mb-4">
              MISSION ARCHIVES
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-transparent mb-8" />
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-xs tracking-wider uppercase transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400'
                      : 'bg-cyan-950/20 text-gray-400 border border-cyan-900/30 hover:border-cyan-400/50 hover:text-cyan-300'
                  } rounded backdrop-blur-sm`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onMouseEnter={() => setHoveredProject(project.name)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group relative bg-gradient-to-br from-cyan-950/30 to-transparent border border-cyan-900/30 rounded-lg overflow-hidden backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/50 to-transparent" />
                  
                  <div className={`absolute top-4 left-4 px-3 py-1 text-xs tracking-wider uppercase bg-gradient-to-r ${project.categoryColor} text-white rounded backdrop-blur-sm`}>
                    {project.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-light tracking-wide text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.name}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech) => (
                      <span 
                        key={tech}
                        className="text-xs text-cyan-400/70 bg-cyan-950/30 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="text-xs text-gray-500 px-2 py-1">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>View Code</span>
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                <motion.div
                  className="absolute inset-0 border-2 border-cyan-400 rounded-lg pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === project.name ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(10, 22, 40, 0.8) 100%)'
        }}
      />
    </div>
  );
}