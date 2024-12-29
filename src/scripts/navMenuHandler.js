
document.getElementById("hamburger").onclick = function toggleMenu() {
  const navMenu = document.getElementById("navbar-default");
  navMenu.classList.toggle("hidden");
};

document.addEventListener("DOMContentLoaded", () => {
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
});
