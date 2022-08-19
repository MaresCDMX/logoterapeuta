// execute script after page is loaded

// toggle button
const toggle = document.getElementById("nav-toggle"),
  collapse = document.getElementById("nav-collapse");

if (toggle) {
  toggle.addEventListener("click", () => {
    collapse.classList.toggle("active");
  });
}
