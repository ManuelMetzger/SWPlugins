import Plugin from "src/plugin-system/plugin.class";

export default class ColorChange extends Plugin {
  static options = {
    colorSwitchClass: "cart-added",
    timeOutMillisec: 1000
  }

  init() {
    this.modifyEventListeners();
  }

  modifyEventListeners() {
    this.el.removeEventListener("click", this.toggleClassName.bind(this));
    this.el.addEventListener("click", this.toggleClassName.bind(this));
  }

  toggleClassName() {
    this.el.classList.add(this.options.colorSwitchClass);
    setTimeout(() => {
      this.el.classList.remove(this.options.colorSwitchClass);
    }, this.options.timeOutMillisec);
  }
}
