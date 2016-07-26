'use strict';

const circleNumber = require('./');
const test = require('tape');

test('circleNumber', (t) => {
  t.plan(9);

  t.throws(() => circleNumber(-1));
  t.equal(circleNumber(0), '⓪');
  t.equal(circleNumber(1), '①');
  t.equal(circleNumber(20), '⑳');
  t.equal(circleNumber(21), '㉑');
  t.equal(circleNumber(35), '㉟');
  t.equal(circleNumber(36), '㊱');
  t.equal(circleNumber(50), '㊿');
  t.throws(() => circleNumber(51));
});
