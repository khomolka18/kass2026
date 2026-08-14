"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StorySection from "@/components/StorySection";
import { BASE_PATH } from "@/lib/config";

const stories = [
  {
    image: `${BASE_PATH}/inspiration-structure.jpg`,
    imageAlt: "Kassee's dad drafting a blueprint by hand at his drawing table",
    title: "Structure Meets Design",
    paragraphs: [
      "Growing up in a family of architects and creative thinkers, I developed an early appreciation for systems thinking, spatial reasoning, and aesthetics. With a background in front-end development and a natural lean toward structure, I believe the best design happens where logic meets creativity.",
      "I bring intention to each stage of the process, from planning to execution. Crafting solutions that balance exploration with functional clarity for both teams and end users is the ultimate goal. Strong documentation serves as a blueprint, providing alignment and a reliable foundation while leaving room for creative flexibility throughout the project.",
      "This is my dad – the last of a few architects to draw blueprints by hand, on a European drafting board in Wisconsin, before handing them off for CAD renderings.",
    ],
  },
  {
    image: `${BASE_PATH}/inspiration-collaborative.jpg`,
    imageAlt: "A wall covered in stickers and notes left by attendees at a design community conference",
    title: "Collaborative Strategy",
    reverse: true,
    paragraphs: [
      "From open-concept ad agencies in Milwaukee to large-scale corporations like Kohl's and EchoStar, I've learned that collaboration thrives on communication. In every setting, building stronger relationships expands my understanding of the company while also moving projects forward.",
      "I'm not afraid to ask questions, seek clarity, or invite new perspectives. Encouraging others to do the same sparks better ideas and ensures what we build reflects diverse voices and shared ownership.",
      "Collaboration also extends into work culture. I go home feeling fulfilled when we're supporting each other creatively, listening to each other's needs, and showing up when it matters. Whether it's advocating for my team or cheering them on outside of work, I believe those connections make us stronger, more empathetic collaborators.",
    ],
  },
  {
    image: `${BASE_PATH}/inspiration-exploration.jpg`,
    imageAlt: "A group of makers gathered around a table of handmade macramé pieces at a market",
    title: "Pushing Exploration",
    paragraphs: [
      "A product is shaped by real-world influences long before a user ever interacts with it. Keeping an open mind throughout the journey and giving each stage room to breathe helps create a cohesive, well-rounded product in the end.",
      "In design, that means space to step back, dig into research, and test different ideas. Making room for options stakeholders might not have considered often leads to smarter decisions.",
      "It's equally important not to view testing or research as wasted time when results don't go as planned. We build on those findings, use them to guide future conversations, and strengthen collaboration across teams. Having support from leadership to work this way is essential to creating better outcomes in the long run.",
    ],
  },
];

const InspirationContent = () => {
  return (
    <>
      <Navigation />

      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-4 pt-24 md:px-8">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-0 h-96 w-96 rounded-full bg-gradient-to-br from-mint/30 to-primary/30 blur-3xl animate-blob" />
          <div className="absolute bottom-10 right-0 h-96 w-96 rounded-full bg-gradient-to-tr from-flamingo/20 to-violet/30 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mx-auto max-w-3xl text-center"
        >
          <h1 className="mb-6 font-display text-5xl font-bold md:text-7xl">
            <span className="text-gradient">Inspiration</span>
          </h1>
          <div className="mx-auto mb-8 h-1 w-20 rounded-full bg-gradient-to-r from-mint to-primary" />
          <p className="text-lg leading-relaxed text-foreground/70 md:text-xl">
            From structured design systems to collaborative problem solving and exploration, I draw
            from many sources to create meaningful, balanced solutions.
          </p>
        </motion.div>
      </section>

      <section className="px-4 pt-4 pb-20 md:px-8">
        <div className="mx-auto max-w-5xl space-y-36">
          {stories.map((story) => (
            <StorySection key={story.title} {...story} />
          ))}
        </div>
      </section>

      <Contact />
      <Footer />
    </>
  );
};

export default InspirationContent;
