/* ========================================================================
 * index.js
 * SUMMARY: autocat index
 * AUTHOR: David Robinson
 * ========================================================================
 */

import chalk from 'chalk';
import express from 'express';
import http from 'http';

import dotenv from 'dotenv';
import axios from 'axios';

import twilio from 'twilio';

import routes from './routes';

dotenv.config();

const {
  PORT,
  TWILIO_API_ACCOUNT,
  TWILIO_API_KEY,
  TWILIO_NUMBER
} = process.env;

const port = PORT || 3333;

const app = express();
const server = http.Server(app);

const twilioClient = new twilio(TWILIO_API_ACCOUNT, TWILIO_API_KEY);
const catAPI = 'http://thecatapi.com/api/images/get';

console.log(chalk.cyan('AUTOCAT IS LIVE RIGHT MEOW'));

server.listen(port, 'localhost', () => {
  const address = server.address();
  const serverAddress = `http://${address.address}:${address.port}`;
  console.log(chalk.green.bold.underline(`\nAUTOCAT Listening on ${port}\n`));
  console.log(chalk.cyan.bold(`\t> ${serverAddress}\n`));

  routes({ app, port, twilioClient });
});