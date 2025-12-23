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
            <div className="relative">
              {/* Animated corner brackets */}
              <motion.div
                className="absolute -top-4 -left-4 w-12 h-12 border-l-2 border-t-2 border-primary"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              />
              <motion.div
                className="absolute -top-4 -right-4 w-12 h-12 border-r-2 border-t-2 border-primary"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-12 border-l-2 border-b-2 border-primary"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              />
              <motion.div
                className="absolute -bottom-4 -right-4 w-12 h-12 border-r-2 border-b-2 border-primary"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.3, delay: 0.6 }}
              />

              {/* Rotating accent lines */}
              <motion.div
                className="absolute top-1/2 left-1/2 w-80 h-80 border border-primary/20 rounded-full"
                style={{ x: "-50%", y: "-50%" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 w-72 h-72 border border-primary/10 rounded-full"
                style={{ x: "-50%", y: "-50%" }}
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />

              {/* Main photo container */}
              <div className="relative w-64 h-64 rounded-2xl border-2 border-primary overflow-hidden shadow-[0_0_30px_rgba(228,98,70,0.3)]">
                <Image
                  src="/personal-photo.jpg"
                  alt="Alim Maknojia"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Subtle scan line effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent animate-pulse" />
              </div>

              {/* Data points */}
              <motion.div
                className="absolute top-0 right-0 w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_rgba(228,98,70,0.8)]"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-0 left-0 w-2 h-2 bg-primary rounded-full shadow-[0_0_8px_rgba(228,98,70,0.6)]"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
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
              CS @ University of Houston
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Graduating soon and actively seeking opportunities.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
