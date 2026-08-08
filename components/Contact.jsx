"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { SITE } from "@/lib/config";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const body = new FormData(e.target);

    try {
      const response = await fetch(`https://formsubmit.co/${SITE.email}`, {
        method: "POST",
        body,
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactInfo = [
    {
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      label: "Email",
      value: SITE.email,
      link: `mailto:${SITE.email}`,
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13.828 10.172a4 4 0 010 5.656l-3 3a4 4 0 01-5.656-5.656l1.5-1.5M10.172 13.828a4 4 0 010-5.656l3-3a4 4 0 015.656 5.656l-1.5 1.5"
          />
        </svg>
      ),
      label: "LinkedIn",
      value: "Kassee Homolka",
      link: SITE.linkedin,
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: "Location",
      value: SITE.location,
      link: null,
    },
  ];

  return (
    <section id="contact" className="relative overflow-hidden px-4 py-20 md:px-8">
      <div className="absolute top-20 left-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 right-0 h-96 w-96 rounded-full bg-violet/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-display text-5xl font-bold md:text-6xl">
            Get In Touch
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-foreground/60">
            Have a project in mind, or just want to talk shop? I&apos;d love to hear from you.
          </p>
          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-primary to-violet" />
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="mb-4 text-2xl font-bold text-foreground">Let&apos;s Connect</h3>
              <p className="mb-8 leading-relaxed text-foreground/60">
                Based in Denver, but open to remote opportunities that align with my values.
                Whether it&apos;s to skim my resume, collaborate, or grab a coffee, I&apos;m open
                to talk virtually or in person.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info) => {
                const content = (
                  <>
                    <div className="text-primary-text" aria-hidden="true">{info.icon}</div>
                    <div className="flex-1">
                      <div className="text-sm text-foreground/60">{info.label}</div>
                      <div className="text-foreground">{info.value}</div>
                    </div>
                  </>
                );

                return info.link ? (
                  <motion.a
                    key={info.label}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 rounded-lg border border-primary/10 bg-gradient-to-r from-primary/5 to-violet/5 p-4 transition-colors hover:border-primary/30"
                  >
                    {content}
                  </motion.a>
                ) : (
                  <div
                    key={info.label}
                    className="flex items-center gap-4 rounded-lg border border-primary/10 bg-gradient-to-r from-primary/5 to-violet/5 p-4"
                  >
                    {content}
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              {["name", "email", "subject"].map((field, i) => (
                <motion.div
                  key={field}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <label htmlFor={field} className="mb-2 block text-sm font-medium text-foreground capitalize">
                    {field}
                    {field !== "subject" && !formData[field] && (
                      <span className="text-flamingo-text" aria-hidden="true">
                        {" "}
                        *
                      </span>
                    )}
                  </label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    id={field}
                    name={field}
                    autoComplete={field === "email" ? "email" : field === "name" ? "name" : "off"}
                    value={formData[field]}
                    onChange={handleChange}
                    onFocus={() => setFocusedField(field)}
                    onBlur={() => setFocusedField(null)}
                    required={field !== "subject"}
                    className="w-full rounded-lg border-2 bg-dark px-4 py-3 text-foreground outline-none transition-colors"
                    style={{ borderColor: focusedField === field ? "#3f98e0" : "rgba(63, 152, 224, 0.2)" }}
                  />
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  rows="5"
                  className="w-full resize-none rounded-lg border-2 bg-dark px-4 py-3 text-foreground outline-none transition-colors"
                  style={{ borderColor: focusedField === "message" ? "#3f98e0" : "rgba(63, 152, 224, 0.2)" }}
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full rounded-lg bg-gradient-to-r from-primary to-violet px-8 py-4 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>

              {submitStatus === "success" && (
                <motion.div
                  role="status"
                  aria-live="polite"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-lg border border-mint/30 bg-mint/10 p-4 text-center text-mint-text"
                >
                  Message sent – I&apos;ll get back to you soon!
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  role="alert"
                  aria-live="assertive"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-lg border border-flamingo/30 bg-flamingo/10 p-4 text-center text-flamingo-text"
                >
                  Something went wrong – please email me directly.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
