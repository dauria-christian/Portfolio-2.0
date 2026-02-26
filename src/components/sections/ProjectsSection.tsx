"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"; // Assuming shadcn or standard ui button
import TiltCard from "@/components/ui/TiltCard";

const projects = [
  {
    title: "Hyrise Studios WebSite",
    description: "Sito web moderno e performante per l'agenzia creativa Hyrise Studios.",
    tags: ["Web Development", "React", "Design"],
    image: "/placeholder-hyrise.jpg" // Placeholder
  },
  {
    title: "Interfaccia Web (Comune di Monfalcone)",
    description: "Interfaccia utente responsive e accessibile per i servizi web del Comune di Monfalcone.",
    tags: ["UI/UX", "Private Administration", "Frontend"],
    image: "/placeholder-monfalcone.jpg" // Placeholder
  },
  {
    title: "Portfolio Condiviso - CL-Studio",
    description: "Piattaforma collaborativa per mostrare e condividere progetti creativi in team.",
    tags: ["Design", "Web Development", "Collaboration"],
    image: "/placeholder-portfolio.jpg" // Placeholder
  },
  {
    title: "Video per WhiteBoymingro",
    description: "Produzione video editing creativo e motion graphics per contenuti social.",
    tags: ["Video Editing", "YouTube", "Content Creation"],
    image: "/placeholder-video.jpg" // Placeholder
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl font-bold">Lavori Selezionati</h2>
            <button className="text-sm text-gray-400 hover:text-white transition-colors">Vedi Tutto l'Archivio</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
                <TiltCard key={index} className="group cursor-pointer">
                    <div className="aspect-video bg-neutral-900 rounded-xl overflow-hidden mb-6 relative">
                         {/* Image Placeholder */}
                         <div className="absolute inset-0 bg-white/5 flex items-center justify-center text-gray-600">
                            {project.title} Preview
                         </div>
                         <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                            <span className="px-6 py-3 bg-white text-black rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Vedi Case Study</span>
                         </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex gap-2 flex-wrap">
                        {project.tags.map((tag) => (
                            <span key={tag} className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-300">{tag}</span>
                        ))}
                    </div>
                </TiltCard>
            ))}
        </div>
      </div>
    </section>
  );
}
