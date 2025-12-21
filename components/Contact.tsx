"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail } from "lucide-react";
import { SocialIcons } from "./SocialIcons";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 sm:py-32" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex items-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-sm font-mono text-muted-foreground">
            {"// CONTACT"}
          </h2>
          <motion.div
            className="h-[1px] flex-1 bg-border"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
          />
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {/* Status indicator */}
            <div className="flex items-center gap-3 text-foreground">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm">Currently open to opportunities</span>
            </div>

            {/* Email link */}
            <a
              href="mailto:alim.maknojia@example.com"
              className="inline-flex items-center gap-3 text-2xl sm:text-3xl font-bold hover:text-primary transition-fast group"
            >
              <Mail className="w-8 h-8 group-hover:scale-110 transition-snappy" />
              <span>alim.maknojia@example.com</span>
            </a>

            {/* UPDATE: Replace with your actual email */}
            <p className="text-sm text-muted-foreground">
              Feel free to reach out for opportunities, collaborations, or just
              to connect.
            </p>

            {/* Social icons */}
            <div className="pt-4">
              <SocialIcons />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
