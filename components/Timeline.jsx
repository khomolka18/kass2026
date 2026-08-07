"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import GlowCard from "./GlowCard";
import { RESUME_URL } from "@/lib/config";

const TimelineItem = ({ title, company, period, description, icon, color, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;

  const Card = (
    <GlowCard className="rounded-xl overflow-hidden" glowColor={color} glowSize={300} glowOpacity={0.3}>
      <div className="rounded-xl border border-foreground/10 bg-gradient-to-br from-primary/10 to-violet/10 p-6 hover:border-primary/40 transition-colors">
        <h3 className="mb-1 text-xl font-bold text-foreground">{title}</h3>
        <h4 className="mb-2 font-semibold" style={{ color: `rgb(${color})` }}>{company}</h4>
        <p className="mb-3 text-sm text-foreground/60">{period}</p>
        <p className="text-sm leading-relaxed text-foreground/70">{description}</p>
      </div>
    </GlowCard>
  );

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative mb-12 flex items-center md:mb-16"
    >
      <div className="hidden w-full items-center md:flex">
        {isEven ? (
          <>
            <div className="w-5/12 pr-8 text-right">{Card}</div>
            <div className="relative z-10 flex w-2/12 justify-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                className="flex h-16 w-16 items-center justify-center rounded-full text-2xl shadow-lg"
                style={{ background: `linear-gradient(135deg, rgb(${color}), rgb(${color}))`, boxShadow: `0 0 20px rgba(${color}, 0.4)` }}
              >
                {icon}
              </motion.div>
            </div>
            <div className="w-5/12" />
          </>
        ) : (
          <>
            <div className="w-5/12" />
            <div className="relative z-10 flex w-2/12 justify-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                className="flex h-16 w-16 items-center justify-center rounded-full text-2xl shadow-lg"
                style={{ background: `linear-gradient(135deg, rgb(${color}), rgb(${color}))`, boxShadow: `0 0 20px rgba(${color}, 0.4)` }}
              >
                {icon}
              </motion.div>
            </div>
            <div className="w-5/12 pl-8">{Card}</div>
          </>
        )}
      </div>

      <div className="flex w-full md:hidden">
        <div className="mr-4 flex flex-col items-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
            className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full text-xl shadow-lg"
            style={{ background: `linear-gradient(135deg, rgb(${color}), rgb(${color}))`, boxShadow: `0 0 20px rgba(${color}, 0.4)` }}
          >
            {icon}
          </motion.div>
        </div>
        <div className="flex-1 pb-8">
          <GlowCard className="rounded-xl overflow-hidden" glowColor={color} glowSize={250} glowOpacity={0.3}>
            <div className="rounded-xl border border-foreground/10 bg-gradient-to-br from-primary/10 to-violet/10 p-4">
              <h3 className="mb-1 text-lg font-bold text-foreground">{title}</h3>
              <h4 className="mb-2 text-sm font-semibold" style={{ color: `rgb(${color})` }}>{company}</h4>
              <p className="mb-3 text-sm text-foreground/60">{period}</p>
              <p className="text-sm leading-relaxed text-foreground/70">{description}</p>
            </div>
          </GlowCard>
        </div>
      </div>
    </motion.div>
  );
};

const Timeline = () => {
  const experiences = [
    {
      title: "UX/UI Consultant",
      company: "Centerline",
      period: "November 2025 - Present",
      description:
        "Supporting an early-stage website refresh pilot for client HID – kickoff and ideation meetings, wireframes, interactive prototyping, and iterating on design layouts to facilitate usability testing and responsive components.",
      icon: "🚀",
      color: "63, 152, 224",
    },
    {
      title: "Senior Product Designer, Design Systems",
      company: "EchoStar Corporation",
      period: "June 2021 - June 2025",
      description:
        "Led EchoStar's cross-brand design system spanning native mobile, TV, web, and internal tools. Drove adoption through scalable architecture, training, and cross-functional collaboration.",
      icon: "🧩",
      color: "109, 19, 255",
    },
    {
      title: "Lead UX/UI Designer",
      company: "OneTen Creative (DISH)",
      period: "April 2020 - June 2021",
      description:
        "Oversaw component strategy and design governance for an enterprise-wide design system. Facilitated user testing and research integration across teams using AEM, Quantum Metric, and UserZoom.",
      icon: "🧭",
      color: "56, 248, 152",
    },
    {
      title: "Digital Designer",
      company: "OneTen Creative (DISH)",
      period: "July 2017 - April 2020",
      description:
        "Created internal and external digital assets for DISH, Sling TV, and B2B campaigns. Helped establish responsive design standards and accessibility best practices across teams.",
      icon: "🎨",
      color: "255, 20, 114",
    },
    {
      title: "Web Designer and Front End Developer",
      company: "Kohl's Department Stores",
      period: "August 2016 - July 2017",
      description:
        "Concepted, designed, and developed landing pages for Kohls.com – primarily women's and beauty pages – plus enterprise-wide modules and seasonal B2B campaigns.",
      icon: "🛍️",
      color: "63, 152, 224",
    },
  ];

  return (
    <section id="timeline" className="relative overflow-hidden px-4 py-20 md:px-8">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 right-0 h-96 w-96 rounded-full bg-gradient-to-bl from-primary/30 to-violet/30 blur-3xl animate-blob" />
        <div className="absolute bottom-1/3 left-0 h-96 w-96 rounded-full bg-gradient-to-tr from-flamingo/20 to-primary/30 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="mb-4 font-display text-5xl font-bold md:text-6xl">
            My <span className="text-gradient">Journey</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-foreground/60">
            From journalism and marketing to design systems leadership
          </p>
          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-primary to-violet" />
        </motion.div>

        <div className="hidden md:block absolute left-1/2 top-32 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary via-violet to-transparent" />
        <div className="md:hidden absolute left-6 top-32 bottom-0 w-0.5 bg-gradient-to-b from-primary via-violet to-transparent" />

        <div className="relative">
          {experiences.map((exp, index) => (
            <TimelineItem key={exp.title} {...exp} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 flex justify-center"
        >
          <div className="h-4 w-4 rounded-full bg-gradient-to-r from-primary to-violet shadow-lg" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="mb-6 text-foreground/60">Want the full story?</p>
          <motion.a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-gradient-to-r from-primary to-violet px-8 py-3 font-semibold text-white"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(63, 152, 224, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            View Full Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
