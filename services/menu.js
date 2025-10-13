import API from "./api.js";

export const loadData = async () => {
  app.store.menu = await API.fetchMenu();
};

export const getProductById = async (id) => {
  if (app.store.menu === null) {
    await loadData();
  }
  for (const category of app.store.menu) {
    for (const product of category.products) {
      if (product.id === id) {
        return product;
      }
    }
  }
  return null;
};
