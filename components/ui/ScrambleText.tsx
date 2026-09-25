"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "motion/react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*<>";

interface ScrambleTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function ScrambleText({ text, className = "", delay = 0 }: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text.replace(/./g, " "));
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let iteration = 0;
    let interval: ReturnType<typeof setInterval>;
    let timeout: ReturnType<typeof setTimeout>;

    const startScramble = () => {
      interval = setInterval(() => {
        setDisplayText((currentText) =>
          text
            .split("")
            .map((letter, index) => {
              // Preserve spaces immediately
              if (letter === " ") return " ";
              
              if (index < iteration) {
                return text[index];
              }
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          clearInterval(interval);
        }
        
        // Slower decoding matrix effect
        iteration += 1 / 4; 
      }, 30);
    };

    timeout = setTimeout(startScramble, delay * 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [text, isInView, delay]);

  return (
    <span ref={ref} className={`inline-block font-mono font-bold tracking-tight ${className}`}>
      {displayText}
    </span>
  );
}
