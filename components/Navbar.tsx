"use client";

import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [hoveredLink, setHoveredLink] = useState("");
  const [hoveredLogo, setHoveredLogo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "projects", "contact"];
      const scrollPosition = window.scrollY;

      // If at the very top, set to Home (empty string for #)
      if (scrollPosition < 100) {
        setActiveSection("");
        return;
      }

      // Check which section is currently in view
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Section is active if its top is within viewport and takes up significant space
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            return;
          }
        }
      }
    };

    // Initial check
    handleScroll();

    // Listen to scroll events
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a
              href="#"
              onMouseEnter={() => setHoveredLogo(true)}
              onMouseLeave={() => setHoveredLogo(false)}
              style={{
                fontSize: "1.125rem",
                fontWeight: "bold",
                letterSpacing: "0.05em",
                transition: "all 0.2s ease",
                transform: hoveredLogo ? "scale(1.05)" : "scale(1)",
                color: hoveredLogo ? "rgb(228, 98, 70)" : "inherit",
              }}
            >
              ALIM MAKNOJIA
            </a>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => {
                const sectionId = link.href === "#" ? "" : link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                const isHovered = hoveredLink === link.name;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onMouseEnter={() => setHoveredLink(link.name)}
                    onMouseLeave={() => setHoveredLink("")}
                    style={{
                      position: "relative",
                      fontSize: "0.875rem",
                      transition: "all 0.2s ease",
                      transform: isHovered ? "scale(1.1)" : "scale(1)",
                      color: isActive || isHovered ? "rgb(228, 98, 70)" : "inherit",
                      display: "inline-block",
                      paddingBottom: "2px",
                      textShadow: isActive || isHovered
                        ? "0 0 20px rgba(228, 98, 70, 0.5), 0 0 40px rgba(228, 98, 70, 0.3)"
                        : "none",
                    }}
                  >
                    {link.name}
                    {/* Active underline */}
                    <span
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        height: "2px",
                        backgroundColor: "rgb(228, 98, 70)",
                        width: isActive ? "100%" : "0%",
                        transition: "width 0.3s ease",
                        boxShadow: isActive
                          ? "0 0 10px rgba(228, 98, 70, 0.8), 0 0 20px rgba(228, 98, 70, 0.4)"
                          : "none",
                      }}
                    />
                  </a>
                );
              })}
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
