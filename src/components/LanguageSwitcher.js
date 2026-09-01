import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import frFlag from "../assets/fr.png";
import enFlag from "../assets/en.png";

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();

  const languages = [
    { code: "FR", icon: frFlag, label: "Français" },
    { code: "EN", icon: enFlag, label: "English" },
  ];

  const currentLang = i18n.language?.toUpperCase() || "EN";
  const selected = languages.find((lang) => lang.code === currentLang) || languages[1];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-all duration-200"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <img src={selected.icon} alt={selected.code} className="w-5 h-5 rounded-full object-cover" />
        <span className="hidden sm:inline">{selected.code}</span>
        <FaChevronDown
          className={`w-3 h-3 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
            <motion.ul
              initial={{ opacity: 0, y: -8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-40 bg-white border border-stone-200 rounded-xl shadow-xl z-50 overflow-hidden"
            >
              {languages.map((lang) => (
                <li key={lang.code}>
                  <button
                    onClick={() => {
                      i18n.changeLanguage(lang.code.toLowerCase());
                      setIsOpen(false);
                    }}
                    className={`flex items-center gap-3 w-full px-4 py-3 text-left text-sm transition-colors ${
                      currentLang === lang.code
                        ? "bg-orange-50 text-orange-700 font-medium"
                        : "text-stone-600 hover:bg-stone-50"
                    }`}
                  >
                    <img src={lang.icon} alt={lang.code} className="w-5 h-5 rounded-full object-cover" />
                    {lang.label}
                  </button>
                </li>
              ))}
            </motion.ul>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;