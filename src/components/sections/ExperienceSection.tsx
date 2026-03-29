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
          className="text-4xl font-bold leading-[1.2] py-[0.08em] mb-16 text-center"
        >
          Percorso Professionale
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-12">
            {[
              {
                role: "CEO",
                company: "Hyrise",
                period: "Presente",
                desc: "Coordinamento completo dell'agenzia Hyrise."
              },
              {
                role: "Manager",
                company: "WhiteBoymingro",
                period: "Presente",
                desc: "Creazione contenuti video. Pianificazione e gestione dei progetti creativi."
              },
              {
                role: "Video Editor",
                company: "2Hustler",
                period: "Presente",
                desc: "Creazione contenuti video."
              },
               {
                role: "Video Editor",
                company: "CoralService",
                period: "Esperienza Precedente",
                desc: "Creazione contenuti video per Tiktok."
              },
              {
                role: "Manager",
                company: "Hyrise Studios",
                period: "Esperienza Precedente",
                desc: "Gestione e coordinamento delle risorse umane. Interazione con i clienti e gestione dei progetti."
              },
              {
                role: "Front-End Web Developer",
                company: "Comune di Monfalcone",
                period: "Esperienza Formativa",
                desc: "Periodo di Stage scolastico presso il Comune di Monfalcone. Sviluppo di un'interfaccia web."
              },
              {
                role: "Business Strategist",
                company: "Minefy",
                period: "Esperienza Precedente",
                desc: "Analisi di strategie di crescita e monetizzazione."
              },
              {
                role: "Project Manager / Tutor / Aiutante Social Media",
                company: "Titanet Studios / Titanet Labs",
                period: "Esperienza Precedente",
                desc: "Coordinamento progetti creativi, addetto vendita e gestione risorse umane. Supporto alla gestione dei canali social e coordinamento progetti"
              }
            ].map((item, index) => (
                <div key={index} className="relative pl-8 border-l border-white/10">
                <span className="absolute -left-1.25 top-0 w-2.5 h-2.5 rounded-full bg-amber-400 ring-4 ring-black" />
                    
                    <div className="bg-white/5 border border-white/5 p-6 rounded-xl hover:border-white/10 transition-colors">
                        <div className="flex flex-wrap justify-between items-start mb-4">
                            <div>
                                <h3 className="text-xl font-bold leading-[1.2] py-[0.04em] text-white">{item.role}</h3>
                                <div className="text-cyan-300 font-medium">{item.company}</div>
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
