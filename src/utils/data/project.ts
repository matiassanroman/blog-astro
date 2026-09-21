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
    description:
      "Aplicación para crear y gestionar hábitos diarios, registrar tus avances y visualizar tu progreso de forma sencilla.",
    tags: ["React Native", "Expo", "JavaScript"],
    image: "/projectImage/habit-check.png",
    href: "https://github.com/matiassanroman/habitus",
    articleHref: "habit-check",
  },

  {
    title: "SMEvolutionSport",
    description:
      "Aplicación web para la gestión de socios, pagos y actividades de un gimnasio.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "PWA"],
    image: "/projectImage/smevolution-sport.png",
    href: "https://smevolutionsport.ar",
    articleHref: "smevolution-sport",
  },

  {
    title: "Smart Expenses",
    description:
      "Automatización para procesar y clasificar movimientos bancarios a partir de correos electrónicos y registrarlos en Google Sheets.",
    tags: ["Python", "GitHub Actions", "Gmail", "Google Sheets"],
    image: "/projectImage/smart-expenses.png",
    href: "https://github.com/matiassanroman/smart_expenses",
    articleHref: "smart-expenses",
  },

  {
    title: "Portfolio Website",
    description:
      "Portfolio personal con mi experiencia profesional, proyectos personales y artículos sobre desarrollo de software y tecnologías que exploro y utilizo.",
    tags: ["Astro", "Tailwind CSS", "TypeScript"],
    image: "/projectImage/blog.png",
    href: "https://github.com/matiassanroman/blog-astro",
    articleHref: "portfolio-website",
  },
];
