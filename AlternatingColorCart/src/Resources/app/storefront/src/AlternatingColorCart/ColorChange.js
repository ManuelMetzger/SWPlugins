import Plugin from "src/plugin-system/plugin.class";

export default class ColorChange extends Plugin {
  init() {
    console.info("Plugin ColorChange Loaded");
    this.modifyEventListeners();
  }

  modifyEventListeners() {
    this.el.removeEventListener("click", this.toggleClassName.bind(this));
    this.el.addEventListener("click", this.toggleClassName.bind(this));
  }

  toggleClassName() {
    this.el.classList.add("cart-added");
    setTimeout(()=>{this.el.classList.remove("cart-added")}, 1000)
  }
}
