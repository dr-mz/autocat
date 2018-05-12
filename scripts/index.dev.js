/* ========================================================================
 * index.dev.js
 * SUMMARY: Dev Entry
 * AUTHOR: David Robinson
 * ========================================================================
 */

/**
 * Module Dependencies
 */

require('babel-register');

const path = `../${process.env.RUN_DIR || 'src'}`;
const dev = require(path);

module.exports = dev;
