'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (props) {
  var app = props.app,
      twilioClient = props.twilioClient,
      sendCat = props.sendCat;

  // app.set('view engine', 'pug');
  // app.set('views', path.join(__dirname, '../views'));
  // app.use(express.static(path.join(__dirname, '../../static')));

  app.use(_bodyParser2.default.urlencoded({ extended: false }));

  app.get('/', function (req, res) {
    res.send('<h1>AUTOCAT IS RUNNING RIGHT MEOW</h1>');
  });

  app.post('/message', function (req, res) {
    console.log('SMS Recieved');
    var body = req.body;

    var number = body.From;

    sendCat(number).then(function (res) {
      console.log('Sent Cat to ' + number);
    }).catch(function (err) {
      return console.error(err);
    });

    res.end();
  });

  app.post('/message-fail', function (req, res) {
    console.log('SMS Failed');
  });

  app.post('/call', function (req, res) {
    console.log('Call Recieved');
  });

  app.post('/call-fail', function (req, res) {
    console.log('Call Failed');
  });

  app.post('/call-status', function (req, res) {
    console.log('Call Status Changed');
  });
};

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }