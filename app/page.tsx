'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { User, Target, Cpu, Mail, Github, Linkedin } from 'lucide-react';

const menuItems = [
  { label: 'ABOUT ME', page: '/about', description: 'Learn more about who I am', icon: User, position: { x: 15, y: 20 } },
  { label: 'PROJECTS', page: '/projects', description: 'View my work and creations', icon: Target, position: { x: 35, y: 40 } },
  { label: 'SKILLS', page: '/skills', description: 'Technologies I work with', icon: Cpu, position: { x: 60, y: 35 } },
  { label: 'CONTACT', page: '/contact', description: 'Get in touch with me', icon: Mail, position: { x: 85, y: 60 } },
];

export default function Home() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [playerPosition, setPlayerPosition] = useState(0);

  const pathData = "M 15 20 Q 25 30, 35 40 Q 47 38, 60 35 Q 72 47, 85 60";

  return (
    <div className="min-h-screen bg-[#0a1628] relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, rgba(10, 22, 40, 0.95) 0%, rgba(10, 22, 40, 0.85) 100%),
            url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=1920&q=80')
          `,
        }}
      />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(rgba(79, 209, 217, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(79, 209, 217, 0.3) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), 
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              opacity: 0 
            }}
            animate={{ 
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <div className="relative z-10 pt-8 px-8 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 
            className="text-5xl md:text-7xl font-light tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-b from-white via-cyan-100 to-cyan-300/50 mb-2"
            style={{ 
              textShadow: '0 0 60px rgba(79, 209, 217, 0.3)',
              fontFamily: "'Inter', sans-serif"
            }}
          >
            ANNAFI ISLAM
          </h1>
          <p className="text-cyan-400 text-sm tracking-[0.3em] uppercase">Software Developer</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-8 mb-12"
        >
          <p className="text-gray-400 text-sm tracking-wider uppercase">Mission Roadmap</p>
          <p className="text-gray-500 text-xs mt-2">Navigate through the objectives</p>
        </motion.div>
      </div>

      {/* Roadmap SVG Path */}
      <div className="relative z-10 h-[70vh] px-8">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Glowing path trail */}
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          
          {/* Background path */}
          <motion.path
            d={pathData}
            fill="none"
            stroke="url(#pathGradient)"
            strokeWidth="0.3"
            strokeDasharray="2,2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          
          {/* Animated glowing path */}
          <motion.path
            d={pathData}
            fill="none"
            stroke="#06b6d4"
            strokeWidth="0.15"
            filter="url(#glow)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
          />
        </svg>

        {/* Checkpoint Stations */}
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.2, duration: 0.5, type: "spring" }}
              style={{
                position: 'absolute',
                left: `${item.position.x}%`,
                top: `${item.position.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
              onMouseEnter={() => {
                setHoveredIndex(index);
                setPlayerPosition(index);
              }}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group"
            >
              <Link
                href={item.page}
                className="relative block"
              >
                {/* Outer ring pulse */}
                <motion.div
                  className="absolute inset-0 -m-4 rounded-full border-2 border-cyan-400"
                  animate={{
                    scale: hoveredIndex === index ? [1, 1.5, 1] : 1,
                    opacity: hoveredIndex === index ? [0.5, 0, 0.5] : 0
                  }}
                  transition={{ duration: 2, repeat: hoveredIndex === index ? Infinity : 0 }}
                />

                {/* Station node */}
                <div className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${
                  hoveredIndex === index 
                    ? 'from-cyan-400 to-cyan-600 scale-110' 
                    : 'from-cyan-600/50 to-cyan-800/50'
                } border-2 border-cyan-400/30 flex items-center justify-center transition-all duration-300 backdrop-blur-sm`}>
                  <Icon className="w-7 h-7 text-white" />
                  
                  {/* Active indicator */}
                  {playerPosition === index && (
                    <motion.div
                      className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-[#0a1628]"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  )}
                </div>

                {/* Station label */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ 
                    opacity: hoveredIndex === index ? 1 : 0.7,
                    y: hoveredIndex === index ? 0 : 10,
                    scale: hoveredIndex === index ? 1.05 : 1
                  }}
                  className="absolute top-full mt-3 left-1/2 -translate-x-1/2 whitespace-nowrap"
                >
                  <div className="bg-gradient-to-br from-cyan-950/90 to-cyan-900/90 backdrop-blur-md border border-cyan-400/30 rounded px-4 py-2 text-center">
                    <p className="text-cyan-400 text-xs tracking-[0.2em] uppercase font-medium">
                      {item.label}
                    </p>
                    {hoveredIndex === index && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="text-gray-400 text-xs mt-1"
                      >
                        {item.description}
                      </motion.p>
                    )}
                  </div>
                </motion.div>

                {/* Connection indicator to next station */}
                {index < menuItems.length - 1 && (
                  <motion.div
                    className="absolute left-full top-1/2 w-8 h-px bg-gradient-to-r from-cyan-400/50 to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1 + index * 0.2, duration: 0.5 }}
                    style={{ transformOrigin: 'left' }}
                  />
                )}
              </Link>
            </motion.div>
          );
        })}

        {/* Player/Spartan Character */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{
            position: 'absolute',
            left: `${menuItems[playerPosition]?.position.x}%`,
            top: `${menuItems[playerPosition]?.position.y}%`,
            transform: 'translate(-50%, -120%)'
          }}
          className="pointer-events-none"
        >
          <motion.div
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative"
          >
            {/* Player indicator */}
            <div className="w-8 h-12 bg-gradient-to-b from-cyan-300 to-cyan-500 rounded-full relative">
              {/* Helmet */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 bg-cyan-200 rounded-full border-2 border-cyan-400" />
              {/* Visor glow */}
              <div className="absolute top-1 left-1/2 -translate-x-1/2 w-4 h-2 bg-cyan-400 rounded-full opacity-80" />
            </div>
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-cyan-400 rounded-full blur-md opacity-50 -z-10" />
          </motion.div>
          
          {/* Player label */}
          <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap">
            <span className="text-cyan-400 text-xs tracking-wider uppercase bg-cyan-950/80 backdrop-blur-sm px-2 py-1 rounded border border-cyan-400/30">
              You
            </span>
          </div>
        </motion.div>
      </div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-8 md:left-16 flex gap-4"
      >
        <a
          href="https://github.com/DevAnnafi"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-cyan-950/30 border border-cyan-900/30 flex items-center justify-center hover:border-cyan-400 hover:bg-cyan-950/50 transition-all group"
        >
          <Github className="w-5 h-5 text-cyan-400/70 group-hover:text-cyan-400 transition-colors" />
        </a>
        <a
          href="https://linkedin.com/in/annafi-islam"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-cyan-950/30 border border-cyan-900/30 flex items-center justify-center hover:border-cyan-400 hover:bg-cyan-950/50 transition-all group"
        >
          <Linkedin className="w-5 h-5 text-cyan-400/70 group-hover:text-cyan-400 transition-colors" />
        </a>
      </motion.div>

      {/* Bottom info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 right-8 md:right-16 text-right"
      >
        <span className="text-gray-500 text-xs tracking-[0.2em] uppercase">
          Portfolio 2026
        </span>
      </motion.div>

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