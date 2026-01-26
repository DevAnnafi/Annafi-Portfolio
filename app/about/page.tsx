'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Shield, CheckCircle2 } from 'lucide-react';

export default function About() {
  const capabilities = [
    'Full-Stack Application Design',
    'Scalable Backend Systems',
    'AI/ML Model Integration',
    'Data Pipelines & Feature Engineering',
    'Performance & Inference Optimization',
  ];

  return (
    <div className="min-h-screen bg-[#0a1628] relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=1920&q=80')`,
        }}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(rgba(79, 209, 217, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(79, 209, 217, 0.3) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      <div className="relative z-10 min-h-screen p-8 md:p-16 lg:p-24">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-12"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="tracking-wider text-sm uppercase">Return to Base</span>
        </Link>

        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-4">
              <Shield className="w-8 h-8 text-cyan-400" />
              <h1 className="text-4xl md:text-5xl font-light tracking-[0.2em] text-white">
                PERSONNEL FILE
              </h1>
            </div>
            <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-transparent" />
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* About Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-light tracking-wider text-cyan-400 uppercase">
                About the Operator
              </h2>
              <div className="text-gray-300 space-y-4 leading-relaxed">
                <p>
                  I'm a software engineer with a strong focus on security, systems design, and reliability under real-world constraints. I approach engineering the same way mission-critical systems are built — with clarity, discipline, and intent.
                </p>
                <p>
                  My work spans full-stack development, AI/ML, and data-driven systems. I prioritize clean architecture, measurable impact, and designs that hold up under pressure — not just in ideal conditions.
                </p>
              </div>
            </motion.div>

            {/* Stats Panel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-gradient-to-br from-cyan-950/30 to-transparent border border-cyan-900/30 p-8 rounded-lg backdrop-blur-sm"
            >
              <h3 className="text-sm tracking-[0.3em] text-cyan-400 uppercase mb-6">System Profile</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm uppercase tracking-wide">Specialization</span>
                  <span className="text-white font-medium">Full Stack Development</span>
                </div>
                <div className="h-px bg-gradient-to-r from-cyan-900/50 to-transparent" />
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm uppercase tracking-wide">Focus Areas</span>
                  <span className="text-white font-medium">Full Stack · AI/ML</span>
                </div>
                <div className="h-px bg-gradient-to-r from-cyan-900/50 to-transparent" />
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm uppercase tracking-wide">Stack</span>
                  <span className="text-white font-medium">React · TypeScript · Python</span>
                </div>
                <div className="h-px bg-gradient-to-r from-cyan-900/50 to-transparent" />
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm uppercase tracking-wide">Status</span>
                  <span className="text-green-400 font-medium flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    ACTIVE · AVAILABLE
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Capabilities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-gradient-to-br from-cyan-950/20 to-transparent border border-cyan-900/30 p-8 md:p-12 rounded-lg backdrop-blur-sm"
          >
            <h3 className="text-xl tracking-[0.2em] text-cyan-400 uppercase mb-8">System Profile</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={capability}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                  className="flex items-start gap-3 group"
                >
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    {capability}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-cyan-900/30">
              <div className="flex items-center gap-2 text-green-400 text-sm tracking-wider uppercase">
                <CheckCircle2 className="w-4 h-4" />
                <span>Profile Integrity: Verified</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Vignette */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(10, 22, 40, 0.8) 100%)'
        }}
      />
    </div>
  );
}