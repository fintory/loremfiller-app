var Menu        = require('menu');
var toClipboard = require('./toClipboard');

module.exports = Menu.buildFromTemplate([{
  label: 'Choose Amount:',
  type: 'normal',
  enabled: false
}, {
  type: 'separator'
}, {
  label: 'Words',
  type: 'submenu',
  submenu: [
    { label: '1', click: function() { toClipboard(1, 'words'); } },
    { label: '2', click: function() { toClipboard(2, 'words'); } },
    { label: '3', click: function() { toClipboard(3, 'words'); } },
    { label: '4', click: function() { toClipboard(4, 'words'); } },
    { label: '5', click: function() { toClipboard(5, 'words'); } }
  ]
}, {
  label: 'Sentence',
  type: 'submenu',
  submenu: [
    { label: '1', click: function() { toClipboard(1, 'sentences'); } },
    { label: '2', click: function() { toClipboard(2, 'sentences'); } },
    { label: '3', click: function() { toClipboard(3, 'sentences'); } },
    { label: '4', click: function() { toClipboard(4, 'sentences'); } },
    { label: '5', click: function() { toClipboard(5, 'sentences'); } }
  ]
}, {
  label: 'Paragraph',
  type: 'submenu',
  submenu: [
    { label: '1', click: function() { toClipboard(1, 'paragraphs'); } },
    { label: '2', click: function() { toClipboard(2, 'paragraphs'); } },
    { label: '3', click: function() { toClipboard(3, 'paragraphs'); } },
    { label: '4', click: function() { toClipboard(4, 'paragraphs'); } },
    { label: '5', click: function() { toClipboard(5, 'paragraphs'); } }
  ]
}, {
  type: 'separator'
}, {
  label: 'Quit',
  type: 'normal',
  click: function() {
    app.quit();
  }
}]);
