"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

export default function FeaturedProject() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <section ref={containerRef} className="py-32 relative bg-black/95 overflow-x-hidden">
      <div className="container mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="mb-16"
        >
          <span className="text-amber-300 font-mono text-sm tracking-wider uppercase">In Evidenza</span>
          <h2 className="text-4xl md:text-6xl font-bold leading-[1.18] py-[0.08em] mt-2 text-white">Lavoro in Primo Piano</h2>
        </motion.div>

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Project Image using Parallax */}
            <motion.div 
              style={{ y, scale }}
              className="relative aspect-4/3 rounded-2xl overflow-hidden border border-white/10 group"
            >
               <div className="absolute inset-0 bg-neutral-900 animate-pulse flex items-center justify-center text-gray-700">
                  {/* Placeholder for project image */}
                  <span className="text-2xl font-bold opacity-20">ANTEPRIMA PROGETTO</span>
               </div>
               {/* 
               <Image 
                 src="/project-1.jpg" 
                 alt="Featured Project" 
                 fill 
                 className="object-cover transition-transform duration-700 group-hover:scale-105"
               /> 
               */}
               <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60" />
            </motion.div>

            {/* Project Details */}
            <div className="relative z-10">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  <h3 className="text-3xl md:text-5xl font-bold leading-[1.18] py-[0.08em] text-white mb-6">Dashboard Nexus Finance</h3>
                  <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    Una piattaforma fintech di nuova generazione che visualizza flussi di dati complessi in tempo reale. 
                    Costruita con WebSockets per aggiornamenti live e WebGL per immense capacità di rendering dei dati.
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-10">
                    {["React", "Three.js", "Node.js", "Redis", "TypeScript"].map((tag) => (
                      <span key={tag} className="px-4 py-2 rounded-full border border-white/10 text-sm text-gray-300 bg-white/5 backdrop-blur-sm">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-6">
                    <button className="flex items-center gap-2 text-white border-b border-amber-400 pb-1 hover:text-amber-300 transition-colors">
                      <ExternalLink size={20} /> Demo Live
                    </button>
                    <button className="flex items-center gap-2 text-white border-b border-white/30 pb-1 hover:text-cyan-300 transition-colors">
                      <Github size={20} /> Codice Sorgente
                    </button>
                  </div>
                </motion.div>
            </div>
        </div>
      </div>
    </section>
  );
}
