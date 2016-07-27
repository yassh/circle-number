#!/usr/bin/env node

'use strict';

const circleNumber = require('../');
const argv = require('yargs')
  .help('help').alias('help', 'h')
  .usage('Usage: circle-number <number ...>')
  .example('circle-number 3', 'print circled 3')
  .example('circle-number 3 12 35', 'print circled 3, circled 12, and circled 35')
  .argv;

argv._.forEach((n) => {
  console.log(circleNumber(n));
});
