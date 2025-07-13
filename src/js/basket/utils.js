export const saveBasketItems = (key, basket) => {
    localStorage.setItem(key, JSON.stringify(basket));
}

export const readBasketItems = (key) => {
    return JSON.parse(localStorage.getItem(key)) || [];
}