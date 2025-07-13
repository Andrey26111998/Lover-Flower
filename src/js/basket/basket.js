import {addProduct} from "/src/js/basket/add.js";
import {renderBasketItems, updateBasketSum} from "/src/js/basket/display";
import {updateProductQuantity} from "/src/js/basket/edit";
import {deleteProduct} from "/src/js/basket/delete.js";

const desiredProductButtons = document.querySelectorAll(".desired-product__button");
const basketButton = document.querySelector(".basket-button");
const body = document.body;
const overlayBasket = document.querySelector(".overlay-basket");
const basketCloseButton = document.querySelector(".basket__close");
const basketItems = document.querySelector(".basket__items");
const basketResult = document.querySelector(".basket__result-value");

for (const desiredProductButton of desiredProductButtons) {
    desiredProductButton.addEventListener("click", () => {
        const desiredProduct = desiredProductButton.closest(".desired-product");
        addProduct(desiredProduct);
        renderBasketItems(basketItems);
        updateBasketSum(basketResult);
    });
}

basketButton.addEventListener("click", () => {
    try {
        body.style.overflow = "hidden";
        overlayBasket.classList.add("active");
        renderBasketItems(basketItems);
        updateBasketSum(basketResult);

    } catch (err) {
        const message = err.message;
        console.error("Error opening menu:", message);
    }
});

basketCloseButton.addEventListener("click", () => {
    try {
        body.style.overflow = "";
        overlayBasket.classList.remove("active");
    } catch (err) {
        const message = err.message;
        console.error("Error closing menu:", message);
    }
});

basketItems.addEventListener("click", (e) => {
    const item = e.target.closest(".basket-item");
    if (!item) {
        return;
    }

    const basketItemIdentifier = item.dataset.id;

    const basketItemQuantityValue = item.querySelector(".basket-item__quantity-value");
    let currentBasketItemQuantityValue = parseInt(basketItemQuantityValue.value) || 1;
    const min = parseInt(basketItemQuantityValue.min) || 1;
    const max = parseInt(basketItemQuantityValue.max) || 100;

    const basketItemQuantityMinus = e.target.classList.contains("basket-item__quantity-minus");
    if (basketItemQuantityMinus && currentBasketItemQuantityValue > min) {
        basketItemQuantityValue.value = --currentBasketItemQuantityValue;
        updateProductQuantity(basketItemIdentifier, currentBasketItemQuantityValue);
        updateBasketSum(basketResult);
    }

    const basketItemQuantityPlus = e.target.classList.contains("basket-item__quantity-plus");
    if (basketItemQuantityPlus && currentBasketItemQuantityValue < max) {
        basketItemQuantityValue.value = ++currentBasketItemQuantityValue;
        updateProductQuantity(basketItemIdentifier, currentBasketItemQuantityValue);
        updateBasketSum(basketResult);
    }

    const basketItemDelete = e.target.classList.contains("basket-item__delete");
    if (basketItemDelete) {
        deleteProduct(basketItemIdentifier);
        const li = item.closest("li")
        li.remove();
        updateBasketSum(basketResult);
    }
});