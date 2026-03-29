"use client";

import TiltCard from "@/components/ui/TiltCard";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

type Project = {
  title: string;
  description: string;
  tags: string[];
  image: string;
  type: "video" | "gallery";
  videoUrl?: string;
  gallery?: string[];
};

const allProjects: Project[] = [
  {
    title: "48H a MILANO con MINGRO",
    description: "Secondo video editato per la crescita del canale YouTubed di Whiteboymingro.",
    tags: ["Video Editing", "YouTube", "Content Creation"],
    image: "/images/copertina_milano.png",
    type: "video",
    videoUrl: "https://youtu.be/Aub1KW_903M"
  },
  {
    title: "Portfolio Condiviso - CL-Studio",
    description: "Piattaforma collaborativa per mostrare e condividere progetti creativi in team.",
    tags: ["Design", "Web Development", "Collaboration"],
    image: "/images/condiviso.png",
    type: "gallery",
    gallery: [
      "/images/condiviso.png",
      "/images/condiviso2.png",
      "/images/condiviso3.png"
    ]
  },
  {
    title: "Interfaccia Web (Comune di Monfalcone)",
    description: "Interfaccia utente responsive e accessibile per i servizi web del Comune di Monfalcone.",
    tags: ["UI/UX", "Private Administration", "Frontend"],
    image: "/images/comune1.png",
    type: "gallery",
    gallery: [
      "/images/comune1.png",
      "/images/comune2.png"
    ]
  },
  {
    title: "Video per WhiteBoymingro",
    description: "Primo video editato per la crescita del canale YouTubed di Whiteboymingro.",
    tags: ["Video Editing", "YouTube", "Content Creation"],
    image: "/images/copertina_mingro_vlog_1.png",
    type: "video",
    videoUrl: "https://youtu.be/-FpMOpwYx0w"
  }
];

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const [activeGallery, setActiveGallery] = useState<Project | null>(null);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const displayedProjects = showAll ? allProjects : allProjects.slice(0, 2);

  const openProject = (project: Project) => {
    if (project.type === "video") {
      if (project.videoUrl) {
        window.open(project.videoUrl, "_blank", "noopener,noreferrer");
      }
      return;
    }

    setActiveGallery(project);
    setActiveGalleryIndex(0);
  };

  const closeGallery = () => {
    setActiveGallery(null);
    setActiveGalleryIndex(0);
  };

  const nextImage = () => {
    if (!activeGallery?.gallery || activeGallery.gallery.length <= 1) {
      return;
    }

    setActiveGalleryIndex((prev) => (prev + 1) % activeGallery.gallery!.length);
  };

  const prevImage = () => {
    if (!activeGallery?.gallery || activeGallery.gallery.length <= 1) {
      return;
    }

    setActiveGalleryIndex(
      (prev) => (prev - 1 + activeGallery.gallery!.length) % activeGallery.gallery!.length
    );
  };

  return (
    <section
      id="projects"
      className="bg-[radial-gradient(60%_80%_at_20%_0%,rgba(251,191,36,0.12),transparent_60%),radial-gradient(50%_70%_at_80%_100%,rgba(56,189,248,0.1),transparent_60%),#000] py-24"
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-4xl font-bold leading-[1.2] py-[0.08em]">Lavori Selezionati</h2>
            <button 
              onClick={() => setShowAll(!showAll)}
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-gray-300 transition-all duration-300 hover:border-amber-300/50 hover:bg-amber-300/10 hover:text-amber-200"
            >
              {showAll ? "Mostra Meno" : "Vedi Tutto l'Archivio"}
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {displayedProjects.map((project, index) => (
                <TiltCard
                  key={index}
                  className="group cursor-pointer border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:border-amber-300/40"
                  onClick={() => openProject(project)}
                >
                    <div className="aspect-video bg-neutral-900 rounded-xl overflow-hidden mb-6 relative">
                         <Image
                           src={project.image}
                           alt={project.title}
                           fill
                           className="object-cover transition-transform duration-500 group-hover:scale-105"
                           priority={index < 2}
                         />
                         <div className="absolute inset-0 flex items-center justify-center bg-linear-to-t from-black/95 via-black/70 to-black/45 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                             <span className="rounded-full bg-amber-300 px-6 py-3 font-bold text-black shadow-[0_8px_30px_rgba(251,191,36,0.35)] transition-colors duration-300 group-hover:bg-amber-200">Scopri</span>
                         </div>
                    </div>
                    <h3 className="text-2xl font-bold leading-[1.2] py-[0.04em] text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex gap-2 flex-wrap">
                        {project.tags.map((tag) => (
                            <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-200">{tag}</span>
                        ))}
                    </div>
                </TiltCard>
            ))}
        </div>

        {activeGallery && activeGallery.gallery && (
          <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md p-4 md:p-8" onClick={closeGallery}>
            <div
              className="relative mx-auto h-full w-full max-w-7xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                onClick={closeGallery}
                className="absolute right-2 top-2 z-30 inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/20 bg-black/60 px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:scale-105 hover:border-amber-300/70 hover:bg-amber-300/20 hover:text-amber-100 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
                aria-label="Chiudi galleria"
              >
                <X size={16} />
                Chiudi
              </button>

              <div className="relative mt-14 h-[70vh] w-full overflow-hidden rounded-2xl border border-white/10 bg-neutral-950/80 shadow-[0_20px_80px_rgba(0,0,0,0.55)] md:h-[78vh]">
                <Image
                  src={activeGallery.gallery[activeGalleryIndex]}
                  alt={`${activeGallery.title} - immagine ${activeGalleryIndex + 1}`}
                  fill
                  className="object-contain"
                />

                {activeGallery.gallery.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-3 top-1/2 z-20 inline-flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/25 bg-black/55 text-white/90 backdrop-blur transition-all duration-200 hover:scale-110 hover:border-amber-300 hover:bg-amber-300/20 hover:text-amber-200 hover:shadow-[0_0_0_4px_rgba(251,191,36,0.2)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
                      aria-label="Immagine precedente"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-3 top-1/2 z-20 inline-flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/25 bg-black/55 text-white/90 backdrop-blur transition-all duration-200 hover:scale-110 hover:border-amber-300 hover:bg-amber-300/20 hover:text-amber-200 hover:shadow-[0_0_0_4px_rgba(251,191,36,0.2)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
                      aria-label="Immagine successiva"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}
              </div>

              <div className="mt-4 flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-200">
                <p className="max-w-[70%] truncate font-medium text-white">{activeGallery.title}</p>
                <p className="rounded-full bg-black/40 px-3 py-1 text-xs text-gray-200">
                  {activeGalleryIndex + 1} / {activeGallery.gallery.length}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
