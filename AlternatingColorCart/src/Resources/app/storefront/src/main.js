 // Import all necessary Storefront plugins
 import ColorChange from './AlternatingColorCart/ColorChange';

 // Register your plugin via the existing PluginManager
 const PluginManager = window.PluginManager;
 PluginManager.register('ColorChange', ColorChange, '.btn-details-buy');