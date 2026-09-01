import React, { useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaPlay } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "../hooks/useI18n";
import { FiChevronDown, FiX } from "react-icons/fi";

// Import all project images
import holcimImg from "../assets/images/holcim.png";
import kpiImg from "../assets/images/kpi.png";
import microservicesImg from "../assets/images/microservices.png";
import maImg from "../assets/images/ma.png";
import mobylisImg from "../assets/images/mobylis.png";
import builfolioImg from "../assets/images/builfolio.png";
import contactImg from "../assets/images/contact.png";
import ab2Img from "../assets/images/ab2.jpg";
import faragroupeImg from "../assets/images/faragroupe.png";
import personImg from "../assets/images/person.png";

import mobylisVideo from "../assets/videos/Mobylis.mp4";
import holcimAuthVideo from "../assets/videos/holcim.mp4";
import holcimKpiVideo from "../assets/videos/kpi.mp4";
import mugsAtelierVideo from "../assets/videos/mugs-atelier.mp4";
import contactlyVideo from "../assets/videos/Contactly.mp4";
import supAbscenceVideo from "../assets/videos/SUPAabscence.mp4";

const tabs = [
  { label: "Projects.projects", key: "projects" },
  { label: "Projects.certificates", key: "certificates" },
];

const projects = [
  {
    title: "HOLCIM - Employee Authorization Management",
    description: "Projects.p0",
    tech: ["Laravel", "Vue.js", "MySQL", "Docker", "ELK Stack"],
    github: "",
    live: "",
    demoVideo: holcimAuthVideo,
    picture: holcimImg,
    featured: true,
  },
  {
    title: "HOLCIM - KPI Dashboard",
    description: "Projects.p1",
    tech: ["Django", "React", "PostgreSQL"],
    github: "",
    live: "",
    demoVideo: holcimKpiVideo,
    picture: kpiImg,
    featured: true,
  },
  {
    title: "Microservices Architecture",
    description: "Projects.p2",
    tech: ["Spring Boot", "React", "Vite", "PostgreSQL", "Docker", "API Gateway"],
    github: "",
    live: "",
    demoVideo: "",
    picture: microservicesImg,
    featured: true,
  },
  {
    title: "Mugs Atelier",
    description: "Projects.p3",
    tech: ["React", "Django", "MySQL", "Tailwind CSS", "Jira"],
    github: "https://github.com/azzichaymae/Mugs-atelier",
    demoVideo: mugsAtelierVideo,
    picture: maImg,
  },
  {
    title: "Mobylis",
    description: "Projects.p4",
    tech: ["IONIC", "Firebase", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/azzichaymae/mobylisApp",
    demoVideo: mobylisVideo,
    picture: mobylisImg,
  },
  {
    title: "BuildFolio",
    description: "Projects.p5",
    tech: ["SpringBoot", "React", "MySQL", "Bootstrap", "Tailwind CSS"],
    github: "https://github.com/azzichaymae/Buildfolio",
    demoVideo: "",
    picture: builfolioImg,
  },
  {
    title: "Contactly",
    description: "Projects.p6",
    tech: ["Symfony", "MySQL", "Bootstrap"],
    github: "https://github.com/azzichaymae/ContactlyProject",
    demoVideo: contactlyVideo,
    picture: contactImg,
  },
  {
    title: "SUPAbscence",
    description: "Projects.p7",
    tech: ["JavaFX", "MySQL"],
    github: "https://github.com/azzichaymae/SUPAbscence",
    demoVideo: supAbscenceVideo,
    picture: ab2Img,
  },
  {
    title: "Les Douceures de Maroc",
    description: "Projects.p8",
    tech: ["React", "Bootstrap", "Typescript"],
    github: "",
    live: "https://www.faragroupe.fr/",
    demoVideo: "",
    picture: faragroupeImg,
  },
];

const certificates = [
    { name: "Projects.cer4", issuer: "Cisco", date: "2026" },
{ name: "Projects.cer1", issuer: "Cisco", date: "2025" },
  { name: "Projects.cer2", issuer: "SUPMTI", date: "2024" },
  { name: "Projects.cer3", issuer: "MICROSOFT", date: "2020" },
];

export default function Projects() {
  const { t } = useI18n();

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [showAllProjects, setShowAllProjects] = useState(false);
  
  // Video modal state
  const [activeVideo, setActiveVideo] = useState(null);
  const [videoTitle, setVideoTitle] = useState("");

  const visibleProjects = showAllProjects ? projects : projects.slice(0, 6);

  const openVideo = (videoSrc, title) => {
    setActiveVideo(videoSrc);
    setVideoTitle(title);
  };

  const closeVideo = () => {
    setActiveVideo(null);
    setVideoTitle("");
  };

  return (
    <section id="projects" className="py-24 px-6 bg-stone-50 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-orange-50/50 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-orange-600 text-sm font-semibold uppercase tracking-wider mb-4">
            <span className="w-8 h-px bg-orange-500" />
            {t("Projects.label")}
            <span className="w-8 h-px bg-orange-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-stone-900">
            {t("Projects.title")}
          </h2>
          <p className="mt-4 text-stone-500 max-w-xl mx-auto">
            {t("Projects.subtitle")}
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-2xl p-1.5 shadow-sm border border-stone-200">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab)}
                className={`relative px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeTab.key === tab.key
                    ? "text-white"
                    : "text-stone-500 hover:text-stone-700"
                }`}
              >
                {activeTab.key === tab.key && (
                  <motion.div
                    layoutId="project-tab-bg"
                    className="absolute inset-0 bg-stone-900 rounded-xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{t(tab.label)}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeTab.key === "projects" && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {visibleProjects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -6 }}
                    className="group relative bg-white rounded-3xl overflow-hidden shadow-sm border border-stone-100 hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-500 h-full flex flex-col"
                  >
                    <div className="relative h-48 overflow-hidden flex-shrink-0">
                      <img
                        src={project.picture}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => { e.target.src = personImg; }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Hover buttons: GitHub + Demo + Live */}
                      <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 flex-wrap">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-xl text-sm font-medium text-stone-900 hover:bg-white transition-colors"
                          >
                            <FaGithub /> GitHub
                          </a>
                        )}
                        {project.demoVideo && (
                          <button
                            onClick={() => openVideo(project.demoVideo, project.title)}
                            className="flex items-center gap-2 px-4 py-2 bg-stone-900/90 backdrop-blur-sm rounded-xl text-sm font-medium text-white hover:bg-stone-900 transition-colors"
                          >
                            <FaPlay className="text-xs" /> Demo
                          </button>
                        )}
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-orange-500 rounded-xl text-sm font-medium text-white hover:bg-orange-600 transition-colors"
                          >
                            <FaExternalLinkAlt /> Live
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="p-5 flex-1 flex flex-col">
                      <h3 className="text-lg font-bold text-stone-900 mb-2 font-heading">
                        {project.title}
                      </h3>
                      <p className="text-stone-500 text-sm mb-4 line-clamp-2">
                        {t(project.description)}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-auto">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs bg-stone-100 text-stone-600 px-2.5 py-1 rounded-lg font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom hover line */}
                    <div className="h-1 w-0 group-hover:w-full bg-orange-500 transition-all duration-500" />
                  </motion.div>
                ))}
              </div>

              {projects.length > 6 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-12 text-center"
                >
                  <button
                    onClick={() => setShowAllProjects(!showAllProjects)}
                    className="inline-flex items-center gap-2 px-8 py-3 bg-white border-2 border-stone-200 text-stone-700 rounded-2xl font-medium hover:border-orange-300 hover:bg-orange-50 hover:text-orange-700 transition-all duration-300"
                  >
                    {showAllProjects ? t("Projects.showLess") : t("Projects.showMore")}
                    <FiChevronDown className={`w-4 h-4 transition-transform duration-300 ${showAllProjects ? "rotate-180" : ""}`} />
                  </button>
                </motion.div>
              )}
            </motion.div>
          )}

          {activeTab.key === "certificates" && (
            <motion.div
              key="certificates"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {certificates.map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="group bg-white rounded-3xl p-8 shadow-sm border border-stone-100 hover:shadow-xl hover:border-orange-200 transition-all duration-500 text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl flex items-center justify-center text-2xl">
                    🏆
                  </div>
                  <h3 className="font-bold text-stone-900 text-lg mb-2 font-heading">{t(cert.name)}</h3>
                  <p className="text-sm text-stone-500">{cert.issuer}</p>
                  <div className="mt-4 inline-flex items-center gap-1 px-3 py-1 bg-stone-100 rounded-full text-xs font-medium text-stone-600">
                    {cert.date}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={closeVideo}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
              className="relative w-full max-w-5xl bg-stone-900 rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-stone-800">
                <h3 className="text-white font-semibold text-lg">{videoTitle}</h3>
                <button
                  onClick={closeVideo}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-stone-800 text-stone-400 hover:bg-stone-700 hover:text-white transition-colors"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>

              {/* Video Player */}
              <div className="aspect-video bg-black">
                <video
                  src={activeVideo}
                  controls
                  autoPlay
                  className="w-full h-full"
                  onError={(e) => {
                    console.error("Video failed to load:", activeVideo);
                  }}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}