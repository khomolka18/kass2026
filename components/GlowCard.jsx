"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const GlowCard = ({
  children,
  className = "",
  glowColor = "63, 152, 224",
  glowSize = 300,
  glowOpacity = 0.35,
  ...props
}) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const mouseXSpring = useSpring(mouseX, { damping: 20, stiffness: 200 });
  const mouseYSpring = useSpring(mouseY, { damping: 20, stiffness: 200 });

  const background = useTransform(
    [mouseXSpring, mouseYSpring],
    ([x, y]) =>
      `radial-gradient(${glowSize}px circle at ${x}px ${y}px, rgba(${glowColor}, ${glowOpacity}), transparent 80%)`
  );

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative ${className}`}
      style={{ isolation: "isolate" }}
      {...props}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-xl transition-opacity duration-300"
        style={{ background, opacity: isHovered ? 1 : 0, mixBlendMode: "screen" }}
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default GlowCard;
