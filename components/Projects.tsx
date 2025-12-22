"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    name: "Job Autofill",
    description: "Browser extension for automating job application forms",
    tags: ["Python", "Automation"],
    githubUrl: "https://github.com/alimmaknojia/job-autofill", // UPDATE: Replace with actual URL
  },
  {
    name: "Car Market Analyzer",
    description: "Data pipeline for car market trend insights",
    tags: ["Python", "Data Science", "ML"],
    githubUrl: "https://github.com/alimmaknojia/car-market-analyzer", // UPDATE: Replace with actual URL
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section id="projects" className="py-24 sm:py-32 bg-muted/30 relative overflow-hidden" ref={ref}>
      {/* Red accent elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-primary/5 rounded-full blur-3xl" />

      {/* Animated racing stripe on scroll */}
      <motion.div
        className="absolute left-0 top-1/2 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={isInView ? { scaleX: 1, opacity: 0.3 } : { scaleX: 0, opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="flex items-center gap-4 mb-12"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-sm font-mono text-primary">
            {"// PROJECTS"}
          </h2>
          <motion.div
            className="h-[2px] flex-1 bg-gradient-to-r from-primary via-border to-transparent"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
          />
          {/* Small animated dot */}
          <motion.div
            className="w-2 h-2 bg-primary rounded-full"
            animate={isInView ? { scale: [1, 1.5, 1] } : { scale: 1 }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
