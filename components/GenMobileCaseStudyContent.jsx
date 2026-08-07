"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { BASE_PATH } from "@/lib/config";

const FIGMA_PROTOTYPE_URL =
  "https://www.figma.com/proto/FR0pMPcA7FLlsxgrB48I4J/GenMobile-Case-Study?node-id=1-410&t=0ITh4XWGfQlBl3xI-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A811";

const GenMobileCaseStudyContent = () => {
  return (
    <>
      <Navigation />

      <section className="relative px-4 pt-24 pb-12 md:px-8">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <a
              href={`${BASE_PATH}/ux-ui-design/`}
              className="mb-6 inline-block text-sm font-medium text-foreground/60 hover:text-foreground"
            >
              ← Back to UX/UI Design
            </a>
            <h1 className="mb-4 font-display text-4xl font-bold md:text-6xl">
              Case Study: <span className="text-gradient">GenMobile</span>
            </h1>
            <p className="max-w-2xl leading-relaxed text-foreground/70">
              Upon obtaining GenMobile, a wireless MVNO provider that serves lower-income
              customers and international families, DISH leveraged its Front End UX team to
              reconstruct GenMobile&apos;s website, enhancing the overall customer experience.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-4 pb-20 md:px-8">
        <div className="mx-auto max-w-6xl">
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
              className="h-[85vh] w-full"
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

export default GenMobileCaseStudyContent;
