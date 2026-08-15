"use client";

import { motion } from "framer-motion";
import { SITE } from "@/lib/config";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "LinkedIn", link: SITE.linkedin },
    { name: "Email", link: `mailto:${SITE.email}` },
  ];

  return (
    <footer className="border-t border-foreground/10 bg-gradient-to-b from-surface to-background">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-8">
        <div className="mb-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h3 className="mb-4 font-display text-2xl font-bold">
              <span className="text-gradient">{SITE.name}</span>
            </h3>
            <div className="mb-4 flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-sm text-foreground/60 hover:text-primary-text"
                >
                  {social.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center gap-4 border-t border-foreground/10 pt-8 text-sm text-foreground/60 md:flex-row md:justify-between"
        >
          <p>© {currentYear} {SITE.name}</p>
          <p>Designed & Developed in Denver, CO</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
