"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code, Send } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Scoperta",
    description: "Analizzo a fondo i tuoi obiettivi, il pubblico di destinazione e il panorama competitivo per trovare la strategia perfetta.",
    icon: Search,
  },
  {
    id: 2,
    title: "Design",
    description: "Creazione di interfacce utente intuitive ed esperienze coinvolgenti in linea con l'identità del tuo brand.",
    icon: PenTool,
  },
  {
    id: 3,
    title: "Sviluppo",
    description: "Scrittura di codice pulito e scalabile utilizzando framework moderni per dare vita alla visione.",
    icon: Code,
  },
  {
    id: 4,
    title: "Consegna",
    description: "Test rigorosi, deployment e supporto post-lancio per garantire un decollo impeccabile.",
    icon: Send,
  },
];

export default function ProcessSection() {
  return (
    <section className="py-32 bg-black relative">
       {/* Connecting Line */}
       <div className="absolute top-1/2 left-0 w-full h-px bg-linear-to-r from-transparent via-blue-500/50 to-transparent hidden lg:block -translate-y-1/2 z-0" />

       <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
             <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Il Mio Flusso di Lavoro</h2>
             <p className="text-gray-400 max-w-2xl mx-auto">
               Un approccio strutturato al caos. Da un'idea a un prodotto finito.
             </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="group relative bg-neutral-900/50 border border-white/5 p-8 rounded-2xl hover:border-blue-500/30 transition-colors"
                >
                   <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                      <step.icon size={28} />
                   </div>
                   
                   <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                     {step.title}
                   </h3>
                   
                   <p className="text-gray-400 leading-relaxed text-sm">
                     {step.description}
                   </p>

                   {/* Step Number Background */}
                   <span className="absolute -top-4 -right-2 text-8xl font-bold text-white/5 pointer-events-none select-none">
                     0{step.id}
                   </span>
                </motion.div>
             ))}
          </div>
       </div>
    </section>
  );
}
