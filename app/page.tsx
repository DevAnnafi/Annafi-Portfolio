'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function PortfolioHero() {
  const [scrollY, setScrollY] = useState(0);
  const workRef = useRef(null);
  const isInView = useInView(workRef, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Echelon",
      category: "Full Stack",
      description: "An AI-powered personal productivity dashboard built with React, TypeScript, and Tailwind. Features modular widgets, task management, AI chat, and data visualization.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      tags: ["React", "TypeScript", "Tailwind"],
      link: "https://github.com/DevAnnafi/Echelon",
    },
    {
      title: "AI Job Market Analyzer",
      category: "Data Science",
      description: "An AI-powered data science project that analyzes real-world job listings to uncover in-demand tech skills, salary trends, and career insights using Machine Learning and NLP.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      tags: ["Python", "ML", "NLP"],
      link: "https://github.com/DevAnnafi/AI-Job-Market-Analyzer",
    },
    {
      title: "Security Audit Scanner",
      category: "Cybersecurity",
      description: "A comprehensive Python-based security auditing tool designed to monitor system events, detect vulnerabilities, and generate detailed security reports.",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=600&fit=crop",
      tags: ["Python", "Security", "Automation"],
      link: "https://github.com/DevAnnafi/Security-Audit-Logger-Vulnerability-Scanner",
    },
    {
      title: "Log Aggregation Pipeline",
      category: "DevOps / Security",
      description: "A lightweight Python-based log aggregation and detection pipeline that normalizes logs, applies Sigma-style detection rules, and forwards alerts to Elasticsearch.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
      tags: ["Python", "Elasticsearch", "Kibana"],
      link: "https://github.com/DevAnnafi/Log-Aggregation-Detection-Pipeline",
    },
    {
      title: "Risk Assessment Dashboard",
      category: "GRC",
      description: "A GRC project simulating risk identification, scoring, mitigation and visualization for a hypothetical organization.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      tags: ["Python", "Data Viz", "Risk"],
      link: "https://github.com/DevAnnafi/Risk-Assessment-Dashboard",
    },
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  const scrollToAbout = () => {
    const heroHeight = window.innerHeight;
    window.scrollTo({
      top: heroHeight,
      behavior: 'smooth'
    });
  };

  const scrollToWork = () => {
    const workElement = document.getElementById('work');
    if (workElement) {
      workElement.scrollIntoView({ behavior: "smooth"});
    }
  }
  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased">
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex items-center justify-between"
        style={{
          backgroundColor: scrollY > 50 ? 'rgba(0, 0, 0, 0.8)' : 'transparent',
          backdropFilter: scrollY > 50 ? 'blur(10px)' : 'none',
          transition: 'background-color 0.3s ease'
        }}
      >
        <motion.div 
          className="text-2xl font-bold tracking-tight"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          Annafi<span style={{ color: '#FF6B35' }}>.</span>
        </motion.div>
        
        <div className="flex items-center gap-12 justify-center flex-1">
          <motion.button
            onClick={scrollToAbout}
            className="text-sm tracking-wider text-gray-400 hover:text-white transition-colors bg-transparent border-none cursor-pointer"
            whileHover={{ y: -2 }}
          >
            ABOUT
          </motion.button>
          <motion.a 
            href="#work" 
            className="text-sm tracking-wider text-gray-400 hover:text-white transition-colors"
            whileHover={{ y: -2 }}
          >
            WORK
          </motion.a>
          <motion.a 
            href="#contact" 
            className="text-sm tracking-wider text-gray-400 hover:text-white transition-colors"
            whileHover={{ y: -2 }}
          >
            CONTACT
          </motion.a>
        </div>
        
        <div>
          <motion.button 
            className="px-6 py-2.5 border border-gray-600 rounded-md text-sm tracking-wider hover:bg-white hover:text-black transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            LET'S TALK
          </motion.button>
        </div>
      </motion.nav>

      <div className="min-h-screen flex flex-col items-center justify-center px-8 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto text-center"
        >
          <motion.p 
            variants={itemVariants}
            className="text-xs tracking-widest text-gray-500 mb-12"
          >
            ANNAFI — PORTFOLIO 2025
          </motion.p>

          <motion.h1 
            variants={itemVariants}
            className="text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.95] mb-8 tracking-tight"
            style={{ fontWeight: 700 }}
          >
            <span className="text-white">Software Developer</span>{' '}
            <motion.span 
              className="text-orange-600"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              style={{ color: '#FF6B35' }}
            >
              &
            </motion.span>
            <br />
            <span className="text-white">Security</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-12 font-light"
          >
            Aspiring software developer on a mission to break into Software
            <br />
            and Cybersecurity. Passionate about creating clean, efficient code
            <br />
            and understanding how systems work under the hood.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center gap-6"
          >
            <motion.button
              onClick={scrollToWork}
              className="px-8 py-4 rounded-md font-medium flex items-center gap-2 transition-all duration-300 text-black"
              style={{ backgroundColor: '#FF6B35' }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 107, 53, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              VIEW MY WORK
              <ChevronDown className="w-4 h-4" />
            </motion.button>
            
            <motion.button
              onClick={scrollToAbout}
              className="px-8 py-4 border border-gray-600 rounded-md font-medium hover:bg-white hover:text-black transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ABOUT ME
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToContent}
        >
          <motion.div 
            className="flex flex-col items-center gap-2 text-gray-500"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-xs tracking-widest">SCROLL</span>
            <div className="w-px h-12 bg-gray-700" />
          </motion.div>
        </motion.div>
      </div>

      <div id="about" className="min-h-screen px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.p 
                variants={itemVariants}
                className="text-xs tracking-widest mb-8"
                style={{ color: '#FF6B35' }}
              >
                ABOUT ME
              </motion.p>

              <motion.h2 
                variants={itemVariants}
                className="text-5xl md:text-6xl font-bold leading-tight mb-8"
              >
                Building secure
                <br />
                <span style={{ color: '#FF6B35' }}>solutions</span> one line at a
                <br />
                time
              </motion.h2>

              <motion.p 
                variants={itemVariants}
                className="text-gray-400 text-lg leading-relaxed mb-8"
              >
                I'm an aspiring software developer passionate about Software
                Development and Cybersecurity. I'm currently learning and
                building projects with Python, C++, JavaScript (Node.js, React), and
                tools like Git, Docker, and SQL.
              </motion.p>

              <motion.p 
                variants={itemVariants}
                className="text-gray-400 text-lg leading-relaxed mb-12"
              >
                Outside of coding, I enjoy exploring tech trends, playing video
                games, and sharing my journey through content — because
                learning out loud makes it stick better!
              </motion.p>

              <motion.div 
                variants={containerVariants}
                className="grid grid-cols-3 gap-8"
              >
                {[
                  { number: '6+', label: 'Projects Built' },
                  { number: '4+', label: 'Technologies' },
                  { number: '100%', label: 'Passion' },
                ].map((stat, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <motion.div 
                      className="text-4xl md:text-5xl font-bold mb-2"
                      style={{ color: '#FF6B35' }}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800"
            >
              <h3 className="text-2xl font-bold mb-8">Skills & Expertise</h3>

              <div className="space-y-8">
                {[
                  { name: 'Python', percentage: 85 },
                  { name: 'JavaScript / React', percentage: 80 },
                  { name: 'C++', percentage: 70 },
                  { name: 'Git / Docker', percentage: 75 },
                  { name: 'SQL / Databases', percentage: 75 },
                  { name: 'Cybersecurity', percentage: 70 },
                ].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-base">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.percentage}%</span>
                    </div>
                    <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: '#FF6B35' }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ 
                          delay: index * 0.1 + 0.2, 
                          duration: 1,
                          ease: [0.22, 1, 0.36, 1]
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div id="work" className="py-20 px-6 relative" ref={workRef}>
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-4 text-sm uppercase tracking-[0.3em]"
              style={{ color: '#FF6B35' }}
            >
              Selected Work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold"
            >
              Featured Projects
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover:border-orange-600 transition-all group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span 
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{ backgroundColor: '#FF6B35', color: 'black' }}
                    >
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 text-xs rounded border border-zinc-700 text-gray-300 hover:border-orange-600 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block font-medium text-sm"
                    style={{ color: '#FF6B35' }}
                    whileHover={{ x: 5 }}
                  >
                    View Project →
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}