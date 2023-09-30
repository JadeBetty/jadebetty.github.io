document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });
  }
  else {
    console.error("Element(s) not found.");
  }

  document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
  }))
});

function scrollToSection(event) {
  event.preventDefault();
  const target = document.querySelector(event.target.getAttribute("href"));
  target.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}