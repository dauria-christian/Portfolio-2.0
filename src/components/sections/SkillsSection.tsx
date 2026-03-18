"use client";

import { SectionWrapper } from "../ui/SectionWrapper";
import { motion } from "framer-motion";
import { CheckCircle2, Cloud, Code2, Database, Layout, Lightbulb, Terminal, Users } from "lucide-react";

export const SkillsSection = () => {
  const hardSkills = [
    { category: "Frontend", icon: <Layout />, items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js", "Framer Motion"] },
    { category: "Creative", icon: <Users />, items: ["Premiere Pro", "Figma", "Canva", "Adobe Photoshop", "Video Editing", "Content Creation"] },
    { category: "Marketing", icon: <Lightbulb />, items: ["Strategie di Vendita", "Cross-selling", "Up-selling", "Follow-up", "Social Media", "Ads"] },
    { category: "Tools & Backend", icon: <Terminal />, items: ["Git", "VS Code", "Python", "SQL", "C++", "Node.js"] },
  ];

  const softSkills = [
    { name: "Problem Solving", icon: <Code2 /> },
    { name: "Team Leadership", icon: <Users /> },
    { name: "Communication", icon: <Lightbulb /> },
    { name: "Adaptability", icon: <CheckCircle2 /> },
  ];

  return (
    <SectionWrapper id="skills" className="relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="inline-block text-3xl md:text-5xl font-bold leading-[1.2] py-[0.08em] bg-clip-text text-transparent bg-linear-to-r from-amber-300 to-cyan-300 mb-4">
            Competenze & Esperienza
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Una panoramica completa delle mie abilità tecniche e attributi professionali.
          </p>
        </motion.div>

        {/* Hard Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-20">
          {hardSkills.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/35 transition-all backdrop-blur-sm group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-cyan-400/12 rounded-xl text-cyan-300 group-hover:scale-110 transition-transform duration-300">
                  {section.icon}
                </div>
                <h3 className="text-xl font-bold leading-[1.2] py-[0.04em] text-white tracking-wide">{section.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {section.items.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1.5 text-sm bg-black/40 hover:bg-white/10 text-gray-400 hover:text-white rounded-lg border border-white/5 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {softSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (index * 0.1) }}
              className="flex flex-col items-center justify-center p-6 bg-linear-to-br from-gray-900 to-black rounded-xl border border-gray-800 hover:border-amber-400/35 group transition-all"
            >
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mb-4 group-hover:bg-cyan-400/20 group-hover:text-cyan-300 transition-all text-gray-400">
                 {/* Lucide icon needs to be passed correctly */}
                 {skill.icon} 
              </div>
              <span className="font-medium text-gray-300 group-hover:text-white transition-colors">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
