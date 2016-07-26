#!/usr/bin/env node

'use strict';

const circleNumber = require('../');
const argv = require('yargs').argv;

argv._.forEach((n) => {
  console.log(circleNumber(n));
});
