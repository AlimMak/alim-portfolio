"use client";

import { motion } from "framer-motion";
import { SocialIcons } from "./SocialIcons";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Racing line animation */}
      <motion.div
        className="absolute top-1/2 left-0 w-full h-[2px] bg-primary"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-8">
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracked-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            ALIM MAKNOJIA
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground"
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
