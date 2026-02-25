"use client";

import { SectionWrapper } from "../ui/SectionWrapper";
import { TiltCard } from "../ui/TiltCard";
import { motion } from "framer-motion";
import { Code, Server, Smartphone, Cloud } from "lucide-react";

export const AboutSection = () => {
    const services = [
        {
            title: "Sviluppo Frontend",
            icon: <Code className="w-8 h-8 text-blue-500" />,
            description: "Creazione di interfacce web responsive e moderne utilizzando React, Next.js e Tailwind CSS."
        },
        {
            title: "Video Editing",
            icon: <Server className="w-8 h-8 text-purple-500" />, // Using Server icon as placeholder or maybe find a better one if possible, but keeping consistent with imports
            description: "Montaggio video professionale con Adobe Premiere Pro, curando narrazione e ritmo visivo."
        },
        {
            title: "Marketing Digitale",
            icon: <Smartphone className="w-8 h-8 text-green-500" />,
            description: "Studio autonomo di strategie di vendita: follow-up, cross-selling e up-selling."
        },
        {
            title: "Design Interfacce",
            icon: <Cloud className="w-8 h-8 text-orange-500" />,
            description: "Progettazione grafica e prototipazione con Figma, Canva e Adobe Photoshop."
        }
    ];

  return (
    <SectionWrapper id="about" className="relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <TiltCard className="rounded-2xl overflow-hidden aspect-square max-w-md mx-auto relative glass p-2">
                <div className="w-full h-full bg-gray-800 rounded-xl overflow-hidden relative group">
                    {/* Placeholder for Profile Image */}
                    <div className="absolute inset-0 bg-linear-to-br from-blue-600/20 to-purple-600/20 z-10 group-hover:opacity-0 transition-opacity duration-500" />
                    <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
                        alt="Profile" 
                        className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                </div>
            </TiltCard>
          </div>

          <div className="w-full md:w-1/2 space-y-6">
            <motion.h2 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-white to-gray-500"
            >
                Studente. Sviluppatore. Creativo.
            </motion.h2>
            
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg text-gray-400 leading-relaxed"
            >
                Mi chiamo Christian e sono uno studente del quinto anno di informatica presso l'ITT Guglielmo Marconi di Staranzano. Vivo a Monfalcone e coltivo da sempre una forte passione per il mondo digitale.
            </motion.p>

            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-400 leading-relaxed"
            >
                Oltre ad essere un Front-End Web Developer, sono un Video Editor e studio marketing autonomamente (follow-up, cross-selling, up-selling). Ho un passato sportivo nel calcio e in altre discipline, che mi hanno insegnato dedizione e lavoro di squadra.
            </motion.p>
            
            <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                        className="p-4 glass rounded-xl hover:bg-white/5 transition-colors cursor-default"
                        style={{ border: "1px solid rgba(255,255,255,0.05)" }}
                    >
                        <div className="mb-3">{service.icon}</div>
                        <h3 className="font-semibold text-white mb-1">{service.title}</h3>
                        <p className="text-sm text-gray-500">{service.description}</p>
                    </motion.div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
