import StorageHandler from "/src/js/handlers/storage_handler.js";

export const updateProductQuantity = (productId, newQuantity) => {
    const cart = StorageHandler.readStorageItems("cart");

    const updatedCart = cart.map(item =>
        item.id === productId ? {...item, quantity: newQuantity} : item
    );

    StorageHandler.saveStorageItems("cart", updatedCart);
}