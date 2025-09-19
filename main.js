
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtnIcon.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-2-line");
});
nav.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-2-line");
});



window.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header-container');
  header.style.opacity = 0;
  header.style.transform = 'translateY(40px)';
  setTimeout(() => {
    header.style.transition = 'opacity 1s, transform 1s';
    header.style.opacity = 1;
    header.style.transform = 'translateY(0)';
  }, 100);
});


const scrollRevealOption = {
  distance : "50px",
  origin : "bottom",
  duration : 1000,
};
ScrollReveal().reveal(".header-image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header-content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header-content h1", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header-content p", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".header-content .header-btn", {
  ...scrollRevealOption,
  delay: 2000,
});
ScrollReveal().reveal(".header-content .socials", {
  ...scrollRevealOption,
  delay: 2500,
});
ScrollReveal().reveal(".header-bar", {
  ...scrollRevealOption,
  delay: 3000,
});


ScrollReveal().reveal(".service-card", {
    ...scrollRevealOption,
    interval: 200
});

ScrollReveal().reveal(".testimonial-card", {
    ...scrollRevealOption,
    interval: 200
});

ScrollReveal().reveal(".contact-info", {
    ...scrollRevealOption,
    origin: "left"
});

ScrollReveal().reveal(".contact-form", {
    ...scrollRevealOption,
    origin: "right",
    delay: 200
});

ScrollReveal().reveal(".footer-content > div", {
    ...scrollRevealOption,
    interval: 200
});

ScrollReveal().reveal('.section-header', { 
    duration: 1000, 
    origin: 'top', 
    distance: '50px', 
    reset: true 
});

ScrollReveal().reveal('.about-card, .service-card, .portfolio-card, .blog-card, .testimonial-card', { 
    duration: 1200, 
    origin: 'bottom', 
    distance: '40px', 
    interval: 100, 
    reset: true 
});
