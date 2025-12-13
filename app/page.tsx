'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function PortfolioHero() {
  const [scrollY, setScrollY] = useState(0);
  const workRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(workRef, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'Echelon',
      category: 'Full Stack',
      description:
        'An AI-powered personal productivity dashboard built with React, TypeScript, and Tailwind.',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      tags: ['React', 'TypeScript', 'Tailwind'],
      link: 'https://github.com/DevAnnafi/Echelon',
    },
    {
      title: 'AI Job Market Analyzer',
      category: 'Data Science',
      description:
        'Analyzes real-world job listings to uncover in-demand tech skills and salary trends.',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      tags: ['Python', 'ML', 'NLP'],
      link: 'https://github.com/DevAnnafi/AI-Job-Market-Analyzer',
    },
    {
      title: 'Security Audit Scanner',
      category: 'Cybersecurity',
      description:
        'Python-based security auditing tool that detects vulnerabilities and generates reports.',
      image:
        'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=600&fit=crop',
      tags: ['Python', 'Security', 'Automation'],
      link: 'https://github.com/DevAnnafi/Security-Audit-Logger-Vulnerability-Scanner',
    },
    {
      title: 'Log Aggregation Pipeline',
      category: 'DevOps / Security',
      description:
        'Log aggregation pipeline with Sigma-style detections and Elasticsearch forwarding.',
      image:
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
      tags: ['Python', 'Elasticsearch', 'Kibana'],
      link: 'https://github.com/DevAnnafi/Log-Aggregation-Detection-Pipeline',
    },
    {
      title: 'Risk Assessment Dashboard',
      category: 'GRC',
      description:
        'Simulated GRC dashboard for risk identification, scoring, and visualization.',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      tags: ['Python', 'Data Viz', 'Risk'],
      link: 'https://github.com/DevAnnafi/Risk-Assessment-Dashboard',
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
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const scrollToContent = () =>
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });

  const scrollToWork = () =>
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });

  const scrollToContact = () =>
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 rounded-full blur-[60px]"
          style={{ background: 'rgba(255,107,53,0.15)' }}
          animate={{ x: [0, 40, 0], y: [0, 60, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-96 h-96 rounded-full blur-[60px]"
          style={{ background: 'rgba(255,107,53,0.1)' }}
          animate={{ x: [0, -40, 0], y: [0, -60, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10">
        {/* NAV */}
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center"
          style={{
            backgroundColor:
              scrollY > 50 ? 'rgba(0,0,0,0.8)' : 'transparent',
            backdropFilter: scrollY > 50 ? 'blur(10px)' : 'none',
          }}
        >
          <div className="text-2xl font-bold">
            Annafi<span className="text-orange-600">.</span>
          </div>

          <div className="flex gap-10 text-sm text-gray-400">
            <button onClick={scrollToContent}>ABOUT</button>
            <button onClick={scrollToWork}>WORK</button>
            <button onClick={scrollToContact}>CONTACT</button>
          </div>

          <button
            onClick={scrollToContact}
            className="border px-6 py-2 rounded-md hover:bg-white hover:text-black transition"
          >
            LET’S TALK
          </button>
        </motion.nav>

        {/* HERO */}
        <section className="min-h-screen flex items-center justify-center px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-6xl"
          >
            <motion.h1
              variants={itemVariants}
              className="text-7xl md:text-9xl font-bold mb-8"
            >
              Software Developer <span className="text-orange-600">&</span>
              <br />
              Security
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-gray-400 max-w-3xl mx-auto mb-12"
            >
              Building secure, performant software with a focus on clean
              architecture and real-world impact.
            </motion.p>

            <motion.button
              variants={itemVariants}
              onClick={scrollToWork}
              className="px-8 py-4 bg-orange-600 text-black font-semibold rounded-md inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              VIEW MY WORK <ChevronDown />
            </motion.button>
          </motion.div>
        </section>

        {/* WORK */}
        <section id="work" ref={workRef} className="py-24 px-8">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
            {projects.map((p) => (
              <motion.a
                key={p.title}
                href={p.link}
                target="_blank"
                whileHover={{ y: -6 }}
                className="bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover:border-orange-600 transition"
              >
                <img src={p.image} alt={p.title} />
                <div className="p-6">
                  <h3 className="text-xl font-bold">{p.title}</h3>
                  <p className="text-gray-400 text-sm mt-2">
                    {p.description}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-24 px-8">
          <div className="max-w-xl mx-auto">
            <form
              action="https://formspree.io/f/myzroeyr"
              method="POST"
              className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 space-y-6"
            >
              <input
                name="name"
                placeholder="Your name"
                className="w-full p-3 bg-zinc-800 rounded"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-3 bg-zinc-800 rounded"
                required
              />
              <textarea
                name="message"
                rows={5}
                placeholder="Message"
                className="w-full p-3 bg-zinc-800 rounded"
                required
              />
              <button className="w-full py-3 bg-orange-600 text-black font-bold rounded">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </section>

        <footer className="border-t border-zinc-800 py-8 text-center text-gray-500 text-sm">
          © 2025 Annafi. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
