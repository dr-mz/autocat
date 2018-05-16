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

export default function (props) {
  const { app } = props;

  // app.set('view engine', 'pug');
  // app.set('views', path.join(__dirname, '../views'));
  // app.use(express.static(path.join(__dirname, '../../static')));

  app.get('/', (req, res) => {
    res.send('<h1>AUTOCAT IS RUNNING RIGHT MEOW</h1>');
  });

  app.post('/message', (req, res) => {
    console.log('SMS Recieved');
    console.log(res);
  });

  app.post('/message-fail', (req, res) => {
    console.log('SMS Failed');
    console.log(res);
  });

  app.post('/call', (req, res) => {
    console.log('Call Recieved');
    console.log(res);
  });

  app.post('/call-fail', (req, res) => {
    console.log('Call Failed');
    console.log(res);
  });
}
