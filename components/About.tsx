"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 sm:py-32" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex items-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-sm font-mono text-muted-foreground">{"// ABOUT"}</h2>
          <motion.div
            className="h-[1px] flex-1 bg-border"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="flex justify-center md:justify-start"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="relative w-64 h-64 rounded-2xl border-2 border-primary overflow-hidden">
              <Image
                src="/personal-photo.jpg"
                alt="Alim Maknojia"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <p className="text-lg text-foreground leading-relaxed">
              CS senior at the University of Houston specializing in data
              science and machine learning. Experienced in building intelligent
              systems and scalable software solutions.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Graduating soon and actively seeking opportunities in ML
              engineering and software development.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
