'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Contact() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const cursorFollowerRef = useRef<HTMLDivElement | null>(null);

  // Custom cursor tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }
      
      if (cursorFollowerRef.current) {
        setTimeout(() => {
          if (cursorFollowerRef.current) {
            cursorFollowerRef.current.style.left = e.clientX + 'px';
            cursorFollowerRef.current.style.top = e.clientY + 'px';
          }
        }, 100);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const formData = new FormData(target);
    
    try {
      await fetch('https://formspree.io/f/myzroeyr', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });
      
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        target.reset();
      }, 4000);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a1628] relative overflow-hidden">
      {/* Custom Cursors */}
      <div
        ref={cursorRef}
        className="hidden md:block fixed w-5 h-5 border-2 border-cyan-400 rounded-full pointer-events-none z-[9999] mix-blend-difference transition-all duration-100"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      <div
        ref={cursorFollowerRef}
        className="hidden md:block fixed w-10 h-10 border border-cyan-400/30 rounded-full pointer-events-none z-[9998] transition-all duration-300"
        style={{ transform: 'translate(-50%, -50%)' }}
      />

      {/* Original Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=1920&q=80')`,
        }}
      />

      {/* Animated Grid overlay */}
      <div 
        className="absolute inset-0 opacity-5 animate-pulse"
        style={{
          backgroundImage: 'linear-gradient(rgba(79, 209, 217, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(79, 209, 217, 0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          animation: 'gridFlow 20s linear infinite'
        }} 
      />

      {/* Floating Particles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-cyan-400 opacity-10 pointer-events-none"
          style={{
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${Math.random() * 10 + 15}s ease-in-out ${Math.random() * 5}s infinite`
          }}
        />
      ))}

      {/* Rotating Decorative Circles */}
      <div className="absolute -top-48 -left-48 w-96 h-96 border border-cyan-400/10 rounded-full animate-spin-slow" />
      <div className="absolute -bottom-32 -right-32 w-80 h-80 border border-cyan-400/10 rounded-full animate-spin-slow-reverse" />

      <div className="relative z-10 min-h-screen p-8 md:p-16 lg:p-24">
        {/* Back Button with Animation */}
        <Link 
          href={"/"}
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-all duration-300 mb-12 group animate-fadeInDown"
        >
          <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          <span className="tracking-wider text-sm uppercase">Return to Base</span>
        </Link>

        <section className="py-24 px-8 relative z-10">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            {/* LEFT — TEXT */}
            <div className="space-y-6">
              {/* Badge with Glow */}
              <div className="inline-block animate-fadeInLeft">
                <p className="text-cyan-400 text-xs tracking-widest px-4 py-2 border border-cyan-400/30 rounded-full bg-cyan-400/5 animate-glow">
                  OPEN CHANNEL
                </p>
              </div>

              {/* Title with Gradient */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent animate-fadeInLeft animation-delay-200">
                Let's Build Something That Holds
              </h2>

              <p className="text-slate-400 leading-relaxed text-lg animate-fadeInLeft animation-delay-400">
                Whether you're looking to collaborate, build a system, or explore an idea,
                I'm open to conversations that value clarity, intent, and execution.
              </p>

              <p className="text-slate-400 leading-relaxed animate-fadeInLeft animation-delay-600">
                Reach out with a project, question, or opportunity — and let's see where it
                leads.
              </p>

              {/* Decorative Line */}
              <div className="w-24 h-px bg-gradient-to-r from-cyan-400 to-transparent animate-fadeInLeft animation-delay-800" />
            </div>

            {/* RIGHT — FORM */}
            <div className="relative animate-fadeInRight animation-delay-400">
              {/* Glow Effect Behind Form */}
              <div className="absolute inset-0 bg-cyan-400/5 blur-3xl rounded-lg" />
              
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="relative bg-zinc-900/80 backdrop-blur-xl border border-zinc-700/50 p-8 space-y-6 transition-all duration-500 hover:border-cyan-400/30 hover:shadow-2xl hover:shadow-cyan-400/10"
              >
                {/* Shimmer Effect */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-shimmer" />

                {!isSubmitted ? (
                  <>
                    <div className="group">
                      <input
                        name="name"
                        placeholder="NAME"
                        className="w-full p-4 bg-black/60 border border-zinc-700 text-sm tracking-widest transition-all duration-300 focus:border-cyan-400 focus:bg-black focus:shadow-lg focus:shadow-cyan-400/20 focus:-translate-y-0.5 outline-none"
                        required
                      />
                      <div className="h-0.5 w-0 bg-cyan-400 transition-all duration-300 group-focus-within:w-full" />
                    </div>

                    <div className="group">
                      <input
                        type="email"
                        name="email"
                        placeholder="EMAIL"
                        className="w-full p-4 bg-black/60 border border-zinc-700 text-sm tracking-widest transition-all duration-300 focus:border-cyan-400 focus:bg-black focus:shadow-lg focus:shadow-cyan-400/20 focus:-translate-y-0.5 outline-none"
                        required
                      />
                      <div className="h-0.5 w-0 bg-cyan-400 transition-all duration-300 group-focus-within:w-full" />
                    </div>

                    <div className="group">
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="MESSAGE"
                        className="w-full p-4 bg-black/60 border border-zinc-700 text-sm tracking-widest resize-none transition-all duration-300 focus:border-cyan-400 focus:bg-black focus:shadow-lg focus:shadow-cyan-400/20 focus:-translate-y-0.5 outline-none"
                        required
                      />
                      <div className="h-0.5 w-0 bg-cyan-400 transition-all duration-300 group-focus-within:w-full" />
                    </div>

                    <button 
                      type="submit"
                      className="relative w-full py-4 bg-cyan-500 text-black font-semibold tracking-widest overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-400/40"
                    >
                      <span className="relative z-10">TRANSMIT</span>
                      <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-white/10 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" style={{ transformOrigin: '50% 50%' }} />
                    </button>
                  </>
                ) : (
                  <div className="text-center py-12 space-y-4 animate-successPulse">
                    <div className="w-20 h-20 bg-cyan-400 rounded-full mx-auto flex items-center justify-center text-4xl animate-successBounce">
                      ✓
                    </div>
                    <h3 className="text-2xl font-bold text-cyan-400">Message Received!</h3>
                    <p className="text-slate-400">I'll get back to you soon.</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </div>

      {/* Original Vignette */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(10, 22, 40, 0.8) 100%)'
        }}
      />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(100px, -100px) scale(1.5); }
          50% { transform: translate(-50px, -200px) scale(0.8); }
          75% { transform: translate(150px, -50px) scale(1.2); }
        }

        @keyframes gridFlow {
          from { background-position: 0 0; }
          to { background-position: 50px 50px; }
        }

        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }

        .animate-spin-slow-reverse {
          animation: spin 15s linear infinite reverse;
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInDown {
          animation: fadeInDown 0.8s ease-out;
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeInLeft {
          animation: fadeInLeft 0.8s ease-out;
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
          animation-fill-mode: both;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
          animation-fill-mode: both;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
          animation-fill-mode: both;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
          animation-fill-mode: both;
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 10px rgba(79, 209, 217, 0.3); }
          50% { box-shadow: 0 0 30px rgba(79, 209, 217, 0.6); }
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }

        @keyframes shimmer {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }

        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }

        @keyframes successPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .animate-successPulse {
          animation: successPulse 0.6s ease;
        }

        @keyframes successBounce {
          0% { transform: scale(0) rotate(0deg); }
          50% { transform: scale(1.2) rotate(180deg); }
          100% { transform: scale(1) rotate(360deg); }
        }

        .animate-successBounce {
          animation: successBounce 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        /* Hide default cursor on desktop */
        @media (min-width: 768px) {
          * {
            cursor: none !important;
          }
        }
      `}</style>
    </div>
  );
}