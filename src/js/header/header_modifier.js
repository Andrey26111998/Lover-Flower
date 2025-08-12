import ElementHandler from "/src/js/handlers/element_handler.js";
import DocumentHandler from "/src/js/handlers/document_handler.js";

try {
    const header = document.querySelector(".header");
    const headerModificationPoint = document.querySelector(".header-modification-point");
    const headerMobileLogo = document.querySelector(".header__mobile-logo");
    const headerInfo = document.querySelector(".header__info");
    const headerAddition = document.querySelector(".header__addition");
    const promoCartButtonContainer = document.querySelector(".promo .container .cart-button-container");
    const headerAdditionCartButtonContainer = document.querySelector(".header .container .header__addition .cart-button-container");
    let cartButton = null;

    const modifyHeader = () => {
        const reachedBoundary = DocumentHandler.isReachedBoundary(headerModificationPoint);
        if (reachedBoundary) {
            header.classList.add("dark");
            headerMobileLogo.classList.add("active");
            headerInfo.classList.add("hidden");
            headerAddition.classList.add("active");
            headerAdditionCartButtonContainer.appendChild(cartButton);
        } else {
            header.classList.remove("dark");
            headerMobileLogo.classList.remove("active");
            headerInfo.classList.remove("hidden");
            promoCartButtonContainer.appendChild(cartButton);
            headerAddition.classList.remove("active");
        }
    }

    document.addEventListener("DOMContentLoaded", () => {
        cartButton = ElementHandler.createElement("button", {
            classes: [
                "cart-button",
            ],
            children: [
                ElementHandler.createElement("img", {
                    attributes: {
                        alt: "cart",
                        src: "/src/icons/basket/basket.svg",
                    },
                }),
                ElementHandler.createElement("span", {
                    classes: [
                        "cart-button__count",
                    ],
                }),
            ],
        });
        modifyHeader();
    });

    window.addEventListener("scroll", () => {
        modifyHeader();
    });
} catch (error) {
    const errorMessage = error.message;
    console.error("Header modifier error:", errorMessage);
}