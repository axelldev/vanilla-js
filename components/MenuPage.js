export class MenuPage extends HTMLElement {
  constructor() {
    super();
    this.root = this.attachShadow({ mode: "open" });
    this.loadCSS();
  }

  async loadCSS() {
    const req = await fetch("/components/MenuPage.css");
    const css = await req.text();
    const styles = document.createElement("style");
    this.root.styles = this.root.appendChild(styles);
    styles.textContent = css;
  }

  connectedCallback() {
    const template = document.getElementById("menu-page-template");
    const content = template.content.cloneNode(true);
    this.root.appendChild(content);
    window.addEventListener("appmenuchange", () => {
      this.render();
    });
    this.render();
  }

  render() {
    const menu = this.root.querySelector("#menu");
    if (app.store.menu) {
      menu.innerHTML = "";
      for (const category of app.store.menu) {
        const liCategory = document.createElement("li");
        liCategory.innerHTML = `
          <h3>${category.name}</h3>
          <ul class="category">
          </ul>
        `;
        menu.appendChild(liCategory);
        category.products.forEach((product) => {
          const item = document.createElement("li");
          item.dataset.product = JSON.stringify(product);
          item.innerText = product.name;
          liCategory.getElementsByClassName("category");
          liCategory?.appendChild(item);
        });
      }
    } else {
      menu.innerHTML = `loading ...`;
    }
  }
}

customElements.define("menu-page", MenuPage);
