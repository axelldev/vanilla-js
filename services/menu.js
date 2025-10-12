import API from "./api.js";

export const loadData = async () => {
  app.store.menu = await API.fetchMenu();
};
