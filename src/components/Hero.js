import React from "react";
import { motion } from "framer-motion";
import { useI18n } from "../hooks/useI18n";
import { Trans } from "react-i18next";
import { FaArrowDown, FaDownload } from "react-icons/fa";

export default function Hero() {
  const { t, i18n } = useI18n();

  const handleDownload = () => {
    const lang = i18n.language;
    const fileName = lang === "fr" ? "/Chaymae AZZI-fr.pdf" : "/Chaymae AZZI - en.pdf";
    const link = document.createElement("a");
    link.href = fileName;
    link.download = fileName.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-stone-50"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-orange-100/30 to-amber-100/30 rounded-full blur-3xl" />

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #1c1917 1px, transparent 1px), linear-gradient(to bottom, #1c1917 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        

        {/* Main Heading */}
       <motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-heading text-stone-900 leading-[0.95] tracking-tight"
>
  {t("Hero.greeting")}{" "}
  <span className="text-gradient">Chaymae</span>
</motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 text-lg md:text-xl lg:text-2xl text-stone-500 max-w-2xl mx-auto leading-relaxed font-light"
        >
          <Trans i18nKey="Hero.about">
            State Engineer in{" "}
            <span className="font-semibold text-stone-700">Computer Systems</span>{" "}
            specializing in full-stack development, software architecture, and system integration.
          </Trans>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-stone-900 text-white rounded-2xl font-medium text-lg shadow-xl shadow-stone-900/20 hover:shadow-2xl hover:shadow-stone-900/30 transition-all duration-300"
          >
            {t("Hero.work")}
            <FaArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </motion.a>

          <motion.button
            onClick={handleDownload}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-stone-900 border-2 border-stone-200 rounded-2xl font-medium text-lg hover:border-orange-300 hover:bg-orange-50 transition-all duration-300"
          >
            <FaDownload className="w-4 h-4 text-orange-500" />
            {t("Hero.download")}
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 mb-24 grid grid-cols-3 gap-8 max-w-md mx-auto"
        >
          {[
            { value: "5+", label: t("Hero.years") },
            { value: "10+", label: t("Hero.projects") },
            { value: "3+", label: t("Hero.internships") },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-3xl font-bold font-heading text-stone-900">{stat.value}</div>
              <div className="text-xs md:text-sm text-stone-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.button
          onClick={scrollToAbout}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-stone-400 hover:text-orange-500 transition-colors"
        >
          <span className="text-xs font-medium uppercase tracking-widest">{t("Hero.scroll")}</span>
          <div className="w-6 h-10 rounded-full border-2 border-current flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-current"
            />
          </div>
        </motion.button>
      </motion.div>
    </section>
  );
}