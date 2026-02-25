"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section className="py-24 bg-neutral-950">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-16 text-center"
        >
          Percorso Professionale
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-12">
            {[
              {
                role: "Senior Frontend Engineer",
                company: "Tech Corp Inc.",
                period: "2023 - Presente",
                desc: "Guida della migrazione dell'architettura frontend a Next.js 14. Implementazione di un design system personalizzato utilizzato in 5 diversi prodotti. Miglioramento dei core web vitals del 40%."
              },
              {
                role: "Full Stack Developer",
                company: "Creative Digital Agency",
                period: "2021 - 2023",
                desc: "Sviluppo di esperienze web immersive per clienti di alto profilo. Specializzazione in interazioni WebGL e ottimizzazione delle prestazioni."
              },
              {
                role: "Sviluppatore Web Junior",
                company: "Startup Lab",
                period: "2019 - 2021",
                desc: "Collaborazione con i team di design per tradurre prototipi Figma in componenti React pixel-perfect. Supporto nello sviluppo di API backend utilizzando Node.js."
              },
              {
                role: "Stagista Sviluppatore Software",
                company: "Tech Innovators",
                period: "2018 - 2019",
                desc: "Sviluppo e manutenzione di applicazioni web interne. Partecipazione a code review e scrittura di test automatizzati per migliorare la qualità del codice."
              }
            ].map((item, index) => (
                <div key={index} className="relative pl-8 border-l border-white/10">
                    <span className="absolute -left-1.25 top-0 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-black" />
                    
                    <div className="bg-white/5 border border-white/5 p-6 rounded-xl hover:border-white/10 transition-colors">
                        <div className="flex flex-wrap justify-between items-start mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-white">{item.role}</h3>
                                <div className="text-blue-400 font-medium">{item.company}</div>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-500 mt-1 md:mt-0">
                                <Calendar size={14} />
                                <span>{item.period}</span>
                            </div>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            {item.desc}
                        </p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
