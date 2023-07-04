const hamburgerMenuBtn = document.querySelector(".header__hamburger-menu");
const headerMobileNav = document.querySelector(".header__mobile-nav");

hamburgerMenuBtn.addEventListener("click", () => {
  hamburgerMenuBtn.classList.toggle("active");
  headerMobileNav.classList.toggle("active");
});

