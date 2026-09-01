import React, { useState } from "react";
import { useI18n } from "../hooks/useI18n";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaLaravel,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaGitAlt,
  FaBootstrap,
  FaAngular,
  FaJava,
  FaDocker,
  FaVuejs,
} from "react-icons/fa";
import {
  SiDjango,
  SiMysql,
  SiTailwindcss,
  SiJira,
  SiSymfony,
  SiTypescript,
  SiIonic,
  SiFirebase,
  SiSpringboot,
  SiPostgresql,
  SiElasticsearch,
  SiVite,
  SiPostman,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React.js", icon: <FaReact className="text-[#61DAFB]" />, level: 95 },
      { name: "Vue.js", icon: <FaVuejs className="text-[#4FC08D]" />, level: 90 },
      { name: "Angular", icon: <FaAngular className="text-[#DD0031]" />, level: 80 },
      { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" />, level: 90 },
      { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" />, level: 95 },
      { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" />, level: 95 },
      { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" />, level: 92 },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" />, level: 92 },
      { name: "Bootstrap", icon: <FaBootstrap className="text-[#7952B3]" />, level: 88 },
      { name: "Ionic", icon: <SiIonic className="text-[#3178C6]" />, level: 80 },
      { name: "Vite", icon: <SiVite className="text-[#646CFF]" />, level: 88 },
    ],
  },
  {
    title: "Backend",
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Laravel", icon: <FaLaravel className="text-[#F9322C]" />, level: 90 },
      { name: "Spring Boot", icon: <SiSpringboot className="text-[#6DB33F]" />, level: 85 },
      { name: "Django", icon: <SiDjango className="text-[#092E20]" />, level: 85 },
      { name: "Symfony", icon: <SiSymfony className="text-black" />, level: 78 },
      { name: "PHP", icon: <FaPhp className="text-[#777BB4]" />, level: 88 },
      { name: "Python", icon: <FaPython className="text-[#3776AB]" />, level: 85 },
      { name: "Java", icon: <FaJava className="text-[#007396]" />, level: 85 },
    ],
  },
  {
    title: "Database & Cloud",
    color: "from-amber-500 to-orange-500",
    skills: [
      { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" />, level: 92 },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791]" />, level: 85 },
      { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" />, level: 82 },
      { name: "Oracle", icon: <SiPostgresql className="text-[#F80000]" />, level: 80 },
    ],
  },
  {
    title: "DevOps & Tools",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Docker", icon: <FaDocker className="text-[#2496ED]" />, level: 85 },
      { name: "ELK Stack", icon: <SiElasticsearch className="text-[#005571]" />, level: 82 },
      { name: "Git & GitHub", icon: <FaGitAlt className="text-[#F05032]" />, level: 92 },
      { name: "Jira", icon: <SiJira className="text-[#0052CC]" />, level: 88 },
      { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" />, level: 90 },
    ],
  },
];

const Skills = () => {
  const { t } = useI18n();
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleCategory = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="skills" className="py-24 px-6 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-50/50 to-transparent" />

      <div className="max-w-5xl mx-auto relative z-10">
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
            {t("Skills.label")}
            <span className="w-8 h-px bg-orange-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-stone-900">
            {t("Skills.title")}
          </h2>
          <p className="mt-4 text-stone-500 max-w-xl mx-auto">
            {t("Skills.subtitle")}
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skillCategories.map((category, index) => (
            <motion.button
              key={index}
              onClick={() => toggleCategory(index)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`relative px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                activeIndex === index
                  ? "bg-stone-900 text-white shadow-lg shadow-stone-900/20"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              {t(`Skills.${category.title}`) || category.title}
              {activeIndex === index && (
                <motion.div
                  layoutId="skill-tab"
                  className="absolute inset-0 bg-stone-900 rounded-xl -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          {activeIndex !== null && (
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {skillCategories[activeIndex].skills.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="group relative bg-stone-50 rounded-2xl p-5 border border-stone-100 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-100/50 transition-all duration-300"
                >
                  <div className="text-3xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <h3 className="font-semibold text-stone-800 text-sm mb-2">{skill.name}</h3>

                  <div className="w-full bg-stone-200 rounded-full h-1.5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 0.8, delay: 0.2 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                      className={`h-full rounded-full bg-gradient-to-r ${skillCategories[activeIndex].color}`}
                    />
                  </div>
                  <span className="text-xs text-stone-400 mt-1.5 block">{skill.level}%</span>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* All Skills Cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 pt-16 border-t border-stone-100"
        >
          <h3 className="text-center text-lg font-semibold text-stone-700 mb-8">
            {t("Skills.all")}
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skillCategories.flatMap(cat => cat.skills).map((skill, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.02 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-stone-200 rounded-full text-sm text-stone-600 hover:border-orange-300 hover:text-orange-600 hover:shadow-md transition-all duration-300 cursor-default"
              >
                <span className="text-base">{skill.icon}</span>
                {skill.name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;