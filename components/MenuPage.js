export class MenuPage extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const root = this.attachShadow({ mode: "open" });
    const template = document.getElementById("menu-page-template");
    const content = template.content.cloneNode(true);
    root.appendChild(content);
  }
}

customElements.define("menu-page", MenuPage);
