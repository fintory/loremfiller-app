var app         = require('app');
var Tray        = require('tray');
var join        = require('path').join;

require('crash-reporter').start();
app.dock.hide();

app.on('ready', function(){
  var contextMenu = require('./menu');
  var appIcon = new Tray(join(__dirname, 'assets/iconTemplate.png'));

  appIcon.setContextMenu(contextMenu(app));
});
