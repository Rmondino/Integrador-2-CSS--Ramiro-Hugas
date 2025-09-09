const menuBtn = document.querySelector(".nav-container span.material-symbols-outlined");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
