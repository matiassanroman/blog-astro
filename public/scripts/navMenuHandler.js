function initNavMenu() {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navbar-default");

  if (hamburger) {
    hamburger.onclick = function toggleMenu() {
      navMenu?.classList.toggle("hidden");
    };
  }

  const links = document.querySelectorAll(".nav-link");
  const currentPath = window.location.pathname;

  links.forEach((link) => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add(
        "bg-blue-700",
        "text-white",
        "md:bg-transparent",
        "md:text-blue-700"
      );
    } else {
      link.classList.remove(
        "bg-blue-700",
        "text-white",
        "md:bg-transparent",
        "md:text-blue-700"
      );
    }
  });
}

// Ejecutar en la carga inicial del DOM
document.addEventListener("DOMContentLoaded", initNavMenu);

// Escuchar el evento de Astro para re-ejecutar el script después de una transición
document.addEventListener("astro:after-swap", initNavMenu);
