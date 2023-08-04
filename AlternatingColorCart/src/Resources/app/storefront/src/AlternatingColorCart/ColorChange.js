import Plugin from "src/plugin-system/plugin.class";

export default class ColorChange extends Plugin {
  init() {
    console.info("Plugin ColorChange Loaded");

    this.getButton();
    this.modifyEventListeners();
  }

  getButton() {
    console.log(this);
  }

  modifyEventListeners() {
    this.el.removeEventListener("click", this.toggleClassName.bind(this));
    this.el.addEventListener("click", this.toggleClassName.bind(this));
  }

  toggleClassName() {
    this.el.classList.add("cart-added");
    console.log(this.el.classList);
    setTimeout(()=>{this.el.classList.remove("cart-added")}, 1000)
    console.log(this.el.classList);
  }
}
