try {
    const body = document.body;
    const overlayOrderCall = document.querySelector(".overlay-order-call");
    const orderCallButton = document.querySelector(".order-call-button");
    const orderCallCloseButton = overlayOrderCall.querySelector(".close");

    orderCallButton.addEventListener("click", (event) => {
        body.style.overflow = "hidden";
        overlayOrderCall.classList.add("active");
    });

    orderCallCloseButton.addEventListener("click", (event) => {
        overlayOrderCall.classList.remove("active");
        body.style.overflow = "";
    });
} catch (error) {
    const errorMessage = error.message;
    console.error("Order call modal error:", errorMessage);
}