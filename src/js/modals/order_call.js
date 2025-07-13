try {
    const orderCallButton = document.querySelector(".order-call-button");
    const modalOrderCallCloseButton = document.querySelector(".modal-order-call__close");
    const overlayOrderCall = document.querySelector(".overlay-order-call");
    const body = document.body;

    orderCallButton.addEventListener("click", () => {
        try {
            overlayOrderCall.classList.add("active");
            body.style.overflow = "hidden";
        }
        catch (err) {
            const message = err.message;
            console.error("Error opening window:", message);
        }
    });

    modalOrderCallCloseButton.addEventListener("click", () => {
        try {
            overlayOrderCall.classList.remove("active");
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