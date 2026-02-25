"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    text: "He delivered a platform that exceeded our wildest expectations. The 3D interactions are smooth as butter.",
    author: "Sarah Jenkins",
    role: "CEO, FinTech Global",
  },
  {
    id: 2,
    text: "A true visionary. The attention to detail in the animations and user flow is world-class.",
    author: "Mark Davies",
    role: "Product Lead, Creative Studio",
  },
  {
    id: 3,
    text: "Technical expertise meets artistic brilliance. Our conversion rates doubled after the redesign.",
    author: "Elena Rodriguez",
    role: "Marketing Director, Ecommerce Giant",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-neutral-900 border-t border-white/5">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-16 text-center text-white"
        >
          Client Stories
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-black/40 p-8 rounded-2xl border border-white/5 relative"
            >
              <Quote className="text-blue-500 mb-6 opacity-50" size={40} />
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                "{t.text}"
              </p>
              <div>
                <div className="font-bold text-white">{t.author}</div>
                <div className="text-sm text-gray-500">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
