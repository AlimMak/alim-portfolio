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
      className="group relative border border-border rounded-lg p-6 bg-card hover:border-primary transition-snappy"
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
    >
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-bold text-foreground">{name}</h3>
          <div className="flex gap-2">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-fast"
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
                className="text-muted-foreground hover:text-primary transition-fast"
                aria-label="External link"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        <p className="text-muted-foreground leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-mono bg-muted text-muted-foreground rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
