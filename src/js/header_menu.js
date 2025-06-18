const headerCatalog = document.querySelector(".header__catalog");
const headerMenu = document.querySelector(".header__menu");

headerCatalog.addEventListener("mouseenter", () => {
    headerMenu.classList.add("active");
});

headerCatalog.addEventListener("mouseleave", () => {
    headerMenu.classList.remove("active");
});