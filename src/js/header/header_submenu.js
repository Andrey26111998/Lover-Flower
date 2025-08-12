try {
    const headerCatalogMenu = document.querySelector(".header__catalog");
    const headerCatalogSubmenu = document.querySelector(".header__submenu");

    headerCatalogMenu.addEventListener("mouseenter", (event) => {
        headerCatalogSubmenu.classList.add("active");
    });

    headerCatalogMenu.addEventListener("mouseleave", (event) => {
        headerCatalogSubmenu.classList.remove("active");
    });
} catch (error) {
    const errorMessage = error.message;
    console.error("Header submenu error:", errorMessage);
}