import StorageHandler from "/src/js/handlers/storage_handler.js";

export const addProduct = (desiredProduct) => {
    const id = desiredProduct.dataset.id;
    const img = desiredProduct.querySelector(".desired-product__img img");
    const name = desiredProduct.querySelector(".desired-product__name");
    const price = desiredProduct.querySelector(".desired-product__price");

    const Product = {
        id,
        imageSource: img.src,
        name: name.textContent.trim(),
        price: price.textContent.trim(),
        quantity: 1,
    };

    const cart = StorageHandler.readStorageItems("cart");
    const alreadyAdded = cart.some(item => item.id === id);
    if (!alreadyAdded) {
        cart.push(Product);
        StorageHandler.saveStorageItems("cart", cart);
    }
}