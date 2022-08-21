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

/*document.addEventListener("mousemove", function (e) {
  let x = e.offsetX;
  let y = e.offsetY;
  particles.style.left = x + "px";
  particles.style.top = y + "px";
  let size = Math.random() * 10;
  particles.style.width = 2 + size + "px";
  particles.style.height = 2 + size + "px";

  let transformValue = Math.random() * 360;
  particles.style.transform = "rotate(" + transformValue + "deg)";

  body.appendChild(particles);

  setTimeout(() => {
    particles.remove();
  }, 2000);
});*/

/*==================== SHOW SCROLL UP ====================*/

function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*==================== Form  ====================*/

const $form = document.querySelector("#form");

$form.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();
  const form = new FormData(this);
  if (
    form.get("project") === "" ||
    form.get("name") === "" ||
    form.get("email") === "" ||
    form.get("message") === ""
  ) {
    swal({
      title: "Error!",
      text: "Los campos del formulario deben llenarse!",
      icon: "warning",
    });
  } else {
    const response = await fetch(this.action, {
      method: this.method,
      body: form,
      headers: {
        Accept: "application/json",
      },
    });
    this.reset();
    let traductor = $checkbox.checked;
    if (traductor == true) {
      swal({
        title: "Gracias!",
        text: "Tu mensaje ha sido enviado!",
        icon: "success",
      });
    }
  }
}
