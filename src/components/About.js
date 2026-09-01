import React from "react";
import { motion } from "framer-motion";
import { useI18n } from "../hooks/useI18n";
import { Trans } from "react-i18next";
import { TypeAnimation } from "react-type-animation";
import { FaMapMarkerAlt, FaGraduationCap, FaBriefcase, FaPhone } from "react-icons/fa";
import meImg from "../assets/images/me.jpeg";
import personImg from "../assets/images/person.png";

export default function About() {
  const { t } = useI18n();

  const infoCards = [
    { icon: <FaMapMarkerAlt />, label: t("AboutMe.location"), sublabel: t("AboutMe.locationLabel") },
    { icon: <FaGraduationCap />, label: "SUPMTI", sublabel: t("AboutMe.educationLabel") },
    { icon: <FaBriefcase />, label: t("AboutMe.role"), sublabel: t("AboutMe.roleLabel") },
    { icon: <FaPhone />, label: "+212 635-385-167", sublabel: t("AboutMe.phoneLabel") },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-20 overflow-hidden bg-stone-50"
    >
      {/* Background */}
      <div className="absolute w-96 h-96 bg-orange-100/30 rounded-full blur-3xl top-20 -left-20" />
      <div className="absolute w-72 h-72 bg-amber-100/30 rounded-full blur-3xl bottom-20 -right-20" />

      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Left: Photo */}
        <motion.div
          initial={{ opacity: 0, x: -60, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-amber-200 rounded-3xl rotate-6 opacity-50" />
            <div className="relative bg-white rounded-3xl p-4 shadow-xl shadow-stone-200/50 overflow-hidden">
              <img 
                src={meImg}
                alt="Chaymae Azzi"
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl"
                onError={(e) => { e.target.src = personImg; }}
              />
            </div>
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex-1 max-w-2xl"
        >
          {/* Section Label */}
          <div className="inline-flex items-center gap-2 text-orange-600 text-sm font-semibold uppercase tracking-wider mb-4">
            <span className="w-8 h-px bg-orange-500" />
            {t("AboutMe.label")}
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-stone-900 mb-6 leading-tight">
            {t("AboutMe.title")}
          </h2>

          {/* Type Animation */}
          <div className="text-xl md:text-2xl font-semibold text-orange-600 mb-8 h-10 font-heading">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                1500,
                "Software Engineer",
                1500,
                "System Architect",
                1500,
                "DevOps Enthusiast",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

         <p>
  <Trans i18nKey="AboutMe.description1">
    I'm <span className="font-semibold text-stone-800">Chaymae Azzi</span>, a <span className="font-semibold text-stone-800">State Engineer in Computer Systems</span> with expertise in software architecture, full-stack development, and system integration. Experienced in production environments at <span className="font-semibold text-orange-600">HOLCIM</span>, I work autonomously across the entire development lifecycle—from UML architectural design to delivery and monitoring—with a strong focus on quality, security, and compliance.
  </Trans>
</p>

<p>
  <Trans i18nKey="AboutMe.description2">
    Skilled in Vue.js, React.js, Angular, Laravel, Django, Spring Boot, and Docker. I lead technical foundations, ensure deliverable traceability, and mentor teams in Agile/Scrum environments. Passionate about problem-solving, continuous learning, and bridging web development with AI innovation.
  </Trans>
</p>

          {/* Info Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
            {infoCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-4 text-center shadow-sm border border-stone-100 hover:shadow-md hover:border-orange-200 transition-all duration-300"
              >
                <div className="text-orange-500 text-xl mb-2 flex justify-center">{card.icon}</div>
                <div className="font-semibold text-stone-900 text-sm">{card.label}</div>
                <div className="text-xs text-stone-500 mt-0.5">{card.sublabel}</div>
              </motion.div>
            ))}
          </div>

          <motion.a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 mt-10 px-8 py-4 bg-stone-900 text-white rounded-2xl font-medium shadow-lg hover:bg-stone-800 transition-colors"
          >
            {t("AboutMe.button")}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}