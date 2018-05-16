'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (props) {
  var app = props.app;

  // app.set('view engine', 'pug');
  // app.set('views', path.join(__dirname, '../views'));
  // app.use(express.static(path.join(__dirname, '../../static')));

  app.get('/', function (req, res) {
    res.send('<h1>AUTOCAT IS RUNNING RIGHT MEOW</h1>');
  });

  app.post('/message', function (req, res) {
    console.log('SMS Recieved');
    console.log(res);
  });

  app.post('/message-fail', function (req, res) {
    console.log('SMS Failed');
    console.log(res);
  });

  app.post('/call', function (req, res) {
    console.log('Call Recieved');
    console.log(res);
  });

  app.post('/call-fail', function (req, res) {
    console.log('Call Failed');
    console.log(res);
  });
};

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }