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


document.querySelector('button[type="submit"]').addEventListener('click', function(event) {
  event.preventDefault();
  alert('This button does nothing because I don\'t know any PHP and Github pages does not support PHP. However you can email me at contact@jadebetty.is-a.dev.');
});
