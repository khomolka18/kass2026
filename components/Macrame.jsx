"use client";

import { motion } from "framer-motion";
import { BASE_PATH } from "@/lib/config";

// Drop photos into public/macrame/ and set each `src` (e.g. "/macrame/wall-hanging.jpg").
// Every tile is cropped to its `aspect`; the mix of ratios is what staggers the columns.
const pieces = [
  {
    src: "/macrame/hoop-trio.jpg",
    alt: "Three macramé wall hangings on brass hoops, one with mustard-yellow chevrons between cream knotwork",
    aspect: "3 / 4",
  },
  {
    src: "/macrame/dowel-pair.jpg",
    alt: "Matching pair of cream macramé wall hangings on wooden dowels, with knotted triangle patterns and long fringe",
    aspect: "1 / 1",
  },
  {
    src: "/macrame/holiday-ornaments.jpg",
    alt: "Macramé holiday ornaments — trees, stars, and wreaths in cream, sage, and forest green, strung with jute and wooden beads",
    aspect: "2 / 3",
  },
  {
    src: "/macrame/backlit-panel.jpg",
    alt: "Long macramé panel with diamond knot patterns, backlit and hanging over a glowing aquarium among dried flowers",
    aspect: "4 / 5",
  },
  {
    src: "/macrame/fringe-ring.jpg",
    alt: "Cream macramé ring with scalloped knotwork petals and a full brushed fringe, held up by a tattooed hand",
    aspect: "1 / 1",
  },
  {
    src: "/macrame/wrapped-baubles.jpg",
    alt: "Clear glass ornaments wrapped in knotted macramé nets in cream, sage, and olive, each finished with a tassel",
    aspect: "2 / 3",
  },
  {
    src: "/macrame/window-display.jpg",
    alt: "Macramé pieces clipped to a whitewashed window frame outdoors — a sage braided hanging, a fringed cream ring, a half-moon wall hanging, and a small pink piece, each with a kraft paper price tag",
    aspect: "4 / 5",
  },
  {
    src: "/macrame/mushroom-mini.jpg",
    alt: "Small dusty-pink macramé hanging on a blue paintbrush, framing a tiny painted mushroom cameo, beside a large cream wall hanging",
    aspect: "3 / 4",
  },
];

const Macrame = () => {
  return (
    <section id="macrame" className="px-4 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-display text-5xl font-bold md:text-6xl">Off the Clock</h2>
          <p className="mx-auto max-w-2xl text-lg text-foreground/60">
            What my hands make when they're away from the keyboard
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-base text-foreground/50">
            I also take on custom pieces.{" "}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-primary-text underline-offset-4 hover:underline"
            >
              Reach out
            </a>{" "}
            if you'd like something made for your space.
          </p>
          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-primary to-violet" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4 overflow-hidden rounded-xl border border-foreground/10"
        >
          <img
            src={`${BASE_PATH}/macrame/market-booth.jpg`}
            alt="A group of friends behind a table of macramé pieces at a pop-up, with large macramé wall hangings on the white brick wall behind them"
            loading="lazy"
            className="block aspect-[16/9] w-full object-cover object-[center_35%] md:aspect-[2/1]"
          />
        </motion.div>

        <div className="columns-2 gap-4 md:columns-3 lg:columns-4">
          {pieces.map((piece, index) => (
            <motion.div
              key={piece.alt}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
              className="mb-4 break-inside-avoid overflow-hidden rounded-xl border border-foreground/10"
            >
              {piece.src ? (
                <img
                  src={`${BASE_PATH}${piece.src}`}
                  alt={piece.alt}
                  loading="lazy"
                  className="block w-full object-cover"
                  style={{ aspectRatio: piece.aspect }}
                />
              ) : (
                <div
                  className="flex w-full items-center justify-center bg-gradient-to-br from-primary/10 via-violet/10 to-flamingo/10 text-sm text-foreground/40"
                  style={{ aspectRatio: piece.aspect }}
                >
                  Photo {index + 1}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Macrame;
