import {readBasketItems, saveBasketItems} from "/src/js/basket/utils.js";

export const updateProductQuantity = (productId, newQuantity) => {
    const basket = readBasketItems("basket");
    const updatedBasket = basket.map(item => {
        if (item.id === productId) {
            return {...item, quantity: newQuantity};
        }
        return item;
    });
    saveBasketItems("basket", updatedBasket);
}