"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"; // Assuming shadcn or standard ui button
import TiltCard from "@/components/ui/TiltCard";
import Image from "next/image";
import { useState } from "react";

const allProjects = [
  {
    title: "48H a MILANO con MINGRO",
    description: "Secondo video editato per la crescita del canale YouTubed di Whiteboymingro.",
    tags: ["Video Editing", "YouTube", "Motion Graphics"],
    image: "/images/copertina_milano.png"
  },
  {
    title: "Portfolio Condiviso - CL-Studio",
    description: "Piattaforma collaborativa per mostrare e condividere progetti creativi in team.",
    tags: ["Design", "Web Development", "Collaboration"],
    image: "/images/condiviso.png"
  },
  {
    title: "Interfaccia Web (Comune di Monfalcone)",
    description: "Interfaccia utente responsive e accessibile per i servizi web del Comune di Monfalcone.",
    tags: ["UI/UX", "Private Administration", "Frontend"],
    image: "/images/comune1.png"
  },
  {
    title: "Video per WhiteBoymingro",
    description: "Primo video editato per la crescita del canale YouTubed di Whiteboymingro.",
    tags: ["Video Editing", "YouTube", "Content Creation"],
    image: "/images/copertina_mingro_vlog_1.png"
  }
];

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? allProjects : allProjects.slice(0, 2);

  return (
    <section id="projects" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-4xl font-bold leading-[1.2] py-[0.08em]">Lavori Selezionati</h2>
            <button 
              onClick={() => setShowAll(!showAll)}
              className="text-sm text-gray-400 hover:text-amber-300 transition-colors"
            >
              {showAll ? "Mostra Meno" : "Vedi Tutto l'Archivio"}
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {displayedProjects.map((project, index) => (
                <TiltCard key={index} className="group cursor-pointer">
                    <div className="aspect-video bg-neutral-900 rounded-xl overflow-hidden mb-6 relative">
                         <Image
                           src={project.image}
                           alt={project.title}
                           fill
                           className="object-cover group-hover:scale-102 transition-transform duration-300"
                           priority={index < 2}
                         />
                         <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-50 transition-opacity duration-300 flex items-center justify-center">
                             <span className="px-6 py-3 bg-amber-400 text-black rounded-full font-bold group-hover:bg-amber-300 transition-colors duration-300">Scopri</span>
                         </div>
                    </div>
                    <h3 className="text-2xl font-bold leading-[1.2] py-[0.04em] text-white mb-2">{project.title}</h3>
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
