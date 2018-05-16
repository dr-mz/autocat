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

export default function (props) {
  const { app, twilioClient, sendCat } = props;

  // app.set('view engine', 'pug');
  // app.set('views', path.join(__dirname, '../views'));
  // app.use(express.static(path.join(__dirname, '../../static')));
  app.use(bodyParser.urlencoded({ extended: false }));

  app.get('/', (req, res) => {
    res.send('<h1>AUTOCAT IS RUNNING RIGHT MEOW</h1>');
  });

  app.post('/message', (req, res) => {
    console.log('SMS Recieved');
    const { body } = req;
    const number = req.From;

    sendCat(number)
      .then((res) => {
        console.log(`Sent Cat to ${number}`);
      })

    res.end();
  });

  app.post('/message-fail', (req, res) => {
    console.log('SMS Failed');
    console.log(req);
  });

  app.post('/call', (req, res) => {
    console.log('Call Recieved');
    console.log(req);
  });

  app.post('/call-fail', (req, res) => {
    console.log('Call Failed');
    console.log(req);
  });

  app.post('/call-status', (req, res) => {
    console.log('Call Status Changed');
    console.log(req);
  });
}
