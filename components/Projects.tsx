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
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 sm:py-32 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex items-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-sm font-mono text-muted-foreground">
            {"// PROJECTS"}
          </h2>
          <motion.div
            className="h-[1px] flex-1 bg-border"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
