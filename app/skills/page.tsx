'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Code, Database, Cloud, Shield, Cpu, Layers } from 'lucide-react';

const skillCategories = [
  {
    name: 'Frontend Development',
    icon: Code,
    color: 'from-cyan-500 to-blue-500',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'shadcn/ui']
  },
  {
    name: 'Backend Development',
    icon: Database,
    color: 'from-purple-500 to-pink-500',
    skills: ['Python', 'Node.js', 'Flask', 'PostgreSQL', 'REST APIs', 'GraphQL']
  },
  {
    name: 'AI/ML',
    icon: Cpu,
    color: 'from-green-500 to-emerald-500',
    skills: ['TensorFlow', 'scikit-learn', 'pandas', 'numpy', 'spaCy', 'Prophet']
  },
  {
    name: 'DevOps & Cloud',
    icon: Cloud,
    color: 'from-orange-500 to-red-500',
    skills: ['Docker', 'CI/CD', 'AWS', 'Vercel', 'Git', 'Linux']
  },
  {
    name: 'Security',
    icon: Shield,
    color: 'from-red-500 to-rose-500',
    skills: ['Vulnerability Assessment', 'Security Auditing', 'Cryptography', 'Threat Detection']
  },
  {
    name: 'Architecture',
    icon: Layers,
    color: 'from-indigo-500 to-violet-500',
    skills: ['System Design', 'Microservices', 'Scalability', 'Performance Optimization']
  }
];

export default function Skills() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

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

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-4">
              <Cpu className="w-8 h-8 text-cyan-400" />
              <h1 className="text-4xl md:text-5xl font-light tracking-[0.2em] text-white">
                TECHNICAL ARSENAL
              </h1>
            </div>
            <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-transparent mb-6" />
            
            <p className="text-gray-300 text-lg max-w-3xl">
              A comprehensive skillset spanning full-stack development, AI/ML, security, and systems architecture.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  onMouseEnter={() => setHoveredCategory(category.name)}
                  onMouseLeave={() => setHoveredCategory(null)}
                  className="group relative bg-gradient-to-br from-cyan-950/30 to-transparent border border-cyan-900/30 rounded-lg p-6 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-light tracking-wide text-white group-hover:text-cyan-400 transition-colors">
                      {category.name}
                    </h3>
                  </div>

                  <div className="space-y-2">
                    {category.skills.map((skill, i) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + i * 0.05, duration: 0.3 }}
                        className="flex items-center gap-3 text-gray-400 group-hover:text-gray-300 transition-colors"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        <span className="text-sm">{skill}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    className="absolute inset-0 border-2 border-cyan-400 rounded-lg pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredCategory === category.name ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                  />

                  <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 rounded-bl-full transition-opacity duration-300`} />
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-16 bg-gradient-to-br from-cyan-950/20 to-transparent border border-cyan-900/30 rounded-lg p-8 backdrop-blur-sm"
          >
            <h2 className="text-xl tracking-wider text-cyan-400 uppercase mb-4">
              Continuous Development
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Technology evolves rapidly, and so do I. I'm constantly learning new tools, frameworks, and methodologies to stay at the forefront of software development.
            </p>
            <p className="text-gray-400 text-sm">
              Currently exploring: Advanced system architecture patterns, distributed systems, and cutting-edge AI/ML applications.
            </p>
          </motion.div>
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