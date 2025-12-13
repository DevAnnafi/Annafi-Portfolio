'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function PortfolioHero() {
  const [scrollY, setScrollY] = useState(0);

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

  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased">
      {/* Navigation */}
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
        
        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-12">
          <motion.a 
            href="#about" 
            className="text-sm tracking-wider text-gray-400 hover:text-white transition-colors"
            whileHover={{ y: -2 }}
          >
            ABOUT
          </motion.a>
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

        <motion.button 
          className="px-6 py-2.5 border border-gray-600 rounded-md text-sm tracking-wider hover:bg-white hover:text-black transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          LET'S TALK
        </motion.button>
      </motion.nav>

      {/* Hero Section */}
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
              className="px-8 py-4 rounded-md font-medium flex items-center gap-2 transition-all duration-300 text-black"
              style={{ backgroundColor: '#FF6B35' }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 107, 53, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              VIEW MY WORK
              <ChevronDown className="w-4 h-4" />
            </motion.button>
            
            <motion.button
              className="px-8 py-4 border border-gray-600 rounded-md font-medium hover:bg-white hover:text-black transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ABOUT ME
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
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

      {/* Demo Content Section */}
      <div className="min-h-screen flex items-center justify-center px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-4">Your content continues here</h2>
          <p className="text-gray-400">Scroll to see the animation effects</p>
        </motion.div>
      </div>
    </div>
  );
}