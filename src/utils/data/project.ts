export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  href: string;
  articleHref: string;
}

export const projects: Project[] = [
  {
    title: "Habit Check",
    description: "Aplicación móvil para el seguimiento diario de hábitos.",
    tags: ["React Native", "Expo", "JavaScript"],
    image: "/projectImage/habit-check.webp",
    href: "https://play.google.com/",
    articleHref: "habit-check",
  },

  {
    title: "SMEvolutionSport",
    description:
      "Aplicación web para la gestión y digitalización de procesos de un gimnasio.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "PWA"],
    image: "/projectImage/smevolution-sport.webp",
    href: "https://smevolutionsport.ar/",
    articleHref: "smevolution-sport",
  },

  {
    title: "Smart Expenses",
    description:
      "Automatización para procesar y clasificar movimientos bancarios y registrarlos en Google Sheets.",
    tags: ["Python", "GitHub Actions", "Gmail", "Google Sheets"],
    image: "/projectImage/smart-expenses.webp",
    href: "#",
    articleHref: "smart-expenses",
  },

  {
    title: "Portfolio Website",
    description:
      "Sitio web personal para mostrar proyectos y artículos, construido con Astro y Tailwind CSS.",
    tags: ["Astro", "Tailwind CSS", "TypeScript"],
    image: "/projectImage/blog.webp",
    href: "#",
    articleHref: "portfolio-website",
  },
];
