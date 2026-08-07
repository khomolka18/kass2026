"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StorySection from "@/components/StorySection";

const FIGMA_PROTOTYPE_URL =
  "https://www.figma.com/proto/FR0pMPcA7FLlsxgrB48I4J/GenMobile-Case-Study?node-id=1-410&t=0ITh4XWGfQlBl3xI-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A811";

const stories = [
  {
    icon: "🤝",
    title: "Respecting What Exists",
    paragraphs: [
      "Every team brings its own history, tools, and perspective. I prioritize listening and learning from what's already working, building trust and creating momentum through mutual respect rather than reinvention.",
      "I believe that my experience working within larger corporations has taught me to be inquisitive and not afraid to reach out between departments or teams with a constructive approach.",
    ],
  },
  {
    icon: "💡",
    title: "Inviting New Ideas",
    reverse: true,
    paragraphs: [
      "Collaboration should be energizing, not exhausting. I lead working sessions that spark curiosity and gain industry knowledge for both the employees and end user.",
      "Aligning cross-functional teams has always been a core focus of mine, because the best ideas often live between disciplines.",
    ],
  },
];

const UxUiDesignContent = () => {
  return (
    <>
      <Navigation />

      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-4 pt-24 md:px-8">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-0 h-96 w-96 rounded-full bg-gradient-to-br from-violet/30 to-flamingo/30 blur-3xl animate-blob" />
          <div className="absolute bottom-10 left-0 h-96 w-96 rounded-full bg-gradient-to-tr from-primary/20 to-violet/30 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mx-auto max-w-3xl text-center"
        >
          <h1 className="mb-6 font-display text-5xl font-bold md:text-7xl">
            UX/UI <span className="text-gradient">Design</span>
          </h1>
          <div className="mx-auto mb-8 h-1 w-20 rounded-full bg-gradient-to-r from-violet to-flamingo" />
          <p className="text-lg leading-relaxed text-foreground/70 md:text-xl">
            I focus on UX strategy and thoughtful UI design that can scale across teams and
            platforms. My work balances user needs for the product, with system clarity for the
            company.
          </p>
        </motion.div>
      </section>

      <section className="px-4 py-20 md:px-8">
        <div className="mx-auto max-w-5xl space-y-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center font-display text-3xl font-bold md:text-4xl"
          >
            My <span className="text-gradient">Focus</span>
          </motion.h2>

          {stories.map((story) => (
            <StorySection key={story.title} {...story} />
          ))}
        </div>
      </section>

      <section id="case-study" className="px-4 py-20 md:px-8">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl">
              Case Study: <span className="text-gradient">GenMobile</span>
            </h2>
            <p className="mx-auto max-w-2xl leading-relaxed text-foreground/70">
              Upon obtaining GenMobile, a wireless MVNO provider that serves lower-income
              customers and international families, DISH leveraged its Front End UX team to
              reconstruct GenMobile&apos;s website, enhancing the overall customer experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="overflow-hidden rounded-2xl border border-foreground/10 bg-surface/50"
          >
            <iframe
              title="GenMobile Case Study – Figma Prototype"
              src={`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(FIGMA_PROTOTYPE_URL)}`}
              className="h-[600px] w-full md:h-[800px]"
              allowFullScreen
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      <Contact />
      <Footer />
    </>
  );
};

export default UxUiDesignContent;
