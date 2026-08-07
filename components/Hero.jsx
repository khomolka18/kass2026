"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BASE_PATH, RESUME_URL, SITE } from "@/lib/config";

const Hero = ({ revealed = true }) => {
  const [text, setText] = useState("");
  const [mounted, setMounted] = useState(false);
  const fullText = "Hi, I'm Kassee";

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!revealed) return;

    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 90);
    return () => clearInterval(timer);
  }, [revealed]);

  const visible = { opacity: 1, y: 0 };
  const hidden = { opacity: 0, y: 20 };

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-dark">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-60"
        src={`${BASE_PATH}/video/CircleSlower_1300x1300.mp4`}
      />

      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-dark/80 via-surface/60 to-violet/20"
        style={{ backgroundSize: "400% 400%" }}
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
      />

      <div className="absolute inset-0">
        {mounted && [...Array(16)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-primary/30"
            initial={{
              x: Math.random() * 1200,
              y: Math.random() * 800,
            }}
            animate={{
              y: [null, Math.random() * 800],
              x: [null, Math.random() * 1200],
            }}
            transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, repeatType: "reverse" }}
          />
        ))}
      </div>

      <div className="relative z-10 px-4 text-center">
        <motion.h1
          className="mb-4 font-display text-6xl font-bold md:text-8xl"
          initial={hidden}
          animate={revealed ? visible : hidden}
          transition={{ duration: 0.8 }}
        >
          <span className="text-gradient">{text}</span>
        </motion.h1>

        <motion.p
          className="mx-auto mb-2 max-w-2xl text-xl text-foreground/80 md:text-2xl"
          initial={hidden}
          animate={revealed ? visible : hidden}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {SITE.tagline}
        </motion.p>

        <motion.p
          className="mx-auto mb-8 max-w-xl text-sm italic text-foreground/60"
          initial={hidden}
          animate={revealed ? visible : hidden}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          (who also thinks taglines are a little overrated)
        </motion.p>

        <motion.div
          className="flex justify-center gap-4"
          initial={hidden}
          animate={revealed ? visible : hidden}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="rounded-lg bg-primary px-8 py-3 font-semibold text-white"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(63, 152, 224, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>

          <motion.a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border-2 border-primary px-8 py-3 font-semibold text-primary-text"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(63, 152, 224, 0.1)" }}
            whileTap={{ scale: 0.95 }}
          >
            Resume
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 transform"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-primary">
          <motion.div
            className="mt-2 h-2 w-1 rounded-full bg-primary"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
