try {
    const orderCallButton = document.querySelector(".order-call-button");
    const orderCallWindowCloseButton = document.querySelector(".order-call-window__close");
    const orderCallOverlay = document.querySelector(".order-call-overlay");
    const body = document.body;

    orderCallButton.addEventListener("click", () => {
        try {
            orderCallOverlay.classList.add("active");
            body.style.overflow = "hidden";
        }
        catch (err) {
            const message = err.message;
            console.error("Error opening window:", message);
        }
    });

    orderCallWindowCloseButton.addEventListener("click", () => {
        try {
            orderCallOverlay.classList.remove("active");
            body.style.overflow = "";
        }
        catch (err) {
            const message = err.message;
            console.error("Error closing window:", message);
        }
    });
}
catch (err) {
    const message = err.message;
    console.error("Error during initialization:", message);
}