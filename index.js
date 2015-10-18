// Electron dependencies
var app         = require('app');
var Tray        = require('tray');

app.on('ready', function(){
  // Hide the app icon from the dock
  app.dock.hide();

  // Create new tray with specific icon template
  var contextMenu = require('./menu');
  var appIcon = new Tray('./assets/iconTemplate.png');
  appIcon.setContextMenu(contextMenu);
});
