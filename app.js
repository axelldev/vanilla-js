import Store from "./services/store.js";
import Router from "./services/router.js";
import { loadData } from "./services/menu.js";

window.app = {};
app.store = Store;
app.router = Router;

window.addEventListener("DOMContentLoaded", () => {
  loadData();
  app.router.init();
});
