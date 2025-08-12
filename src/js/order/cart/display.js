import StorageHandler from "/src/js/handlers/storage_handler.js";
import ElementHandler from "/src/js/handlers/element_handler.js";

export const createCartItem = (product) => {
    const cartItemImage = ElementHandler.createElement("img", {
        attributes: {
            src: product.imageSource,
            alt: product.name,
        }
    });

    const cartItemImageContainer = ElementHandler.createElement("div", {
        classes: ["cart-item__img"],
        children: [
            cartItemImage,
        ]
    });

    const cartItemLink = ElementHandler.createElement("a", {
        classes: [
            "cart-item__link",
        ],
        properties: {
            href: "#",
            textContent: product.name,
        }
    });

    const cartItemPriceValue = ElementHandler.createElement("span", {
        classes: [
            "price-value",
        ],
        properties: {
            textContent: product.price,
        }
    });

    const cartItemPriceCurrency = ElementHandler.createElement("span", {
        classes: [
            "price-currency",
        ],
        properties: {
            textContent: "₽",
        }
    });

    const cartItemPrice = ElementHandler.createElement("span", {
        classes: [
            "cart-item__price",
        ],
        children: [
            cartItemPriceValue,
            cartItemPriceCurrency,
        ]
    });

    const cartItemRow1 = ElementHandler.createElement("div", {
        classes: [
            "cart-item-content__row",
        ],
        children: [
            cartItemLink,
            cartItemPrice,
        ]
    });

    const cartItemMinusButton = ElementHandler.createElement("button", {
        classes: [
            "cart-item__quantity-minus",
        ],
        attributes: {
            type: "button",
        },
        properties: {
            textContent: "−",
        }
    });

    const cartItemQuantityInput = ElementHandler.createElement("input", {
        classes: [
            "cart-item__quantity-value",
        ],
        attributes: {
            type: "number",
            name: "quantity",
            min: "1",
            max: "100",
            step: "1",
            value: product.quantity,
        }
    });

    const cartItemPlusButton = ElementHandler.createElement("button", {
        classes: [
            "cart-item__quantity-plus",
        ],
        attributes: {
            type: "button",
        },
        properties: {
            textContent: "+",
        }
    });

    const cartItemQuantityContainer = ElementHandler.createElement("div", {
        classes: [
            "quantity",
            "cart-item__quantity",
        ],
        children: [
            cartItemMinusButton,
            cartItemQuantityInput,
            cartItemPlusButton,
        ]
    });

    const cartItemQuantityForm = ElementHandler.createElement("form", {
        attributes: {
            action: "#",
        },
        children: [
            cartItemQuantityContainer,
        ]
    });

    const cartItemDeleteButton = ElementHandler.createElement("button", {
        classes: [
            "cart-item__delete",
        ],
        attributes: {
            type: "button",
        },
        properties: {
            textContent: "Удалить",
        }
    });

    const cartItemDeleteForm = ElementHandler.createElement("form", {
        children: [
            cartItemDeleteButton,
        ]
    });

    const cartItemRow2 = ElementHandler.createElement("div", {
        classes: [
            "cart-item-content__row",
        ],
        children: [
            cartItemQuantityForm,
            cartItemDeleteForm,
        ]
    });

    const cartItemContent = ElementHandler.createElement("div", {
        classes: [
            "cart-item-content",
            "cart-item__content",
        ],
        children: [
            cartItemRow1,
            cartItemRow2,
        ]
    });

    const cartItem = ElementHandler.createElement("div", {
        classes: [
            "cart-item",
            "cart__item",
        ],
        attributes: {
            "data-id": product.id,
        },
        children: [
            cartItemImageContainer,
            cartItemContent,
        ]
    });

    return ElementHandler.createElement("li", {
        children: [
            cartItem,
        ]
    });
}

export const renderCartItems = (cartItemsContainer) => {
    cartItemsContainer.innerHTML = "";
    const cart = StorageHandler.readStorageItems("cart");

    for (const product of cart) {
        cartItemsContainer.appendChild(createCartItem(product));
    }
}

export const updateCartSum = (sumContainer) => {
    const cart = StorageHandler.readStorageItems("cart");

    const sum = cart.reduce((sum, item) => {
        const price = parseFloat(item.price);
        return sum + price * item.quantity;
    }, 0);

    sumContainer.textContent = `${sum.toFixed(2)} руб.`;
}

export const updateCartCount = (countContainer) => {
    const cart = StorageHandler.readStorageItems("cart");
    countContainer.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}