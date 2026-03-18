"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Instagram, Youtube, Twitter, Twitch, Send, MapPin } from "lucide-react";

// Fallback per icone non standard in Lucide React (simil-Telegram/TikTok se non presenti)
// Nota: Tieni presente che Lucide React ha un set limitato di brand. 
// Se queste icone mancano, puoi usare un'icona generica o un SVG personalizzato.
// Qui uso icone standard dove possibile e SVG inline per brand specifici se necessario.

const socialLinks = [
  { 
    name: "Instagram", 
    icon: <Instagram size={24} />, 
    href: "https://instagram.com/tuousername",
    color: "hover:text-pink-500"
  },
  { 
    name: "YouTube", 
    icon: <Youtube size={24} />, 
    href: "https://youtube.com/@tuocanale",
    color: "hover:text-red-600"
  },
  { 
    name: "Telegram", 
    icon: <Send size={24} />, // Send è spesso usato per Telegram
    href: "https://t.me/tuousername",
    color: "hover:text-blue-400"
  },
  { 
    name: "TikTok", 
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-music" // Simula stile lucide
      >
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
      </svg>
    ), 
    href: "https://tiktok.com/@tuousername",
    color: "hover:text-pink-400"
  },
  { 
    name: "Twitch", 
    icon: <Twitch size={24} />, 
    href: "https://twitch.tv/tuousername",
    color: "hover:text-purple-500"
  },
  { 
    name: "LinkedIn", 
    icon: <Linkedin size={24} />, 
    href: "https://linkedin.com/in/tuoprofilo",
    color: "hover:text-blue-600"
  }
];

export default function ContactSection() {
  return (
    <section className="py-24 bg-black border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Informazioni di Contatto */}
            <motion.div
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
                <h2 className="text-4xl md:text-5xl font-bold leading-[1.2] py-[0.08em] text-white mb-6">Parliamo del tuo <br/>prossimo progetto?</h2>
                <p className="text-gray-400 text-lg mb-10">
                    Sono sempre alla ricerca di nuove sfide e collaborazioni interessanti. 
                    Se hai un'idea innovativa o vuoi semplicemente espandere il tuo network, scrivimi!
                </p>

                <div className="space-y-6 mb-12">
                    <div className="flex items-center gap-4 text-gray-300">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white">
                            <Mail size={24} className="text-amber-300" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Email</p>
                            <a href="mailto:info@christiandauria.com" className="text-lg font-medium hover:text-white transition-colors">
                                christian1.dauria@gmail.com
                            </a>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-gray-300">
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white">
                            <MapPin size={24} className="text-cyan-300" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500">Posizione</p>
                            <p className="text-lg font-medium">Monfalcone (GO) (Disponibile anche da remoto)</p>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10">
                    <h3 className="text-white font-bold leading-[1.2] py-[0.04em] mb-6">Seguimi sui Social</h3>
                    <div className="flex flex-wrap gap-4">
                        {socialLinks.map((social) => (
                            <a 
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 transition-all hover:bg-white/10 hover:scale-110 ${social.color}`}
                                aria-label={social.name}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Modulo di Contatto (o Call to Action Visiva) */}
            <motion.div
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="bg-neutral-900/50 p-8 rounded-2xl border border-white/5 backdrop-blur-sm"
            >
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-gray-400">Nome</label>
                            <input 
                                type="text" 
                                id="name" 
                                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-400/60 focus:ring-1 focus:ring-amber-400/35 transition-all"
                                placeholder="Mario Rossi"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-gray-400">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-400/60 focus:ring-1 focus:ring-amber-400/35 transition-all"
                                placeholder="mario@esempio.com"
                            />
                        </div>
                    </div>
                    
                    <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium text-gray-400">Oggetto</label>
                        <select 
                            id="subject" 
                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-400/60 focus:ring-1 focus:ring-amber-400/35 transition-all appearance-none"
                        >
                            <option>Collaborazione Progetto</option>
                            <option>Opportunità di Lavoro</option>
                            <option>Informazioni Generali</option>
                            <option>Altro</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-gray-400">Messaggio</label>
                        <textarea 
                            id="message" 
                            rows={4} 
                            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-400/60 focus:ring-1 focus:ring-amber-400/35 transition-all resize-none"
                            placeholder="Raccontami la tua idea..."
                        ></textarea>
                    </div>

                    <button 
                        type="submit" 
                        className="w-full py-4 bg-amber-400 text-black font-bold rounded-lg hover:bg-amber-300 transition-colors transform active:scale-95"
                    >
                        Invia Messaggio
                    </button>
                    
                    <p className="text-xs text-center text-gray-600 mt-4">
                        Rispondo solitamente entro 24-48 ore.
                    </p>
                </form>
            </motion.div>
        </div>

        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Christian Dauria. Tutti i diritti riservati.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
        </div>
      </div>
    </section>
  );
}
