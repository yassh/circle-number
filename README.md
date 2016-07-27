# circle-number

Convert number to circled number.

Supports 0 to 50.


## Module

### Installation

`npm install --save circle-number`

### Usage

```
const circleNumber = require('circle-number');

console.log(circleNumber(0)); // => ⓪
console.log(circleNumber(1)); // => ①
console.log(circleNumber(16)); // => ⑯
console.log(circleNumber(50)); // => ㊿
```


## CLI

### Installation

`npm install --global circle-number`

### Usage

```
$ circle-number 3
③

$ circle-number 3 12 35
③
⑫
㉟
```
