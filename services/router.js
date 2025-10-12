const Router = {
  init: () => {
    document.querySelectorAll("a.navlink").forEach((a) => {
      a.addEventListener("click", (e) => {
        e.preventDefault();
        const path = e.target.getAttribute("href");
        if (!path) return;
        Router.go(path);
      });
    });

    window.addEventListener("popstate", (e) => {
      Router.go(e.state.path, false);
    });
    Router.go(location.pathname);
  },
  go: (path, add = true) => {
    if (add) {
      history.pushState({ path }, null, path);
    }
    let pageElement = null;
    switch (path) {
      case "/":
        pageElement = document.createElement("menu-page");
        break;
      case "/order":
        pageElement = document.createElement("order-page");
        break;
      default:
        if (!path.startsWith("/product/")) return;
        pageElement = document.createElement("details-page");
        const id = path.substring(path.lastIndexOf("/") + 1);
        pageElement.dataset.id = id;
    }
    if (!pageElement) return;
    const main = document.querySelector("main");
    main.innerHTML = ``;
    main.appendChild(pageElement);
    window.scrollX = 0;
    window.scrollY = 0;
  },
};

export default Router;
