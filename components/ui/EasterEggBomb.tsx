"use client";

import confetti from "canvas-confetti";
import { Bomb } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export function EasterEggBomb() {
  const [isBlown, setIsBlown] = useState(false);

  const handleBlast = () => {
    setIsBlown(true);

    const duration = 2.5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 40, spread: 360, ticks: 60, zIndex: 10000 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    // Apply the screen shake
    document.body.classList.add("shake-hard");
    setTimeout(() => document.body.classList.remove("shake-hard"), 400);

    const interval: ReturnType<typeof setInterval> = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        setIsBlown(false);
        return clearInterval(interval);
      }

      const particleCount = 60 * (timeLeft / duration);
      // Fire randomly from multiple origins
      confetti({
        ...defaults, 
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#ff0000', '#ffa500', '#ffff00', '#4f46e5']
      });
      confetti({
        ...defaults, 
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#ff0000', '#ffa500', '#ffff00', '#4f46e5']
      });
    }, 250);
  };

  return (
    <motion.button 
      whileHover={{ scale: 1.1, rotate: [0, -10, 10, -10, 0] }}
      whileTap={{ scale: 0.9 }}
      onClick={handleBlast}
      disabled={isBlown}
      className={`fixed bottom-6 right-6 z-[9998] p-4 rounded-full shadow-[0_0_20px_var(--ds-accent)] flex items-center justify-center transition-colors group ${
        isBlown ? "bg-red-600 pointer-events-none" : "bg-black cursor-pointer hover:bg-red-500"
      }`}
    >
      <Bomb size={24} className={`text-white ${!isBlown && "group-hover:animate-pulse"}`} />
      
      {!isBlown && (
        <span className="absolute -top-12 scale-0 group-hover:scale-100 transition-all font-mono font-bold bg-black text-red-500 text-xs px-3 py-1.5 rounded border border-red-500/30 whitespace-nowrap">
          DON'T CLICK
        </span>
      )}
    </motion.button>
  );
}
