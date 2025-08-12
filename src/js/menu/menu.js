try {
    const hamburgerButton = document.querySelector(".hamburger");
    const menuCloseButton = document.querySelector(".menu__close");
    const menu = document.querySelector(".menu");
    const body = document.body;

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