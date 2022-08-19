// execute script after page is loaded

// toggle button
const toggle = document.getElementById("nav-toggle"),
  collapse = document.getElementById("nav-collapse"),
  body = document.querySelector("body"),
  particles = document.createElement("tag");

if (toggle) {
  toggle.addEventListener("click", () => {
    collapse.classList.toggle("active");
  });
}

document.addEventListener("mousemove", function (e) {
  let x = e.offsetX;
  let y = e.offsetY;
  particles.style.left = x + "px";
  particles.style.top = y + "px";

  body.appendChild(particles);

  setTimeout(() => {
    particles.remove();
  }, 2000);
});
