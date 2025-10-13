import { getProductById } from "../services/menu.js";

export class DetailsPage extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
    this.init();
  }

  connectedCallback() {
    this.render();
  }

  async loadCSS() {
    const request = await fetch("/components/DetailsPage.css");
    const styles = document.createElement("style");
    styles.textContent = await request.text();
    this.root.appendChild(styles);
  }

  init() {
    const template = document.querySelector("#details-page-template");
    const content = template.content.cloneNode(true);
    this.root.appendChild(content);
    this.loadCSS();
  }

  async render() {
    const productId = this.dataset.productId;
    if (!productId) return;
    this.product = await getProductById(parseInt(productId));
    if (!this.product) return;
    this.root.querySelector("h2").textContent = this.product.name;
    this.root.querySelector("img").src = `/data/images/${this.product.image}`;
    this.root.querySelector(".description").textContent =
      this.product.description;
    this.root.querySelector(".price").textContent = this.product.price;
    this.root.querySelector("button").addEventListener("click", () => {
      //TODO: addToCart(this.product.id);
      app.router.go("/order");
    });
  }
}

customElements.define("details-page", DetailsPage);
