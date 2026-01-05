"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { Variants } from "framer-motion";

export default function PortfolioHero() {
  const [scrollY, setScrollY] = useState(0);
  const workRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(workRef, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Echelon",
      category: "SYSTEMS",
      description:
        "AI-powered productivity system designed with clean architecture and real-world workflows.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      link: "https://github.com/DevAnnafi/Echelon",
    },
    {
      title: "AI Job Market Analyzer",
      category: "INTELLIGENCE",
      description:
        "Data-driven analysis of job markets to surface in-demand skills and compensation trends.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      link: "https://github.com/DevAnnafi/AI-Job-Market-Analyzer",
    },
    {
      title: "Security Audit Scanner",
      category: "SECURITY",
      description:
        "Automated vulnerability detection and reporting system built for security workflows.",
      image:
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=600&fit=crop",
      link: "https://github.com/DevAnnafi/Security-Audit-Logger-Vulnerability-Scanner",
    },
    {
      title: "Log Aggregation Pipeline",
      category: "INFRASTRUCTURE",
      description:
        "Centralized logging pipeline with detection logic and Elasticsearch forwarding.",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
      link: "https://github.com/DevAnnafi/Log-Aggregation-Detection-Pipeline",
    },
    {
      title: "Risk Assessment Dashboard",
      category: "GRC",
      description:
        "Simulated risk evaluation system for scoring, mitigation, and visualization.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      link: "https://github.com/DevAnnafi/Risk-Assessment-Dashboard",
    },
  ];

  function TypingLine() {
    const text = "Hey, it’s Annafi.";
    const [displayed, setDisplayed] = useState("");
  
    useEffect(() => {
      let index = 0;
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, index + 1));
        index++;
  
        if (index === text.length) {
          clearInterval(interval);
        }
      }, 80);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="text-cyan-400 font-mono tracking-widest text-2xl mb-6">
        {displayed}
        <span className="animate-pulse">▍</span>
      </div>
    );
  }
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const scrollToWork = () =>
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });

  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="min-h-screen bg-black text-slate-100 overflow-hidden">
      {/* HUD Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* NAV */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 px-8 py-5 flex justify-between items-center backdrop-blur"
        style={{
          backgroundColor:
            scrollY > 50 ? "rgba(0,0,0,0.85)" : "transparent",
        }}
      >
        <div className="text-lg font-semibold tracking-widest text-cyan-400">
          ANNAFI
        </div>

        <div className="flex gap-10 text-xs tracking-widest text-slate-400">
          <button onClick={scrollToWork}>OPERATIONS</button>
          <button onClick={scrollToContact}>CONTACT</button>
        </div>

        <button
          onClick={scrollToContact}
          className="border border-cyan-500 px-5 py-2 text-xs tracking-widest hover:bg-cyan-500 hover:text-black transition"
        >
          OPEN CHANNEL
        </button>
      </motion.nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-6xl"
        >
          <motion.p
            variants={itemVariants}
            className="text-cyan-400 tracking-widest text-sm mb-6"
          >
            SOFTWARE ENGINEER · CYBERSECURITY
          </motion.p>

          <TypingLine />

          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-8xl font-bold tracking-tight mb-8"
          >
            BUILDING SYSTEMS
            <br />
            THAT HOLD
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-slate-400 max-w-3xl mx-auto mb-12"
          >
            I design and engineer secure, resilient software systems with
            real-world constraints and mission-critical reliability.
          </motion.p>

          <motion.button
            variants={itemVariants}
            onClick={scrollToWork}
            className="px-8 py-4 bg-cyan-500 text-black font-semibold tracking-widest inline-flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            VIEW OPERATIONS <ChevronDown />
          </motion.button>
        </motion.div>
      </section>

      {/* WORK */}
      <section id="work" ref={workRef} className="py-24 px-8 relative z-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              whileHover={{ y: -6 }}
              className="bg-zinc-900 border border-zinc-800 hover:border-cyan-500 transition overflow-hidden"
            >
              <img src={p.image} alt={p.title} />
              <div className="p-6">
                <p className="text-xs tracking-widest text-cyan-400 mb-2">
                  {p.category}
                </p>
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="text-slate-400 text-sm mt-3">
                  {p.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-8 relative z-10">
        <div className="max-w-xl mx-auto">
          <form
            action="https://formspree.io/f/myzroeyr"
            method="POST"
            className="bg-zinc-900 border border-zinc-800 p-8 space-y-6"
          >
            <input
              name="name"
              placeholder="NAME"
              className="w-full p-3 bg-black border border-zinc-700 text-sm tracking-widest"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="EMAIL"
              className="w-full p-3 bg-black border border-zinc-700 text-sm tracking-widest"
              required
            />
            <textarea
              name="message"
              rows={5}
              placeholder="MESSAGE"
              className="w-full p-3 bg-black border border-zinc-700 text-sm tracking-widest"
              required
            />
            <button className="w-full py-3 bg-cyan-500 text-black font-semibold tracking-widest">
              TRANSMIT
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-zinc-800 py-6 text-center text-xs tracking-widest text-slate-500">
        SYSTEM STATUS: OPERATIONAL · © 2025 ANNAFI
      </footer>
    </div>
  );
}
