var app         = require('app');
var Tray        = require('tray');

require('crash-reporter').start();
app.dock.hide();

app.on('ready', function(){
  var contextMenu = require('./menu');
  var appIcon = new Tray('./assets/iconTemplate.png');

  appIcon.setContextMenu(contextMenu(app));
});
