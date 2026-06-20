/**
 * Single source of truth for all portfolio content.
 * Edit values here — every section reads from this file.
 */

export const profile = {
  name: "William Ralloma",
  fullName: "William Francis Ralloma",
  role: "Technical Support Engineer",
  subRole: "WordPress & Hosting Support Specialist",
  email: "william.ralloma@gmail.com",
  phone: "+63 917 130 6580",
  location: "Cebu City, Philippines",
  links: {
    email: "mailto:william.ralloma@gmail.com",
    linkedin: "https://www.linkedin.com/in/william-francis-ralloma-3b33668b/",
    github: "https://github.com/williamralloma",
    facebook: "https://www.facebook.com/bisdakfreelancer/",
  },
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const heroStats = [
  { value: "10+ Years", label: "Experience" },
  { value: "WordPress", label: "& Hosting" },
  { value: "Customer-first", label: "Support" },
];

export const skillsMarquee = [
  "WordPress",
  "DNS",
  "SSL",
  "cPanel",
  "WHM",
  "Email Deliverability",
  "Technical Support",
  "Customer Service",
  "Linux Hosting",
  "Troubleshooting",
  "Divi",
  "WooCommerce",
];

export const aboutCards = [
  {
    title: "Root-cause troubleshooting",
    description:
      "I dig past the symptom to the source — reading logs, reproducing the issue, and fixing the actual cause so it stays fixed.",
  },
  {
    title: "Clear customer communication",
    description:
      "Translating technical problems into plain language, keeping customers calm and informed at every step of the resolution.",
  },
  {
    title: "Hosting & WordPress support",
    description:
      "A decade of WordPress, cPanel, DNS, and server-side troubleshooting across high-volume support environments.",
  },
  {
    title: "Documentation & QA mindset",
    description:
      "Building KB articles, training material, and QA processes that prevent the same ticket from coming back twice.",
  },
];

export type SkillCategory = {
  title: string;
  icon: "wordpress" | "server" | "mail" | "support";
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "WordPress & Websites",
    icon: "wordpress",
    skills: [
      "WordPress",
      "Divi",
      "WooCommerce",
      "Elementor",
      "Plugin troubleshooting",
      "Theme debugging",
    ],
  },
  {
    title: "Hosting & Infrastructure",
    icon: "server",
    skills: ["cPanel", "WHM", "Linux hosting", "DNS", "SSL/TLS", "Backups", "Migrations"],
  },
  {
    title: "Email & Domains",
    icon: "mail",
    skills: [
      "Google Workspace",
      "Outlook",
      "MX records",
      "SPF",
      "DKIM",
      "DMARC",
      "Email deliverability",
    ],
  },
  {
    title: "Support & Operations",
    icon: "support",
    skills: [
      "Ticket support",
      "Live chat",
      "Customer escalation",
      "QA",
      "Training materials",
      "Documentation",
    ],
  },
];

export type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  description: string;
  responsibilities: string[];
};

export const experience: ExperienceItem[] = [
  {
    title: "Technical Support",
    company: "Flywheel Hosting",
    period: "Mar 2025 — Jul 2025",
    description:
      "Managed-WordPress hosting support across chat and tickets, focused on uptime and fast resolution.",
    responsibilities: [
      "Provided customer support via Intercom chat and Zendesk",
      "Troubleshot DNS, SSL, NGINX, and website 500 errors",
      "Used WP-CLI to diagnose and resolve WordPress issues",
      "Investigated and resolved speed-optimization problems",
    ],
  },
  {
    title: "Technical Support",
    company: "Elegant Themes (Divi)",
    period: "May 2017 — Dec 2024",
    description:
      "Long-tenure support role for the Divi, Extra, Bloom, and Monarch product line, blending support with hands-on customization.",
    responsibilities: [
      "Provided customer support via Intercom chat",
      "Assisted with Divi, Extra, Bloom, and Monarch products",
      "Delivered CSS and jQuery solutions for customizations",
      "Conducted QA assessments and issue resolution with browser dev tools",
    ],
  },
  {
    title: "Technical Support",
    company: "RightPress (Pricepep) — WooCommerce Plugin",
    period: "May 2016 — Jan 2018",
    description:
      "Specialist support for premium WooCommerce pricing and conditional-logic plugins.",
    responsibilities: [
      "Supported WooCommerce plugin users via Zendesk",
      "Resolved plugin-related issues and edge cases",
      "Maintained and improved knowledge-base articles",
    ],
  },
  {
    title: "Technical Support",
    company: "Hosting Australia",
    period: "May 2015 — Apr 2017",
    description: "Funnel, opt-in, and hosting setup support for marketing-focused customers.",
    responsibilities: [
      "Provided support for sales funnels and opt-in page setup",
      "Troubleshot broken pages and setup issues",
    ],
  },
  {
    title: "Technical Support",
    company: "Webfix Solutions (Remote)",
    period: "Jan 2013 — May 2015",
    description: "Remote support covering DNS, server troubleshooting, and customer tickets.",
    responsibilities: [
      "Delivered support through chat and ticket systems",
      "Assisted with DNS management and server troubleshooting",
    ],
  },
  {
    title: "QA Training Officer",
    company: "IONOS, Cebu City",
    period: "Nov 2013 — Apr 2014",
    description: "Owned quality assurance and onboarding for the technical support floor.",
    responsibilities: [
      "Conducted training for new hires and technical refreshers",
      "Created training modules and performance-improvement plans",
      "Led interviews and developed internal documentation",
    ],
  },
  {
    title: "Senior Technical Advisor",
    company: "Fasthosts Internet, Ltd., Cebu City",
    period: "Apr 2009 — Apr 2011",
    description: "Escalation point for complex hosting issues, plus team coaching and reporting.",
    responsibilities: [
      "Handled escalated technical support issues",
      "Created shift and debriefing reports",
      "Provided coaching and team leadership",
    ],
  },
  {
    title: "Advanced Technical Advisor",
    company: "IONOS, Cebu City",
    period: "Apr 2007 — Apr 2009",
    description: "Advanced hosting support across DNS, domains, Exchange, SharePoint, and eShop.",
    responsibilities: [
      "Responded to basic and advanced hosting support requests",
      "Supported DNS, domains, Exchange, SharePoint, and eShop products",
    ],
  },
];

export type Project = {
  title: string;
  summary: string;
  tags: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    title: "WordPress Troubleshooting Playbook",
    summary:
      "A repeatable diagnostic flow for white-screen, 500-error, and plugin-conflict cases — cutting average resolution time on recurring tickets.",
    tags: ["WordPress", "WP-CLI", "Debugging"],
  },
  {
    title: "WooCommerce Pricing Calculator",
    summary:
      "Conditional-logic pricing and quote calculator for a WooCommerce store, built with custom hooks and tested across cart edge cases.",
    tags: ["WooCommerce", "PHP", "jQuery"],
  },
  {
    title: "DNS & Email Deliverability Audit",
    summary:
      "End-to-end audit of MX, SPF, DKIM, and DMARC records to move a client's mail out of spam folders and restore reliable delivery.",
    tags: ["DNS", "SPF/DKIM/DMARC", "Email"],
  },
  {
    title: "Website Performance Improvement",
    summary:
      "Speed-optimization pass on a slow WordPress site — caching, asset cleanup, and server tuning to improve Core Web Vitals.",
    tags: ["Performance", "Caching", "Core Web Vitals"],
  },
  {
    title: "Hosting Migration Support",
    summary:
      "Zero-downtime migrations between hosts and servers, handling DNS cutover, SSL re-issue, and post-migration QA.",
    tags: ["Migration", "cPanel", "SSL"],
  },
];

export type EducationItem = {
  title: string;
  institution: string;
  period: string;
  description?: string;
};

export const education: EducationItem[] = [
  {
    title: "Bachelor of Science in Information Technology",
    institution: "University of San Jose – Recoletos, Cebu City",
    period: "2003 — 2007",
    description:
      "Foundation in software, web technologies, and systems that underpins a career in hosting and technical support.",
  },
];

export const certifications = [
  "WordPress Support & WP-CLI",
  "cPanel / WHM Administration",
  "DNS, SSL & Email Deliverability",
  "Quality Assurance & Customer Support",
];

export const languages = ["English", "Tagalog", "Bisaya"];
