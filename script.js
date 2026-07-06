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

const root = document.documentElement;
const themeBtn = document.getElementById("theme-toggle");

// تحميل الثيم المحفوظ
const savedTheme = localStorage.getItem("theme") || "light";
root.setAttribute("data-theme", savedTheme);

// تغيير الثيم
themeBtn.addEventListener("click", () => {
  let current = root.getAttribute("data-theme");
  let newTheme = current === "light" ? "dark" : "light";

  root.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});



const form = document.getElementById("subscribeForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

function showError(input, message) {
    removeError(input);

    const error = document.createElement("small");
    error.className = "error-message";
    error.textContent = message;

    input.classList.add("error");
    input.parentElement.appendChild(error);
}

function removeError(input) {
    input.classList.remove("error");

    const error = input.parentElement.querySelector(".error-message");

    if (error) {
        error.remove();
    }
}

function validateName() {

    const value = nameInput.value.trim();

    if (value === "") {
        showError(nameInput, "Name is required");
        return false;
    }

    removeError(nameInput);
    return true;
}

function validateEmail() {

    const value = emailInput.value.trim();

    if (value === "") {
        showError(emailInput, "Email is required");
        return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(value)) {
        showError(emailInput, "Please enter a valid email");
        return false;
    }

    removeError(emailInput);
    return true;
}

nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const nameValid = validateName();
    const emailValid = validateEmail();

    if (!nameValid || !emailValid) {
        return;
    }

    alert("Success!");

    form.reset();

    removeError(nameInput);
    removeError(emailInput);

});