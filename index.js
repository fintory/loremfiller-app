// Electron dependencies
var app         = require('app');
var Tray        = require('tray');
var contextMenu = require('./menu');

app.on('ready', function(){
  // Hide the app icon from the dock
  app.dock.hide();

  // Create new tray with specific icon template
  var appIcon = new Tray('./assets/iconTemplate.png');
  appIcon.setContextMenu(contextMenu);
});
