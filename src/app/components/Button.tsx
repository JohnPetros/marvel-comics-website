"use client";
import { motion } from "framer-motion";
interface ButtonProps {
  title: string;
  onClick: VoidFunction;
  isActive?: boolean;
}

export function Button({ title, onClick, isActive = false }: ButtonProps) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      className={`border-2 hover:border-red-600 hover:bg-red-600 hover:text-white transition-colors duration-200 rounded-full py-2 px-6 font-bold uppercase ${
        isActive ? "bg-red-600 text-white" : "border-black text-black"
      }`}
      onClick={onClick}
    >
      {title}
    </motion.button>
  );
}
