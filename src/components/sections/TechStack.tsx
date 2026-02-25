"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "React", level: 95 },
  { name: "Three.js", level: 85 },
  { name: "Next.js", level: 90 },
  { name: "TypeScript", level: 88 },
  { name: "Node.js", level: 80 },
  { name: "Tailwind", level: 95 },
  { name: "Figma", level: 75 },
  { name: "AWS", level: 70 },
];

export default function TechStack() {
  return (
    <section className="py-24 bg-black relative -top-px">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
               <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-600 mb-6">
                 Arsenale Tecnologico
               </h2>
               <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                 Spingo costantemente i limiti di ciò che è possibile sul web. 
                 Il mio stack è scelto per velocità, scalabilità ed esperienza di sviluppo.
               </p>

               <div className="grid grid-cols-2 gap-4">
                  {skills.map((skill, index) => (
                    <div key={skill.name} className="relative">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-1.5">
                        <motion.div 
                          className="bg-blue-500 h-1.5 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, delay: index * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
               </div>
            </motion.div>

            {/* Visual Representation (Abstract Sphere) */}
            <div className="h-100 w-full flex items-center justify-center relative">
                {/* 
                    This would be a great place for a TagCloud or similar 3D Interactive Element.
                    For now, creating a stylized grid layout of icons.
                */}
                <div className="grid grid-cols-3 gap-6">
                    {skills.map((skill, i) => (
                       <motion.div
                         key={skill.name}
                         initial={{ opacity: 0, scale: 0 }}
                         whileInView={{ opacity: 1, scale: 1 }}
                         transition={{ delay: i * 0.1, type: "spring" }}
                         whileHover={{ scale: 1.1, rotate: 5 }}
                         className="w-24 h-24 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col items-center justify-center gap-2 hover:bg-white/10 cursor-pointer shadow-lg hover:shadow-purple-500/20 transition-colors"
                       >
                          <div className="w-8 h-8 rounded-full bg-linear-to-tr from-gray-700 to-gray-600"></div>
                          <span className="text-xs font-mono text-gray-400">{skill.name}</span>
                       </motion.div> 
                    ))}
                </div>
                
                {/* Background Glow */}
                <div className="absolute inset-0 bg-blue-500/20 blur-[100px] z-[-1] rounded-full pointer-events-none"></div>
            </div>
        </div>
      </div>
    </section>
  );
}
