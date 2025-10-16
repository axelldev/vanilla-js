import { getProductById } from "./menu.js";

export const addToCart = async (id) => {
  const product = await getProductById(id);
  const isOnTheCart = app.store.cart.some((p) => {
    return p.product.id === id;
  });

  if (isOnTheCart) {
    app.store.cart = app.store.cart.map((p) =>
      p.product.id === id ? { ...p, quantity: p.quantity + 1 } : p
    );
  } else {
    app.store.cart = [...app.store.cart, { product, quantity: 1 }];
  }
};

export const removeFromCart = (id) => {
  const newCart = app.store.cart.filter((p) => p.product.id !== id);
  app.store.cart = newCart;
};
