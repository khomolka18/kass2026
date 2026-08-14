"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BASE_PATH, RESUME_URL } from "@/lib/config";

const StatCard = ({ number, label, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <div className="mb-2 text-4xl font-bold text-gradient md:text-5xl">{number}</div>
      <div className="text-sm uppercase tracking-wider text-foreground/60">{label}</div>
    </motion.div>
  );
};

const SkillBadge = ({ skill, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ scale: 1.1, rotate: 2 }}
    className="rounded-full border border-primary/30 bg-gradient-to-r from-primary/10 to-violet/10 px-4 py-2 text-sm font-medium text-foreground hover:border-primary/60"
  >
    {skill}
  </motion.div>
);

const About = () => {
  const skills = [
    "Design Systems",
    "Figma",
    "Sketch",
    "Prototyping",
    "Usability Testing",
    "Journey Mapping",
    "Accessibility",
    "WCAG Best Practices",
    "HTML/CSS",
    "UI Design",
    "Brand Identity",
    "Product Management",
    "Agile/Scrum",
    "Jira",
    "Claude",
  ];

  const strengths = [
    "Eager, and always thinking about the bigger picture",
    "Not afraid of a challenge – or asking for help",
    "Organized, and fast to learn new tools",
    "Thrives in cross-functional, collaborative environments",
    "Confident in my personal and professional values",
    "Damn good taste in music",
  ];

  const weaknesses = [
    "A bit awkward in front of a crowd",
    "Handwriting of an 8 year old",
  ];

  return (
    <section id="about" className="relative overflow-hidden px-4 py-20 md:px-8">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-0 h-96 w-96 rounded-full bg-gradient-to-br from-primary/30 to-violet/30 blur-3xl animate-blob" />
        <div className="absolute bottom-20 left-0 h-96 w-96 rounded-full bg-gradient-to-tr from-flamingo/20 to-primary/30 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-display text-5xl font-bold md:text-6xl">
            About Me
          </h2>
          <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-primary to-violet" />
        </motion.div>

        <div className="mb-16 grid gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="leading-relaxed text-foreground/80"
            >
              I&apos;m Kassee Homolka, a product designer based in Denver, Colorado with 10+ years of
              experience across UX, UI, frontend development, and design systems. I&apos;ve led
              enterprise-scale systems and designed responsive tools for native mobile, web, TV, and
              technician-facing apps across telecom, 5G, streaming, education, and retail.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="leading-relaxed text-foreground/80"
            >
              My background in marketing, development, and design helps me think holistically and
              collaborate across disciplines. I care deeply about people, accessible design, and
              bringing clarity to complex systems – grounding decisions in empathy, evidence, and the
              lived experiences of users.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="leading-relaxed text-foreground/80"
            >
              These days I&apos;m seeking opportunities that align with my values – progressive,
              mission-driven spaces where design can create meaningful impact, particularly around
              equity, care, and innovation.
            </motion.p>
          </div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative mx-auto aspect-square w-full max-w-xs"
            >
              <div className="h-full w-full overflow-hidden rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-primary/20 via-violet/20 to-flamingo/20">
                <img
                  src={`${BASE_PATH}/kassee-headshot.jpg`}
                  alt="Kassee Homolka"
                  className="h-full w-full object-cover"
                />
              </div>
              <motion.div
                className="absolute -top-4 -right-4 h-20 w-20 rounded-2xl border-2 border-primary/30 -z-10"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 h-20 w-20 rounded-2xl border-2 border-violet/30 -z-10"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>

            <div className="grid grid-cols-3 gap-4 rounded-xl border border-primary/10 bg-gradient-to-br from-primary/5 to-violet/5 p-6">
              <StatCard number="10+" label="Years Industry Experience" delay={0.2} />
              <StatCard number="5+" label="Major Brands Worldwide" delay={0.4} />
              <StatCard number="100+" label="Great People to Work With" delay={0.6} />
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 grid gap-6 rounded-2xl border border-foreground/10 bg-surface/50 p-8 md:grid-cols-2"
        >
          <div>
            <h3 className="mb-4 text-lg font-bold text-mint-text">Strengths</h3>
            <ul className="space-y-2 text-sm text-foreground/70">
              {strengths.map((s) => (
                <li key={s} className="flex gap-2">
                  <span className="text-mint-text">+</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold text-flamingo-text">Weaknesses</h3>
            <ul className="space-y-2 text-sm text-foreground/70">
              {weaknesses.map((w) => (
                <li key={w} className="flex gap-2">
                  <span className="text-flamingo-text">−</span>
                  {w}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="mb-6 text-center text-2xl font-bold">
            Design, Development & Workplace Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <SkillBadge key={skill} skill={skill} delay={index * 0.05} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <motion.a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-primary-button px-8 py-3 font-semibold text-white"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(63, 152, 224, 0.25)" }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume ↗
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
