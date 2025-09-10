import ElementHandler from "/src/js/handlers/element_handler.js";
import DocumentHandler from "/src/js/handlers/document_handler.js";

try {
    const header = document.querySelector(".header");
    const headerMobileLogo = header.querySelector(".header__mobile-logo");
    const headerSearchBlock = header.querySelector(".header__search-block");
    const headerInfo = header.querySelector(".header__info");
    const headerAddition = header.querySelector(".header__addition");
    const headerAdditionCartButtonContainer = header.querySelector(".header .container .header__addition .cart-button-container");
    const headerModificationPoint = document.querySelector(".header-modification-point");
    const promoCartButtonContainer = document.querySelector(".promo .container .cart-button-container");
    let cartButton = null;

    const modifyHeader = () => {
        const reachedBoundary = DocumentHandler.isReachedBoundary(headerModificationPoint);
        if (reachedBoundary) {
            header.classList.add("dark");
            headerMobileLogo.classList.add("active");
            headerInfo.classList.add("hidden");
            headerAddition.classList.add("active");
            headerAdditionCartButtonContainer.appendChild(cartButton);
        }

        if (!reachedBoundary) {
            header.classList.remove("dark");
            headerMobileLogo.classList.remove("active");
            promoCartButtonContainer.appendChild(cartButton);
            headerAddition.classList.remove("active");
        }

        const headerSearchBlockIsActive = headerSearchBlock.classList.contains("active");
        if (!reachedBoundary && !headerSearchBlockIsActive) {
            headerInfo.classList.remove("hidden");
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
                        src: "/src/icons/ui/cart.svg",
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