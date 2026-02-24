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
          Professional Journey
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-12">
            {[
              {
                role: "Senior Frontend Engineer",
                company: "Tech Corp Inc.",
                period: "2023 - Present",
                desc: "Leading the frontend architecture migration to Next.js 14. Implemented a custom design system used across 5 different products. Improved core web vitals by 40%."
              },
              {
                role: "Full Stack Developer",
                company: "Creative Digital Agency",
                period: "2021 - 2023",
                desc: "Developed immersive web experiences for high-profile clients including [Redacted] and [Redacted]. Specialized in WebGL interactions and performance optimization."
              },
              {
                role: "Junior Web Developer",
                company: "Startup Lab",
                period: "2019 - 2021",
                desc: "Collaborated with design teams to translate Figma prototypes into pixel-perfect React components. Assisted in backend API development using Node.js."
              }
            ].map((item, index) => (
                <div key={index} className="relative pl-8 border-l border-white/10">
                    <span className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-black" />
                    
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
