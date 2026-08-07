"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BASE_PATH, RESUME_URL } from "@/lib/config";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Timeline", href: "#timeline" },
  { name: "Contact", href: "#contact" },
];

const Navigation = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.slice(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  // On the homepage, nav items are same-page anchor scrolls. Elsewhere,
  // they must link back to the homepage's sections instead of scrolling
  // to an id that doesn't exist on the current page.
  const hrefFor = (href) => (isHome ? href : `${BASE_PATH}/${href}`);
  const handleNavClick = (href) => (e) => {
    if (!isHome) return;
    e.preventDefault();
    scrollToSection(href);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-dark/90 backdrop-blur-lg border-b border-foreground/10 shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex h-16 items-center justify-between md:h-20">
            <motion.a
              href={hrefFor("#home")}
              onClick={handleNavClick("#home")}
              className="font-display text-2xl font-bold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-gradient">KH</span>
            </motion.a>

            <div className="hidden items-center space-x-8 md:flex">
              {navItems.map((item) => {
                const isActive = isHome && activeSection === item.href.slice(1);
                return (
                  <motion.a
                    key={item.name}
                    href={hrefFor(item.href)}
                    onClick={handleNavClick(item.href)}
                    className={`relative text-sm font-medium transition-colors ${
                      isActive ? "text-primary-text" : "text-foreground/70 hover:text-foreground"
                    }`}
                    whileHover={{ y: -2 }}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </motion.a>
                );
              })}

              <motion.a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-primary px-6 py-2 text-sm font-semibold text-white"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(63, 152, 224, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                Resume ↗
              </motion.a>
            </div>

            <div className="flex items-center md:hidden">
              <motion.button
                className="relative flex h-10 w-10 items-center justify-center"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileTap={{ scale: 0.9 }}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-nav-menu"
              >
                <div className="flex w-6 flex-col gap-1.5">
                  <motion.span
                    animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                    className="h-0.5 w-full rounded-full bg-foreground"
                  />
                  <motion.span
                    animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                    className="h-0.5 w-full rounded-full bg-foreground"
                  />
                  <motion.span
                    animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                    className="h-0.5 w-full rounded-full bg-foreground"
                  />
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      <motion.div
        id="mobile-nav-menu"
        initial={{ opacity: 0, x: "100%" }}
        animate={isMobileMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-16 right-0 bottom-0 z-40 w-64 border-l border-foreground/10 bg-dark/98 backdrop-blur-lg md:hidden"
      >
        <div className="flex flex-col space-y-6 p-6">
          {navItems.map((item, index) => {
            const isActive = isHome && activeSection === item.href.slice(1);
            return (
              <motion.a
                key={item.name}
                href={hrefFor(item.href)}
                onClick={(e) => {
                  if (!isHome) {
                    setIsMobileMenuOpen(false);
                    return;
                  }
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                initial={{ opacity: 0, x: 20 }}
                animate={isMobileMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ delay: index * 0.1 }}
                className={`text-lg font-medium ${isActive ? "text-primary-text" : "text-foreground/70"}`}
              >
                {item.name}
              </motion.a>
            );
          })}

          <motion.a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            animate={isMobileMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: navItems.length * 0.1 }}
            className="rounded-lg bg-primary px-6 py-3 text-center font-semibold text-white"
          >
            Download Resume ↗
          </motion.a>
        </div>
      </motion.div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;
