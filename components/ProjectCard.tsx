"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  name: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  externalUrl?: string;
}

export function ProjectCard({
  name,
  description,
  tags,
  githubUrl,
  externalUrl,
}: ProjectCardProps) {
  return (
    <motion.div
      className="group relative border border-border rounded-lg p-6 bg-card hover:border-primary transition-snappy glow-on-hover overflow-hidden"
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
    >
      {/* Scan line effect on hover */}
      <div className="absolute inset-0 scan-line opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Noise texture overlay */}
      <div className="absolute inset-0 noise-texture opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Top accent line */}
      <motion.div
        className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />

      <div className="space-y-4 relative z-10">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-fast">
            {name}
          </h3>
          <div className="flex gap-2">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-fast hover:scale-110"
                aria-label="GitHub repository"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {externalUrl && (
              <a
                href={externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-fast hover:scale-110"
                aria-label="External link"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        <p className="text-muted-foreground leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <motion.span
              key={tag}
              className="px-3 py-1 text-xs font-mono bg-muted text-muted-foreground rounded-md border border-transparent group-hover:border-primary/20 transition-all"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Bottom right accent indicator */}
      <div className="absolute bottom-2 right-2 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}
