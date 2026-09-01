import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold font-heading"
          >
            Chaymae Azzi
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-8"
          >
            <a
              href="https://github.com/azzichaymae"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 bg-stone-800 rounded-xl flex items-center justify-center text-stone-400 hover:bg-orange-500 hover:text-white transition-all duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/azzichaymae"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 bg-stone-800 rounded-xl flex items-center justify-center text-stone-400 hover:bg-orange-500 hover:text-white transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-stone-500 text-sm flex items-center gap-1"
          >
            &copy; {new Date().getFullYear()} Chaymae Azzi. Made with <FaHeart className="text-red-500 text-xs" /> All rights reserved.
          </motion.div>
        </div>
      </div>
    </footer>
  );
}