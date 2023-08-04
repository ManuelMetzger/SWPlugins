 // Import all necessary Storefront plugins
 import ColorChange from './AlternatingColorCart/color-change';

 // Register your plugin via the existing PluginManager
 const PluginManager = window.PluginManager;
 PluginManager.register('ColorChange', ColorChange, '.btn-details-buy',{
  "timeOutMillisec": "5000"
 });