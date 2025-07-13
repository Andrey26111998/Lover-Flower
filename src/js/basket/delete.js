import {readBasketItems, saveBasketItems} from "/src/js/basket/utils.js";

export const deleteProduct = (productId) => {
    const basket = readBasketItems("basket");
    const updatedBasket = basket.filter(p => p.id !== productId);
    saveBasketItems("basket", updatedBasket);
}