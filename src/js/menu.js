const hamburgerButton = document.querySelector(".hamburger");
const closeButton = document.querySelector(".close");
const menu = document.querySelector(".menu");

hamburgerButton.addEventListener("click", () => {
    menu.classList.toggle("active");
});

closeButton.addEventListener("click", () => {
    menu.classList.toggle("active");
});