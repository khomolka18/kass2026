"use client";

import { motion } from "framer-motion";
import GlowCard from "@/components/GlowCard";

const StorySection = ({ icon, image, imageAlt, title, paragraphs, reverse = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className={`flex flex-col items-center gap-10 md:flex-row ${reverse ? "md:flex-row-reverse" : ""}`}
  >
    {image ? (
      <div className="mx-auto aspect-square w-full max-w-sm shrink-0 overflow-hidden rounded-2xl border border-primary/20 md:mx-0 md:w-[22rem]">
        <img src={image} alt={imageAlt || ""} className="h-full w-full object-cover" />
      </div>
    ) : (
      icon && (
        <GlowCard className="mx-auto flex h-32 w-32 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-violet/10 to-flamingo/10 text-6xl md:mx-0">
          {icon}
        </GlowCard>
      )
    )}

    <div className="min-w-0 flex-1">
      <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl">{title}</h2>
      <div className="space-y-4">
        {paragraphs.map((p, i) => (
          <p key={i} className="leading-relaxed text-foreground/70">
            {p}
          </p>
        ))}
      </div>
    </div>
  </motion.div>
);

export default StorySection;
