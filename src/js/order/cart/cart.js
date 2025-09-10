import {addProduct} from "/src/js/order/cart/add.js";
import {renderCartItems, updateCartCount, updateCartSum} from "/src/js/order/cart/display.js";
import {updateProductQuantity} from "/src/js/order/cart/edit.js";
import {deleteProduct} from "/src/js/order/cart/delete.js";
import DocumentHandler from "/src/js/handlers/document_handler.js";

try {
    const headerAdditionCartButtonContainer = document.querySelector(".header .container .header__addition .cart-button-container");
    const headerModificationPoint = document.querySelector(".header-modification-point");
    const promoCartButtonContainer = document.querySelector(".promo .container .cart-button-container");
    const desiredProductButtons = document.querySelectorAll(".desired-product__button");
    const cartButtonContainers = document.querySelectorAll(".cart-button-container");
    const body = document.body;
    const overlayCart = document.querySelector(".overlay-cart");
    const overlayCartButtonContainer = document.querySelector(".overlay-cart .cart-button-container");
    const cartCloseButton = overlayCart.querySelector(".close");
    const cartItemsBlocks = document.querySelectorAll(".cart-items");
    const cartResultPrices = document.querySelectorAll(".cart-result__price");

    const showProducts = () => {
        for (const cartItemsBlock of cartItemsBlocks) {
            renderCartItems(cartItemsBlock);
        }
    }

    const showCartCount = () => {
        const cartButtonCounter = document.querySelector(".cart-button__count");
        updateCartCount(cartButtonCounter);
    }

    const showCartSum = () => {
        for (const cartResultPrice of cartResultPrices) {
            updateCartSum(cartResultPrice);
        }
    }

    document.addEventListener("DOMContentLoaded", () => {
        showProducts();
        showCartCount()
        showCartSum();
    });

    for (const desiredProductButton of desiredProductButtons) {
        desiredProductButton.addEventListener("click", () => {
            const desiredProduct = desiredProductButton.closest(".desired-product");
            addProduct(desiredProduct);
            showProducts()
            showCartCount()
            showCartSum();
        });
    }

    for (const cartButtonContainer of cartButtonContainers) {
        cartButtonContainer.addEventListener("click", (event) => {
            const clickedElement = event.currentTarget;
            const cartButton = clickedElement.querySelector(".cart-button");

            body.style.overflow = "hidden";
            overlayCart.classList.add("active");
            overlayCartButtonContainer.appendChild(cartButton);

            showProducts()
            showCartCount()
            showCartSum();
        });
    }

    cartCloseButton.addEventListener("click", () => {
        overlayCart.classList.remove("active");
        body.style.overflow = "";

        const reachedBoundary = DocumentHandler.isReachedBoundary(headerModificationPoint);
        const cartButton = document.querySelector(".cart-button");
        if (reachedBoundary) {
            headerAdditionCartButtonContainer.appendChild(cartButton);
        } else {
            promoCartButtonContainer.appendChild(cartButton);
        }
    })

    for (const cartItemsBlock of cartItemsBlocks) {
        cartItemsBlock.addEventListener("click", (event) => {
            const clickedElement = event.target;

            const cartItem = clickedElement.closest(".cart-item");
            const cartItemIdentifier = cartItem.dataset.id;
            const cartItemQuantityValue = cartItem.querySelector(".cart-item__quantity-value");

            let currentCartItemQuantityValue = parseInt(cartItemQuantityValue.value) || 1;
            const minimum = parseInt(cartItemQuantityValue.min) || 1;
            if (clickedElement.matches(".cart-item__quantity-minus") && currentCartItemQuantityValue > minimum) {
                cartItemQuantityValue.value = --currentCartItemQuantityValue;
                updateProductQuantity(cartItemIdentifier, currentCartItemQuantityValue);
            }

            const maximum = parseInt(cartItemQuantityValue.max) || 100;
            if (clickedElement.matches(".cart-item__quantity-plus") && currentCartItemQuantityValue < maximum) {
                cartItemQuantityValue.value = ++currentCartItemQuantityValue;
                updateProductQuantity(cartItemIdentifier, currentCartItemQuantityValue);
            }

            if (clickedElement.matches(".cart-item__delete")) {
                const li = cartItem.closest("li");
                deleteProduct(cartItemIdentifier, li);
            }

            showCartCount()
            showCartSum()
        });
    }
} catch (error) {
    const errorMessage = error.message;
    console.error("Cart error:", errorMessage);
}