const headerCatalog = document.querySelector(".header__catalog");
const headerSubmenu = document.querySelector(".header__submenu");

headerCatalog.addEventListener("mouseenter", () => {
    headerSubmenu.classList.toggle("active");
});

headerCatalog.addEventListener("mouseleave", () => {
    headerSubmenu.classList.toggle("active");
});