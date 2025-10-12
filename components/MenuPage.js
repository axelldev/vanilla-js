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
  }
}

customElements.define("menu-page", MenuPage);
