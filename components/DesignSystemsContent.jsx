"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StorySection from "@/components/StorySection";
import JourneyIllustration from "@/components/JourneyIllustration";
import CampfireDivider from "@/components/illustrations/CampfireDivider";
import MomentumDivider from "@/components/illustrations/MomentumDivider";
import TeamGearIllustration from "@/components/illustrations/TeamGearIllustration";

const dividers = [CampfireDivider, MomentumDivider, TeamGearIllustration];

const stories = [
  {
    title: "The Start of Campfire",
    paragraphs: [
      "Our expertise lay in being open and welcoming. Campfire, initially a small team, experienced rapid growth while establishing trusted relationships between departments. The team endeavored to foster collaboration, aiming to comprehensively understand every aspect of the business and create a design system seamlessly embraced by each brand. This involved conducting design workshops, internal interviews, design and development test sprints, and QA reviews to ensure that each team felt valued.",
      "After all of this, we were confident that this design system could be used across the enterprise. These next applications would include DISH, Sling, OnTech Smart Home, wireless brands including Boost, Republic, GenMobile, and all internal CX tools.",
    ],
  },
  {
    title: "Gaining Momentum",
    paragraphs: [
      "I'm a senior product designer who builds scalable, inclusive design systems. My work weaves together designers, developers, authors, and researchers – because good design isn't just what we see. It's how teams come together to build it.",
      "Whether I'm crafting macramé by hand or leading cross-functional workshops, I believe in structure, clarity, and creative collaboration. I'm here to make things that last – and bring people along in the process.",
    ],
  },
  {
    title: "Figma Transition",
    paragraphs: [
      "The DISH enterprise recently signed with Figma (previously Sketch/InVision), and we dedicated ourselves to swiftly rebuilding the extensive Campfire library while exploring its full range of capabilities. We initiated a design refresh and restructured our system to adhere to atomic standards.",
      "Additionally, we established processes for editing or adding components, considering their placement within our DSM – research and testing played a significant role throughout the rebuilding process. This project was not only exciting in terms of learning how Sketch and Figma relate and differ but also proved to be a valuable experience for our team.",
    ],
  },
  {
    title: "Enterprise Adoption",
    paragraphs: [
      "The adoption of a DS has become a pivotal strategy in our enterprise, led by our small yet versatile team. Recognizing the need for cohesive design across departments, Figma plays a crucial role and we grew even stronger during the transition, providing a collaborative platform for real-time teamwork.",
      "Our DS is now recognized and used throughout 10 foot, internal smart home tools, all web experiences, as well as native apps throughout the enterprise. This integration streamlines the handoff process between all departments, fostering a more efficient workflow. The adoption of a digital design system has now proven to be essential for cohesion, collaboration, and efficiency within our dynamic, cross-functional enterprise environment.",
    ],
  },
];

const DesignSystemsContent = () => {
  return (
    <>
      <Navigation />

      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-4 pt-24 md:px-8">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-0 h-96 w-96 rounded-full bg-gradient-to-br from-primary/30 to-violet/30 blur-3xl animate-blob" />
          <div className="absolute bottom-10 left-0 h-96 w-96 rounded-full bg-gradient-to-tr from-flamingo/20 to-primary/30 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />
        </div>

        <div className="relative z-10 flex w-full flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="mb-6 font-display text-5xl font-bold md:text-7xl">
              Design Systems
            </h1>
            <div className="mx-auto mb-8 h-1 w-20 rounded-full bg-gradient-to-r from-primary to-violet" />
            <p className="text-lg leading-relaxed text-foreground/70 md:text-xl">
              I specialize in large-scale design systems that support consistency, flexibility, and
              growth. My work bridges design, development, and documentation across complex teams and
              products.
            </p>
          </motion.div>

          <JourneyIllustration className="mx-auto mt-10 h-auto w-full max-w-5xl px-4 opacity-70 dark:invert md:px-8" />
        </div>
      </section>

      <section className="px-4 py-20 md:px-8">
        {stories.map((story, i) => {
          const Divider = dividers[i];
          return (
            <div key={story.title}>
              <div className="mx-auto max-w-5xl">
                <StorySection {...story} />
              </div>
              {Divider && (
                <div className="my-24 flex justify-center px-4 md:px-8">
                  <Divider className="h-auto w-full max-w-5xl opacity-70 dark:invert" />
                </div>
              )}
            </div>
          );
        })}
      </section>

      <Contact />
      <Footer />
    </>
  );
};

export default DesignSystemsContent;
