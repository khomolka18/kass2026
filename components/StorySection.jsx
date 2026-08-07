"use client";

import { motion } from "framer-motion";
import GlowCard from "@/components/GlowCard";

const StorySection = ({ icon, title, paragraphs, reverse = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className={`grid items-center gap-10 md:grid-cols-[auto_1fr] ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}
  >
    <GlowCard className="mx-auto flex h-32 w-32 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-violet/10 to-flamingo/10 text-6xl md:mx-0">
      {icon}
    </GlowCard>

    <div>
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
