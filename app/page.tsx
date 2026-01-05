"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Instagram } from "lucide-react";
import type { Variants } from "framer-motion";

/* ---------------------------------------------
   Typing Line (HUD-style)
--------------------------------------------- */
function TypingLine() {
  const text = "Hey, it’s Annafi.";
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, index + 1));
      index++;
      if (index === text.length) clearInterval(interval);
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-cyan-400 font-mono tracking-widest text-lg md:text-xl mb-6">
      {displayed}
      <span className="animate-pulse">▍</span>
    </div>
  );
}

/* ---------------------------------------------
   Ballistic Text (Bullet-style animation)
--------------------------------------------- */
function BallisticText({ text }: { text: string }) {
  const letters = text.split("");

  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

  const letter: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
      filter: "blur(6px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 600,
        damping: 30,
        mass: 0.8,
      },
    },
  };

  return (
    <motion.span variants={container} className="inline-block">
      {letters.map((char, i) => (
        <motion.span
          key={i}
          variants={letter}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

function HudHighlight({ children }: { children: React.ReactNode }) {
  return (
    <motion.span
      initial={{ opacity: 0.7 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative inline-block font-bold text-slate-100"
    >
      {/* Animated scanline */}
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute left-0 bottom-0 h-[2px] w-full bg-cyan-400 origin-left"
      />

      {/* Glow flash */}
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.25 }}
        className="absolute inset-0 bg-cyan-400/20 blur-md -z-10"
      />

      {children}
    </motion.span>
  );
}

/* ---------------------------------------------
   Main Page
--------------------------------------------- */
export default function PortfolioHero() {
  const [scrollY, setScrollY] = useState(0);
  const workRef = useRef<HTMLDivElement | null>(null);

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

  const scrollToAbout = () =>
    document.getElementById("about")?.scrollIntoView({behavior: "smooth"});

  return (
    <div className="min-h-screen bg-black text-slate-100 overflow-hidden">
      {/* HUD Grid Background */}
    <div className="fixed inset-0 pointer-events-none z-0">
      <div className="absolute inset-0 bg-[linear-gradient(...)]" />
    </div>

    {/* HALO RING SURFACE (WRAP-AROUND) */}
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Ring curvature */}
      <div
        className="
          absolute
          left-1/2
          top-[-1400px]
          -translate-x-1/2
          w-[4200px]
          h-[4200px]
          rounded-full
          bg-[radial-gradient(ellipse_at_center,_rgba(56,189,248,0.18)_0%,_rgba(56,189,248,0.10)_22%,_rgba(0,0,0,0.92)_55%)]
        "
      />

      {/* Ring edge highlights (left + right falloff) */}
      <div
        className="
          absolute
          left-1/2
          top-[-1400px]
          -translate-x-1/2
          w-[4200px]
          h-[4200px]
          rounded-full
          border
          border-cyan-400/20
          blur-[1px]
        "
      />

      {/* Atmospheric glow */}
      <div
        className="
          absolute
          left-1/2
          top-[-1400px]
          -translate-x-1/2
          w-[5200px]
          h-[5200px]
          rounded-full
          bg-cyan-400/5
          blur-[220px]
        "
      />
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
          <button onClick={scrollToWork} className="hover:text-cyan-400 transition">
            OPERATIONS
          </button>
          <button onClick={scrollToAbout} className="hover:text-cyan-400 transition">
            ABOUT
          </button>
          <button onClick={scrollToContact} className="hover:text-cyan-400 transition">
            CONTACT
          </button>
        </div>

        <div className="hidden md:flex items-center gap-5 text-slate-400">
          <a href="https://github.com/DevAnnafi" target="_blank" className="hover:text-cyan-400 transition">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/annafi-islam" target="_blank" className="hover:text-cyan-400 transition">
            <Linkedin size={18} />
          </a>
          <a href="https://www.instagram.com/axnafi" target="_blank" className="hover:text-cyan-400 transition">
            <Instagram size={18} />
          </a>
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
          <motion.p variants={itemVariants} className="text-cyan-400 tracking-widest text-sm mb-4">
            SOFTWARE ENGINEER · CYBERSECURITY
          </motion.p>

          <TypingLine />

          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-tight">
            <BallisticText text="BUILDING SYSTEMS" />
            <br />
            <BallisticText text="THAT HOLD" />
          </h1>

          <motion.p variants={itemVariants} className="text-slate-400 max-w-3xl mx-auto mb-12">
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

      {/* ABOUT */}
      <section id="about" className="py-32 px-8 relative z-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      
      {/* LEFT — TEXT */}
      <div>
        <p className="text-cyan-400 text-xs tracking-widest mb-4">
          PERSONNEL FILE
        </p>

        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          <HudHighlight>About the Operator</HudHighlight>
        </h2>


        <p className="text-slate-400 leading-relaxed mb-6">
          I’m a software engineer with a strong focus on security, systems design,
          and reliability under real-world constraints. I approach engineering the
          same way mission-critical systems are built — with clarity, discipline,
          and intent.
        </p>

        <p className="text-slate-400 leading-relaxed mb-8">
          My work spans full-stack development, cybersecurity tooling, and data-driven
          systems. I prioritize clean architecture, measurable impact, and designs
          that hold up under pressure — not just in ideal conditions.
        </p>

        {/* STATS */}
        <div className="grid grid-cols-2 gap-6 text-sm">
          <div className="border border-zinc-800 p-4">
            <p className="text-cyan-400 tracking-widest text-xs mb-1">
              SPECIALIZATION
            </p>
            <p className="text-slate-200">
              Secure Software Systems
            </p>
          </div>

          <div className="border border-zinc-800 p-4">
            <p className="text-cyan-400 tracking-widest text-xs mb-1">
              FOCUS AREAS
            </p>
            <p className="text-slate-200">
              Full Stack · Security · Systems
            </p>
          </div>

          <div className="border border-zinc-800 p-4">
            <p className="text-cyan-400 tracking-widest text-xs mb-1">
              STACK
            </p>
            <p className="text-slate-200">
              React · TypeScript · Python
            </p>
          </div>

          <div className="border border-zinc-800 p-4">
            <p className="text-cyan-400 tracking-widest text-xs mb-1">
              STATUS
            </p>
            <p className="text-green-400">
              ACTIVE · AVAILABLE
            </p>
          </div>
        </div>
      </div>

    {/* RIGHT — VISUAL / HUD BLOCK */}
    <div className="border border-zinc-800 bg-black p-8 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />

      <p className="text-xs tracking-widest text-cyan-400 mb-4">
        SYSTEM PROFILE
      </p>

      <ul className="space-y-4 text-sm text-slate-400">
        <li className="flex justify-between">
          <span>Threat Modeling</span>
          <span className="text-slate-200">✓</span>
        </li>
        <li className="flex justify-between">
          <span>Secure Architecture</span>
          <span className="text-slate-200">✓</span>
        </li>
        <li className="flex justify-between">
          <span>Data Integrity</span>
          <span className="text-slate-200">✓</span>
        </li>
        <li className="flex justify-between">
          <span>Performance Optimization</span>
          <span className="text-slate-200">✓</span>
        </li>
        <li className="flex justify-between">
          <span>Operational Reliability</span>
          <span className="text-slate-200">✓</span>
        </li>
      </ul>

      <div className="mt-8 pt-4 border-t border-zinc-800 text-xs tracking-widest text-slate-500">
        PROFILE INTEGRITY: VERIFIED
      </div>
    </div>

  </div>
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
            className="
              group
              relative
              bg-zinc-900
              overflow-hidden
              transition
            "
          >
            {/* GOLD ENERGY SHIELD */}
            <div
              className="
                pointer-events-none
                absolute
                inset-0
                rounded-lg
                border
                border-amber-400/0
                group-hover:border-amber-400/70
                transition-colors
                duration-300
                group-hover:shadow-[0_0_25px_rgba(251,191,36,0.35)]
              "
            />
          
            {/* FORERUNNER STRUCTURAL RING */}
            <div
              className="
                pointer-events-none
                absolute
                -inset-[2px]
                rounded-lg
                border
                border-amber-300/0
                group-hover:border-amber-300/40
                transition-colors
                duration-300
              "
            />
          
            {/* CARD CONTENT */}
            <img src={p.image} alt={p.title} />
          
            <div className="p-6 relative z-10">
              <p className="text-xs tracking-widest text-cyan-400 mb-2">
                {p.category}
              </p>
              <h3 className="text-xl font-semibold">
                {p.title}
              </h3>
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
            <input name="name" placeholder="NAME" className="w-full p-3 bg-black border border-zinc-700 text-sm tracking-widest" required />
            <input type="email" name="email" placeholder="EMAIL" className="w-full p-3 bg-black border border-zinc-700 text-sm tracking-widest" required />
            <textarea name="message" rows={5} placeholder="MESSAGE" className="w-full p-3 bg-black border border-zinc-700 text-sm tracking-widest" required />
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
