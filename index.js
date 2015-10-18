var app         = require('app');
var Tray        = require('tray');

app.on('ready', function(){

  // Create new tray with specific icon template
app.on('ready', function(){
  var contextMenu = require('./menu');
  var appIcon = new Tray('./assets/iconTemplate.png');

  app.dock.hide();
  appIcon.setContextMenu(contextMenu);
});
