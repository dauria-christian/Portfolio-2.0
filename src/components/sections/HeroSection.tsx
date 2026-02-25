"use client";

import { motion } from "framer-motion";
import { ParticlesBackground } from "../3d/ParticlesBackground";
import { ArrowRight, Download, MapPin, Briefcase, Calendar, Linkedin, Github, Instagram, Youtube, Twitch, Send } from "lucide-react";
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
      {/* Background (Gradient or Video) */}
      <div className="absolute inset-0 z-0">
          {/* Default Gradient Background */}
          <div className="absolute inset-0 bg-linear-to-br from-indigo-900 via-black to-purple-900 opacity-50" />
          
          {/* Video Placeholder (Commented out until video is available) */}
          {/* 
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover opacity-30"
          >
            <source src="/path-to-your-video.mp4" type="video/mp4" />
          </video> 
          */}
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 z-1 bg-linear-to-r from-black/80 via-black/40 to-transparent pointer-events-none" />
      
      {/* Content Container */}
      <div className="container relative z-10 mx-auto px-6 h-full flex flex-col justify-center">
        
        {/* Main Content */}
        <div className="flex flex-col justify-center items-start text-left pt-20 max-w-4xl">
          
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
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-4 font-display leading-[0.9]"
          >
            <span className="text-white">CHRISTIAN</span>
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-blue-400 to-cyan-400">
              D'AURIA
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mb-8 leading-relaxed font-light"
          >
            Tutti mi dicono che faccio troppe cose rispetto a quello che è effettivamente il mio tempo libero.
            Non mi definisco in un singolo ruolo, sono capace di adattarmi e svolgere più mansioni.
          </motion.p>
          
          {/* Info Items */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="flex flex-wrap items-center gap-6 mb-10 text-gray-400 text-sm md:text-base font-medium"
          >
             <div className="flex items-center gap-2 hover:text-white transition-colors">
                <MapPin size={18} className="text-purple-400" />
                <span>Monfalcone, Italia</span>
             </div>
             <div className="flex items-center gap-2 hover:text-white transition-colors">
                <Briefcase size={18} className="text-blue-400" />
                <span>Content Creator</span>
             </div>
             <div className="flex items-center gap-2 hover:text-white transition-colors">
                <Briefcase size={18} className="text-blue-400" />
                <span>Front-End Web Developer</span>
             </div>
             <div className="flex items-center gap-2 hover:text-white transition-colors">
                <Calendar size={18} className="text-cyan-400" />
                <span>Disponibile</span>
             </div>
          </motion.div>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-wrap gap-4 justify-start">
              <InteractiveButton primary>
                Vedi Progetti <ArrowRight size={20} />
              </InteractiveButton>
              
              <InteractiveButton>
                Scarica CV <Download size={20} />
              </InteractiveButton>
            </div>

            <div className="flex gap-6 items-center">
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors transform hover:scale-110"><Instagram size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"><Github size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors transform hover:scale-110"><Linkedin size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors transform hover:scale-110"><Youtube size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors transform hover:scale-110"><Twitch size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110"><Send size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors transform hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-music"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
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
