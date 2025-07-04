try {
    const hamburgerButton = document.querySelector(".hamburger");
    const closeButton = document.querySelector(".close");
    const menu = document.querySelector(".menu");

    hamburgerButton.addEventListener("click", () => {
        try {
            menu.classList.add("active");
        }
        catch (err) {
            const message = err.message;
            console.error("Error opening menu:", message);
        }
    });

    closeButton.addEventListener("click", () => {
        try {
            menu.classList.remove("active");
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