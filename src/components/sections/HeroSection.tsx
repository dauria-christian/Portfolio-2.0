"use client";

import { motion } from "framer-motion";
import { ParticlesBackground } from "../3d/ParticlesBackground";
import { ArrowRight, Download, MapPin, Briefcase, Calendar } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { useRef, useState } from "react";

const InteractiveButton = ({ children, primary = false }: { children: React.ReactNode; primary?: boolean }) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current!.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.35;
    const y = (clientY - (top + height / 2)) * 0.35;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`
        relative overflow-hidden px-8 py-4 rounded-full font-medium text-lg tracking-wide transition-all duration-300
        ${primary 
          ? "bg-white text-black hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.7)]" 
          : "bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 hover:border-white/30"
        }
      `}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
};

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 z-1 bg-linear-to-r from-black/80 via-black/40 to-transparent pointer-events-none" />
      
      {/* Content Container */}
      <div className="container relative z-10 mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center h-full">
        
        {/* Left Content */}
        <div className="lg:col-span-7 flex flex-col justify-center pt-20">
          
          {/* Status Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="w-fit mb-6 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-gray-300 font-mono">Disponibile per progetti</span>
          </motion.div>

          {/* Main Title with Gradient */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold tracking-tight mb-2 font-display"
          >
            <span className="text-white">IMPATTO</span>
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-blue-400 to-cyan-400">
              ATTRAVERSO IL CODICE
            </span>
          </motion.h1>

          {/* Typing Effect */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-xl md:text-2xl text-gray-400 mb-8 font-light h-10 flex items-center"
          >
            <span className="mr-2">Sviluppo</span>
            <TypeAnimation
              sequence={[
                'esperienze digitali',
                2000,
                'mondi interattivi',
                2000,
                'app mobile',
                2000,
                'sistemi scalabili',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-white font-medium"
            />
          </motion.div>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="text-lg text-gray-400 max-w-xl mb-10 leading-relaxed"
          >
            Tutti mi dicono che faccio troppe cose rispetto a quello che è effettivamente il mio tempo libero.
            Non mi definisco in un singolo ruolo, sono capace di adattarmi e svolgere più mansioni.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="flex flex-wrap gap-4"
          >
            <InteractiveButton primary>
              Vedi Progetti <ArrowRight size={20} />
            </InteractiveButton>
            
            <InteractiveButton>
              Scarica CV <Download size={20} />
            </InteractiveButton>
          </motion.div>
        
        </div>

        {/* Right Content - Glass Card Info */}
        <div className="lg:col-span-5 hidden lg:flex justify-end items-center">
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.6, duration: 1 }}
                className="w-80 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl skew-y-0 hover:skew-y-1 transition-transform duration-500 ease-out"
            >
                <div className="flex items-center gap-4 mb-6 border-b border-white/10 pb-6">
                    <div className="w-16 h-16 rounded-full bg-linear-to-tr from-purple-500 to-blue-500 p-0.5">
                         <div className="w-full h-full rounded-full bg-black overflow-hidden relative">
                             {/* Placeholder for Profile Img */}
                             <div className="absolute inset-0 flex items-center justify-center text-xs text-gray-500">IMG</div>
                         </div>
                    </div>
                    <div>
                        <h3 className="font-bold text-white">Sviluppatore Full Stack</h3>
                        <p className="text-sm text-gray-400">@AziendaAttuale</p>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="flex items-center gap-3 text-sm text-gray-300">
                        <MapPin size={18} className="text-blue-400" />
                        <span>Remoto / Globale</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-300">
                        <Briefcase size={18} className="text-purple-400" />
                        <span>5+ Anni di Esperienza</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-300">
                        <Calendar size={18} className="text-cyan-400" />
                        <span>Disponibile Feb 2026</span>
                    </div>
                </div>
            </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500">Scorri</span>
        <div className="w-px h-12 bg-linear-to-b from-gray-500 to-transparent"></div>
      </motion.div>
    </section>
  );
}
