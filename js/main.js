const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

// Sticky navbar
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

// Mobile menu toggle
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close menu عند الضغط على رابط
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});