try {
    const hamburgerButton = document.querySelector(".hamburger");
    const menuCloseButton = document.querySelector(".menu__close");
    const menu = document.querySelector(".menu");
    const body = document.body;

    hamburgerButton.addEventListener("click", () => {
        try {
            menu.classList.add("active");
            body.style.overflow = "hidden";
        }
        catch (err) {
            const message = err.message;
            console.error("Error opening menu:", message);
        }
    });

    menuCloseButton.addEventListener("click", () => {
        try {
            menu.classList.remove("active");
            body.style.overflow = "";
        }
        catch (err) {
            const message = err.message;
            console.error("Error closing menu:", message);
        }
    });
}
catch (err) {
    const message = err.message;
    console.error("Error during initialization:", message);
}