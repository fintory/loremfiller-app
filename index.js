var app         = require('app');
var Tray        = require('tray');

app.on('ready', function(){
  app.dock.hide();

  // Create new tray with specific icon template
app.on('ready', function(){
  var contextMenu = require('./menu');
  var appIcon = new Tray('./assets/iconTemplate.png');
  appIcon.setContextMenu(contextMenu);
});
