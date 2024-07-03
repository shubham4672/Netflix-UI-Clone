const toggles = document.querySelectorAll(".faq-toggle, .faq-title");
toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    update();
    toggle.parentNode.classList.toggle("active");
  });
});

function update() {
  toggles.forEach((toggle) => {
    toggle.parentNode.classList.remove("active");
  });
}
