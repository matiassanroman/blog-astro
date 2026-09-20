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
    image: "/articlesImages/blog-placeholder-1.jpg",
    href: "https://play.google.com/",
    articleHref: "habit-check",
  },

  {
    title: "SMEvolutionSport",
    description:
      "Aplicación web para la gestión y digitalización de procesos de un gimnasio.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "PWA"],
    image: "/articlesImages/blog-placeholder-1.jpg",
    href: "https://smevolutionsport.ar/",
    articleHref: "smevolution-sport",
  },

  {
    title: "Smart Expenses",
    description:
      "Automatización para procesar y clasificar movimientos bancarios y registrarlos en Google Sheets.",
    tags: ["Python", "GitHub Actions", "Gmail", "Google Sheets"],
    image: "/articlesImages/blog-placeholder-1.jpg",
    href: "#",
    articleHref: "smart-expenses",
  },

  {
    title: "Portfolio Website",
    description:
      "Sitio web personal para mostrar proyectos y artículos, construido con Astro y Tailwind CSS.",
    tags: ["Astro", "Tailwind CSS", "TypeScript"],
    image: "/articlesImages/blog-placeholder-1.jpg",
    href: "#",
    articleHref: "portfolio-website",
  },
];
