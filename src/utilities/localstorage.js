const getStoredCart = () => {
    const storeCartString = localStorage.getItem('cart');
    if (storeCartString) {
        return JSON.parse(storeCartString);
    }
    return [];
}

const saveCartToLocalStorage = cart => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

const addToLocalStorage = id => {
    const cart = getStoredCart();
    cart.push(id);

    saveCartToLocalStorage(cart)
}

const RemoveFromLocalStorage = id => {
    const cart = getStoredCart();
    const remaining = cart.filter(idx => idx !== id);
    saveCartToLocalStorage(remaining);
}

export {addToLocalStorage, getStoredCart, RemoveFromLocalStorage};