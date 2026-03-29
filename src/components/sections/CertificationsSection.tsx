"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar } from "lucide-react";
import { SectionWrapper } from "../ui/SectionWrapper";

const certifications = [
  {
    title: "AI-Powered Performance Ads Certification",
    issuer: "Google",
    date: "2026",
    link: "https://skillshop.credential.net/9f533bc8-f6ee-4df5-810c-8289ee68af40#acc.c4IQbSw7",
    icon: <Award className="w-6 h-6 text-amber-300" />
  },
  {
    title: "AI-Powered Shopping ads Certification",
    issuer: "Google",
    date: "2026",
    link: "https://skillshop.credential.net/ec049942-3697-4a73-8685-a3793c44753e#acc.dMAwB6rZ",
    icon: <Award className="w-6 h-6 text-amber-300" />
  }
];

export default function CertificationsSection() {
  return (
    <SectionWrapper id="certifications" className="bg-black py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-[1.2] py-[0.08em] mb-6">
            <span className="inline-block leading-[1.2] py-[0.05em] text-transparent bg-clip-text bg-linear-to-r from-amber-300 to-cyan-300">
              Certificazioni
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Riconoscimenti e certificazioni professionali che attestano le mie competenze.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-white/5">
                  {cert.icon}
                </div>
                <a 
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/10"
                >
                  <ExternalLink className="w-4 h-4 text-gray-300" />
                </a>
              </div>
              
              <h3 className="text-xl font-semibold leading-[1.2] py-[0.04em] text-white mb-2">
                {cert.title}
              </h3>
              
              <div className="flex items-center justify-between text-sm text-gray-400">
                <span className="font-medium text-gray-300">{cert.issuer}</span>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{cert.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
