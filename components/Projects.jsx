"use client";

import { motion } from "framer-motion";
import { BASE_PATH } from "@/lib/config";

const ProjectCard = ({ title, description, icon, gradient, link, tags }) => (
  <motion.div
    className="overflow-hidden rounded-xl"
    whileHover={{ scale: 1.03 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    <a
      href={link}
      target={link.startsWith("http") ? "_blank" : undefined}
      rel={link.startsWith("http") ? "noopener noreferrer" : undefined}
      className="block h-full"
    >
      <div className={`relative flex min-h-80 flex-col justify-between rounded-xl border border-foreground/10 p-6 ${gradient}`}>
        <div className="text-5xl" aria-hidden="true">{icon}</div>
        <div>
          <h3 className="mb-2 text-2xl font-bold text-foreground">{title}</h3>
          <p className="mb-4 text-sm text-foreground/70">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="rounded-full border border-foreground/20 bg-black/20 px-3 py-1 text-base text-foreground">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  </motion.div>
);

const Projects = () => {
  const projects = [
    {
      title: "Design Systems",
      description:
        "Led EchoStar's cross-brand design system spanning native mobile, TV, web, and internal tools – scalable architecture, training, and cross-functional adoption.",
      icon: "🧩",
      gradient: "bg-gradient-to-br from-primary/20 to-violet/20",
      link: `${BASE_PATH}/design-systems/`,
      tags: ["Design Systems", "Figma", "Accessibility", "Cross-brand"],
    },
    {
      title: "UX/UI Design",
      description:
        "Responsive tools and experiences across telecom, streaming, and retail – including Kohl's, Boost Mobile, Sling, and GenMobile.",
      icon: "📱",
      gradient: "bg-gradient-to-br from-violet/20 to-flamingo/20",
      link: `${BASE_PATH}/ux-ui-design/`,
      tags: ["Kohl's", "Boost Mobile", "Sling", "GenMobile"],
    },
    {
      title: "Inspiration",
      description:
        "When I'm not designing systems, I'm making things with my hands – macramé, charcoal sketches, and painting.",
      icon: "🎨",
      gradient: "bg-gradient-to-br from-flamingo/20 to-mint/20",
      link: `${BASE_PATH}/inspiration/`,
      tags: ["Macramé", "Charcoal", "Painting", "Architecture"],
    },
  ];

  return (
    <section id="projects" className="px-4 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-display text-5xl font-bold md:text-6xl">
            Focus <span className="text-gradient">Areas</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-foreground/60">
            Where design systems, UX strategy, and a little bit of personality intersect
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
