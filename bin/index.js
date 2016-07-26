#!/usr/bin/env node

'use strict';

const circleNumber = require('../');
const argv = require('yargs')
  .help('help').alias('help', 'h')
  .usage('Usage: $0 <number ...>')
  .example('$0 3 12 35', 'print circled 3, circled 12, and circled 35')
  .argv;

argv._.forEach((n) => {
  console.log(circleNumber(n));
});
