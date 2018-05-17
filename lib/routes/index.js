'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (props) {
  var app = props.app,
      twilioClient = props.twilioClient,
      catAPI = props.catAPI,
      sendCat = props.sendCat;

  // app.set('view engine', 'pug');
  // app.set('views', path.join(__dirname, '../views'));
  // app.use(express.static(path.join(__dirname, '../../static')));

  app.use(_bodyParser2.default.urlencoded({ extended: false }));

  app.get('/', function (req, res) {
    res.send('<h1>AUTOCAT IS RUNNING RIGHT MEOW</h1>');
  });

  app.post('/message', function (req, res) {
    var body = req.body;

    var number = body.From;

    var twiml = new MessagingResponse();
    var message = twiml.message();
    message.media(catAPI);
    message.body('Here\'s a Cat');

    console.log('SMS Recieved, Sending Cat to: ' + number);

    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
  });

  app.post('/message-fail', function (req, res) {
    console.log('SMS Failed');
    res.end();
  });

  app.post('/call', function (req, res) {
    console.log('Call Recieved');
    res.end();
  });

  app.post('/call-fail', function (req, res) {
    console.log('Call Failed');
    res.end();
  });

  app.post('/call-status', function (req, res) {
    console.log('Call Status Changed');
    res.end();
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

var _twilio = require('twilio');

var _twilio2 = _interopRequireDefault(_twilio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MessagingResponse = _twilio2.default.twiml.MessagingResponse; /* ========================================================================
                                                                   * routes/index.js
                                                                   * SUMMARY: Routes Index
                                                                   * AUTHOR: David Robinson
                                                                   * ========================================================================
                                                                   */

/**
 * Module Dependencies
 */