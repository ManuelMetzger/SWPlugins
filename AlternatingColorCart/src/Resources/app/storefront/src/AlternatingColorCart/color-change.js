import AddToCart from "src/plugin/add-to-cart/add-to-cart.plugin.js";
import HttpClient from "src/service/http-client.service";
import DomAccess from "src/helper/dom-access.helper";

export default class ColorChange extends AddToCart {
  static options = {
    timeOutMillisec: 1000,
    addProduct: "PLACEHOLDER INACTIVE",
    btnTextAddCart: "PLACEHOLDER ACTIVE",
  };

  init() {
    this._cartEL = DomAccess.querySelector(document, ".header-cart");
    this._buyBtn = DomAccess.querySelector(this.el, ".btn-buy");
    this.PluginManager = window.PluginManager;
    this._client = new HttpClient(window.accessKey, window.contextToken);
    super.init();
  }

  _openOffCanvasCart(instance, requestUrl, formData) {
    this._client.post(
      requestUrl,
      formData,
      this._afterAddItemToCart.bind(this)
    );
  }

  _afterAddItemToCart() {
    this._refreshCartValue();
    this._colorChange();
  }

  _refreshCartValue() {
    const cartWidgetEL = DomAccess.querySelector(
      this._cartEL,
      "[data-cart-widget]"
    );
    const cartWidgetInstance = this.PluginManager.getPluginInstanceFromElement(
      cartWidgetEL,
      "CartWidget"
    );
    cartWidgetInstance.fetch();
  }

  _colorChange() {
    this._buyBtn.classList.add("cart-added");
    this._buyBtn.innerText = this.options.btnTextAddCart;
    setTimeout(() => {
      this._buyBtn.classList.remove("cart-added");
      this._buyBtn.innerText = this.options.addProduct;
    }, this.options.timeOutMillisec);
  }
}
