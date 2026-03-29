"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  disableTilt?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export default function TiltCard({ children, className, disableTilt = false, onClick }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current!.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={disableTilt ? undefined : handleMouseMove}
      onMouseLeave={disableTilt ? undefined : handleMouseLeave}
      onClick={onClick}
      style={{
        rotateY: disableTilt ? 0 : rotateY,
        rotateX: disableTilt ? 0 : rotateX,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "relative rounded-xl bg-linear-to-br from-white/10 to-white/0 p-px shadow-xl transition-shadow duration-300 hover:shadow-cyan-300/20",
        className
      )}
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="relative h-full w-full rounded-xl bg-neutral-900/50 p-6 backdrop-blur-md"
      >
        {children}
      </div>
    </motion.div>
  );
}
