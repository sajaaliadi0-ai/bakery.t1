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