 // Import all necessary Storefront plugins
 import ColorChange from './AlternatingColorCart/color-change';

 // Register your plugin via the existing PluginManager
 const PluginManager = window.PluginManager;
 PluginManager.override('AddToCart', ColorChange, '[data-add-to-cart]');