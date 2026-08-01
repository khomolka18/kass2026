"use client";

import { motion } from "framer-motion";
import { SITE } from "@/lib/config";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "LinkedIn", link: SITE.linkedin },
    { name: "Portfolio", link: SITE.personalSite },
    { name: "Email", link: `mailto:${SITE.email}` },
  ];

  return (
    <footer className="border-t border-white/10 bg-gradient-to-b from-surface to-black">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-8">
        <div className="mb-8 grid gap-8 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h3 className="mb-4 font-display text-2xl font-bold">
              <span className="text-gradient">{SITE.name}</span>
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-white/50">
              {SITE.role} — {SITE.tagline}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-sm text-white/50 hover:text-primary"
                >
                  {social.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
            <h4 className="mb-4 text-lg font-semibold text-white">Get In Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-white/50">
                <span>📍</span>
                <span>{SITE.location}</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📧</span>
                <a href={`mailto:${SITE.email}`} className="text-white/50 hover:text-primary">
                  {SITE.email}
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center gap-4 border-t border-white/10 pt-8 text-sm text-white/50 md:flex-row md:justify-between"
        >
          <p>© {currentYear} {SITE.name}. Built with Next.js, Tailwind & Framer Motion.</p>
          <p>Designed & Developed in Denver</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
