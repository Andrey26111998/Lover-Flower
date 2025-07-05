try {
    const headerCatalog = document.querySelector(".header__catalog");
    const headerSubmenu = document.querySelector(".header__submenu");

    headerCatalog.addEventListener("mouseenter", () => {
        try {
            headerSubmenu.classList.add("active");
        }
        catch (err) {
            const message = err.message;
            console.error("Error on hover:", message);
        }
    });

    headerCatalog.addEventListener("mouseleave", () => {
        try {
            headerSubmenu.classList.remove("active");
        }
        catch (err) {
            const message = err.message;
            console.error("Error when cursor leaves:", message);
        }
    });
}
catch (err) {
    const message = err.message;
    console.error("Error during initialization:", message);
}