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

const IntroReveal = ({ onReveal }) => {
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(false);

  const containerRef = useRef(null);
  const introVideoRef = useRef(null);
  const logoRef = useRef(null);
  const onRevealRef = useRef(onReveal);
  onRevealRef.current = onReveal;

  useEffect(() => {
    setMounted(true);
    const alreadyShown = sessionStorage.getItem("kassee-intro-shown");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!alreadyShown && !prefersReducedMotion) {
      setShow(true);
      sessionStorage.setItem("kassee-intro-shown", "1");
      sessionStorage.removeItem("kassee-intro-pending");
    } else {
      // Intro already played this session, or the user has asked for reduced
      // motion — skip the flip/spin timeline and reveal the page immediately.
      if (!alreadyShown) sessionStorage.setItem("kassee-intro-shown", "1");
      onRevealRef.current?.();
    }
  }, []);

  useLayoutEffect(() => {
    if (!show) return;

    gsap.registerPlugin(SplitText);

    const logoSplit = new SplitText(logoRef.current, { type: "words, chars" });

    const tl = gsap.timeline({
      onComplete: () => setShow(false),
    });

    tl.set(containerRef.current, { autoAlpha: 1 })
      .set(logoSplit.chars, { rotationY: 180, force3D: true, autoAlpha: 0, y: 20 })
      .to(introVideoRef.current, { duration: 0.4, autoAlpha: 0, ease: "none" }, "+=1.5")
      .to(logoSplit.chars, { duration: 0.4, stagger: 0.02, autoAlpha: 1, y: 0, ease: "power4.inOut" }, "+=0.4")
      .to(logoSplit.chars, { duration: 0.4, stagger: 0.02, rotationY: 360, force3D: true, ease: "power4.inOut" })
      // Only a beat after the spin — a longer hold reads as the intro having
      // stalled. onReveal fires as the fade starts, so the Hero headline is
      // already typing while the overlay dissolves rather than after it.
      .to(
        containerRef.current,
        { duration: 0.5, autoAlpha: 0, onStart: () => onRevealRef.current?.() },
        "+=0.15"
      );

    return () => {
      tl.kill();
      logoSplit.revert();
    };
  }, [show]);

  if (!mounted || !show) return null;

  return (
    <div
      ref={containerRef}
      // Deliberately not `bg-dark` — that token follows the theme and resolves
      // to #f7f7fb in light mode, washing the intro out to grey. The overlay is
      // always dark, so the colour is pinned.
      className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden"
      style={{ visibility: "hidden", opacity: 0, backgroundColor: "#0a0a14" }}
    >
      {/* On phones this runs as a full-width band a third of the screen tall,
          centred. Covering the whole portrait viewport meant scaling the
          1920x512 source ~8x; a third of that height cuts the zoom to ~2.7x
          while staying flush to both edges. Full-bleed from md up. */}
      <video
        ref={introVideoRef}
        src={`${BASE_PATH}/video/DispChrmAbb_1920x512.mp4`}
        autoPlay
        muted
        playsInline
        controls={false}
        disablePictureInPicture
        aria-hidden="true"
        tabIndex={-1}
        className="intro-video-fade pointer-events-none absolute inset-x-0 top-1/2 h-1/3 w-full -translate-y-1/2 object-cover md:top-0 md:h-full md:translate-y-0"
      />

      <div className="relative z-10 flex w-full max-w-full flex-col items-center px-4 text-center sm:px-6">
        {/* Sized in vw so the wordmark spans the full screen width and stays
            on one line at any phone size, rather than breaking mid-word. */}
        <div
          ref={logoRef}
          className="font-display font-bold text-gradient whitespace-nowrap"
          style={{ perspective: "600px", fontSize: "clamp(1.5rem, 8.6vw, 3rem)" }}
        >
          {LOGO_TEXT}
        </div>
      </div>
    </div>
  );
};

export default IntroReveal;
