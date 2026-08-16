"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import GlowCard from "./GlowCard";
import { BASE_PATH, RESUME_URL } from "@/lib/config";

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

// A life event rather than a role — sits on the rail as a quiet label so it
// reads as a marker between jobs, not another card.
const TimelineMilestone = ({ label, note }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="relative mb-12 flex justify-start pl-16 md:mb-16 md:justify-center md:pl-0"
    >
      <div className="relative z-10 inline-flex items-center gap-3 rounded-xl border border-foreground/10 bg-surface px-5 py-3">
        {/* Echoes the location pins in the Design Systems journey illustration. */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="h-5 w-5 flex-shrink-0 text-primary-text"
        >
          <path d="M12 21s7-5.686 7-11a7 7 0 1 0-14 0c0 5.314 7 11 7 11Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
        <span className="text-left">
          <span className="block text-sm font-bold text-foreground">{label}</span>
          <span className="block text-xs leading-snug text-foreground/50">{note}</span>
        </span>
      </div>
    </motion.div>
  );
};

const Timeline = () => {
  const experiences = [
    {
      title: "UX/UI Consultant",
      company: "Centerline",
      period: "November 2025 - January 2026",
      description:
        "Supported an early-stage website refresh pilot for client HID – kickoff and ideation meetings, wireframes, interactive prototyping, and iteration on design layouts to facilitate usability testing and responsive components.",
      icon: <img src={`${BASE_PATH}/uxui-icon.png`} alt="" className="h-7 w-auto invert" />,
      color: "63, 152, 224",
    },
    {
      title: "Senior Product Designer, Design Systems",
      company: "EchoStar Corporation",
      period: "June 2021 - June 2025",
      description:
        "Led EchoStar's cross-brand design system spanning native mobile, TV, web, and internal tools. Drove adoption through scalable architecture, training, and cross-functional collaboration.",
      icon: <img src={`${BASE_PATH}/modules-icon.png`} alt="" className="h-7 w-auto invert" />,
      color: "109, 19, 255",
    },
    {
      title: "Lead UX/UI Designer",
      company: "OneTen Creative (DISH)",
      period: "April 2020 - June 2021",
      description:
        "Oversaw component strategy and design governance for an enterprise-wide design system. Facilitated user testing and research integration across teams using AEM, Quantum Metric, and UserZoom.",
      icon: <img src={`${BASE_PATH}/inspiration-icon.png`} alt="" className="h-7 w-auto invert" />,
      color: "63, 217, 140",
    },
    {
      title: "Digital Designer",
      company: "OneTen Creative (DISH)",
      period: "July 2017 - April 2020",
      description:
        "Created internal and external digital assets for DISH, Sling TV, and B2B campaigns. Helped establish responsive design standards and accessibility best practices across teams.",
      icon: <img src={`${BASE_PATH}/modules-icon.png`} alt="" className="h-7 w-auto invert" />,
      color: "218, 35, 108",
    },
    {
      milestone: "Milwaukee → Denver",
      note: "Happy to see a wonderful Milwaukee scene here as well!",
    },
    {
      title: "Web Designer and Front End Developer",
      company: "Kohl's Department Stores",
      period: "August 2016 - July 2017",
      description:
        "Concepted, designed, and developed landing pages for Kohls.com – primarily women's and beauty pages – plus enterprise-wide modules and seasonal B2B campaigns.",
      icon: <img src={`${BASE_PATH}/uxui-icon.png`} alt="" className="h-7 w-auto invert" />,
      color: "63, 152, 224",
    },
    {
      title: "Graphic Designer",
      company: "Propeller MKE",
      period: "May 2016 - August 2016",
      description:
        "Contributed to rebranding and campaign execution for regional clients – logo design, packaging, print, and digital collateral in a collaborative studio environment.",
      icon: <img src={`${BASE_PATH}/inspiration-icon.png`} alt="" className="h-7 w-auto invert" />,
      color: "109, 19, 255",
    },
    {
      title: "Interactive Designer",
      company: "Pocket Giants",
      period: "August 2015 - August 2016",
      description:
        "Designed email, print, and social advertising while planning wireframes, site structure, and ongoing website maintenance across multiple CMS platforms. Built client documentation and analytics reporting so clients could manage and measure their own sites.",
      icon: <img src={`${BASE_PATH}/uxui-icon.png`} alt="" className="h-7 w-auto invert" />,
      color: "63, 217, 140",
    },
    {
      title: "Design Intern to Design Assistant",
      company: "Carl Designs",
      period: "April 2014 - August 2015",
      description:
        "Developed branding strategies and print campaigns for Milwaukee businesses, working within established brand guidelines. Applied HTML/CSS across web design, content integration, and CMS customization after being hired on from the internship.",
      icon: <img src={`${BASE_PATH}/modules-icon.png`} alt="" className="h-7 w-auto invert" />,
      color: "218, 35, 108",
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
            My Journey
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-foreground/60">
            From journalism and marketing to design systems leadership
          </p>
          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-primary to-violet" />
        </motion.div>

        <div className="hidden md:block absolute left-1/2 top-32 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary via-violet to-transparent" />
        <div className="md:hidden absolute left-6 top-32 bottom-0 w-0.5 bg-gradient-to-b from-primary via-violet to-transparent" />

        <div className="relative">
          {(() => {
            // Milestones sit inline but aren't roles, so they're skipped when
            // numbering — otherwise they'd break the left/right alternation
            // and the stagger delay of the cards around them.
            let roleIndex = -1;
            return experiences.map((exp) => {
              if (exp.milestone) {
                return <TimelineMilestone key={exp.milestone} label={exp.milestone} note={exp.note} />;
              }
              roleIndex += 1;
              return <TimelineItem key={exp.title} {...exp} index={roleIndex} />;
            });
          })()}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 flex justify-center"
        >
          <motion.a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-gradient-to-r from-primary to-violet px-8 py-3 font-semibold text-white"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(63, 152, 224, 0.25)" }}
            whileTap={{ scale: 0.95 }}
          >
            My Full Resume ↗
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
