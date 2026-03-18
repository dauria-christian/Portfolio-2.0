"use client";

import { motion } from "framer-motion";
import { 
  Lightbulb, 
  Users, 
  MessageCircle, 
  Clock, 
  Target, 
  Puzzle,
  BrainCircuit,
  Zap 
} from "lucide-react";

const softSkills = [
  { 
    name: "Problem Solving",
    icon: <Puzzle size={32} />,
    description: "Approccio analitico e creativo per superare ostacoli tecnici e logici complessi.",
    color: "text-cyan-300 border-cyan-300/25 hover:bg-cyan-300/10"
  },
  { 
    name: "Comunicazione",
    icon: <MessageCircle size={32} />,
    description: "Capacità di tradurre concetti tecnici in linguaggio comprensibile per team e clienti.",
    color: "text-amber-300 border-amber-300/25 hover:bg-amber-300/10"
  },
  { 
    name: "Lavoro di Squadra",
    icon: <Users size={32} />,
    description: "Collaborazione efficace in ambienti agili, valorizzando le idee di ogni membro.",
    color: "text-cyan-300 border-cyan-300/25 hover:bg-cyan-300/10"
  },
  { 
    name: "Gestione del Tempo",
    icon: <Clock size={32} />,
    description: "Organizzazione efficiente delle priorità per rispettare le scadenze senza sacrificare la qualità.",
    color: "text-amber-300 border-amber-300/25 hover:bg-amber-300/10"
  },
  { 
    name: "Adattabilità",
    icon: <Zap size={32} />,
    description: "Flessibilità nell'apprendere nuove tecnologie e adattarsi a cambiamenti rapidi.",
    color: "text-cyan-300 border-cyan-300/25 hover:bg-cyan-300/10"
  },
  { 
    name: "Pensiero Creativo",
    icon: <Lightbulb size={32} />,
    description: "Ricerca costante di soluzioni innovative fuori dagli schemi convenzionali.",
    color: "text-amber-300 border-amber-300/25 hover:bg-amber-300/10"
  },
  { 
    name: "Orientamento all'Obiettivo",
    icon: <Target size={32} />,
    description: "Focus costante sul raggiungimento dei risultati concordati e sulla soddisfazione del cliente.",
    color: "text-cyan-300 border-cyan-300/25 hover:bg-cyan-300/10"
  },
  { 
    name: "Apprendimento Continuo",
    icon: <BrainCircuit size={32} />,
    description: "Curiosità insaziabile e dedizione costante all'aggiornamento professionale.",
    color: "text-amber-300 border-amber-300/25 hover:bg-amber-300/10"
  }
];

export default function SoftSkillsSection() {
  return (
    <section className="py-24 bg-black relative">
       {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-cyan-900/20 rounded-full blur-[120px] pointer-events-none" />
       
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-block text-4xl md:text-5xl font-bold leading-[1.2] py-4 px-3 bg-clip-text text-transparent bg-linear-to-r from-amber-300 to-cyan-300 mb-6"
            >
              Oltre la Tecnica
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-lg max-w-2xl"
            >
              Le competenze tecniche creano il prodotto, ma è la fusione di creatività, visione e metodo a definire il successo di ogni progetto.
            </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {softSkills.map((skill, index) => (
                <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className={`
                        group p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm 
                        hover:border-opacity-50 transition-all duration-300 hover:-translate-y-2
                        flex flex-col items-start gap-4 h-full
                        ${skill.color}
                    `}
                >
                    <div className="p-3 rounded-xl bg-black/40 group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-current transition-colors">
                            {skill.name}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            {skill.description}
                        </p>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
