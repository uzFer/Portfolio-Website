const hamburgerMenu = document.querySelector(".navbar__toggle");
const menuLinks = document.querySelector(".navbar__menu");

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle("active");
  menuLinks.classList.toggle("active");
};

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("active");
  menuLinks.classList.toggle("active");
})

document.querySelectorAll(".navbar__links").forEach(n => n.addEventListener("click", () => {
  hamburgerMenu.classList.remove("active");
  menuLinks.classList.remove("active");
}))
