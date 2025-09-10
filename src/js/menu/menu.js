try {
    const body = document.body;
    const hamburgerButton = document.querySelector(".header .hamburger");
    const menu = document.querySelector(".menu");
    const menuCloseButton = menu.querySelector(".close");

    hamburgerButton.addEventListener("click", () => {
        body.style.overflow = "hidden";
        menu.classList.add("active");
    });

    menuCloseButton.addEventListener("click", () => {
        body.style.overflow = "";
        menu.classList.remove("active");
    });
} catch (error) {
    const errorMessage = error.message;
    console.error("Menu error:", errorMessage);
}