/* ========================================================================
 * routes/index.js
 * SUMMARY: Routes Index
 * AUTHOR: David Robinson
 * ========================================================================
 */

/**
 * Module Dependencies
 */

import chalk from 'chalk';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';

import twilio from 'twilio';

const MessagingResponse = twilio.twiml;

export default function (props) {
  const { app, twilioClient, catAPI, sendCat } = props;

  // app.set('view engine', 'pug');
  // app.set('views', path.join(__dirname, '../views'));
  // app.use(express.static(path.join(__dirname, '../../static')));
  app.use(bodyParser.urlencoded({ extended: false }));

  app.get('/', (req, res) => {
    res.send('<h1>AUTOCAT IS RUNNING RIGHT MEOW</h1>');
  });

  app.post('/message', (req, res) => {

    const { body } = req;
    const number = body.From;

    const twiml = new MessagingResponse();
    const message = twiml.message();
    message.media(catAPI);
    message.body('Here\'s a Cat');

    console.log(`SMS Recieved, Sending Cat to: ${number}`);

    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
  });

  app.post('/message-fail', (req, res) => {
    console.log('SMS Failed');
    res.end();
  });

  app.post('/call', (req, res) => {
    console.log('Call Recieved');
    res.end();
  });

  app.post('/call-fail', (req, res) => {
    console.log('Call Failed');
    res.end();
  });

  app.post('/call-status', (req, res) => {
    console.log('Call Status Changed');
    res.end();
  });
}
