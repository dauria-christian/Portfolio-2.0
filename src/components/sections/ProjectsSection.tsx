"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"; // Assuming shadcn or standard ui button
import TiltCard from "@/components/ui/TiltCard";

export default function ProjectsSection() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
            <h2 className="text-4xl font-bold">Selected Works</h2>
            <button className="text-sm text-gray-400 hover:text-white transition-colors">View All Archive</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
                <TiltCard key={i} className="group cursor-pointer">
                    <div className="aspect-video bg-neutral-900 rounded-xl overflow-hidden mb-6 relative">
                         {/* Image Placeholder */}
                         <div className="absolute inset-0 bg-white/5 flex items-center justify-center text-gray-600">
                            Project {i} Preview
                         </div>
                         <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                            <span className="px-6 py-3 bg-white text-black rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">View Case Study</span>
                         </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Project Name {i}</h3>
                    <p className="text-gray-400 mb-4">Brief description of the project highlighting key tech stack and impact.</p>
                    <div className="flex gap-2">
                        <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-300">React</span>
                        <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-300">Next.js</span>
                    </div>
                </TiltCard>
            ))}
        </div>
      </div>
    </section>
  );
}
