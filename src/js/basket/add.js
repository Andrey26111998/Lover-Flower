import {readBasketItems, saveBasketItems} from "/src/js/basket/utils.js";

export const addProduct = (desiredProduct) => {
    const id = desiredProduct.dataset.id;
    const imageSource = desiredProduct.querySelector(".desired-product__img img").getAttribute("src");
    const name = desiredProduct.querySelector(".desired-product__name").textContent.trim();
    const price = desiredProduct.querySelector(".desired-product__price--new").textContent.trim();
    if (!id || !imageSource || !name || !price) {
        return;
    }

    const product = {
        id,
        imageSource,
        name,
        price,
        quantity: 1,
    };

    const basket = readBasketItems("basket");

    const alreadyInBasket = basket.some(item => item.id === product.id);
    if (alreadyInBasket) {
        return;
    }

    basket.push(product);
    saveBasketItems("basket", basket);
}