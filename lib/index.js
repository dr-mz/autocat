'use strict';

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _twilio = require('twilio');

var _twilio2 = _interopRequireDefault(_twilio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ========================================================================
 * index.js
 * SUMMARY: autocat index
 * AUTHOR: David Robinson
 * ========================================================================
 */

_dotenv2.default.config();

var _process$env = process.env,
    TWILIO_API_ACCOUNT = _process$env.TWILIO_API_ACCOUNT,
    TWILIO_API_KEY = _process$env.TWILIO_API_KEY,
    TWILIO_NUMBER = _process$env.TWILIO_NUMBER;

var twilioClient = new _twilio2.default(TWILIO_API_ACCOUNT, TWILIO_API_KEY);
var catAPI = 'http://thecatapi.com/api/images/get';

console.log('AUTOCAT IS LIVE RIGHT MEOW');