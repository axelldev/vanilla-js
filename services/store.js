const Store = {
  menu: null,
  cart: [],
};

const wrappedStore = new Proxy(Store, {
  set: (target, prop, value) => {
    target[prop] = value;
    if (prop === "menu") {
      window.dispatchEvent(new Event("appmenuchange"));
    }
    if (prop === "cart") {
      window.dispatchEvent(new Event("appcartchange"));
    }
    return true;
  },
});

export const getCartCount = () =>
  app.store.cart.reduce((acc, item) => acc + item.quantity, 0);

export default wrappedStore;
