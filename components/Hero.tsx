"use client";

import { motion } from "framer-motion";
import { SocialIcons } from "./SocialIcons";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden telemetry-grid">
      {/* Animated grid fade-in overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      />

      {/* Multiple racing lines at different speeds */}
      <motion.div
        className="absolute top-[45%] left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent"
        initial={{ x: "-100%", opacity: 0.6 }}
        animate={{ x: "200%" }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
      />
      <motion.div
        className="absolute top-1/2 left-0 w-full h-[2px] bg-primary shadow-[0_0_10px_rgba(228,98,70,0.5)]"
        initial={{ x: "-100%" }}
        animate={{ x: "200%" }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      />
      <motion.div
        className="absolute top-[55%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent"
        initial={{ x: "-100%", opacity: 0.4 }}
        animate={{ x: "200%" }}
        transition={{ duration: 1.4, ease: "easeOut", delay: 0.15 }}
      />

      {/* Corner frame decorations */}
      <motion.div
        className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-primary/30"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      />
      <motion.div
        className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-primary/30"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.6 }}
      />
      <motion.div
        className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-primary/30"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.7 }}
      />
      <motion.div
        className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-primary/30"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.8 }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracked-wide relative">
              ALIM MAKNOJIA
              {/* Subtle glow effect on name */}
              <span className="absolute inset-0 blur-2xl opacity-20 text-primary" aria-hidden="true">
                ALIM MAKNOJIA
              </span>
            </h1>
            {/* Accent line under name */}
            <motion.div
              className="h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent mt-4"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            />
          </motion.div>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-mono"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
          >
            CS Senior • Data Science & ML • University of Houston
          </motion.p>

          <motion.p
            className="text-base sm:text-lg text-muted-foreground max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
          >
            Building intelligent systems with precision and purpose
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
          >
            <SocialIcons />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
