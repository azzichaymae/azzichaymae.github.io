import { motion } from "framer-motion";
import personImg from "../assets/images/person.png";

export default function Logo() {
  return (
    <div className="relative flex items-center justify-center w-48 h-48">
      {/* Rotating Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-full h-full rounded-full border-[3px] border-t-orange-400 border-b-amber-400 border-l-transparent border-r-transparent"
      />

      {/* Secondary Ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-[85%] h-[85%] rounded-full border-2 border-dashed border-stone-300"
      />

      {/* Floating Text/Image */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-10"
      >
        <img 
          src={personImg}
          alt="Logo" 
          className="w-24 h-24 object-contain drop-shadow-lg"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
      </motion.div>

      {/* Decorative dots */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-orange-400 rounded-full" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-amber-400 rounded-full" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-orange-300 rounded-full" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-amber-300 rounded-full" />
    </div>
  );
}