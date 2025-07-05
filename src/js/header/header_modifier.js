try {
    const header = document.querySelector(".header");
    const secondSection = document.querySelector(".second-section");
    const headerInfo = document.querySelector(".header__info");
    const headerPhone = document.querySelector(".header__phone");

    window.addEventListener("scroll", () => {
        try {
            const scrollPosition = window.scrollY;
            const secondSectionTop = secondSection.offsetTop;
            const viewportHeight = window.innerHeight;
            const boundaryPosition = secondSectionTop - viewportHeight;

            if (scrollPosition >= boundaryPosition) {
                header.classList.add("header--dark");
                headerInfo.style.display = "none";
                headerPhone.style.display = "flex";
                //TODO
            }
            else {
                header.classList.remove("header--dark");
                headerInfo.style.display = "flex";
                headerPhone.style.display = "none";
                //TODO
            }
        }
        catch (err) {
            const message = err.message;
            console.error("Error while processing:", message);
        }
    });
}
catch (err) {
    const message = err.message;
    console.error("Error during initialization:", message);
}