"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-24 bg-black border-t border-white/5">
      <div className="container mx-auto px-6 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           className="max-w-2xl mx-auto"
        >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Creiamo qualcosa di straordinario</h2>
            <p className="text-gray-400 text-lg mb-10">
                Che tu abbia un'idea per un progetto o voglia solo fare due chiacchiere, sentiti libero di inviarmi un'email!
            </p>

            <a 
              href="mailto:contact@email.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-200 transition-colors mb-16"
            >
                <Mail size={20} /> Ciao
            </a>

            <div className="flex justify-center gap-8">
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Github size={24} /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={24} /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={24} /></a>
            </div>

            <div className="mt-16 pt-8 border-t border-white/5 text-gray-500 text-sm">
                © {new Date().getFullYear()} Christian Dauria. All rights reserved.
            </div>
        </motion.div>
      </div>
    </section>
  );
}
