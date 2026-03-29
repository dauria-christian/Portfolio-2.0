"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isEnabled, setIsEnabled] = useState(false);
  const [cursorMode, setCursorMode] = useState<0 | 1 | 2>(0);

  useEffect(() => {
    const canUseCustomCursor = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;

    if (!canUseCustomCursor) {
      return;
    }

    setIsEnabled(true);
    const previousCursor = document.body.style.cursor;
    document.body.style.cursor = "none";

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (
        target.closest('[data-cursor="2"]') ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("button")
      ) {
        setCursorMode(2);
      } else if (
        target.closest('[data-cursor="1"]') ||
        target.tagName.toLowerCase() === "a" ||
        target.closest("a")
      ) {
        setCursorMode(1);
      } else {
        setCursorMode(0);
      }
    };

    const handleMouseOutWindow = () => {
      setCursorMode(0);
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOutWindow);

    return () => {
      document.body.style.cursor = previousCursor;
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOutWindow);
    };
  }, []);

  if (!isEnabled) {
    return null;
  }

  const innerScale = cursorMode === 2 ? 2.4 : cursorMode === 1 ? 1.8 : 1;
  const outerScale = cursorMode === 2 ? 1.7 : cursorMode === 1 ? 1.3 : 1;
  const innerColor = cursorMode === 2 ? "#f59e0b" : "#67e8f9";
  const outerColor = cursorMode === 2 ? "#f59e0b" : "#fcd34d";

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-cyan-300 rounded-full pointer-events-none z-50 mix-blend-screen"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: innerScale,
          backgroundColor: innerColor,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-amber-300 rounded-full pointer-events-none z-50 mix-blend-screen"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: outerScale,
          borderColor: outerColor,
        }}
        transition={{ type: "spring", stiffness: 250, damping: 20, mass: 0.8 }}
      />
    </>
  );
};
