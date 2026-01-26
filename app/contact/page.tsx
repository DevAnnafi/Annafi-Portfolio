import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function Contact() {

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
          href={"/"}
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-12"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="tracking-wider text-sm uppercase">Return to Base</span>
        </Link>

        <section className="py-24 px-8 relative z-10">
          {/* Header */}
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            {/* LEFT — TEXT */}
            <div>
              <p className="text-cyan-400 text-xs tracking-widest mb-4">
                OPEN CHANNEL
              </p>

              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Let's Build Something That Holds
              </h2>

              <p className="text-slate-400 leading-relaxed mb-6">
                Whether you're looking to collaborate, build a system, or explore an idea,
                I'm open to conversations that value clarity, intent, and execution.
              </p>

              <p className="text-slate-400 leading-relaxed">
                Reach out with a project, question, or opportunity — and let's see where it
                leads.
              </p>
            </div>

            {/* RIGHT — FORM */}
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