"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { BASE_PATH } from "@/lib/config";

// Ported from the original portfolio's js/main.js `animate()` timeline:
// intro video holds, then fades away to reveal the Hero section underneath
// (which is already playing the looping blue-circle video as its own
// persistent background — this overlay never owns that video itself, so it
// keeps playing uninterrupted instead of vanishing with the intro). The
// logo and two intro lines flip in (rotationY 180 -> 0) and spin a full
// turn (rotationY 0 -> 360) per character via SplitText, staggered. The
// original used an invalid `alpha` prop (GSAP3 has no such prop, so that
// crossfade was a silent no-op there) — swapped for `autoAlpha` here so it
// actually plays.
const LOGO_TEXT = "KASS_E /HOMOLKA";
const LINE1_TEXT = "Product Designer based in Denver,";
const LINE2_TEXT = "who also thinks one sentence taglines are a bit overrated.";

const IntroReveal = ({ onReveal }) => {
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(false);

  const containerRef = useRef(null);
  const introVideoRef = useRef(null);
  const logoRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const onRevealRef = useRef(onReveal);
  onRevealRef.current = onReveal;

  useEffect(() => {
    setMounted(true);
    const alreadyShown = sessionStorage.getItem("kassee-intro-shown");

    if (!alreadyShown) {
      setShow(true);
      sessionStorage.setItem("kassee-intro-shown", "1");
      sessionStorage.removeItem("kassee-intro-pending");
    } else {
      // Intro already played this session — reveal the rest of the page immediately.
      onRevealRef.current?.();
    }
  }, []);

  useLayoutEffect(() => {
    if (!show) return;

    gsap.registerPlugin(SplitText);

    const logoSplit = new SplitText(logoRef.current, { type: "words, chars" });
    const line1Split = new SplitText(line1Ref.current, { type: "words, chars" });
    const line2Split = new SplitText(line2Ref.current, { type: "words, chars" });

    const tl = gsap.timeline({
      onComplete: () => setShow(false),
    });

    tl.set(containerRef.current, { autoAlpha: 1 })
      .set(logoSplit.chars, { rotationY: 180, force3D: true, autoAlpha: 0, y: 20 })
      .set(line1Split.chars, { rotationY: 180, force3D: true, autoAlpha: 0, y: 20 })
      .set(line2Split.chars, { rotationY: 180, force3D: true, autoAlpha: 0, y: 20 })
      .to(introVideoRef.current, { duration: 0.4, autoAlpha: 0, ease: "none" }, "+=1.5")
      .to(logoSplit.chars, { duration: 0.4, stagger: 0.02, autoAlpha: 1, y: 0, ease: "power4.inOut" }, "+=0.4")
      .to(logoSplit.chars, { duration: 0.4, stagger: 0.02, rotationY: 360, force3D: true, ease: "power4.inOut" })
      .to(line1Split.chars, { duration: 0.3, stagger: 0.012, autoAlpha: 1, y: 0, ease: "power4.inOut" }, "+=0.2")
      .to(line1Split.chars, { duration: 0.3, stagger: 0.012, rotationY: 360, force3D: true, ease: "power4.inOut" }, "-=0.4")
      .to(line2Split.chars, { duration: 0.3, stagger: 0.01, autoAlpha: 1, y: 0, ease: "power4.inOut" }, "+=0.2")
      .to(line2Split.chars, { duration: 0.3, stagger: 0.01, rotationY: 360, force3D: true, ease: "power4.inOut" }, "-=0.4")
      .to(
        containerRef.current,
        { duration: 0.6, autoAlpha: 0, onStart: () => onRevealRef.current?.() },
        "+=0.6"
      );

    return () => {
      tl.kill();
      logoSplit.revert();
      line1Split.revert();
      line2Split.revert();
    };
  }, [show]);

  if (!mounted || !show) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden"
      style={{ visibility: "hidden", opacity: 0 }}
    >
      <video
        ref={introVideoRef}
        src={`${BASE_PATH}/video/DispChrmAbb_1920x512.mp4`}
        autoPlay
        muted
        playsInline
        className="absolute inset-0 h-full w-full bg-dark object-cover"
      />

      <div className="relative z-10 flex flex-col items-center gap-4 px-6 text-center">
        <div
          ref={logoRef}
          className="font-display text-3xl font-bold text-gradient md:text-5xl"
          style={{ perspective: "600px" }}
        >
          {LOGO_TEXT}
        </div>
        <div ref={line1Ref} className="text-base text-white/80 md:text-xl" style={{ perspective: "600px" }}>
          {LINE1_TEXT}
        </div>
        <div ref={line2Ref} className="text-sm italic text-white/50 md:text-base" style={{ perspective: "600px" }}>
          {LINE2_TEXT}
        </div>
      </div>
    </div>
  );
};

export default IntroReveal;
