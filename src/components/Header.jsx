import React from 'react';
import { motion } from 'framer-motion'; 
import logo from '../assets/logo.png';

function Header() {
  return (
    <header className="relative top-0 left-0 w-full flex items-center justify-between p-2 bg-black shadow-md z-50 px-4 h-17">
      {/* logo */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <img
          src={logo}
          alt="Logo"
          className="h-16 w-16 object-contain hover:scale-110 transition-transform duration-300 rounded-full hover:shadow-lg"
        />
      </motion.div>

      {/* title */}
      <div className="flex items-center space-x-2">
        <motion.span
          className="text-2xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          ✨
        </motion.span>

      


   <motion.h1
     className="text-white text-3xl font-extrabold tracking-wide"
      initial={{ y: -100, opacity: 0, textShadow: "0px 0px 0px rgba(0,0,0,0)" }}
     animate={{
      y: 0,
      opacity: 1,
       textShadow: "0px 0px 8px rgba(255, 0, 255, 1)", // purple glow
     }}
     transition={{
    y: { type: "spring", stiffness: 120, damping: 10, duration: 0.8 },
    opacity: { duration: 0.8 },
    textShadow: { delay: 0.8, duration: 0.5 }, 
  }}
>
  QuoteBot
   </motion.h1>

      </div>
    </header>
  );
}

export default Header;
