'use strict';

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _twilio = require('twilio');

var _twilio2 = _interopRequireDefault(_twilio);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config(); /* ========================================================================
                            * index.js
                            * SUMMARY: autocat index
                            * AUTHOR: David Robinson
                            * ========================================================================
                            */

var _process$env = process.env,
    NODE_ENV = _process$env.NODE_ENV,
    PORT = _process$env.PORT,
    TWILIO_API_ACCOUNT = _process$env.TWILIO_API_ACCOUNT,
    TWILIO_API_KEY = _process$env.TWILIO_API_KEY,
    TWILIO_NUMBER = _process$env.TWILIO_NUMBER;


var port = PORT || 3333;
var address = NODE_ENV === 'production' ? '0.0.0.0' : 'localhost';

var app = (0, _express2.default)();
var server = _http2.default.Server(app);

var twilioClient = new _twilio2.default(TWILIO_API_ACCOUNT, TWILIO_API_KEY);
var catAPI = 'http://thecatapi.com/api/images/get';

console.log(_chalk2.default.cyan('AUTOCAT IS LIVE RIGHT MEOW'));

server.listen(port, address, function () {
  var address = server.address();
  var serverAddress = 'http://' + address.address + ':' + address.port;
  console.log(_chalk2.default.green.bold.underline('\nAUTOCAT Listening on ' + port + '\n'));
  console.log(_chalk2.default.cyan.bold('\t> ' + serverAddress + '\n'));

  (0, _routes2.default)({ app: app, port: port, twilioClient: twilioClient });
});