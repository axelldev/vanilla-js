import Store, { getCartCount } from "./services/store.js";
import { loadData } from "./services/menu.js";
import "./components/ProductItem.js";
import "./components/MenuPage.js";
import "./components/DetailsPage.js";
import "./components/OrderPage.js";
import "./components/CartItem.js";
import Router from "./services/router.js";

window.app = {};
app.store = Store;
app.router = Router;

window.addEventListener("DOMContentLoaded", () => {
  loadData();
  app.router.init();
});

window.addEventListener("appcartchange", () => {
  const badge = document.getElementById("badge");
  const count = getCartCount();
  badge.innerText = count;
  badge.hidden = count === 0;
});
