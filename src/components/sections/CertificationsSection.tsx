"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar } from "lucide-react";
import { SectionWrapper } from "../ui/SectionWrapper";

const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    link: "#",
    icon: <Award className="w-6 h-6 text-orange-400" />
  },
  {
    title: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    date: "2022",
    link: "#",
    icon: <Award className="w-6 h-6 text-blue-400" />
  },
  {
    title: "Meta Front-End Developer",
    issuer: "Meta",
    date: "2022",
    link: "#",
    icon: <Award className="w-6 h-6 text-blue-600" />
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-red-600">
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
              
              <h3 className="text-xl font-semibold text-white mb-2">
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
