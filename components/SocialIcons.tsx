import { SiGithub, SiLinkedin, SiLeetcode, SiYoutube } from "react-icons/si";

const socialLinks = [
  {
    name: "GitHub",
    icon: SiGithub,
    url: "https://github.com/AlimMak",
  },
  {
    name: "LinkedIn",
    icon: SiLinkedin,
    url: "https://www.linkedin.com/in/alimmak04/",
  },
  {
    name: "YouTube",
    icon: SiYoutube,
    url: "https://youtube.com", 
  },
  {
    name: "LeetCode",
    icon: SiLeetcode,
    url: "https://leetcode.com/u/AlimMaknojia/",
  },
];

export function SocialIcons() {
  return (
    <div className="flex items-center gap-6">
      {socialLinks.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-fast hover:scale-110"
            aria-label={social.name}
            title={social.name}
          >
            <Icon className="w-10 h-10" />
          </a>
        );
      })}
    </div>
  );
}
