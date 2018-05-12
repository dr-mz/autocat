/* ========================================================================
 * index.js
 * SUMMARY: autocat index
 * AUTHOR: David Robinson
 * ========================================================================
 */

import chalk from 'chalk';
import dotenv from 'dotenv';
import axios from 'axios';

import twilio from 'twilio';

dotenv.config();

const { TWILIO_API_ACCOUNT, TWILIO_API_KEY, TWILIO_NUMBER } = process.env;
const twilioClient = new twilio(TWILIO_API_ACCOUNT, TWILIO_API_KEY);
const catAPI = 'http://thecatapi.com/api/images/get';

console.log('AUTOCAT IS LIVE RIGHT MEOW');