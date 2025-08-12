import StorageHandler from "/src/js/handlers/storage_handler.js";
import ElementHandler from "/src/js/handlers/element_handler.js";

export const deleteProduct = (productId, element) => {
    const cart = StorageHandler.readStorageItems("cart");
    const updatedCart = cart.filter(product => product.id !== productId);
    StorageHandler.saveStorageItems("cart", updatedCart);
    ElementHandler.removeElement(element);
}