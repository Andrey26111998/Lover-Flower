import {readBasketItems} from "/src/js/basket/utils.js";

export const createBasketItem = (product) => {
    const li = document.createElement("li");

    const basketItem = document.createElement("div");
    basketItem.classList.add("basket-item", "basket__item");
    basketItem.dataset.id = product.id;

    const basketItemImageContainer = document.createElement("div");
    basketItemImageContainer.classList.add("basket-item__img");

    const basketItemImage = document.createElement("img");
    basketItemImage.src = product.imageSource;
    basketItemImage.alt = product.name;
    basketItemImageContainer.appendChild(basketItemImage);

    const basketItemContent = document.createElement("div");
    basketItemContent.classList.add("basket-item-content", "basket-item__content");

    const basketItemContentRow1 = document.createElement("div");
    basketItemContentRow1.classList.add("basket-item-content__row");

    const basketItemLink = document.createElement("a");
    basketItemLink.href = "#";
    basketItemLink.classList.add("basket-item__link");
    basketItemLink.textContent = product.name;

    const basketItemPrice = document.createElement("span");
    basketItemPrice.classList.add("basket-item__price");
    basketItemPrice.textContent = product.price;

    basketItemContentRow1.appendChild(basketItemLink);
    basketItemContentRow1.appendChild(basketItemPrice);

    const basketItemContentRow2 = document.createElement("div");
    basketItemContentRow2.classList.add("basket-item-content__row");

    const basketItemQuantityForm = document.createElement("form");
    basketItemQuantityForm.action = "#";
    const basketItemQuantity = document.createElement("div");
    basketItemQuantity.classList.add("quantity", "basket-item__quantity");

    const basketItemQuantityMinus = document.createElement("button");
    basketItemQuantityMinus.type = "button";
    basketItemQuantityMinus.classList.add("basket-item__quantity-minus");
    basketItemQuantityMinus.textContent = "−";

    const basketItemQuantityValue = document.createElement("input");
    basketItemQuantityValue.type = "number";
    basketItemQuantityValue.name = "quantity";
    basketItemQuantityValue.min = "1";
    basketItemQuantityValue.max = "100";
    basketItemQuantityValue.step = "1";
    basketItemQuantityValue.value = product.quantity;
    basketItemQuantityValue.classList.add("basket-item__quantity-value");

    const basketItemQuantityPlus = document.createElement("button");
    basketItemQuantityPlus.type = "button";
    basketItemQuantityPlus.classList.add("basket-item__quantity-plus");
    basketItemQuantityPlus.textContent = "+";

    basketItemQuantity.appendChild(basketItemQuantityMinus);
    basketItemQuantity.appendChild(basketItemQuantityValue);
    basketItemQuantity.appendChild(basketItemQuantityPlus);
    basketItemQuantityForm.appendChild(basketItemQuantity);

    const basketItemDeleteForm = document.createElement("form");
    const basketItemDeleteButton = document.createElement("button");
    basketItemDeleteButton.type = "button";
    basketItemDeleteButton.classList.add("basket-item__delete");
    basketItemDeleteButton.textContent = "Удалить";
    basketItemDeleteForm.appendChild(basketItemDeleteButton);

    basketItemContentRow2.appendChild(basketItemQuantityForm);
    basketItemContentRow2.appendChild(basketItemDeleteForm);

    basketItemContent.appendChild(basketItemContentRow1);
    basketItemContent.appendChild(basketItemContentRow2);

    basketItem.appendChild(basketItemImageContainer);
    basketItem.appendChild(basketItemContent);
    li.appendChild(basketItem);
    return li;
}

export const renderBasketItems = (basketItems) => {
    basketItems.innerHTML = "";

    const basket = readBasketItems("basket");
    for (const product of basket) {
        const basketItem = createBasketItem(product);
        basketItems.appendChild(basketItem);
    }
}

export const updateBasketSum = (sumElement) => {
    const basket = readBasketItems("basket");

    const sum = basket.reduce((sum, item) => {
        const price = parseFloat(item.price.replace(/[^\d.]/g, ""));
        return sum + price * item.quantity;
    }, 0);

    sumElement.textContent = `${sum.toFixed(2)} руб.`;
}

export const updateBasketCount = (countElement) => {
    const basket = readBasketItems("basket");
    countElement.textContent = basket.reduce((sum, item) => sum + item.quantity, 0);
}